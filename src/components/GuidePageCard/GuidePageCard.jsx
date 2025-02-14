import "./GuidePageCard.scss";

function GuidePageCard({ guide }) {
  return (
    <article className="guide-card">
      <img className="guide-card__logo" src={guide.logo} alt={guide.toolName} />
      <div className="guide-card__section guide-card__section--orange">
        <p className="guide-card__description">{guide.description}</p>
      </div>
      <div className="guide-card__section">
        <h3 className="guide-card__subheader">Why Use {guide.name}?</h3>
        <p className="guide-card__text">
          <strong>Problem It Solves:</strong> {guide.problem_solved}
        </p>
      </div>

      <div className="guide-card__section">
        <h3 className="guide-card__subheader">💡 Real-World Example:</h3>
        <p className="guide-card__text">{guide.real_world_example}</p>
      </div>

      {/* <h3 className="guide-card__subheader">How to Use {guide.name}:</h3> */}
      {/* <ol>
        {guide.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol> */}

      <a
        href={guide.link}
        target="_blank"
        rel="noopener noreferrer"
        className="guide-card__cta-btn">
        Try {guide.name} for Free! No Setup Required!
      </a>

      {guide.resources && guide.resources.length > 0 && (
        <div className="guide-card__resources">
          <h3 className="guide-card__subheader">📚 Additional Resources</h3>
          <ul className="guide-card__resources-list">
            {guide.resources.map((resource, index) => (
              <li key={index} className="guide-card__resources-item">
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="guide-card__resources-link">
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export default GuidePageCard;
