import { ObjectId, Schema } from "mongoose";

export type User = {
  _id: Schema.Types.ObjectId;
  username: string;
};

export type Memo = {
  _id: string | ObjectId;
  description: string;
  favorite: boolean;
  icon: string;
  position: number;
  title: string;
  user: string | ObjectId;
};
