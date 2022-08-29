import React from "react";

const specificationCard = ({ icon, heading, subheading }) => {
  return (
    <div className="specification__section__left__upper__one">
      <div className="specification__section__left_upper__one__icon">
        {icon}
      </div>
      <div className="specification__section__left__upper__one__info">
        <div className="specification__section__left__upper__one__info__heading">
          {heading}
        </div>
        <div className="specification__section__left__upper__one__info__subheading">
          {subheading}
        </div>
      </div>
    </div>
  );
};
export default specificationCard;
