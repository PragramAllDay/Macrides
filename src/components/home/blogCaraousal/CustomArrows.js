import React, { Component } from "react";
import Slider from "react-slick";
import "./CustomArrow.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <h2 className="font-bold text-sm md:text-[23px] lg:text-[25px] xl:text-[27px] text-center mb-5">
          Our Blog
        </h2>
        <div>
          <Slider {...settings}>
            <div className="max-w-[350px]">
              <img
                src="./images/1663310350348-night-driving-pakistan.jpg"
                alt=""
                style={{ height: "200px", width: "350px" }}
              />
              <h1 className="font-bold text-sm md:text-[15px] lg:text-[18px] xl:text-[22px] pt-3 ">
                Driving at Night Avoid these 7 Mistakes
              </h1>
              <p className="pt-3 text-sm">
                Driving at night can feel very therapeutic for some; however, it
                is a source of anxiety for others.
              </p>
            </div>
            <div className="max-w-[350px]">
              <img
                src="./images/1663309379424-rental-car-pakistan.jpg"
                alt=""
                style={{ height: "200px", width: "350px" }}
              />
              <h1 className="font-bold text-sm md:text-[15px] lg:text-[18px] xl:text-[22px] pt-3 ">
                Driving at Night Avoid these 7 Mistakes
              </h1>
              <p className="pt-3 text-sm">
                Driving at night can feel very therapeutic for some; however, it
                is a source of anxiety for others.
              </p>
            </div>
            <div className="max-w-[350px]">
              <img
                src="./images/1663308966865-pakistan-road-trip.jpg"
                alt=""
                style={{ height: "200px", width: "350px" }}
              />
              <h1 className="font-bold text-sm md:text-[15px] lg:text-[18px] xl:text-[22px] pt-3 ">
                Driving at Night Avoid these 7 Mistakes
              </h1>
              <p className="pt-3 text-sm">
                Driving at night can feel very therapeutic for some; however, it
                is a source of anxiety for others.
              </p>
            </div>
            <div className="max-w-[350px]">
              <img
                src="./images/1651840018711-buying-car-renting.jpg"
                alt=""
                style={{ height: "200px", width: "350px" }}
              />
              <h1 className="font-bold text-sm md:text-[15px] lg:text-[18px] xl:text-[22px] pt-3 ">
                Driving at Night Avoid these 7 Mistakes
              </h1>
              <p className="pt-3 text-sm">
                Driving at night can feel very therapeutic for some; however, it
                is a source of anxiety for others.
              </p>
            </div>
            <div className="max-w-[350px]">
              <img
                src="./images/1651840373804-office-commute-karachi.jpg"
                alt=""
                style={{ height: "200px", width: "350px" }}
              />
              <h1 className="font-bold text-sm md:text-[15px] lg:text-[18px] xl:text-[22px] pt-3 ">
                Driving at Night Avoid these 7 Mistakes
              </h1>
              <p className="pt-3 text-sm">
                Driving at night can feel very therapeutic for some; however, it
                is a source of anxiety for others.
              </p>
            </div>
            <div className="max-w-[350px]">
              <img
                src="./images/1651837077097-self-drive-car-rental.jpg"
                alt=""
                style={{ height: "200px", width: "350px" }}
              />
              <h1 className="font-bold text-sm md:text-[15px] lg:text-[18px] xl:text-[22px] pt-3 ">
                Driving at Night Avoid these 7 Mistakes
              </h1>
              <p className="pt-3 text-sm">
                Driving at night can feel very therapeutic for some; however, it
                is a source of anxiety for others.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
