import React from "react";
import "./NavBar.css";
import DehazeIcon from "@material-ui/icons/Dehaze";

function NavBar() {
  return (
    <div>
      <header className="AppHeader">
        <div className="headerFirst">
          <DehazeIcon />
          <strong>Design Board</strong>
        </div>
        <div className="headerSecond">
          <strong>Zenskar App Builder</strong>
        </div>
        <div className="headerThird">Helloooo... zenskar</div>
      </header>
    </div>
  );
}

export default NavBar;
