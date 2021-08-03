import React from "react";
import { Link } from "react-router-dom";

import "./SignForm.css";

function SignForm() {
  return (
    <div>
      <form className="SearchForm">
        <input type="text"></input>
        <input type="email"></input>
        <inpit type="checkbox"></inpit>
        <button type="submit"></button>
      </form>
      <p></p>
    </div>
  );
}

export default SearchForm;
