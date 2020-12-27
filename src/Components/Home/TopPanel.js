import React from "react";
import "./TopPanel.css";
import Logo from "../../Assets/klogo.png";

function TopPanel() {
  return (
    <div className="panel">
      <img className="panel__logo" src={Logo} alt="website logo" />
    </div>
  );
}

export default TopPanel;
