import mongoose from 'mongoose';

const mongodbUri = process.env.MONGODB_URI;

export const connectDatabase = async () => {
  await mongoose.connect(mongodbUri, { dbName: 'words' });
};
