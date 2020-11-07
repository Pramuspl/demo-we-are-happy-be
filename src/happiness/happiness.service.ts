import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Entry } from './interfaces/entry.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateEntryDTO } from './dto/createEntry.dto';

@Injectable()
export class HappinessService {
  constructor(
    @InjectModel('Entry') private readonly entryModel: Model<Entry>,
  ) {}

  async addEntry(createEntryDTO: CreateEntryDTO): Promise<Entry> {
    const newEntry = new this.entryModel(createEntryDTO);
    return await newEntry.save();
  }

  async getEntry(entryID: Entry['_id']): Promise<Entry | undefined> {
    return await this.entryModel.findById(entryID).exec();
  }

  async getAllEntries(): Promise<Entry[]> {
    return await this.entryModel.find().exec();
  }
}
