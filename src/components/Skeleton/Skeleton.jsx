// src/components/Skeleton/Skeleton.jsx
import React from "react";
import "./Skeleton.scss";

const Skeleton = () => {
  return (
    <div className="skeleton">
      <div className="skeleton__image"></div>
      <div className="skeleton__content">
        <div className="skeleton__title"></div>
        <div className="skeleton__subtitle"></div>
        <div className="skeleton__description"></div>
      </div>
    </div>
  );
};

export default Skeleton;
