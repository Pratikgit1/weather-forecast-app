import React, { useState } from "react";
import "./Accordion.scss";

const Accordion = (props) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="accordion">
      <section onClick={handleToggle}>{props.title}</section>
      {toggle && <section>{props.content}</section>}
    </div>
  );
};

export default Accordion;
