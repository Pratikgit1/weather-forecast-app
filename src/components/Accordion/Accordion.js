import React, { useState } from "react";
import "./Accordion.scss";

const Accordion = (props) => {
  const [toggle, setToggle] = useState(false);
  const {title, content} = props;

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="accordion" data-testid="test-accordion">
      <section onClick={handleToggle}>{title}</section>
      {toggle && <section>{content}</section>}
    </div>
  );
};

export default Accordion;
