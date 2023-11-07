import React from "react";

const Input = (props) => {
  if (props.type == "textarea")
    return (
      <textarea
        rows={5}
        {...props}
        placeholder={props.placeholder + " (Required)"}
      />
    );
  return (
    <input
      type="text"
      {...props}
      placeholder={props.placeholder + " (Required)"}
    />
  );
};

export default Input;
