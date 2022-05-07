import React from "react";
import GetAppIcon from '@mui/icons-material/GetApp';
import { LiveHelp, MonetizationOn, Notifications, TrendingUp } from "@mui/icons-material";

const MoreT = () => {
  return (
    <div className="moret">
      <div className="moret__in">
        <Notifications />
        <p>Notification Preferences</p>
      </div>
      <hr />
      <div className="moret__in">
        <MonetizationOn/>
        <p>Sell on Flipkart</p>
      </div>
      <hr />
      <div className="moret__in">
        <LiveHelp />
        <p>24*7 Customer Care</p>
      </div>
      <hr />
      <div className="moret__in">
        <TrendingUp />
        <p>Advertise</p>
      </div>
      <hr />
      <div className="moret__in">
        <GetAppIcon />
        <p>Download app</p>
      </div>
    </div>
  );
};

export default MoreT;
