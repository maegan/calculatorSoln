import "./Wrapper.css";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper bg-dark-gray pa3 br3 bw2 shadow-5">
      <Screen value="0" />
      <ButtonBox />
    </div>
  );
};

export default Wrapper;
