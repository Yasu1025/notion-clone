import { getAllMemosRes, getMemoRes, memoCreateRes } from "../types/api/memo";
import axiosClient from "./axiosClient";

const memoApi = {
  create: (): Promise<memoCreateRes> => axiosClient.post("memo"),
  getAll: (): Promise<getAllMemosRes> => axiosClient.get("memo"),
  getOne: (memoId: string): Promise<getMemoRes> =>
    axiosClient.get(`memo/${memoId}`),
  update: (
    memoId: string,
    params: { title: string; description: string }
  ): Promise<void> => axiosClient.put(`memo/${memoId}`, params),
  delete: (memoId: string): Promise<void> =>
    axiosClient.delete(`memo/${memoId}`),
};

export default memoApi;
