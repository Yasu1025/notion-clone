import { User } from "..";

export type RegisterParams = {
  username: string;
  password: string;
  confirmPassword: string;
};

export type RegisterResponse = {
  token: string;
  user: User;
};

export type LoginParams = {
  username: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: User;
};

export type VerifyTokenResponse = {
  user: User;
};
