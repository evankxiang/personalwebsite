export default function SciOly() {
  const tests = [
    {
      season: "2021",
      tournament: "Lexington Invitational",
      event: "Meteorology",
      role: "Writer/ES",
      link: "",
    },
    {
      season: "2022",
      tournament: "Boyceville Invitational",
      event: "Meteorology",
      role: "Writer/ES",
      link: "",
    },
    {
      season: "2022",
      tournament: "Raymond Park Invitational",
      event: "Dynamic Planet",
      role: "Writer/ES",
      link: "",
    },
    {
      season: "2022",
      tournament: "UC Davis/Aggie Invitational",
      event: "Meteorology",
      role: "Co-Writer",
      link: "",
    },
    {
      season: "2022",
      tournament: "UC Davis/Aggie Invitational",
      event: "Storm the Castle",
      role: "ES",
      link: "",
    },
    {
      season: "2022",
      tournament: "Sierra Vista Middle School Invitational",
      event: "Meteorology",
      role: "Co-Writer",
      link: "",
    },
    {
      season: "2022",
      tournament: "Kennedy Middle School Invitational",
      event: "Meteorology",
      role: "Co-Writer",
      link: "",
    },
    {
      season: "2022",
      tournament: "Lexington Invitational",
      event: "Meteorology",
      role: "Writer/ES",
      link: "",
    },
    {
      season: "2023",
      tournament: "Boyceville Invitational",
      event: "Sounds of Music",
      role: "Writer/ES",
      link: "",
    },
    {
      season: "2023",
      tournament: "Rickards Invitational",
      event: "Meteorology",
      role: "Writer/ES",
      link: "",
    },
    {
      season: "2023",
      tournament: "Rickards Invitational",
      event: "Experimental Design",
      role: "Writer/ES",
      link: "",
    },
    {
      season: "2023",
      tournament: "Dodgen Invitational",
      event: "Meteorology",
      role: "Writer/ES",
      link: "",
    },
    {
      season: "2023",
      tournament: "Virginia Tech Invitational",
      event: "Experimental Design",
      role: "Writer/ES",
      link: "",
    },
    {
      season: "2023",
      tournament: "Lexington Invitational",
      event: "Meteorology",
      role: "Writer/ES",
      link: "",
    },
    {
      season: "2024",
      tournament: "Rickards Invitational",
      event: "Experimental Design",
      role: "Writer/ES",
      link: "",
    },
    {
      season: "2024",
      tournament: "Boyceville Invitational",
      event: "Meteorology",
      role: "Writer/ES",
      link: "",
    },
    {
      season: "2024",
      tournament: "GullSO Invitational",
      event: "Experimental Design",
      role: "Writer/ES",
      link: "",
    },
    {
      season: "2024",
      tournament: "Sierra Vista Invitational",
      event: "Meteorology",
      role: "Writer",
      link: "",
    },
    {
      season: "2024",
      tournament: "SciOly Event Challenges",
      event: "Anatomy and Physiology",
      role: "Writer",
      link: "",
    },
    {
      season: "2024",
      tournament: "Rickards Invitational",
      event: "Microbe Mission",
      role: "Writer",
      link: "",
    },
    {
      season: "2024",
      tournament: "GullSO Invitational",
      event: "Microbe Mission",
      role: "Writer",
      link: "",
    },
    {
      season: "2024",
      tournament: "Mason Invitational",
      event: "Microbe Mission",
      role: "Writer",
      link: "",
    },
    {
      season: "2024",
      tournament: "UMass Amherst Invitational",
      event: "Microbe Mission",
      role: "Writer",
      link: "",
    },
  ].sort((a, b) => {
    const eventCompare = a.event.localeCompare(b.event);
    if (eventCompare !== 0) return eventCompare;
    const seasonCompare = a.season.localeCompare(b.season);
    if (seasonCompare !== 0) return seasonCompare;
    return a.tournament.localeCompare(b.tournament);
  });

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
                <th>Season</th>
                <th>Tournament</th>
                <th>Event</th>
                <th>Role</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {tests.map((test) => (
                <tr key={`${test.season}-${test.tournament}-${test.event}`}>
                  <td>{test.season}</td>
                  <td>{test.tournament}</td>
                  <td>{test.event}</td>
                  <td>{test.role}</td>
                  <td>
                    {test.link ? (
                      <a href={test.link} target="_blank" rel="noopener noreferrer">
                        Open
                      </a>
                    ) : (
                      <span>TBD</span>
                    )}
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
