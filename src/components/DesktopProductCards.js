import ColMd from "./ColMd";
import "./DesktopProductCards.css";

const DesktopProductCards = () => {
  return (
    <section className="desktop-product-cards-15">
      <div className="h">
        <h2 className="h3-section-title3">BESTSELLER PRODUCTS</h2>
      </div>
      <div className="div13" />
      <div className="row8">
        <ColMd fixedHeight="/fixedheight-12@2x.png" />
        <ColMd
          fixedHeight="/fixedheight-13@2x.png"
          propPadding="0px var(--padding-12xs)"
        />
        <ColMd
          fixedHeight="/fixedheight-14@2x.png"
          propPadding="0px var(--padding-12xs) 0px 0px"
        />
        <ColMd
          fixedHeight="/fixedheight-15@2x.png"
          propPadding="0px var(--padding-12xs) 0px 0px"
        />
      </div>
    </section>
  );
};

export default DesktopProductCards;
