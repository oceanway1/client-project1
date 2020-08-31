import React, { Fragment } from "react";
import "./service.css";

export default function Service(props) {
  return (
    // <div>
    //   <h2>STUFF</h2>
    // </div>
    // <div class="image">

    //   <img src="images/nature.jpg" alt="" />

    // <span>A Movie in the Park:<span class='spacer'></span><br /><span class='spacer'></span>Kung Fu Panda</span>

    // </div>
    <div className="main">
      <div className="primary">
        <p>Productions</p><br />
      </div>
      <div className="secondary">
        <div className="secondary__text">
          <p>Hello</p><br />
        </div>
        <div className="secondary__image">
          <img src="http://lorempixel.com/400/400/food/5" alt="featuredImage" />
        </div>
      </div>
    </div>
  );
}