import express, { Request, Response } from "express";
import { CreateNoteType, UpdateNoteType } from "@/types";
import {
  createNote,
  deleteNote,
  fetchDeleted,
  fetchNotes,
  updateNote,
} from "./controllers/notes.controllers";
import AppError from "./utils/AppError";

const app = express();
app.use(express.json());

app.get("/notes", async (req: Request, res: Response) => {
  try {
    const notes = await fetchNotes();
    res.status(200).json({
      message: "Notes found successfully!",
      notes,
    });
  } catch (err) {
    res.status(404).json({
      message: "Notes not found",
    });
  }
});

app.post(
  "/notes",
  async (req: Request<{}, {}, CreateNoteType>, res: Response) => {
    try {
      const note = await createNote(req.body);
      res.status(201).json({
        message: "Note Created successfully!",
        note,
      });
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({
          message: error.message,
        });
      }

      return res.status(500).json({
        message: "Internal Server Error!",
      });
    }
  },
);

app.put(
  "/notes",
  async (req: Request<{}, {}, UpdateNoteType>, res: Response) => {
    try {
       await updateNote(req.body);
      res.status(204).json({
        message: "Note Updated successfully"
      })
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({
          message: error.message,
        });
      }
      return res.status(500).json({
        message: "Internal server error!",
      });
    }
  },
);
app.delete("/notes/:id", async (req: Request, res: Response) => {
  try {
    const note = await deleteNote(req.params.id);
    res.status(200).json({
      message: "Note Deleted successfully!",
      note
    });
  } catch (err) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }
    return res.status(500).json({
      message: "Internal server error!",
    });
  }
});

app.get("/notes/deleted", async(req: Request, res: Response)=>{
  try{
    const notes = await fetchDeleted();
    res.status(200).json({
      message: "Deleted Notes Found!",
      notes
    })
  }catch(err){
    if(err instanceof AppError){
      return res.status(err.statusCode).json({
        message: err.message
      })
    }
    return res.status(500).json({
      message: "Internal server error"
    })
  }
})
export default app;
