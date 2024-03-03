import { useMemo } from "react";
import "./ColMd.css";

const ColMd = ({ fixedHeight, propPadding }) => {
  const productCardStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="col-md-316">
      <div className="product-card6" style={productCardStyle}>
        <img className="fixed-height-icon6" alt="" src={fixedHeight} />
        <div className="h-posttitle">
          <b className="h5-product-title8">Graphic Design</b>
          <b className="link-product-category8">English Department</b>
          <div className="prices6">
            <b className="h5-price16">$16.48</b>
            <b className="h5-price17">$6.48</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColMd;
