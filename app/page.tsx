import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import {
  FaShieldAlt,
  FaLaptopCode,
  FaRobot,
  FaCloud,
  FaTools,
  FaChartLine,
} from "react-icons/fa";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
<Navbar />

      {/* Hero Section */}

     <Hero />

        {/* Trusted By Section */}

      <section className="py-16 border-y border-zinc-800">

        <div className="text-center">

          <p className="text-gray-400 uppercase tracking-[6px] text-sm mb-10">
            Trusted Technologies
          </p>

          <div className="flex flex-wrap justify-center items-center gap-12 text-2xl font-bold text-gray-500">

            <span className="hover:text-yellow-400 transition duration-300">
              Microsoft
            </span>

            <span className="hover:text-yellow-400 transition duration-300">
              AWS
            </span>

            <span className="hover:text-yellow-400 transition duration-300">
              Cisco
            </span>

            <span className="hover:text-yellow-400 transition duration-300">
              Google Cloud
            </span>

            <span className="hover:text-yellow-400 transition duration-300">
              GitHub
            </span>

            <span className="hover:text-yellow-400 transition duration-300">
              Docker
            </span>

          </div>

        </div>

      </section>

    {/* About Section */}

    <section className="bg-zinc-900 py-24 px-8">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-12">
          About IFEEMPIRE
        </h2>

        <p className="text-gray-300 text-xl leading-10 text-center max-w-4xl mx-auto">
          IFEEMPIRE is a technology-driven company committed to building secure,
          innovative and scalable digital solutions for businesses across Africa
          and beyond. We specialize in cybersecurity, software development,
          artificial intelligence, cloud technologies and IT consulting,
          empowering organizations to grow confidently in a rapidly evolving
          digital world.
        </p>

      </div>

    </section>
       
    {/* Services Section */}
<Services />

{/* Why Choose Us */}
<WhyChooseUs />

{/* Statistics Section */}

<section className="bg-black py-24 px-8">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-center mb-16">
      Our Impact
    </h2>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

      <div className="bg-zinc-900 rounded-2xl p-10 hover:scale-105 transition">
        <h3 className="text-6xl font-extrabold text-yellow-400">
          50+
        </h3>

        <p className="mt-4 text-gray-400 text-lg">
          Projects Delivered
        </p>
      </div>

      <div className="bg-zinc-900 rounded-2xl p-10 hover:scale-105 transition">
        <h3 className="text-6xl font-extrabold text-yellow-400">
          99.9%
        </h3>

        <p className="mt-4 text-gray-400 text-lg">
          Secure Uptime
        </p>
      </div>

      <div className="bg-zinc-900 rounded-2xl p-10 hover:scale-105 transition">
        <h3 className="text-6xl font-extrabold text-yellow-400">
          24/7
        </h3>

        <p className="mt-4 text-gray-400 text-lg">
          Client Support
        </p>
      </div>

      <div className="bg-zinc-900 rounded-2xl p-10 hover:scale-105 transition">
        <h3 className="text-6xl font-extrabold text-yellow-400">
          Africa
        </h3>

        <p className="mt-4 text-gray-400 text-lg">
          Our First Market
        </p>
      </div>

    </div>

  </div>

</section>
{/* Featured Projects */}

<section className="bg-zinc-900 py-24 px-8">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-center mb-6">
      Featured Projects
    </h2>

    <p className="text-center text-gray-400 text-xl mb-16 max-w-3xl mx-auto">
      Examples of the kinds of secure and innovative solutions
      IFEEMPIRE is building.
    </p>

    <div className="grid md:grid-cols-2 gap-10">

      <div className="bg-black rounded-2xl p-8 hover:scale-105 transition duration-300">
        <h3 className="text-3xl font-bold mb-4">
          🔐 Secure Banking Dashboard
        </h3>

        <p className="text-gray-400 leading-8">
          A modern dashboard designed with strong authentication,
          secure transactions and enterprise-level security principles.
        </p>

        <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition">
          Coming Soon
        </button>

      </div>

      <div className="bg-black rounded-2xl p-8 hover:scale-105 transition duration-300">
        <h3 className="text-3xl font-bold mb-4">
          🤖 AI Business Assistant
        </h3>

        <p className="text-gray-400 leading-8">
          An intelligent assistant that helps businesses automate
          customer support, reporting and daily operations.
        </p>

        <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition">
          Coming Soon
        </button>

      </div>

      <div className="bg-black rounded-2xl p-8 hover:scale-105 transition duration-300">
        <h3 className="text-3xl font-bold mb-4">
          📊 Business Analytics Platform
        </h3>

        <p className="text-gray-400 leading-8">
          A platform that transforms business data into actionable
          insights using modern dashboards and AI.
        </p>

        <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition">
          Coming Soon
        </button>

      </div>

      <div className="bg-black rounded-2xl p-8 hover:scale-105 transition duration-300">
        <h3 className="text-3xl font-bold mb-4">
          🌐 Enterprise Corporate Website
        </h3>

        <p className="text-gray-400 leading-8">
          Premium corporate websites engineered for performance,
          accessibility, security and business growth.
        </p>

        <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition">
          Coming Soon
        </button>

      </div>

    </div>

  </div>

</section>
{/* Contact Section */}

<section className="bg-black py-24 px-8">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold text-center mb-6">
      Contact Us
    </h2>

    <p className="text-center text-gray-400 text-xl mb-16">
      We'd love to hear from you. Let's build something amazing together.
    </p>

    <div className="grid md:grid-cols-2 gap-16">

      {/* Contact Details */}

      <div>

        <h3 className="text-3xl font-bold mb-8">
          Get In Touch
        </h3>

        <div className="space-y-6 text-xl">

          <p>
            📧 info@ifeempire.com
          </p>

          <p>
            📞 +234 915 5021 091
          </p>

          <p>
            📍 Lagos, Nigeria
          </p>

          <p>
            🌍 Serving clients across Africa and beyond
          </p>

        </div>

      </div>

      {/* Contact Form */}

      <div className="space-y-6">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
        />

        <textarea
          placeholder="Your Message"
          rows={6}
          className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
        />

        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition">
          Send Message
        </button>

      </div>

    </div>

  </div>

</section>
{/* Footer */}

<footer className="bg-zinc-950 border-t border-zinc-800 py-16 px-8">

  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

    <div>

      <h2 className="text-3xl font-bold text-yellow-400 mb-6">
        IFEEMPIRE
      </h2>

      <p className="text-gray-400 leading-8">
        Building secure digital solutions,
        empowering businesses,
        and shaping Africa's technological future.
      </p>

    </div>

    <div>

      <h3 className="text-xl font-bold mb-5">
        Company
      </h3>

      <ul className="space-y-3 text-gray-400">

        <li>About</li>

        <li>Services</li>

        <li>Projects</li>

        <li>Contact</li>

      </ul>

    </div>

    <div>

      <h3 className="text-xl font-bold mb-5">
        Services
      </h3>

      <ul className="space-y-3 text-gray-400">

        <li>Cybersecurity</li>

        <li>Software Development</li>

        <li>Artificial Intelligence</li>

        <li>Cloud Solutions</li>

      </ul>

    </div>

    <div>

      <h3 className="text-xl font-bold mb-5">
        Follow Us
      </h3>

      <ul className="space-y-3 text-gray-400">

        <li>LinkedIn</li>

        <li>GitHub</li>

        <li>X (Twitter)</li>

        <li>Facebook</li>

      </ul>

    </div>

  </div>

  <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-gray-500">

    © 2026 IFEEMPIRE. All Rights Reserved.

  </div>

</footer>
    </main>
      );
}