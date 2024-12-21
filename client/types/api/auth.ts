export type RegisterParams = {
  username: string;
  password: string;
  confirmPassword: string;
};

export type RegisterResponse = {
  token: string;
};

export type LoginParams = {
  username: string;
  password: string;
};
