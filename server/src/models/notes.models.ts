import mongoose from "mongoose";
import { NoteType } from "@/types";

const noteSchema = new mongoose.Schema<NoteType>({
  title: {type: String, required: true},
  desc: {type: String, required: true},
  lastUpdated: {
    date: String,
    time: String,
  },
  changeCount: Number,
});

const NotesModel = mongoose.model<NoteType>("notes", noteSchema);
const DeletedNotesModel = mongoose.model<NoteType>("deleted_notes", noteSchema)

export default NotesModel;
export {DeletedNotesModel}
