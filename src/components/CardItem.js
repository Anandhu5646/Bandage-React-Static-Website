import "./CardItem.css";

const CardItem = ({ cardCover5 }) => {
  return (
    <div className="card-item3">
      <img
        className="card-cover-5-icon"
        loading="lazy"
        alt=""
        src={cardCover5}
      />
      <div className="filter4" />
      <b className="h66">FURNITURE</b>
      <b className="h67">5 Items</b>
    </div>
  );
};

export default CardItem;
