import React, { useState } from "react";
import { Banner } from "./Banner";
import { RoomCard } from "./RoomCard";
import { useTracker } from "meteor/react-meteor-data";
import { RoomsCollection } from "../../api/RoomsCollection";
import "./Css/Rooms.css";

export function Rooms() {
  const [price, setPrice] = useState(true);
  const [rating, setRating] = useState(false);
  const [priceIncrease, setPriceIncrease] = useState(true);
  const [ratingIncrease, setRatingIncrease] = useState(true);
  let defaultrooms = useTracker(() => RoomsCollection.find({}).fetch());

  let priceIncRooms = useTracker(() =>
    RoomsCollection.find(
      {},
      {
        sort: { price: 1 },
      }
    ).fetch()
  );

  let priceDecRooms = useTracker(() =>
    RoomsCollection.find(
      {},
      {
        sort: { price: -1 },
      }
    ).fetch()
  );

  let ratingIncRooms = useTracker(() =>
    RoomsCollection.find(
      {},
      {
        sort: { city: 1 },
      }
    ).fetch()
  );

  let ratingDecRooms = useTracker(() =>
    RoomsCollection.find(
      {},
      {
        sort: { city: -1 },
      }
    ).fetch()
  );

  const handlePriceFilter = () => {
    setRating(false);
    setPrice(true);
    setPriceIncrease(!priceIncrease);
  };

  const handleRatingFilter = () => {
    setRating(true);
    setPrice(false);
    setRatingIncrease(!ratingIncrease);
  };

  const showAllRooms = defaultrooms.map((room) => {
    return (
      <RoomCard
        title={room.title}
        city={room.city}
        desc={room.description}
        price={room.price}
        rating={room.rating}
        src={room.selectedFile}
      />
    );
  });

  const showPriceIncRooms = priceIncRooms.map((room) => {
    return (
      <RoomCard
        title={room.title}
        city={room.city}
        desc={room.description}
        price={room.price}
        rating={room.rating}
        src={room.selectedFile}
      />
    );
  });

  const showPriceDecRooms = priceDecRooms.map((room) => {
    return (
      <RoomCard
        title={room.title}
        city={room.city}
        desc={room.description}
        price={room.price}
        rating={room.rating}
        src={room.selectedFile}
      />
    );
  });

  const showRatingIncRooms = ratingIncRooms.map((room) => {
    return (
      <RoomCard
        title={room.title}
        city={room.city}
        desc={room.description}
        price={room.price}
        rating={room.rating}
        src={room.selectedFile}
      />
    );
  });

  const showRatingDecRooms = ratingDecRooms.map((room) => {
    return (
      <RoomCard
        title={room.title}
        city={room.city}
        desc={room.description}
        price={room.price}
        rating={room.rating}
        src={room.selectedFile}
      />
    );
  });

  return (
    <div className="rooms_comp">
      <Banner />
      <div className="filters">
        <h1>Filters</h1>
        <button className="filter_button" onClick={handlePriceFilter}>
          {priceIncrease ? "Price ↑" : "Price ↓"}
        </button>
        <button className="filter_button" onClick={handleRatingFilter}>
          {ratingIncrease ? "Rating ↑" : "Rating ↓"}
        </button>
      </div>
      <div className="rooms">
        {/* {priceIncrease ? showPriceIncRooms : showPriceDecRooms}
        {ratingIncrease ? showRatingIncRooms : showRatingDecRooms} */}

        {price ? (priceIncrease ? showPriceIncRooms : showPriceDecRooms) : ""}
        {rating
          ? ratingIncrease
            ? showRatingIncRooms
            : showRatingDecRooms
          : ""}
      </div>
    </div>
  );
}
