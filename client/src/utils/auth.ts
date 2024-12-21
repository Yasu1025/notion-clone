import authApi from "../api/authApi";

const authUtils = {
  getAuthedUser: async () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    try {
      const res = await authApi.verifyToken();
      return res.user;
    } catch {
      return null;
    }
  },
};

export default authUtils;
