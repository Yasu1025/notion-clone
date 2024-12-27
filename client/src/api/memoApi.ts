import { memoCreateRes } from "../types/api/memo";
import axiosClient from "./axiosClient";

const memoApi = {
  create: (): Promise<memoCreateRes> => axiosClient.post("memo"),
};

export default memoApi;
