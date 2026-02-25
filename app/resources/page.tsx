export default function Resources() {
  const resources = [
    { name: "[TBD]", note: "[TBD]", link: "#" },
    { name: "[TBD]", note: "[TBD]", link: "#" },
  ];

  return (
    <>
      <h1 className="page-title">Resources</h1>
      <section className="scioly-section">
        <h2>Stuff I Use</h2>
        <p>
          A running list of tools, references, and links I use often.
        </p>
        <ul className="blog-list">
          {resources.map((resource) => (
            <li key={resource.name} className="blog-entry">
              <div className="project-name">
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  {resource.name}
                </a>
              </div>
              <div className="project-desc">{resource.note}</div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
