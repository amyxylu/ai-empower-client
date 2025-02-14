import React from "react";
import { useLocation } from "react-router-dom";
import ResultsPageCard from "../../components/ResultsPageCard/ResultsPageCard";

function ResultsPage() {
  const location = useLocation();
  const recommendation = location.state?.recommendation;

  console.log(recommendation);

  if (!recommendation) return <p>No recommendations found. Try again.</p>;

  return (
    <section className="results-page">
      <h1 className="results-page__header">
        AI Tool Recommendations for {recommendation.job_title}
      </h1>
      <h2 className="results-page__subheader">
        Based on your goal: <strong>{recommendation.goal}</strong>
      </h2>

      <div className="results-page__list">
        {recommendation.suggestions.map((tool, index) => (
          <ResultsPageCard key={index} tool={tool} />
        ))}
      </div>
    </section>
  );
}

export default ResultsPage;
