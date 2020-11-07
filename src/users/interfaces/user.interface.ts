import { Document } from 'mongoose';

const enum Roles {
  EMPLOYEE,
  MANAGER,
}

export interface User extends Document {
  readonly username: string;
  readonly password: string;
  readonly role: Roles;
}
