import React from "react";
import { Memo } from "../../types";
import { Link } from "react-router-dom";
interface Props {
  memos: Memo[];
  activeMemoId: string;
  onClick: (id: string) => void;
}
const Memos = ({ memos, activeMemoId, onClick }: Props): JSX.Element => {
  const memosUI = memos.map((m) => (
    <li
      key={m._id as string}
      className={`flex items-center p-1 pl-10 text-sm text-gray-900 hover:bg-gray-100 rounded-lg dark:text-white  dark:hover:bg-gray-700 group ${
        activeMemoId === m._id ? "bg-gray-200 hover:bg-gray-200" : ""
      }`}
    >
      <Link to={`/memo/${m._id}`} onClick={() => onClick(m._id as string)}>
        <span className="pr-2">{m.icon}</span>
        {m.title}
      </Link>
    </li>
  ));
  return <ul>{memosUI}</ul>;
};

export default Memos;
