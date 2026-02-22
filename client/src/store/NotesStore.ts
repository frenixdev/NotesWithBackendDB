import { create } from "zustand";
import type { NoteType } from "@/types";
import { api } from "@/services";
type Store = {
  notes: NoteType[];
  getNotes: () => void;
  updateNote: (data: NoteType) => void;
  deleteNote: (id: string) => void;
  addNote: (data: NoteType) => void;
};
type DeletedNotesStore = {
  deletedNotes: NoteType[];
  getdeletedNotes: () => void;
  handleDelete: (id: string)=>void;
};
const useNotesStore = create<Store>((set) => ({
  notes: [],
  getNotes: async () => {
    try {
      const res = await api.get<{ notes: NoteType[] }>("/notes");
      set({ notes: res.data.notes });
    } catch (err) {
      console.log(err);
    }
  },

  updateNote: async (data) => {
    try {
      const res = await api.put("/notes", data);

      set((state) => ({
        notes: state.notes.map((note) =>
          note._id === data._id
            ? {
              ...res.data.note
              }
            : note,
        ),
      }));
    } catch (err) {
      console.log(err);
      alert("Error occured");
    }
  },
  deleteNote: async (id) => {
    try {
      const res = await api.delete(`/notes/${id}`);
      console.log(res.data);
      set((state) => ({
        notes: state.notes.filter((note) => note._id !== id),
      }));
    } catch (err) {
      console.log(err);
      alert("Error occured");
    }
  },
  addNote: async (data) => {
    try {
      const res = await api.post("/notes", data);
      console.log(res.data);
      set((state) => ({
        notes: [res.data.note, ...state.notes],
      }));
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        return;
      }
      console.log(err);
    }
  },
}));

const useDeletedNotes = create<DeletedNotesStore>((set) => ({
  deletedNotes: [],
  getdeletedNotes: async () => {
    try {
      const res= await api.get("/notes/deleted");
      set({deletedNotes: res.data.notes    });
    } catch (error) {
      console.log(error)
    }
  },
  handleDelete: async(id)=>{
    try {

      await api.delete(`/notes/deleted/${id}`)
      set(state => ({
        deletedNotes: state.deletedNotes.filter(note => note._id !== id)
      }))
    } catch (error) {
      console.log(error)
      alert("error occured")
    }
  }
}));

export { useNotesStore, useDeletedNotes };
