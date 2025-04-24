
const Skills = () => {
  const skills = [
    "React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS",
    "Git", "Node.js", "Next.js", "SQL", "MongoDB", "REST APIs"
  ];

  return (
    <section className="py-24 px-6 bg-white" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center border border-gray-100"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
