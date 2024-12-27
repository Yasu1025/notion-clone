import { useState } from "react";
import SubmitButton from "../components/common/SubmitButton";
import memoApi from "../api/memoApi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const createMemo = async () => {
    try {
      setIsLoading(true);
      const res = await memoApi.create();
      navigate(`/memo/${res?._id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="text-gray-600 body-font h-full">
      <div className="container mx-auto h-full flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Create your memo
          </h1>
          <div className="flex justify-center">
            <SubmitButton
              text="Create ome"
              isLoading={isLoading}
              onClick={createMemo}
            ></SubmitButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
