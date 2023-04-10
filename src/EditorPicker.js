import React from "react";
import { useState } from "react";
import JSONDATA from "./DATA.json";
import Buttons from "./Buttons";
import "./EditorPicker.css";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import TableChartIcon from "@mui/icons-material/TableChart";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import SearchIcon from "@mui/icons-material/Search";

const EditorPicker = ({ comps, setComps }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="editor-picker">
      <div className="headerSearch">
        <SearchIcon />
        <input
          className="editorPickerInput"
          type="text"
          placeholder="Search Components"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <div>
        <h3 style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
          Click Icons
        </h3>
      </div>

      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((item, key) => {
        return <Buttons item={item} setComps={setComps} comps={comps} />;
      })}
    </div>
  );
};

export default EditorPicker;
