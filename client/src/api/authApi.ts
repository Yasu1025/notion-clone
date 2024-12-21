import {
  LoginParams,
  LoginResponse,
  RegisterParams,
  RegisterResponse,
  VerifyTokenResponse,
} from "../types/api/auth";
import axiosClient from "./axiosClient";

const authApi = {
  register: (params: RegisterParams): Promise<RegisterResponse> =>
    axiosClient.post("auth/register", params),
  login: (params: LoginParams): Promise<LoginResponse> =>
    axiosClient.post("auth/login", params),
  verifyToken: (): Promise<VerifyTokenResponse> =>
    axiosClient.post("auth/verify-token"),
};

export default authApi;
