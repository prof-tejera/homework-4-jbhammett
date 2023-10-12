const Screen = ({ value }) => {
  return (
    <div
      style={{
        border: "10px solid #aaaaaa",
        width: 300,
        height: 70,
        textAlign: "right",
        backgroundColor: "#ffffff"
      }}
    >
      {value}
    </div>
  );
};

export default Screen;
