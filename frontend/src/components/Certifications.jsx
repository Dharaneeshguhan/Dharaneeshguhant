const Certifications = () => {
    const certificates = [
      {
        title: "Beginner in C",
        organization: "Great Learning",
        issueDate: "Jan 2024",
        link: "https://certificate-link.com/figma",
      },
      {
        title: "Mastering DataStructures & Algorithms in C",
        organization: "Udemy",
        issueDate: "Nov 2023",
        link: "https://www.udemy.com/certificate/UC-4446ed7b-5d5a-4a1e-97f6-13720a6baf0b/",
      },
      {
        title: "Java Beginner to Master",
        organization: "Udemy",
        issueDate: "Aug 2024",
        link: "https://certificate-link.com/ai-for-india",
      },
      {
        title: "Developing Chatbots with Azure",
        organization: "LinkedIn",
        issueDate: "Feb 2023",
        link: "https://certificate-link.com/chatbots-azure",
      },
    ];
  
    return (
      <section
        id="certifications"
        className="w-full bg-white py-16 px-4 md:px-10 flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
          Certifications
        </h2>
  
        <div className="overflow-x-auto w-full max-w-6xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-orange-500 text-white text-lg">
                <th className="py-3 px-6">Certificate Name</th>
                <th className="py-3 px-6">Institution</th>
                <th className="py-3 px-6">Date</th>
                <th className="py-3 px-6">Link</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((cert, index) => (
                <tr
                  key={index}
                  className="bg-gray-50 border-b hover:bg-orange-100 transition-all"
                >
                  <td className="py-4 px-6 font-semibold">{cert.title}</td>
                  <td className="py-4 px-6">{cert.organization}</td>
                  <td className="py-4 px-6">{cert.issueDate}</td>
                  <td className="py-4 px-6">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View Certificate
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  };
  
  export default Certifications;
  