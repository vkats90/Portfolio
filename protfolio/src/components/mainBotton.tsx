const MainButton = ({ text }: { text: string }) => (
	<button className="px-16 py-3 text-xl rounded-lg w-fit text-white bg-primary hover:bg-emerald-800 border-2 border-primary shadow-md shadow-black/30 transition-colors duration-200">
		{text}
	</button>
)
export default MainButton