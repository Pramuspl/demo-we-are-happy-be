import * as mongoose from 'mongoose';

export const EntrySchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
    validate: {
      validator: (v: string) => !isNaN(Date.parse(v)),
      message: 'Not a valid date',
    },
  },
  user: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    enum: ['BAD', 'NEUTRAL', 'GOOD'],
    required: true,
  },
});
