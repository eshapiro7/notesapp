const NoteList = ({ chocolate }) => {
  console.log(chocolate);
  return (
    <div>
      {chocolate.map((note) => (
        <p>Here is your note: {note}</p>
      ))}
    </div>
  );
};

export default NoteList;
