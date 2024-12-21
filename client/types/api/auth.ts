export type RegisterParams = {
  username: string;
  password: string;
  confirmPassword: string;
};

export type RegisterResponse = {
  token: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any; // TODO
};

export type LoginParams = {
  username: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any; // TODO
};
