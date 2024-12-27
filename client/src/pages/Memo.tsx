import { useEffect, useState } from "react";
import FavoriteStar from "../components/common/favoriteStar";
import { useParams } from "react-router-dom";
import memoApi from "../api/memoApi";

const Memo = () => {
  const { memoId } = useParams();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const getMemo = async () => {
      try {
        if (!memoId) return;
        const res = await memoApi.getOne(memoId);
        setTitle(res.title);
        setDesc(res.description);
      } catch (error) {
        console.log(error);
      }
    };

    getMemo();
  }, [memoId]);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-4 py-4 mx-auto">
        <div className="-m-2">
          <div className="w-full text-xl flex justify-between">
            <div className="relative w-full">
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Write you title"
                value={title}
                onChange={onChangeTitle}
                className="w-full outline-none leading-8 transition-colors duration-200 ease-in-out text-2xl font-bold"
              />
            </div>
            <div className="w-10">
              <FavoriteStar isFavorite={false} />
            </div>
          </div>

          <div className="mt-8 w-full">
            <div className="relative">
              <textarea
                id="memo"
                name="memo"
                style={{ height: "80vh" }}
                placeholder="Write you memo"
                value={desc}
                onChange={onChangeDesc}
                className="w-full text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memo;
