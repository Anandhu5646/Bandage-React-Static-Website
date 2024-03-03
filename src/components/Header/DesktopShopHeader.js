import "./DesktopShopHeader.css";

const DesktopShopHeader = () => {
  return (
    <section className="desktop-shop-header-3">
      <div className="background">
        <img className="hero-cover2-icon" alt="" src="/herocover2@2x.png" />
        <div className="filter" style={{"height":"730px",'overflow':"hidden"}}>
          <header className="navbar">
            <h1 className="bandage">Bandage</h1>
            <div className="navbar-toggler">
              <div className="navbar-toggler-icon" />
            </div>
            <div className="a">
              <b className="link">Home</b>
            </div>
            <div className="dropdown-toggle">
              <div className="category">Shop</div>
              <img className="paragraph-icon" alt="" src="/paragraph.svg" />
            </div>
            <div className="dropdown-menu">
              <div className="container1">
                <div className="row2">
                  <div className="col-md-31">
                    <b className="h5">Shop Layout</b>
                    <div className="div1">
                      <b className="link1">Full Width</b>
                      <b className="link2">Sidebar Right</b>
                      <b className="link3">Sidebar Left</b>
                      <b className="link4">List View</b>
                      <b className="link5">Checkout</b>
                      <b className="link6">Card</b>
                      <b className="link7">Wishlist</b>
                    </div>
                  </div>
                  <div className="col-md-32">
                    <b className="h51">Product layout</b>
                    <div className="div2">
                      <b className="link8">Big Image Scrolling</b>
                      <b className="link9">Simple Product</b>
                      <b className="link10">Vertical Right</b>
                      <b className="link11">Vertical Left</b>
                      <b className="link12">Vertical Left</b>
                      <b className="link13">Vertical Horizontal</b>
                      <b className="link14">Collection</b>
                    </div>
                  </div>
                  <div className="col-md-33">
                    <b className="h52">Product Type</b>
                    <div className="div3">
                      <b className="link15">Simple Product</b>
                      <b className="link16">Vertical Product</b>
                      <b className="link17">Left Product</b>
                      <b className="link18">Right Product</b>
                      <b className="link19">{`Special Products `}</b>
                      <b className="link20">Outshout store</b>
                    </div>
                  </div>
                  <div className="col-md-34">
                    <b className="h53">Product Categories</b>
                    <div className="div4">
                      <b className="link21">Bedroom</b>
                      <b className="link22">Outdoor</b>
                      <b className="link23">Decoration</b>
                      <b className="link24">Kitchen</b>
                    </div>
                  </div>
                  <div className="col-md-35">
                    <img
                      className="drop-hero-icon"
                      alt=""
                      src="/drophero@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="li">
              <div className="a1">
                <b className="link25">About</b>
              </div>
            </div>
            <div className="iconbxbxmap">
              <b className="link26">Blog</b>
              <b className="link27">Contact</b>
              <b className="link28">Pages</b>
            </div>
            <div className="btn-32">
              <img
                className="icn-settings-icn-xs"
                alt=""
                src="/icn-settings-icnxs.svg"
              />
              <b className="login-register">Login / Register</b>
            </div>
            <div className="btn-321">
              <img
                className="icn-settings-icn-xs1"
                alt=""
                src="/icn-settings-icnxs-1.svg"
              />
            </div>
            <div className="btn-322">
              <img
                className="icn-settings-icn-xs2"
                alt=""
                src="/icn-settings-icnxs-2.svg"
              />
              <div className="desktop-footer-container">1</div>
            </div>
            <div className="btn-323">
              <img
                className="icn-settings-icn-xs3"
                alt=""
                src="/icn-settings-icnxs-3.svg"
              />
              <div className="div5">1</div>
            </div>
          </header>
          <div className="carousel-2">
            <div className="carousel-item">
              <img
                className="shop-hero-3-product-slide-2-icon"
                alt=""
                src="/shophero3productslide2@2x.png"
              />
              <div className="container2">
                <div className="row3">
                  <div className="main-content">
                    <h1 className="h1-headline2">GROCERIES DELIVERY</h1>
                    <h3 className="h4">
                      <p className="we-know-how">{`We know how large objects will act, but things on a `}</p>
                      <p className="small-scale-just">
                        small scale just do not act that way.
                      </p>
                    </h3>
                    <div className="cta">
                      <div className="btn-lg-1">
                        <b className="h31">Start Now</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-indicators">
                <div className="carouselcaptions" />
                <div className="carouselcaptions1" />
              </div>
              <img
                className="carousel-control-next-icon"
                loading="lazy"
                alt=""
                src="/carouselcontrolnext.svg"
              />
              <img
                className="carousel-control-prev-icon"
                loading="lazy"
                alt=""
                src="/carouselcontrolprev.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopShopHeader;
