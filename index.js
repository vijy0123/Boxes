const Box = (props) => {
  //  Write your code here.
  const { className, boxText } = props;
  return (
    <div className={props.className}>
      <p>{props.boxText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1>Boxes</h1>
    <div className="boxContainer">
      <Box className="box box1" boxText="Small" />
      <Box className="box box2" boxText="Medium" />
      <Box className="box box3" boxText="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
