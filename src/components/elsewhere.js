import React from "react";
import { Link } from "react-router-dom";
const Elsewhere = () => {
  return (
    <div className="elsewhere">
      <p>Looking to go elsewhere?</p>
      <div className="dest_foot">
        <Link to="/destinations">
          {" "}
          <p id="destinations">Our destinations {">"}</p>
        </Link>
      </div>
    </div>
  );
};

export default Elsewhere;
