
import {  PiNotebookDuotone } from "react-icons/pi";

const NoNotesAvailable = () => {
  return (
    <div className=" w-full h-screen text-2xl flex items-center justify-center flex-col prose prose-invert  ">
      <PiNotebookDuotone
      className="text-9xl"
      />
      <h2>No Notes Available</h2>
    </div>
  );
};

export default NoNotesAvailable;
