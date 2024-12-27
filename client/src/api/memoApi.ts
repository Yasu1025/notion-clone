import { getAllMemosRes, memoCreateRes } from "../types/api/memo";
import axiosClient from "./axiosClient";

const memoApi = {
  create: (): Promise<memoCreateRes> => axiosClient.post("memo"),
  getAll: (): Promise<getAllMemosRes> => axiosClient.get("memo"),
};

export default memoApi;
