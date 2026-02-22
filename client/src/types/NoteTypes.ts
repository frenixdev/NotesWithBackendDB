export interface NoteType  {
  _id?: string;
  title: string;
  desc: string;
  lastUpdated?: string;
  changeCount?: number;
}
export type ClientNoteType =  Pick<NoteType, "title" | "desc">


