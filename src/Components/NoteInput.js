import { useState } from "react";

const NoteInput = () => {
    const [newNote, setNewNote] = useState("");

    const savedNote = (event) => {
        setNewNote(event.target.value);
    };

    console.log(newNote);
    console.log(setNewNote);
    console.log(savedNote);

    return (
        <div className="noteContainer">
            <h3>New Note</h3>
            <input
                onChange={savedNote}
                className="inputbox"
                placeholder="Write your note here..."
            ></input>
            <button onClick={savedNote}>Save</button>
            <p>Here is your previous note: {newNote}</p>
        </div>
    );
};

export default NoteInput;
