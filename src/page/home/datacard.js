import React from "react";
import "./style.css";

const DataCard = ({ title, data }) => {
  return (
    <>
      {/* props for the popup detail */}
      {data && (
        <div className="school-details">
          <span className="details-title">{title}:</span>
          <span className="details-data">{data}</span>
        </div>
      )}
    </>
  );
};

export default DataCard;
