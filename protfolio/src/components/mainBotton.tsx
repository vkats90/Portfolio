const MainButton = ({ text }: { text: String }) => (
  <button className="px-16 py-3 text-xl rounded-lg w-fit text-white bg-primary hover:bg-emerald-800 transition-colors duration-200">
    {text}
  </button>
);
export default MainButton;
