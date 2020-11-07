import { Document } from 'mongoose';

const enum Values {
  BAD,
  NEUTRAL,
  GOOD,
}

export interface Entry extends Document {
  readonly date: string;
  readonly value: Values;
}
