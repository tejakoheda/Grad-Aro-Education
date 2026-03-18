const WhyAbroad = () => {
  const items = [
    "🌎 Expand your global exposure",
    "🎓 Access world-class education",
    "📚 Choose from diverse courses & specializations",
    "🚀 Boost your career opportunities globally",
    "🤝 Build an international network",
    "💪 Gain independence & confidence",
    "✨ Experience a life-changing journey",
  ];

  return (
    <section className="section container">
      <h2 className="animate">🌟 Why Study Abroad?</h2>

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

export default WhyAbroad;
