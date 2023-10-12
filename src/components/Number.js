const Number = ({ value, onClick }) => {
  /** TODO: What happens when a user clicks a number, what do we want to pass to our parent? */
  return (
    <span
      onClick={()=>onClick(value)}
      style={{
        padding: 10,
        border: "1px solid #aaaaaa",
        width: 60,
        backgroundColor: "#00cccc",
        fontSize: "2rem",
        color: "#ffffff",
        flexGrow: 1,
        textAlign: "center"

      }}
    >
      {value}
    </span>
  );
};

export default Number;
