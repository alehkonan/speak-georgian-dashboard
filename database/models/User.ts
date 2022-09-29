import mongoose from 'mongoose';
import { History, HistoryType } from './History';

type UserType = {
  userId: number;
  history: HistoryType[];
};

const userSchema = new mongoose.Schema<UserType>({
  userId: { type: Number, required: true },
  history: { type: [mongoose.Types.ObjectId], ref: History },
});

export const User =
  mongoose.models.User || mongoose.model<UserType>('User', userSchema);
