import React from "react";
import Text from "./components/Text";
import Button from "./components/Button";
import TableButton from "./components/TableButton";
import { v4 as uuid } from "uuid";

import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import TableChartIcon from "@mui/icons-material/TableChart";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

function Buttons({ item, setComps, comps }) {
  let Y;
  if (item.image === "TextFieldsIcon") {
    Y = <TextFieldsIcon style={{ marginTop: 10, marginLeft: 10 }} />;
  } else if (item.image === "CheckBoxOutlineBlankIcon") {
    Y = <CheckBoxOutlineBlankIcon style={{ marginTop: 10, marginLeft: 10 }} />;
  } else if (item.image === "ArrowDropDownCircleIcon") {
    Y = <ArrowDropDownCircleIcon style={{ marginTop: 10, marginLeft: 10 }} />;
  } else if (item.image === "TableChartIcon") {
    Y = <TableChartIcon style={{ marginTop: 10, marginLeft: 10 }} />;
  }
  return (
    <div>
      <div
        style={{
          height: "auto",
          paddingTop: 25,
          paddingBottom: 25,
          width: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          borderBottom: "1px solid whitesmoke",
        }}
      >
        <div
          onClick={() => {
            let X;
            console.log("Itwm. image", item.image);
            if (item.name === "Text") {
              X = { id: uuid(), type: "Text", pos: { x: 0, y: 0 } };
            } else if (item.name === "Button") {
              X = { id: uuid(), type: "Button", pos: { x: 0, y: 0 } };
            } else if (item.name === "Dropdown") {
              X = { id: uuid(), type: "Dropdown", pos: { x: 0, y: 0 } };
            } else if (item.name === "Table") {
              X = { id: uuid(), type: "Table", pos: { x: 0, y: 0 } };
            }
            setComps([...comps, X]);
            localStorage.setItem(
              "comps_present_in_localstorage",
              JSON.stringify([...comps, X])
            );
          }}
        >
          <div
            style={{
              height: 50,
              width: 50,
              backgroundColor: "white",
              borderRadius: 2,
              boxShadow: "0px 0px 5px gray",
              cursor: "pointer",
            }}
          >
            {Y}
          </div>
        </div>

        <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
          <strong style={{ fontSize: "17px" }}>{item.name}</strong>
          <br />
          <strong style={{ fontSize: "14px", color: "grey" }}>
            {item.description}
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
