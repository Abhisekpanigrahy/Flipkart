import React from "react";
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import "./LoginT.css";
import { AccountCircle, ConfirmationNumber } from "@mui/icons-material";

const LoginT = () => {
  return (
    <div className="logint">
      <div className="logint__i">
        <h2>New customer</h2>
        <p>Signup</p>
      </div>
      <hr />
      <div className="logint__in">
        <AccountCircle />
        <p>My Profile</p>
      </div>
      <hr />
      <div className="logint__in">
        <img
          width="20"
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
          alt=""
        />
        <p>Flipkart Plus</p>
      </div>
      <hr />
      <div className="logint__in">
        <StoreOutlinedIcon />
        <p>Orders</p>
      </div>
      <hr />
      <div className="logint__in">
        <FavoriteOutlinedIcon />
        <p>Wishlist</p>
      </div>
      <hr />
      <div className="logint__in">
        <ConfirmationNumber />
        <p>Rewards</p>
      </div>
      <hr />
      <div className="logint__in">
        <CardGiftcardOutlinedIcon/>
        <p>Gift Cards</p>
      </div>
    </div>
  );
};

export default LoginT;
