import React from "react";
import { Link } from "react-router-dom";

function ResultsPageCard({ tool, toolId }) {
  return (
    <article className="result-card">
      <div className="result-card__logo">
        <img
          src={tool.logo_url}
          alt={`${tool.tool} logo`}
          className="result-card__logo-img"
        />
      </div>
      <h2 className="result-card__header">{tool.tool}</h2>
      <p className="result-card__description">{tool.description}</p>
      <div className="result-card__buttons">
        <Link to={`/guide/${toolId}}`} className="result-card__btn">
          Learn More
        </Link>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="result-card__btn">
          Try {tool.tool}
        </a>
      </div>
    </article>
  );
}

export default ResultsPageCard;
