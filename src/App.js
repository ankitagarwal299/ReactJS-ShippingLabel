import React, { useState, useEffect } from "react";
import { render } from "react-dom";
//import { makeStyles } from "@material-ui/core/styles";
import Form from "./Form.js";
import uuid from "react-uuid";
//const useStyles = makeStyles((theme) => ({}));

export default function App() {
  console.log(uuid());
  //const classes = useStyles();
  const [shipperData, setShipperData] = useState({
    name: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zip: ""
  });
  const [recipientData, setRecipientData] = useState({
    name: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zip: ""
  });
  const [rendered, setRendered] = useState(false);
  function handleClick() {
    setRendered(true);
  }

  function generateLabel() {
    return (
      <>
        <div>
          <span>{shipperData.name}</span>{" "}
        </div>
        <div>
          <span>{shipperData.street1}</span>{" "}
        </div>
        <div>
          <span>{shipperData.street2}</span>{" "}
        </div>
        <div>
          <span>{shipperData.city}</span>{" "}
        </div>
        <div>
          <span>{shipperData.state}</span>{" "}
        </div>
        <div>
          <span>{shipperData.zip}</span>{" "}
        </div>

        <div>
          <span>{recipientData.name}</span>{" "}
        </div>
        <div>
          <span>{recipientData.street1}</span>{" "}
        </div>
        <div>
          <span>{recipientData.street2}</span>{" "}
        </div>
        <div>
          <span>{recipientData.city}</span>{" "}
        </div>
        <div>
          <span>{recipientData.state}</span>{" "}
        </div>
        <div>
          <span>{recipientData.zip}</span>{" "}
        </div>
        {/* <pre>{JSON.stringify(shipperData, null, 2)}</pre>
        <pre>{JSON.stringify(recipientData, null, 2)}</pre> */}
      </>
    );
  }
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10%" }}>
          <Form
            type="Shipper"
            updateData={setShipperData}
            currData={shipperData}
          />
        </div>
        <div>
          <Form
            type="Recipient"
            updateData={setRecipientData}
            currData={recipientData}
          />
        </div>
      </div>
      <button onClick={handleClick}>Generate Label</button>
      {rendered ? generateLabel() : null}
    </>
  );
}
