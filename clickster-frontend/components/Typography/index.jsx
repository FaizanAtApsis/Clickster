import React from "react";

export const GradientText = ({ children, ...otherProps }) => {
  return (
    <span className="gradient-text" {...otherProps}>
      {children}
    </span>
  );
};
export const Lead1 = ({ children, ...otherProps }) => {
  return (
    <p className="lead1" {...otherProps}>
      {children}
    </p>
  );
};

export const Lead2 = ({ children, ...otherProps }) => {
  return (
    <p className="lead2" {...otherProps}>
      {children}
    </p>
  );
};
export const Lead3 = ({ children, ...otherProps }) => {
  return (
    <p className="lead3" {...otherProps}>
      {children}
    </p>
  );
};
export const Title = ({ children, ...otherProps }) => {
    return (
      <p className="title" {...otherProps}>
        {children}
      </p>
    );
  };
export const ButtonPrimary = ({ children, ...otherProps }) => {
  return (
    <div className="btn btn1" {...otherProps}>
      {children}
    </div>
  );
};

export const ButtonSecondary = ({ children, ...otherProps }) => {
  return (
    <div className="btn btn2" {...otherProps}>
      {children}
    </div>
  );
};

export const Headline2 = ({ children, ...otherProps }) => {
  return (
    <h2 className="headline2" {...otherProps}>
      {children}
    </h2>
  );
};

export const Headline3 = ({ children, ...otherProps }) => {
  return (
    <h3 className="headline3" {...otherProps}>
      {children}
    </h3>
  );
};
