import { SearchOutlined } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import "./Header.css";
import Image1 from "../Sources/Images/mob.png";
import Image2 from "../Sources/Images/fashion.png";
import Image3 from "../Sources/Images/electronic.png";
import Image4 from "../Sources/Images/home.png";
import Image5 from "../Sources/Images/travel.png";
import Image6 from "../Sources/Images/appliances.png";
import Image7 from "../Sources/Images/furniture.png";
import Image8 from "../Sources/Images/toys.png";
import Image9 from "../Sources/Images/grocery.png";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/animations/scale.css";
import LoginT from "./LoginT";
import MoreT from "./MoreT";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="first">
          <img
            src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
            alt="Flipkart"
          />
          <div className="first1">
            <span
              style={{
                fontSize: "11px",
                paddingRight: "2px",
                color: "white",
                fontStyle: "italic",
              }}
            >
              Explore
            </span>
            <span
              style={{
                color: "#F9E107",
                fontSize: "11px",
                fontStyle: "italic",
              }}
            >
              Plus
            </span>
            <span>
              <img
                width="10"
                className="logo"
                src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="second">
          <input
            type="text"
            placeholder="Search for products,brands and more"
          />
          <SearchOutlined />
        </div>

        <div className="third">
          <button>
            <Tippy
              content={<LoginT></LoginT>}
              interactive={true}
              offset={[5, 20]}
              theme="light"
              animation="scale"
            >
              <span>Login</span>
            </Tippy>
          </button>
        </div>

        <div>
          <p style={{ color: "white", fontWeight: "500", cursor: "pointer" }}>
            {" "}
            Become a Seller
          </p>
        </div>

        <div className="fourth">
          <Tippy
            content={<MoreT></MoreT>}
            interactive={true}
            theme="light"
            offset={[5, 18]}
            animation="perspective"
          >
            <p className="tp">More</p>
          </Tippy>
          <ExpandMoreIcon />
        </div>
        <div className="fifth">
          <div className="cart">
            <ShoppingCartIcon />
          </div>
          <p style={{ color: "white", fontWeight: "600" }}>Cart</p>
        </div>
      </div>

      {/* <!-- category-section --> */}

      <section>
        <div class="category-row">
          <div class="category-col">
            <img src={Image1} alt="" />
            <h5>Mobiles</h5>
          </div>

          <div class="category-col">
            <img src={Image2} alt="" />
            <h5>Fashion</h5>
          </div>

          <div class="category-col">
            <img src={Image3} alt="" />
            <h5>Electronics</h5>
          </div>

          <div class="category-col">
            <img src={Image4} alt="" />
            <h5>Home</h5>
          </div>

          <div class="category-col">
            <img src={Image5} alt="" />
            <h5>Travel</h5>
          </div>

          <div class="category-col">
            <img src={Image6} alt="" />
            <h5>Appliances</h5>
          </div>

          <div class="category-col">
            <img src={Image7} alt="" />
            <h5>Furniture</h5>
          </div>

          <div class="category-col">
            <img src={Image8} alt="" />
            <h5>Beauty,Toys & more</h5>
          </div>

          <div class="category-col">
            <img src={Image9} alt="" />
            <h5>Grocery</h5>
          </div>
        </div>
      </section>
    </div>
  );
}
