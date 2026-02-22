import type React from "react";
import { useState } from "react";

type Props = {
  id: string;
  label: string;
  as?: "input" | "textarea";
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Input = ({ id, label, as = "input", ...props }: Props) => {
  const [val, setVal] = useState("");
  return (
    <div
    className="w-full flex items-start flex-col gap-2 prose prose-invert"
    >
      <label
      className="  text-xl"
      htmlFor={id}>{label}</label>
      {as === "input" ? (
        <input
          id={id}
          {...props}
          className={"w-full rounded-md border border-zinc-600 px-3 py-1 outline-none"}
          onChange={(e) => setVal(e.target.value)}
          value={val}
        />
      ) : (
        <textarea
          id={id}
          className={"w-full rounded-md border border-zinc-600 px-3 py-1 min-h-52 outline-none"}
          {...props}
          onChange={(e) => setVal(e.target.value)}
          value={val}
        />
      )}
    </div>
  );
};

export default Input;
