export default function Resources() {
  const resources = [
    { name: "Computer System", note: "I use two computers, a Mac Pro (M2) as a daily driver and a custom PC (R7 3700X, RTX3070) for any more hardcore computational tasks. Any more computational tasks are offloaded by SSH'ing into the Pitt HTC and utilizing a compute core or by training in Google Collab. ", link: "#" },
    { name: "Note Taking Tools", note: "I've been between a lot of these. As of now, I use an iPad for any notes about subjects like economics or literature, while I use paper for any more computational subjects/math-heavy subjects (e.g. CS, Math, Physics). My favorite pencil is currently the Kuru Toga (Metal Edition) and my favorite pen is the Pentel G2.", link: "#" },
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
