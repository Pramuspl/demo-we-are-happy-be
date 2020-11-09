import { Document } from 'mongoose';

const enum Moods {
  BAD,
  NEUTRAL,
  GOOD,
}

export interface Entry extends Document {
  readonly date: string;
  readonly value: Moods;
}
