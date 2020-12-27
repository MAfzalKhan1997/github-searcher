import "./style.css";
import img from "../../assets/images/loader.svg";

const Loader = () => {
  return (
    <div className="loader">
      <img src={img} alt="loader" />
    </div>
  );
};

export default Loader;
