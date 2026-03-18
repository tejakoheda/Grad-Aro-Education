const Destinations = () => {
  const data = [
    {
      title: "🇦🇺 Study in Australia",
      points: [
        "7 cities ranked in QS Best Student Cities 2024",
        "Up to 4 years post-study work rights",
        "9 universities in QS Top 100",
        "Globally recognized degrees",
      ],
    },
    {
      title: "🇬🇧 Study in the UK",
      points: [
        "London ranked #1 Student City (QS 2025)",
        "679,000+ international students",
        "4 universities in Top 10 globally",
        "2–3 years post-study work (Graduate Route)",
      ],
    },
    {
      title: "🇺🇸 Study in the USA",
      points: [
        "16 universities in QS Top 50 (2025)",
        "4,000+ universities & colleges",
        "Home to global giants like Amazon, Microsoft & Google",
        "Strong career & innovation ecosystem",
      ],
    },
    {
      title: "🇨🇦 Study in Canada",
      points: [
        "3 cities in QS Top 50 Student Cities",
        "Up to 3 years post-study work permit",
        "30+ globally ranked universities",
        "Highly multicultural & welcoming",
      ],
    },
    {
      title: "🇮🇪 Study in Ireland",
      points: [
        "Globally ranked universities with strong research focus",
        "English-speaking country",
        "Up to 2 years post-study work visa",
        "Growing hub for global companies",
      ],
    },
    {
      title: "🇳🇿 Study in New Zealand",
      points: [
        "Universities in top 3% globally",
        "One of the safest countries",
        "Up to 3 years post-study work visa",
        "Friendly & supportive student environment",
      ],
    },
  ];

  return (
    <section className="section container">
      <h2 className="animate">🌏 Popular Study Destinations</h2>

      <div className="grid">
        {data.map((d, i) => (
          <div key={i} className="card animate">
            <h3>{d.title}</h3>
            <ul>
              {d.points.map((p, j) => (
                <li key={j}>• {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
