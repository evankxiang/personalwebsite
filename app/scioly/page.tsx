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



  const groups: { event: string; rows: typeof tests }[] = [];
  tests.forEach((test) => {
    const last = groups[groups.length - 1];
    if (last && last.event === test.event) last.rows.push(test);
    else groups.push({ event: test.event, rows: [test] });
  });

  return (
    <>
      <h1 className="page-title">SciOly</h1>

      <section className="scioly-section">
        <p className="scioly-intro">
          Science Olympiad is a team-based STEM competition spanning 23 events, covering every area of science, run at the regional, state, and national level. I competed since 6th grade, qualifying for Nationals twice. Since 8th grade I&apos;ve written exams for invitationals across molecular biology, earth science, and physics. Any linked tests are publicly released; I do not post any exams from sanctioned tournaments (Regionals, States). DM me on Discord (@banarnarsaurus) for errata or questions.
        </p>
      </section>

      <div className="event-groups">
        {groups.map((group) => (
          <div key={group.event} className="g-block">
            <div className="g-head">
              <h2 className="g-name">{group.event}</h2>
              <span className="g-count">
                {group.rows.length} test{group.rows.length > 1 ? "s" : ""}
              </span>
            </div>
            {group.rows.map((row) => (
              <div key={`${row.season}-${row.tournament}`} className="g-row">
                <span className="g-year">{row.season}</span>
                <span className="g-tourn">
                  {row.link ? (
                    <a href={row.link} target="_blank" rel="noopener noreferrer">
                      {row.tournament}
                    </a>
                  ) : (
                    row.tournament
                  )}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
