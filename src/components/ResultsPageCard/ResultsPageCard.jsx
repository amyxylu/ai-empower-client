import React from "react";
import "./ResultsPageCard.scss";
import { Link } from "react-router-dom";

function ResultsPageCard({ id }) {
  return (
    <section className="results-contents">
      <p className="results-contents__para">Tool Name:</p>
      <Link className="results-contents__para" to="/guide/:toolId">guide</Link>
      <p className="results-contents__para">Description:</p>
      <p className="results-contents__para">Uses:</p>
    </section>
  );
}

export default ResultsPageCard;
