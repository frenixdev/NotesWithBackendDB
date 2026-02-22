import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientView from "@/scenes/ClientView";
import DeletedNotes from "@/scenes/DeletedNotes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientView />} />
        <Route path="/deleted" element={<DeletedNotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
