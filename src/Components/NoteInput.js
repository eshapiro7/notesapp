import { useState } from "react";

const NoteInput = ({ setNoteList, noteList }) => {
  const [tempNote, setTempNote] = useState("");

  const handleChange = (event) => {
    const val = event.target.value;
    setTempNote(val);
    console.log(val);
  };

  const handleSubmit = () => {
    const newNotes = [...noteList, tempNote];
    console.log("New Notes", newNotes);
    setNoteList(newNotes);
  };

  return (
    <div className="noteContainer">
      <h3>New Note</h3>
      <input
        onChange={handleChange}
        className="inputbox"
        type="text"
        placeholder="Write your note here..."
      ></input>
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default NoteInput;
