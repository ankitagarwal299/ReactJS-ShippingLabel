import React from "react";

export default function Form(props) {
  const { type, updateData, currData } = props;

  // const fields = [
  //   "Name/Company",
  //   "Street Line 1",
  //   "Street Line 2",
  //   "City",
  //   "Sample Input Label",
  //   "Zip Code"
  // ];

  function handleChange(e, key) {
    const temp = { ...currData };
    temp[key] = e.target.value;
    updateData(temp);
  }

  const fields = {
    name: "Name/Company",
    street1: "Street Line 1",
    street2: "Street Line 2",
    city: "City",
    state: "Sample Input Label",
    zip: "Zip Code"
  };

  return (
    <>
      <h1>{type}</h1>
      {Object.keys(fields).map((key, index) => {
        const label = fields[key];
        return (
          <p key={index}>
            <input
              type="text"
              id={key}
              name={key}
              placeholder={label}
              onChange={(e) => handleChange(e, key)}
              value={currData[key]}
            ></input>
          </p>
        );
      })}
    </>
  );
}
