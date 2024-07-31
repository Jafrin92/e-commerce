import React from "react";
import "./categories.css";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import categories1 from "../../assets/index/categories-1.jpg";
import categories2 from "../../assets/index/categories-2.jpg";
import categories3 from "../../assets/index/categories-3.jpg";
import categories4 from "../../assets/index/categories-4.jpg";
import categories5 from "../../assets/index/categories-5.jpg";
import categories6 from "../../assets/index/categories-6.jpg";
import categories7 from "../../assets/index/categories-7.jpg";
import categories8 from "../../assets/index/categories-8.jpg";
import Slider from "react-slick";

const Categories = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="categories">
      <div className="container">
        <div className="row heading">
          <h3>Popular Categories</h3>
        </div>
        <div className="row categoriesMain">
          <Slider {...settings}>
            <div>
              <a href="#">
                <div className="category-box">
                  <div className="category-img">
                    <picture>
                      <img src={categories1} alt="categories1" />
                    </picture>
                  </div>
                  <div className="category-name">
                    <h3>Fruits & Vegetables</h3>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="#">
                <div className="category-box">
                  <div className="category-img">
                    <picture>
                      <img src={categories2} alt="categories2" />
                    </picture>
                  </div>
                  <div className="category-name">
                    <h3>Meat & Fish</h3>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="#">
                <div className="category-box">
                  <div className="category-img">
                    <picture>
                      <img src={categories3} alt="categories3" />
                    </picture>
                  </div>
                  <div className="category-name">
                    <h3>Cooking</h3>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="#">
                <div className="category-box">
                  <div className="category-img">
                    <picture>
                      <img src={categories4} alt="categories4" />
                    </picture>
                  </div>
                  <div className="category-name">
                    <h3>Beverages</h3>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="#">
                <div className="category-box">
                  <div className="category-img">
                    <picture>
                      <img src={categories5} alt="categories5" />
                    </picture>
                  </div>
                  <div className="category-name">
                    <h3>Home & Cleaning</h3>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="#">
                <div className="category-box">
                  <div className="category-img">
                    <picture>
                      <img src={categories6} alt="categories6" />
                    </picture>
                  </div>
                  <div className="category-name">
                    <h3>Pest Control</h3>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="#">
                <div className="category-box">
                  <div className="category-img">
                    <picture>
                      <img src={categories7} alt="categories7" />
                    </picture>
                  </div>
                  <div className="category-name">
                    <h3>Stationery & Office</h3>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="#">
                <div className="category-box">
                  <div className="category-img">
                    <picture>
                      <img src={categories8} alt="categories8" />
                    </picture>
                  </div>
                  <div className="category-name">
                    <h3>Beauty Products</h3>
                  </div>
                </div>
              </a>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Categories;
