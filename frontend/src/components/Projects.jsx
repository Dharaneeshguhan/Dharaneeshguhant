const Projects = () => {
    const projects = [
      {
        title: "SafeMate",
        description:
          "SafeMate is a human safety app that enables secure, peer-to-peer communication using ultrasonic waves, Bluetooth, and Wi-Fi. It allows users to send distress signals and share real-time locations even without traditional networks.",
        domain: "App Development using Java",
        techStack: "Java, Firebase, and more",
        link: "#",
      },
      {
        title: "SerenityMeter",
        description:
          "SerenityMeter is an AI-driven mental health app that monitors mood, sleep, and physical activity. It provides real-time insights and interventions to improve mental well-being for individuals and professionals.",
        domain: "App Development using Java",
        techStack: "Java, Firebase, AI, and more",
        link: "#",
      },
    ];
  
    return (
      <section
        id="projects"
        className="w-full bg-gray-50 py-16 px-4 md:px-10 flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
          Projects
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-2xl">
          Innovations in Technology and Leadership
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg p-8 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-6">{project.description}</p>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  Domain
                </h4>
                <p className="text-gray-600 mb-4">{project.domain}</p>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  Tech Stack
                </h4>
                <p className="text-gray-600">{project.techStack}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-orange-400 text-white py-2 px-6 rounded-md text-center font-semibold hover:bg-orange-500 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  