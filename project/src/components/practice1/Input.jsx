import React from "react";

const Input = ({ label, value, type, onChange, min, max }) => {
  return (
    <div>
      <label>{label}</label>
      <input value={value} type={type} min={min} max={max} onChange={(e) => onChange(parseFloat(e.target.value))} />
      <span>{value}</span>
    </div>
  );
};

export default Input;
