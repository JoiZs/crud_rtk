import React, { useContext, useRef } from "react";
import { ToggleContext } from "../context/toggle";
import { usePushABookMutation } from "../redux/apiSlice";

type Props = {};

const BookForm = (props: Props) => {
  const [addBook, { isLoading }] = usePushABookMutation();
  const [toggle, setToggle] = useContext(ToggleContext);
  const titleRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  return (
    <dialog
      open={toggle!!}
      className="absolute border rounded-md shadow-md backdrop-blur-lg"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addBook({
            title: titleRef.current?.value,
            published: dateRef.current?.value,
            authorId: toggle,
          });
        }}
      >
        <input
          ref={titleRef}
          required
          className="outline-none"
          type="text"
          title="title"
          placeholder="Title"
          defaultChecked={false}
        />
        <input
          ref={dateRef}
          required
          className="outline-none"
          type="text"
          title="date"
          placeholder="Date"
          defaultChecked={false}
        />
        <input
          className="p-1 bg-teal-400 text-teal-600 border-2 border-teal-400 active:bg-teal-500 rounded-md "
          type="submit"
          value="Submit"
        />
      </form>
      <div className="flex justify-end mt-4 gap-2">
        <button
          onClick={() => {
            setToggle(null);
          }}
          className="p-1 bg-teal-400 text-teal-600 border-2 border-teal-400 active:bg-teal-500 rounded-md "
        >
          Cancel
        </button>
      </div>
    </dialog>
  );
};

export default BookForm;
