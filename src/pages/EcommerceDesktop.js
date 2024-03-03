import Header from "../components/Header/DesktopShopHeader";
import Shop from "../components/Shop/Shop";
import PdtSection from "../components/PdtSection/PdtSection";
import DesktopProductCards from "../components/DesktopProductCards";
import DesktopFooterContainer from "../components/DesktopFooterContainer";
import Blog from "../components/Blog/ContentCard";
import Div1 from "../components/Footer/Div1";
import Div from "../components/Footer/Div";
import "./EcommerceDesktop.css";

const EcommerceDesktop = () => {
  return (
    <div className="ecommerce-desktop-3">
      <Header />
      <Shop />
      <PdtSection />
      <DesktopProductCards />
      <DesktopFooterContainer />
      <section className="div-social-media">
        <div className="link-facebook-instagram-twitte">
          <b className="h6-section-tag">Practice Advice</b>
          <h1 className="h3-section-title">Featured Posts</h1>
        </div>
        <div className="row">
          <Blog unsplashhHdHCfAifHU="/unsplashhhdhcfaifhu@2x.png" />
          <Blog
            unsplashhHdHCfAifHU="/unsplashtveqstc2uz8@2x.png"
            propMarginLeft="unset"
          />
          <Blog
            unsplashhHdHCfAifHU="/unsplashdeguocub1y@2x.png"
            propMarginLeft="unset"
          />
        </div>
      </section>
      <footer className="desktop-footer-11">
        <div className="div">
          <div className="container">
            <div className="row1">
              <div className="col-md-6">
                <h2 className="h3">Consulting Agency For Your Business</h2>
                <div className="paragraph">
                  the quick fox jumps over the lazy dog
                </div>
              </div>
              <div className="col-md-3">
                <div className="buttonbtnprimary-color">
                  <b className="btn-text">Contact Us</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Div1 />
        <Div />
      </footer>
    </div>
  );
};

export default EcommerceDesktop;
