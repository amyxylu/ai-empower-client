import React from "react";
import { Link } from "react-router-dom";

function ResultsPageCard({ tool, toolId }) {
  return (
    <article className="results-card">
      <div className="results-card__logo">
        <img
          src={tool.logo_url}
          alt={`${tool.tool} logo`}
          className="results-card__logo-img"
        />
      </div>
      <h2 className="results-card__header">{tool.tool}</h2>
      <p className="results-card__description">{tool.description}</p>
      <div className="results-card__buttons">
        <Link to={`/guide/${toolId}}`} className="results-card__btn">
          Learn More
        </Link>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="results-card__btn">
          Try {tool.tool}
        </a>
      </div>
    </article>
  );
}

export default ResultsPageCard;
