import React from 'react';
import "./Card.css";
import Cardimg1 from "../Sources/Images/cimg1.jpeg"
import Cardimg2 from "../Sources/Images/cimg2.jpeg"
import Cardimg3 from "../Sources/Images/cimg3.jpeg"
import Cardimg4 from "../Sources/Images/cimg4.jpeg"
import Cardimg5 from "../Sources/Images/cimg5.jpeg"

export default function Card() {

    // const [data, setData] = useState([]);
    //         const renderData = () =>{
    //             fetch("https://fakestoreapi.com/products")
    //             .then((res) => res.json())
    //             .then((mydata) => {
    //                 console.log(mydata);
    //                 setData(mydata);
    //                     })
    //         };
        
    //         useEffect(() => {
    //             renderData();
    //         },[]);

  return (
    <div>

         <div className="card">

         <div className="sidebar">
                <h1>Top Deals on Electronics</h1>
                <h2>Up to 70% OFF</h2>
                <button>view all</button>
                {/* <img src={sbarimg} style={{width:238}} alt="" /> */}
           </div>

           {/* {data.map((i) => ( */}
                
           <div className="common-row">
            <div className="common-col col-headphones">
                <img src={Cardimg1} alt="mobile"/>
                {/* <img key={i.image} src={i.image} width={80} alt=""/> */}
                <h3>Soundbars</h3>
                <h4>From ₹2,999</h4>
                <h6>boAt, Motorola & more</h6>
            </div>
            <div className="common-col col-headphones">
                <img src={Cardimg2} alt="mobile"/>
                <h3>Best Selling Tablets</h3>
                <h4>Upto 45% Off</h4>
                <h6>realme, Samsung, Lenovo..</h6>
            </div>
            <div className="common-col col-headphones">
                <img src={Cardimg3} alt="mobile"/>
                <h3>Best Selling Monitors</h3>
                <h4>From ₹5399</h4>
                <h6>HP, LG, SAMSUNG & More</h6>
            </div>
            <div className="common-col col-headphones">
                <img src={Cardimg4} alt="mobile"/>
                <h3>Top Selling Cameras</h3>
                <h4>From ₹3,999</h4>
                <h6>DSLR, Action, Instant..</h6>
            </div>
            <div className="common-col col-headphones">
                <img src={Cardimg5} alt="mobile"/>
                <h3>Gaming Accessories</h3>
                <h4>Up to 90% Off</h4>
                <h6>Shop Now</h6>
            </div>
        </div>
       {/* )
       )} */}
         </div>
       {/* <div className="card">
      <div className="card__heart">
        <Favorite />
      </div>

      {Array(image.length)
        .fill()
        .map(
          (_, i) => {
          if (i === index) {
            return show && <FiberManualRecordRounded className="dots" />;
          } else {
            return show && <FiberManualRecordOutlined className="dots" />;
          }
        }
        )}

      <div className="card__image">
        <img
          onMouseOver={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          src={image[index]}
          alt="images"
        />
      </div>
      <div className="productDet">
        <div className="card__details">
          <p className="title">adidas</p>
          <p>running shoes</p>
          <span className="span1">₹{offerPrice}</span>
          <span className="span2">₹{actualPrice}</span>
          <span className="span3">56%</span>
        </div>
        <div className="card__size">
          <p>
            size <span>6,7,8,9</span>
          </p>
        </div>
      </div>
    </div> */}
       
    </div>
  )
}
