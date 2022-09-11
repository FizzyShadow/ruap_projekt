import React from "react";
import "./ImageRecognition.css";

const ImageRecognition = ({ imageUrl, box }) => {
  return (
    <div className="">
      <div className="">
        <img
          className="detectedImage"
          id="inputimage"
          alt=""
          src={imageUrl}
        />
      </div>
    </div>
  );
};

export default ImageRecognition;
