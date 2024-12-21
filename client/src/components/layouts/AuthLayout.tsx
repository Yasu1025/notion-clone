import { Outlet, useNavigate } from "react-router-dom";
import MainLogo from "../svg/MainLogo";
import { useEffect, useState } from "react";
import authUtils from "../../utils/auth";

const AuthLayout = (): JSX.Element => {
  const navigate = useNavigate();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuthwithJWT = async () => {
      try {
        const authedUser = await authUtils.getAuthedUser();
        setIsCheckingAuth(false);
        if (authedUser) {
          navigate("/");
        } else {
          navigate("/login");
        }
      } catch {
        setIsCheckingAuth(false);
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
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center items-center w-full mb-12">
          <MainLogo size={12} />
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Notion Clone Development
          </h1>
        </div>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 mx-auto">
            <Outlet />
          </div>
        </section>
      </div>
    </section>
  );
};

export default AuthLayout;
