import { ObjectId } from "mongoose";

export type memoCreateRes = {
  _id: string | ObjectId;
  description: string;
  favorite: boolean;
  icon: string;
  position: number;
  title: string;
  user: string | ObjectId;
};
