const NoteList = ({ noteList }) => {
  return (
    <div>
      {noteList.map((note) => (
        <p>Here is your note: {note}</p>
      ))}
    </div>
  );
};

export default NoteList;
