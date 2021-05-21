import { Button } from "@material-ui/core";
import React, { useState } from "react";
import {BannerHead} from "./BannerHead";
import "./Css/Banner.css";
import {DatePicker} from "./DatePicker";
import {Header} from "./Header";

export const Banner = () => {
  const [showCheckInDate, setShowCheckInDate] = useState(false);
  const [showCheckOutDate, setShowCheckOutDate] = useState(false);

  const handleShowCheckIn = () => {
    setShowCheckInDate(!showCheckInDate);
    setShowCheckOutDate(!showCheckOutDate);
  };
  const handleShowCheckOut = () => {
    setShowCheckOutDate(!showCheckOutDate);
    setShowCheckInDate(!showCheckInDate);
  };
  return (
    <React.Fragment>
      <Header />
      <div className="banner">
        <BannerHead checkIn={handleShowCheckIn} checkOut={handleShowCheckOut} />
        {showCheckInDate && <DatePicker />}
        {showCheckOutDate && <DatePicker />}
        <div className="banner_info">
          <h1>The Greatest Outdoors</h1>
          <p>Wishlists curated by Airbnb.</p>
          <Button size="small" variant="outlined">
            Get inspired
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

// export default Banner;
