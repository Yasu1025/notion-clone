import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import authUtils from "../../utils/auth";
import Sidebar from "../common/Sidebar";
import { useAppDispatch } from "../../store/hooks";
import { setUser } from "../../store/slices/userSlice";

const AppLayout = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuthwithJWT = async () => {
      try {
        const authedUser = await authUtils.getAuthedUser();
        setIsCheckingAuth(false);
        if (!authedUser) {
          navigate("/login");
        } else {
          dispatch(setUser(authedUser));
        }
      } catch {
        setIsCheckingAuth(false);
        navigate("/login");
      }
    };
    checkAuthwithJWT();
  }, [dispatch, navigate]);

  if (isCheckingAuth) {
    // TODO loading
    return <div>Loading...</div>;
  }

  return (
    <section className="text-gray-600 body-font relative h-lvh">
      <Sidebar />
      <div className="p-4 sm:ml-64 h-full">
        <Outlet />
      </div>
    </section>
  );
};

export default AppLayout;
