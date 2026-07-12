export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-950 to-black px-8 pt-24"
    >
      <div className="max-w-5xl text-center">

        <p className="text-yellow-400 uppercase tracking-[0.4em] font-semibold mb-6">
          Welcome to IFEEMPIRE
        </p>

        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">

          Building

          <span className="text-yellow-400">
            {" "}Secure{" "}
          </span>

          Digital Solutions

        </h1>

        <p className="mt-10 text-gray-300 text-2xl leading-10">

          Empowering businesses with cybersecurity,
          software engineering, artificial intelligence,
          cloud technologies and innovative digital transformation.

        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-14">

          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-5 rounded-xl transition">

            Get Started

          </button>

          <button className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-10 py-5 rounded-xl font-bold transition">

            Explore Services

          </button>

        </div>

      </div>
    </section>
  );
}