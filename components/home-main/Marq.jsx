import React from "react";

function Marq() {
  const marquee = [
    "Web Desgin",
    "Web Developement",
    "Seo eCommerce",
    "Digital Marketing",
    "UI/UX Desgin",
    "Graphic Design",
    "App Development",
    "Artificial Intelligent",
    "Search Engine Optimization",
    "Devops Engineering",
  ];
  return (
    <section className="opacity-7">
      <div className="main-marq xlrg o-hidden">
        <div className="slide-har st1 strok">
          <div className="box">
            {marquee.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center color-black">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                    <img src="/assets/imgs/star.png" alt="" />
                  </span>
                </h4>
              </div>
            ))}
          </div>
          <div className="box">
            {marquee.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center color-black">
                  <span className="color-black">{item}</span>
                  <span className="icon-img-50 ml-40">
                    <img src="/assets/imgs/star.png" alt="" />
                  </span>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="main-marq xlrg o-hidden">
        <div className="slide-har st2 non-strok">
          <div className="box">
            {marquee.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center color-black">
                  <span className="color-black">{item}</span>
                  <span className="icon-img-50 ml-40">
                    <img src="/assets/imgs/star.png" alt="" />
                  </span>
                </h4>
              </div>
            ))}
          </div>
          <div className="box">
            {marquee.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center color-black">
                  <span className="color-black">{item}</span>
                  <span className="icon-img-50 ml-40">
                    <img src="/assets/imgs/star.png" alt="" />
                  </span>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marq;
