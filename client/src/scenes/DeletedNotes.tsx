import { useEffect, useRef } from "react";
import { useDeletedNotes } from "@/store/NotesStore";
import Card from "@/components/Card";
import { Link } from "react-router-dom";

const DeletedNotes = () => {
  const { deletedNotes, getdeletedNotes, handleDelete } = useDeletedNotes();
  const containerRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    getdeletedNotes();
  }, []);
  if (!deletedNotes.length)
    return (
      <div className="prose flex h-screen w-screen  text-5xl flex-col items-center justify-center bg-zinc-900 prose-invert">
        <p className=" text-5xl"> No Deleted Notes found</p>
        <Link
        className="px-5 py-2 rounded-md bg-orange-500 cursor-pointer hover:bg-orange-600 transition-all no-underline text-xl duration-150 "
        to={"/"}> Create Note</Link>
      </div>
    );
  return (
    <div
    ref={containerRef}
    className="grid h-screen w-full grid-cols-5 grid-rows-4 gap-10 bg-zinc-900 p-3">
      {deletedNotes.map((note) => (
        <Card
          title={note.title}
          desc={note.desc}
          containerRef={containerRef}
          handleClick={() => handleDelete(note._id!)}
        />
      ))}
    </div>
  );
};

export default DeletedNotes;
