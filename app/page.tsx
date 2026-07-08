export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}

      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 bg-black/80 backdrop-blur-md">

        <h1 className="text-2xl font-bold">
          IFEEMPIRE
        </h1>

        <div className="flex gap-8">

          <a href="#" className="hover:text-yellow-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-yellow-400 transition">
            Services
          </a>

          <a href="#" className="hover:text-yellow-400 transition">
            About
          </a>

          <a href="#" className="hover:text-yellow-400 transition">
            Contact
          </a>

        </div>

      </nav>

      {/* Hero Section */}

      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">

        <h1 className="text-7xl md:text-8xl font-extrabold">
          IFEEMPIRE
        </h1>

        <p className="text-3xl mt-8 max-w-5xl">
          Building Businesses. Creating Opportunities. Empowering Africa.
        </p>

        <p className="text-xl text-gray-400 mt-8 max-w-4xl leading-9">
          We build secure digital solutions, intelligent software,
          AI-powered systems and cybersecurity services that help
          businesses grow with confidence.
        </p>

        <div className="flex gap-6 mt-12">

          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-5 rounded-xl text-xl transition">
            Get Started
          </button>

          <button className="border border-white hover:bg-white hover:text-black px-10 py-5 rounded-xl text-xl font-bold transition">
            Learn More
          </button>

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

    </main>
      );
}