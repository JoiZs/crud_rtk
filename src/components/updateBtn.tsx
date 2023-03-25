import React, { useCallback, useContext } from "react";
import { ToggleContext } from "../context/toggle";

type Props = { authorID: number };

const UpdateBtn = ({ authorID }: Props) => {
  const [, setIsDiag] = useContext(ToggleContext);

  const diagToggleFn = useCallback(() => {
    setIsDiag(authorID ? authorID : null);
  }, [setIsDiag, authorID]);

  return (
    <div className="mx-2">
      <button
        onClick={diagToggleFn}
        title="Update"
        name="Update"
        className=" bg-teal-500  p-1 rounded-md border-teal-400 border-2 active:bg-teal-700 shadow-md text-teal-200"
      >
        Add Book
      </button>
    </div>
  );
};

export default UpdateBtn;
