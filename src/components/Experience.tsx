
const Experience = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-bl from-purple-50 to-white" id="experience">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">IT (Commands and technical Support)</h3>
                <p className="text-purple-600">Amusement Parks</p>
              </div>
              <div className="text-gray-500 text-sm">04/2020 - 05/2021</div>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>System Configuration and Support including diagnosing and resolving software and hardware POS issues</li>
              <li>Network Configuration and Troubleshooting CLI Commands</li>
              <li>Powershell scripting and automation</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6">Projects</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-medium">Multi-Category Quiz App with Real-Time (01/2023)</h4>
                <p className="text-gray-600">Dynamic mobile quiz application developed using Flutter</p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-medium">YAZMO E-Commerce Store (04/2023)</h4>
                <p className="text-gray-600">Innovative and fully functional e-commerce platform</p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-medium">ChatBot Assistant (01/2025)</h4>
                <p className="text-gray-600">AI-powered assistant utilizing Python and multiple APIs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
