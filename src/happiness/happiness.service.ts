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
    return (await newEntry.save()).toObject();
  }

  async getEntry(entryID: Entry['_id']): Promise<Entry | undefined> {
    const entry = await this.entryModel.findById(entryID).exec();
    return entry;
  }

  async getAllEntries(
    from: string = new Date('1970-01-01').toString(),
    to: string = new Date(8640000000000000).toString(),
  ): Promise<Entry[]> {
    return await this.entryModel
      .find({ date: { $gte: new Date(from), $lte: new Date(to) } })
      .exec();
  }
}
