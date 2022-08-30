import React from "react";

const locationCard = ({ icon, label, spn }) => {
  return (
    <div className="Location__distance__section__info__card">
      <div className="Location__distance__section__info__card__icon">
        {icon}
      </div>
      <div className="Location__distance__section__info__card__info">
        <span> {spn}</span> {label}
      </div>
    </div>
  );
};
export default locationCard;
