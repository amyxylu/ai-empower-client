function GuidePageCard({ guide }) {
  return (
    <div className="guide-card">
      <img className="guide-card__logo" src={guide.logo} alt={guide.toolName} />
      <h1 className="guide-card__header">{guide.name} Guide</h1>
      <p className="guide-card__">{guide.description}</p>

      <h2>Why Use {guide.name}?</h2>
      <p>
        <strong>Problem It Solves:</strong> {guide.problem_solved}
      </p>

      <h3>💡 Real-World Example:</h3>
      <p>{guide.real_world_example}</p>

      <h2>How to Use {guide.name}:</h2>
      <ol>
        {guide.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <a
        href={guide.link}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button">
        Try {guide.name} for Free – No Setup Required!
      </a>

      {guide.resources && guide.resources.length > 0 && (
        <div className="resource-section">
          <h2>📚 Additional Resources</h2>
          <ul>
            {guide.resources.map((resource, index) => (
              <li key={index}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer">
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GuidePageCard;
