import React from "react";

const Carousel = (props) => {

return (
  <div className="container h-50 w-50">
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner w-100">
    <div className="carousel-item active">
      <img src={props.img1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={props.img2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={props.img3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

);

};

export default Carousel;