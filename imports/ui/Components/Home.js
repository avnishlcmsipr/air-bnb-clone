// import { Card } from '@material-ui/core'
import React from "react";
import {Banner} from "./Banner";
import "./Css/Home.css";
import {Card} from "./Card";
import {BigCard} from "./BigCard";
import {SmallCard} from "./SmallCard";

export const Home = () => {
  return (
    <div className="home">
      <Banner />
      <h2>Explore nearby</h2>
      <div className="explore_nearby">
        <SmallCard
          src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg?im_q=medq&im_w=240"
          title="Kasoli"
          desc="3-hour drive"
        />
        <SmallCard
          src="https://a0.muscache.com/im/pictures/a7fe39da-3e57-44df-a744-9a73e482802d.jpg?im_q=medq&im_w=240"
          title="Mussorrie"
          desc="2-hour drive"
        />
        <SmallCard
          src="https://a0.muscache.com/im/pictures/558a403a-aeed-4829-83a6-c9b0ccf21866.jpg?im_q=medq&im_w=240"
          title="Manali"
          desc="5-hour drive"
        />
        <SmallCard
          src="https://a0.muscache.com/im/pictures/105b8160-1109-4678-b8aa-367ea9faebea.jpg?im_q=medq&im_w=240"
          title="Dalhousie"
          desc="2-hour drive"
        />
        
      </div>
      <div className="explore_nearby">
      <SmallCard
          src="https://a0.muscache.com/im/pictures/8340bd19-ee32-4669-8b10-a8ac7e7735d4.jpg?im_q=medq&im_w=240"
          title="Chandigarh"
          desc="1-hour drive"
        />
        <SmallCard
          src="https://a0.muscache.com/im/pictures/82293cc1-ba0b-4167-85a6-ed133d478c20.jpg?im_q=medq&im_w=240"
          title="Dehradun"
          desc="4-hour drive"
        />
        <SmallCard
          src="https://a0.muscache.com/im/pictures/0810e005-87d3-4188-b95c-2d7fa2fc957b.jpg?im_q=medq&im_w=240"
          title="Haridwar"
          desc="5-hour drive"
        />
        <SmallCard
          src="https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg?im_q=medq&im_w=240"
          title="Almora"
          desc="4-hour drive"
        />
      </div>
      <h2>Live anywhere</h2>
      <div className="live_anywhere">
        <Card
          src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480"
          title="Unique stays"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
          title="Entire homes"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480"
          title="Pets allowed"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480"
          title="Outdoor getaways"
        />
      </div>
      <div className="host">
        <div className="become_host">
          <h1>Become a Host</h1>
          <p>
            Earn extra income and unlock new opportunities by sharing your
            space.
          </p>
          <button>Learn more</button>
        </div>
        {/* <img alt="host image" src="https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" /> */}
        <img
          alt="host image"
          src="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1680"
        />
      </div>
      <h2>Discover Experiences</h2>
      <p>Unique activities with local experts – in person or online.</p>
      <div className="discover_exp">
        <BigCard
          src="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=480"
          title="Featured Collection"
          desc="Travel from home with experiences"
        />
        <BigCard
          src="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=480"
          title="Online Experiences"
          desc="live interactive activities by host"
        />
        <BigCard
          src="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
          title="Experiences"
          desc="local things to do"
        />
      </div>
    </div>
  );
}

// export default Home;
