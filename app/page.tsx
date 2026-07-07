export default function Home() {

  return (

    <main className="min-h-screen bg-black text-white">

     <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 bg-black/80 backdrop-blur-md z-50">

        <h1 className="text-2xl font-bold">
          IFEEMPIRE
        </h1>

        <div className="flex gap-8">

         <a
  href="#"
  className="hover:text-yellow-400 transition duration-300"
>
  Home
</a>

<a
  href="#"
  className="hover:text-yellow-400 transition duration-300"
>
  Services
</a>

<a
  href="#"
  className="hover:text-yellow-400 transition duration-300"
>
  About
</a>

<a
  href="#"
  className="hover:text-yellow-400 transition duration-300"
>
  Contact
</a>

        </div>

      </nav>
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">

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

    <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-5 rounded-xl text-xl">
      Get Started
    </button>

    <button className="border border-white hover:bg-white hover:text-black px-10 py-5 rounded-xl text-xl font-bold transition">
      Learn More
    </button>

  </div>

</section>

      {/* Your existing hero section stays here */}

    </main>

  );

}