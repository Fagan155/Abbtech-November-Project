import React from "react";
const Joinus = () => {
  return (
    <div className="combined-body">
      <h2>Join our travel revolution</h2>
      <p id="combined">
        Sign up to stay in the know - hot new travel spots, how we strive to
        <br />
        make the world a better place, and all sorts of surprises.
      </p>
      <div class="combined-input">
        <input
          type="text"
          class="bordered-input"
          id="signupInput"
          placeholder="Email"
        />

        <button class="signup-button">Sign Up</button>
      </div>
    </div>
  );
};

export default Joinus;
