import React from "react";
import "./Editor.css";
import EditorPicker from "./EditorPicker";
import { useState } from "react";
import EditorCanvas from "./EditorCanvas";
import { useEffect } from "react";

const Editor = (props) => {
  const [comps, setComps] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  
  useEffect(()=>{
    const comps_present_in_localstorage = JSON.parse(localStorage.getItem('comps_present_in_localstorage')) ? JSON.parse(localStorage.getItem('comps_present_in_localstorage')) : []; 
    setComps(comps_present_in_localstorage);
    setHasLoaded(true);
  },[])

  console.log("comp>>>> ", comps);
  return hasLoaded ? (
    <div className="editor">
      <EditorCanvas comps = {comps} setComps = {setComps} />
      <EditorPicker comps = {comps} setComps = {setComps} />
    </div>
  ) : null;
};

export default Editor;

