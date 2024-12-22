import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import authUtils from "../../utils/auth";
import Sidebar from "../common/Sidebar";

const AppLayout = (): JSX.Element => {
  const navigate = useNavigate();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuthwithJWT = async () => {
      try {
        const authedUser = await authUtils.getAuthedUser();
        setIsCheckingAuth(false);
        if (!authedUser) {
          navigate("/login");
        }
      } catch {
        setIsCheckingAuth(false);
        navigate("/login");
      }
    };
    checkAuthwithJWT();
  }, [navigate]);

  if (isCheckingAuth) {
    // TODO loading
    return <div>Loading...</div>;
  }

  return (
    <section className="text-gray-600 body-font relative">
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </section>
  );
};

export default AppLayout;
