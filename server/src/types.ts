interface NoteType {
  title: string;
  desc: string;
  lastUpdated: TimeStampType;
  changeCount: number;
}
interface CreateNoteType {
  title: string;
  desc: string;
}
type TimeStampType = {
  date: string;
  time: string;
};
interface UpdateNoteType extends Pick<NoteType, "title" | "desc"> {
  id: string;
}
interface UpdateNoteFieldType {
  title?: string;
  desc?: string;
  lastUpdated?: TimeStampType;
  changeCount?: number;
}
export {
  NoteType,
  CreateNoteType,
  TimeStampType,
  UpdateNoteType,
  UpdateNoteFieldType,
};
