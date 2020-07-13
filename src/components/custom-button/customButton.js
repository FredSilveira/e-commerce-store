import React from "react";

import "./customButton.scss";

const CostumButton = ({ children, ...Props}) => (
  <button className="custom-button" {...Props}>
    {children}
  </button>
);

export default CostumButton;
