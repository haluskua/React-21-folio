import React, { useState } from "react";
import "../components/readMore.css";



const ReadMore = ({ children, description, bio}) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 70) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
      {/* <h2>{description}</h2>
      <h2>{bio}</h2> */}


    </p>
  );
};



export default ReadMore;
