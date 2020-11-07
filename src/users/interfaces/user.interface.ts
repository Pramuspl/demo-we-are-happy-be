import { Document } from 'mongoose';

export const enum Roles {
  EMPLOYEE = 'EMPLOYEE',
  MANAGER = 'MANAGER',
}

export interface User extends Document {
  readonly username: string;
  readonly password: string;
  readonly role: Roles;
}
