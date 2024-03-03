import { useMemo } from "react";
import "./ContentCard.css";

const ContentCard = ({ unsplashhHdHCfAifHU, propMarginLeft }) => {
  const contentCardStyle = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div className="content-card" style={contentCardStyle}>
      <div className="fixed-height2">
        <img
          className="unsplashhhdhcfaifhu-icon"
          loading="lazy"
          alt=""
          src={unsplashhHdHCfAifHU}
        />
        <div className="tag">
          <b className="new">NEW</b>
        </div>
      </div>
      <div className="frame-with-icons-and-text">
        <div className="tags">
          <div className="small1">Google</div>
          <div className="small2">Trending</div>
          <div className="small3">New</div>
        </div>
        <h3 className="h4-post-title">
          <p className="loudest-la">{`Loudest à la Madison #1 `}</p>
          <p className="lintegral">(L'integral)</p>
        </h3>
        <div className="paragraph-post-description">
          <p className="we-focus-on2">{`We focus on ergonomics and meeting `}</p>
          <p className="you-where-you2">{`you where you work. It's only a `}</p>
          <p className="keystroke-away2">keystroke away.</p>
        </div>
        <div className="paragraph-post-description1">
          <div className="frame-with-three-frames-and-ic">
            <img
              className="icon-akar-icons-calendar"
              alt=""
              src="/icon-akariconscalendar.svg"
            />
            <div className="small4">22 April 2021</div>
          </div>
          <div className="content-block">
            <img
              className="icon-ant-design-area-chart-out"
              alt=""
              src="/icon-antdesignareachartoutlined.svg"
            />
            <div className="small5">10 comments</div>
          </div>
        </div>
        <div className="a3">
          <b className="h615">Learn More</b>
          <img className="icon-arrow-next1" alt="" src="/icon-arrownext.svg" />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
