import mongoose from 'mongoose';

export type HistoryType = {
  from: string;
  to: string;
  requested?: number;
};

const historySchema = new mongoose.Schema<HistoryType>({
  from: { type: String, required: true, lowercase: true, trim: true },
  to: { type: String, required: true, lowercase: true, trim: true },
  requested: { type: Number, default: 1 },
});

export const History =
  mongoose.models.History ||
  mongoose.model<HistoryType>('History', historySchema);
