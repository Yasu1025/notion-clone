import { Outlet } from "react-router-dom";
import MainLogo from "../svg/MainLogo";

const AuthLayout = (): JSX.Element => {
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
