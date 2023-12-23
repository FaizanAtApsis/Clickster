import React from "react";

const Headline1 = ({ children, ...otherProps }) => {
  return (
    <h1 className="headline1" {...otherProps}>
      {children}
    </h1>
  );
};

export default Headline1;
