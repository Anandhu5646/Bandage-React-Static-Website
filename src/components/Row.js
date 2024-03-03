import { useMemo } from "react";
import "./Row.css";

const Row = ({
  propPadding,
  propPadding1,
  propPadding2,
  propPadding3,
  propPadding4,
  propPadding5,
}) => {
  const bxMapIconStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding3,
    };
  }, [propPadding3]);

  const frameDiv3Style = useMemo(() => {
    return {
      padding: propPadding4,
    };
  }, [propPadding4]);

  const frameDiv4Style = useMemo(() => {
    return {
      padding: propPadding5,
    };
  }, [propPadding5]);

  return (
    <div className="row6">
      <div className="product-tab-tab-group">
        <div className="tab-content">
          <div className="tab-one">
            <div className="col-md-36">
              <div className="product-card">
                <img
                  className="fixed-height-icon"
                  loading="lazy"
                  alt=""
                  src="/fixedheight@2x.png"
                />
                <div className="bx-map-icon" style={bxMapIconStyle}>
                  <b className="h5-product-title">Graphic Design</b>
                  <b className="link-product-category">English Department</b>
                  <div className="prices">
                    <b className="h5-price">$16.48</b>
                    <b className="h5-price1">$6.48</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-37">
              <div className="product-card1">
                <img
                  className="fixed-height-icon1"
                  alt=""
                  src="/fixedheight-1@2x.png"
                />
                <div className="h5-product-title-parent" style={frameDivStyle}>
                  <b className="h5-product-title1">Graphic Design</b>
                  <b className="link-product-category1">English Department</b>
                  <div className="prices1">
                    <b className="h5-price2">$16.48</b>
                    <b className="h5-price3">$6.48</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-38">
              <div className="product-card2">
                <img
                  className="fixed-height-icon2"
                  alt=""
                  src="/fixedheight-2@2x.png"
                />
                <div className="h5-product-title-group" style={frameDiv1Style}>
                  <b className="h5-product-title2">Graphic Design</b>
                  <b className="link-product-category2">English Department</b>
                  <div className="prices2">
                    <b className="h5-price4">$16.48</b>
                    <b className="h5-price5">$6.48</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-39">
              <div className="product-card3">
                <img
                  className="fixed-height-icon3"
                  alt=""
                  src="/fixedheight@2x.png"
                />
                <div
                  className="h5-product-title-container"
                  style={frameDiv2Style}
                >
                  <b className="h5-product-title3">Graphic Design</b>
                  <b className="link-product-category3">English Department</b>
                  <div className="prices3">
                    <b className="h5-price6">$16.48</b>
                    <b className="h5-price7">$6.48</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-310">
              <div className="product-card4">
                <img
                  className="fixed-height-icon4"
                  alt=""
                  src="/fixedheight-1@2x.png"
                />
                <div className="frame-div" style={frameDiv3Style}>
                  <b className="h5-product-title4">Graphic Design</b>
                  <b className="link-product-category4">English Department</b>
                  <div className="prices4">
                    <b className="h5-price8">$16.48</b>
                    <b className="h5-price9">$6.48</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-311">
              <div className="product-card5">
                <img
                  className="fixed-height-icon5"
                  alt=""
                  src="/fixedheight-2@2x.png"
                />
                <div
                  className="h5-product-title-parent1"
                  style={frameDiv4Style}
                >
                  <b className="h5-product-title5">Graphic Design</b>
                  <b className="link-product-category5">English Department</b>
                  <div className="prices5">
                    <b className="h5-price10">$16.48</b>
                    <b className="h5-price11">$6.48</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
