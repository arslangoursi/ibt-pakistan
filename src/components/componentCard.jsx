import React from "react";

const componentCard = ({ img, label }) => {
  return (
    <div className="component__section__card">
      <div className="component__section__card__img">
        <img src={img} alt="componentimg" />
      </div>
      <div className="component__section__card__label">{label}</div>
    </div>
  );
};
export default componentCard;
