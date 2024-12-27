import { getAllMemosRes, getMemoRes, memoCreateRes } from "../types/api/memo";
import axiosClient from "./axiosClient";

const memoApi = {
  create: (): Promise<memoCreateRes> => axiosClient.post("memo"),
  getAll: (): Promise<getAllMemosRes> => axiosClient.get("memo"),
  getOne: (memoId: string): Promise<getMemoRes> =>
    axiosClient.get(`memo/${memoId}`),
};

export default memoApi;
