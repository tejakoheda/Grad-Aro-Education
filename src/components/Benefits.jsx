const Benefits = () => {
  const items = [
    "✅ Meet Top Universities & Discuss Your Study Plans",
    "🎓 Explore Programs, Eligibility & Scholarships",
    "💼 Learn about Part-time Work & Post-Study Opportunities",
    "📝 Apply for 2026 Intakes On the Spot",
    "💰 Get Application Fee Waivers & Exclusive Benefits",
  ];

  return (
    <section className="section container">
      <h2 className="animate">🎯 What’s in it for you?</h2>

      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="card animate">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
