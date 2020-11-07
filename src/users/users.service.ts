import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getUser(username: User['username']): Promise<User | undefined> {
    return await this.userModel.findOne({ username: username }).exec();
  }

  async addUser(createUserDTO: CreateUserDTO): Promise<User> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(createUserDTO.password, salt);
    const newEntry = new this.userModel({
      ...createUserDTO,
      password: hashedPassword,
    });
    return (await newEntry.save()).toObject();
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
