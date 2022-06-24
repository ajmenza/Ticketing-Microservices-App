import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  // We throw error here rather than in auth so we know right away that there is an issue with the key
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log('Connected to MongoDB...');
  } catch (error) {
    console.error(error);
  }
};

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});

start();
