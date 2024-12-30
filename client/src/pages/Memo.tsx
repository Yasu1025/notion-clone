import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import memoApi from "../api/memoApi";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setMyMemos } from "../store/slices/memoSlice";
import FavoriteStar from "../components/common/FavoriteStar";

const Memo = () => {
  const { memoId } = useParams();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { myMemos } = useAppSelector((state) => state.memo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  const onChangeTitle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    try {
      await memoApi.update(memoId as string, {
        title: newTitle,
        description: desc,
      });

      const newMemos = myMemos.map((m) =>
        m._id === memoId ? { ...m, title: newTitle } : m
      );
      dispatch(setMyMemos(newMemos));
    } catch (error) {
      console.log(error);
    }
  };
  const onChangeDesc = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newDesc = e.target.value;
    setDesc(newDesc);
    try {
      await memoApi.update(memoId as string, {
        title,
        description: newDesc,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      await memoApi.delete(memoId as string);
      // window.confirm("You wanna delete this memo?") &&

      const newMemos = myMemos.filter((m) => m._id !== memoId);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      newMemos.length === 0
        ? navigate("/")
        : navigate(`/memo/${myMemos[0]._id}`);

      dispatch(setMyMemos(newMemos));
    } catch (error) {
      console.log(error);
    }
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
            <div className="w-20 flex items-center">
              <FavoriteStar isFavorite={false} />
              <button
                className="rounded-md ml-4 bg-slate-800 p-1 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={onDelete}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
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
