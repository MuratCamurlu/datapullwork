import "./Main.css";
import { data } from "../../helper/data";
const Main = () => {
  return (
    <div className="main-container">
      {data.map((item) => {
        const { title, image, desc } = item;
        return (
          <div className="card">
            <h1>{title}</h1>
            <img src={image} alt="" />
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
