import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Components/carousal.css";
import { multiData } from "../Components/carousaldata";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 3,
  // infinite={false}
  // slidesToScroll={3}
  centerMode: true,
  centerPadding: "300px",
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const Cardcarousel = () => {
  return (
    <>

    <div
      style={{
        marginBottom: "15px",
        marginInline: "7px",
        boxShadow: "rgb(177, 174, 174) 0px 0px 5px 1px",
        paddingTop: "35px",
        paddingBottom: "20px",
      }}
      className="carousel"
    >
    
      <Slider {...carouselProperties}>
        {multiData.map((item) => (
          <Card item={item} />
        ))}
      </Slider>
    </div>
    </>
  );
};

const Card = ({ item }) => {
  return (
    <>
    <div style={{ textAlign: "center" }}>
      <img
        className="multi__image"
        src={item}
        alt=""
        style={{
          width: "100%",
          height: "170px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />
      <p style={{ marginTop: "10px", fontSize: "16px", fontWeight: "500" , cursor: "pointer",
    marginBlock: "8px"}}>
        TOP TRENDING TVs
      </p>
      <p style={{ fontSize: "16px", color: "green" ,fontWeight: "500" , cursor: "pointer",
    marginBlock: "8px" }}>From ₹ 7,000</p>
      <p style={{ fontSize: "14px", color: "gray" , fontWeight: "500" , cursor: "pointer",
    marginBlock: "8px"}}>
        Up To ₹ 5,000 Off on HDFC
      </p>
    </div>
    </>
  );
};

export default Cardcarousel;
