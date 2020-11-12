import * as mongoose from 'mongoose';

export const EntrySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    validate: {
      validator: (v: Date) => v instanceof Date,
      message: 'Not a valid date',
    },
  },
  value: {
    type: String,
    enum: ['BAD', 'NEUTRAL', 'GOOD'],
    required: true,
  },
});
