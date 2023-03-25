import { Fragment } from "react";
import { useDelBookMutation, useGetAllAuthorsQuery } from "../redux/apiSlice";
import UpdateBtn from "./updateBtn";
import { FiXCircle } from "react-icons/fi";

type Props = {};

const AuthorBox = (props: Props) => {
  const { data } = useGetAllAuthorsQuery("");
  const [delBook] = useDelBookMutation();

  const delBookFn = (id: number) => {
    delBook({ id: id });
  };

  return (
    <div className="flex flex-row flex-wrap max-w-5xl m-auto">
      {data?.map((el) => (
        <div key={el.id}>
          <div className="flex flex-row items-center">
            <h1 className="text-lg font-mono font-bold">{el.name}</h1>{" "}
            <UpdateBtn authorID={el.id} />
          </div>
          <div>
            <h2>Books</h2>
            <ul className="px-4">
              {el.books.map((il, idx) => (
                <Fragment key={il.id}>
                  <li className="flex flex-row items-center justify-center gap-2">
                    {idx + 1}. {il.title} ({il.published}){" "}
                    <FiXCircle
                      onClick={() => delBookFn(il.id)}
                      className="cursor-pointer text-red-700 hover:text-red-400 active:text-red-900"
                    />
                  </li>
                </Fragment>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuthorBox;
