import React, { useState } from "react";
import "./Css/BannerHead.css";

export const BannerHead = (props) => {
  return (
    <React.Fragment>
      <div className="banner_head">
        <div className="location">
          <h4>Location</h4>
          <input type="text" placeholder="Where to go?" />
        </div>
        <hr />
        <div className="check_in" onClick={props.checkIn}>
          <h4>Check in</h4>
          <p>Add dates</p>
        </div>
        <hr />
        <div className="check_out" onClick={props.checkOut}>
          <h4>Check out</h4>
          <p>Add dates</p>
        </div>
        <hr />
        <div className="guests">
          <h4>Guests</h4>
          <p>Add guests</p>
        </div>
      </div>
    </React.Fragment>
  );
}

// export default BannerHead;
