import { useState, useEffect } from "react";

const Input = ({ text, type }: { text: string; type?: string }) => {
  const [expanded, setExpanded] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input.length > 0) setExpanded(true);
    else setExpanded(false);
  }, [input]);

  return (
    <div className="flex items-center relative ">
      <p
        className={`absolute z-0 transition duration-300 ease-out-in font-medium  text-lg ${
          expanded ? "-translate-x-10 opacity-100" : "opacity-0"
        }`}
      >
        {text}
      </p>
      <input
        name={text}
        type={type ? type : "text"}
        className={`z-10 w-[200px] h-8 text-center border-primary border rounded-md placeholder:text-center transition duration-300 ease-out-in ${
          expanded ? "translate-x-10" : ""
        }`}
        value={input}
        placeholder={text}
        onChange={({ target }) =>
          setInput((prev) => {
            let temp = prev;
            temp = target.value;
            return temp;
          })
        }
      ></input>
    </div>
  );
};

export default Input;
