import { useState } from "react";

const NoteInput = ({ setChocolate, chocolate }) => {
  const [tempNote, setTempNote] = useState("");

  const handleChange = (event) => {
    const val = event.target.value;
    setTempNote(val);
    console.log(val);
  };

  const handleSubmit = () => {
    console.log("this is tempNote", tempNote);
    console.log("this is chocolate", chocolate);
    const newNotes = [...chocolate, tempNote];
    console.log("New Notes", newNotes);
    setChocolate(newNotes);
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
