import { IoClose } from "react-icons/io5";
type Props ={
  handleClick? : ()=> void;
}
const CloseButton = ({handleClick} : Props) => {
  return (
    <button
      className="absolute right-3 cursor-pointer rounded-full p-1 text-xl text-red-400 transition-all duration-100 hover:scale-105 hover:bg-stone-800"
      onClick={handleClick}
    >
      <IoClose />
    </button>
  );
};

export default CloseButton;
