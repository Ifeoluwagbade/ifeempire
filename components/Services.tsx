import {
  FaShieldAlt,
  FaLaptopCode,
  FaRobot,
  FaCloud,
  FaTools,
  FaChartLine,
} from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="bg-black py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          <div className="bg-zinc-900 rounded-2xl p-8 hover:border hover:border-yellow-500 hover:-translate-y-2 transition duration-300">
            <div className="text-5xl text-yellow-400 mb-6">
              <FaShieldAlt />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Cybersecurity
            </h3>

            <p className="text-gray-400 leading-8">
              Protecting organizations through security assessments,
              vulnerability management, penetration testing and
              cybersecurity consulting.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 hover:border hover:border-yellow-500 hover:-translate-y-2 transition duration-300">
            <div className="text-5xl text-yellow-400 mb-6">
              <FaLaptopCode />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Software Development
            </h3>

            <p className="text-gray-400 leading-8">
              Building secure web applications, enterprise software,
              business automation systems and scalable digital platforms.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 hover:border hover:border-yellow-500 hover:-translate-y-2 transition duration-300">
            <div className="text-5xl text-yellow-400 mb-6">
              <FaRobot />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Artificial Intelligence
            </h3>

            <p className="text-gray-400 leading-8">
              Developing AI-powered business solutions, automation,
              intelligent assistants and data-driven decision systems.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 hover:border hover:border-yellow-500 hover:-translate-y-2 transition duration-300">
            <div className="text-5xl text-yellow-400 mb-6">
              <FaCloud />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Cloud Computing
            </h3>

            <p className="text-gray-400 leading-8">
              Cloud migration, infrastructure management,
              Microsoft Azure, AWS and hybrid cloud solutions.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 hover:border hover:border-yellow-500 hover:-translate-y-2 transition duration-300">
            <div className="text-5xl text-yellow-400 mb-6">
              <FaTools />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              IT Consulting
            </h3>

            <p className="text-gray-400 leading-8">
              Helping businesses adopt modern technology,
              improve efficiency and reduce operational risks.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 hover:border hover:border-yellow-500 hover:-translate-y-2 transition duration-300">
            <div className="text-5xl text-yellow-400 mb-6">
              <FaChartLine />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Digital Transformation
            </h3>

            <p className="text-gray-400 leading-8">
              End-to-end technology strategy, digital innovation,
              automation and business transformation services.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}