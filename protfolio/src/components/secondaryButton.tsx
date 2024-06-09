const SecondaryButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="px-16 py-3 text-xl rounded-lg w-fit text-black border-2 border-primary shadow-md shadow-black/30 hover:bg-emerald-800 hover:bg-opacity-30 transition duration-200"
  >
    {text}
  </button>
);
export default SecondaryButton;
