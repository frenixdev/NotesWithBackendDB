import React from "react";
import { useNotesStore } from "@/store";
import Input from "./ui/Input";
import { motion } from "motion/react";
type Props ={
  containerRef: React.RefObject<HTMLDivElement| null>
}
const CreateNote = ({containerRef} : Props) => {
  const { addNote } = useNotesStore();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const desc = formData.get("desc") as string;
    if (!title || !desc) return;
    addNote({ title, desc });
  };

  return (
    <motion.form
      drag
      dragConstraints={containerRef}
      onSubmit={handleSubmit}
      className="fixed top-10 right-10 w-100 cursor-pointer rounded-md border border-zinc-500 bg-zinc-800 p-10 text-white"
    >

      <Input
        id="title"
        label="Title"
        placeholder="Enter title here...."
        type="text"
        name="title"
        required
      />

      <Input
        id="desc"
        label="Description"
        name="desc"
        placeholder="Write something about your note....."
        as="textarea"
        required
      />
      <button
        className="mt-3 mr-auto cursor-pointer rounded-md bg-purple-500 px-4 py-2 font-semibold text-white transition-all duration-150 hover:bg-purple-600"
        type="submit"
      >
        Create Note
      </button>
    </motion.form>
  );
};

export default CreateNote;
