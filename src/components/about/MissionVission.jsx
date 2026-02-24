const missionVision = [
  {
    title: "Our Mission",
    desc: "To deliver stress-free, beautifully designed events that exceed client expectations.",
  },
  {
    title: "Our Vision",
    desc: "To become a trusted and leading event planning brand known for creativity and excellence.",
  },
];

const MissionVision = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {missionVision.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;
