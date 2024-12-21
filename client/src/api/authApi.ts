import {
  LoginParams,
  RegisterParams,
  RegisterResponse,
} from "../../types/api/auth";
import axiosClient from "./axiosClient";

const authApi = {
  register: (params: RegisterParams): Promise<RegisterResponse> =>
    axiosClient.post("auth/register", params),
  login: (params: LoginParams) => axiosClient.post("auth/login", params),
};

export default authApi;
