import NotesModel, { DeletedNotesModel } from "../models/notes.models";
import {
  CreateNoteType,
  NoteType,
  UpdateNoteFieldType,
  UpdateNoteType,
} from "@/types";
import AppError from "../utils/AppError";
import { getTimeStamp } from "../utils/date";
import mongoose, { HydratedDocument } from "mongoose";

const fetchNotes = async (): Promise<HydratedDocument<NoteType>[]> => {
  const notes = await NotesModel.find();
  return notes;
};

const createNote = async (
  data: CreateNoteType,
): Promise<HydratedDocument<NoteType>> => {
  const { title, desc } = data;
  try {
    if (!title || !desc)
      throw new AppError("Please enter all the required fields!", 400);
    const newNote: NoteType = {
      title,
      desc,
      lastUpdated: getTimeStamp(),
      changeCount: 0,
    };
    const note = await NotesModel.create(newNote);
    if (!note) throw new AppError("failed to save into our database!", 500);
    return note;
  } catch (err) {
    throw err;
  }
};

const updateNote = async (
  data: UpdateNoteType,
): Promise<HydratedDocument<NoteType>> => {
  const { title, desc, id } = data;
  try {
    const updateField: UpdateNoteFieldType = {};
    if (title !== undefined) updateField.title = title;
    if (desc !== undefined) updateField.desc = desc;
    updateField.lastUpdated = getTimeStamp();
    const note = await NotesModel.findOneAndUpdate(
      { _id: id },
      {
        $set: updateField,
        $inc: { changeCount: 1 },
      },
      {
        new: true,
        runValidators: true,
      },
    );
    if (!note) throw new AppError("Note not Found!", 404);
    return note;
  } catch (error) {
    throw error;
  }
};

const deleteNote = async (
  id: string | string[],
): Promise<HydratedDocument<NoteType>> => {
  try {
    const note = await NotesModel.findOneAndDelete({ _id: id });
    if (!note) throw new AppError("Note not found", 404);
    await DeletedNotesModel.create(note.toObject());
    return note;
  } catch (err) {
    throw err;
  }
};
const fetchDeleted = async()=>{
  try{
    const deletedNotes = await DeletedNotesModel.find();
    if(deleteNote instanceof Object) return deletedNotes
    if(!deleteNote) throw new AppError("Unable to read deleted notes Database!", 400)
  }catch(err){
    throw err
  }
}

export { fetchNotes, createNote, updateNote, deleteNote , fetchDeleted};
