import "./Screen.css";

const Screen = ({ value }) => {
  console.log("in Screen");
  return (
    <div className="flex justify-end items-center h3 pa3 mb2 br3 b white bg-mid-gray f2">
      {value}
    </div>
  );
};

export default Screen;
