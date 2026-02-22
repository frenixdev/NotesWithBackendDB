import Card from "@/components/Card";
import { useNotesStore } from "@/store";
import NoNotesAvailable from "@/components/ui/NoNotesAvailable";
type Props={
  containerRef: React.RefObject<HTMLDivElement | null >
}

const Notes = ({containerRef}: Props) => {
  const {notes, deleteNote} = useNotesStore();
  if (!notes.length) return <NoNotesAvailable />

  return (
    <div className="grid p-3 h-full grid-rows-4  grid-cols-5 gap-10 w-full"
    ref={containerRef}
    >
      {notes.map((note) => (
        <Card
        containerRef={containerRef}
          key={note._id}
          title={note.title}
          desc={note.desc}
          handleClick={() => deleteNote(note._id!)}
        />
      ))}
    </div>
  );
};

export default Notes;
