import CreateNote from "@/components/CreateNote";
import {useNotesStore} from "@/store";
import Notes from "./Notes";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";


const ClientView = () => {
const containerRef = useRef<HTMLDivElement | null>(null);

  const {getNotes} = useNotesStore();
  useEffect(()=>{
    getNotes();
  },[])
  return (
    <main
    ref={containerRef}
    className="w-full h-screen bg-stone-900 relative">
      <Notes containerRef={containerRef} />
      <CreateNote containerRef={containerRef}/>
      <Link
      className=" bg-emerald-500  absolute bottom-10 left-10 px-5 py-2 rounded-md curospi "
      to={"/deleted"} >Deleted Notes</Link>
    </main>
  )
}

export default ClientView
