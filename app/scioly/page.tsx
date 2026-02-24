export default function SciOly() {
  const tests = [
    {
      event: "Anatomy & Physiology",
      season: "2025",
      title: "Regionals Practice Test 1",
      link: "#",
    },
    {
      event: "Disease Detectives",
      season: "2025",
      title: "Invitational Practice Test",
      link: "#",
    },
    {
      event: "Codebusters",
      season: "2024",
      title: "Cryptanalysis Set",
      link: "#",
    },
  ];

  return (
    <>
      <h1 className="page-title">SciOly</h1>

      <section className="scioly-section">
        <h2>About My SciOly Work</h2>
        <p>
          I use this page to share what I have been working on in Science
          Olympiad, including the events I compete in, how I prepare, and
          resources I have written to help teammates.
        </p>
        <p>
          Update this section with your team role, competition highlights, and
          any event-specific notes you want to showcase.
        </p>
      </section>

      <section className="scioly-section">
        <h2>Tests I&apos;ve Written</h2>
        <div className="scioly-table-wrap">
          <table className="scioly-table">
            <thead>
              <tr>
                <th>Event</th>
                <th>Season</th>
                <th>Test</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {tests.map((test) => (
                <tr key={`${test.event}-${test.title}`}>
                  <td>{test.event}</td>
                  <td>{test.season}</td>
                  <td>{test.title}</td>
                  <td>
                    <a href={test.link} target="_blank" rel="noopener noreferrer">
                      Open
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
