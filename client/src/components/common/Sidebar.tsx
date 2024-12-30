import { useNavigate } from "react-router-dom";
import MainLogo from "../svg/MainLogo";
import authUtils from "../../utils/auth";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import memoApi from "../../api/memoApi";
import { setMyMemos } from "../../store/slices/memoSlice";
import Memos from "./Memos";

const LogoutButton = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
    />
  </svg>
);

const Sidebar = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { myMemos } = useAppSelector((state) => state.memo);
  const { user } = useAppSelector((state) => state.user);
  const [activeMemoId, setActiveMemoId] = useState("");
  const logout = () => {
    authUtils.logout();
    navigate("/login");
  };

  useEffect(() => {
    const getMemos = async () => {
      try {
        const res = await memoApi.getAll();
        dispatch(setMyMemos(res));
      } catch (error) {
        console.log(error);
      }
    };

    getMemos();
  }, [dispatch]);

  const onAdd = async () => {
    try {
      const res = await memoApi.create();
      const newMemos = [res, ...myMemos];
      dispatch(setMyMemos(newMemos));
      navigate(`/memo/${res?._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex flex-col">
          <div className="flex justify-center items-center flex-col mb-4">
            <MainLogo size={12} />
            <span className="text-sm text-gray-500">Notion Dev</span>
          </div>
          <ul className="font-medium h-full flex flex-col">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">Favorit</span>
              </a>
            </li>
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Private</span>
                <button
                  className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-sm dark:bg-blue-900 dark:text-blue-300"
                  onClick={onAdd}
                >
                  +
                </button>
              </div>
              <Memos
                memos={myMemos}
                onClick={(id) => setActiveMemoId(id)}
                activeMemoId={activeMemoId}
              />
            </li>
            <li className="mt-auto">
              <ul>
                <li>
                  <a
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    onClick={logout}
                  >
                    <LogoutButton />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      {user?.username}
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
