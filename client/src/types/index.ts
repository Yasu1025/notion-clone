import { Schema } from "mongoose";

export type User = {
  _id: Schema.Types.ObjectId;
  username: string;
};
