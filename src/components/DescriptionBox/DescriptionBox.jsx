import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <section className="desription-section">
    <div className="DescriptionBox">
      <div className="DescriptionBox-navigator">
        <div className="navbox">Description</div>
        <div className="navbox-fade">Reviews(122)</div>
      </div>
      <div className="description-box">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat modi
          iusto similique illum facilis corporis fuga, aliquid excepturi, odio
          natus praesentium animi ratione rem nemo sint quibusdam quis quia
          earum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          totam eos, itaque odit facere ducimus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          totam eos, itaque odit facere ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          totam eos, itaque odit facere ducimus.
        </p>
      </div>
    </div>
    </section>
  );
};

export default DescriptionBox;
