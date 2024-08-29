import React from "react";
import "./Title.css";

const Title = (as) => {
  return (
    <div className="title">
      <p>{as.subTitle}</p>
      <h2>{as.title}</h2>
    </div>
  );
};

export default Title;
