const Operation = ({ value, onClick }) => {
  /** TODO: What happens when a user clicks an Operation, what do we want to pass to our parent? */
  return (
    <div
      onClick={()=>onClick(value)}
      style={{
        padding: 10,
        border: "1px solid #aaaaaa",
        width: 60,
        backgroundColor: "#00cccc",
        fontSize: "2rem",
        color: "#ffffff",
        flexGrow: 2,
        textAlign: "center"
      }}
    >
      {value}
    </div>
  );
};

export default Operation;
