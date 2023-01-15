import { useState } from "react";

const NoteInput = () => {
  const [newNote, setNewNote] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="noteContainer">
      <h3>New Note</h3>
      <input
        onChange={handleChange}
        className="inputbox"
        placeholder="Write your note here..."
      ></input>
      <button>Save</button>
      <p>Here is your previous note: {newNote}</p>
    </div>
  );
};

export default NoteInput;
