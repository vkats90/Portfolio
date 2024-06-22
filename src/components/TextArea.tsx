import { useState, useEffect } from "react";

const TextArea = ({ text }: { text: string }) => {
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
      <textarea
        name={text}
        className={`z-10  text-center border-primary border rounded-md placeholder:text-center transition duration-300 ease-out-in ${
          expanded ? "translate-x-10" : ""
        } ${input.length > 20 ? "w-[250px] h-36" : "w-[200px]"}`}
        value={input}
        placeholder={text}
        onChange={({ target }) =>
          setInput((prev) => {
            let temp = prev;
            temp = target.value;
            return temp;
          })
        }
      ></textarea>
    </div>
  );
};

export default TextArea;
