import { Schema, Document, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255
    },
    email: {
      type: String,
      required: true,
      max: 255,
      min: 6
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      min: 6
    }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  date: Date;
}

export default model<IUser>('User', userSchema);
