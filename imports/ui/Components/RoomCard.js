import React from "react";
import "./Css/RoomCard.css";

export function RoomCard(props) {
  return (
    <div className="room_card">
      <img src={props.src} />
      <div className="room_card_info">
        <div className="title_and_city">
          <h3>{props.title}</h3>
          <span>{props.city}</span>
        </div>
        <div className="room_card_desc">
          <p>{props.desc}</p>
        </div>
        <div className="price_and_rating">
        <p>₹{props.price}</p>
        <span>{props.rating}★</span>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
}
