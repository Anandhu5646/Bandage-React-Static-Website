import "./Shop.css";
import { iceCardImg,appleCardImg,meatCardImg } from "../../assets";
const Shop = () => {
  return (
    <div className="outer">

    
    <div className="dashboard-container">
    <div className="card-container">
     <img src={iceCardImg} alt="" />
    </div>
    <div className="card-container">
      <img src={appleCardImg} alt="" />
    </div>
    <div className="card-container">
    <img src={meatCardImg} alt="" />
    </div>
  </div>
  </div>
  );
};

export default Shop;
