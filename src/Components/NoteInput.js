import { useState } from "react";

const NoteInput = () => {
  const [newNote, setNewNote] = useState("");

  const handleChange = (event) => {
    const val = event.target.value;
    setNewNote(val);
    console.log(val);
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
      <button>Save</button>
      <p>Here is your note: {newNote}</p>
    </div>
  );
};

export default NoteInput;
