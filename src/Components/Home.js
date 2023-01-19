import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { useState } from "react";

function Home() {
  const [noteList, setNoteList] = useState([]);

  return (
    <>
      <div className="background">
        <h1 className="header">Notes App</h1>
        <NoteInput setChocolate={setNoteList} chocolate={noteList} />
        <NoteList chocolate={noteList} />
      </div>
    </>
  );
}

export default Home;
