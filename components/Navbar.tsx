export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-6">

      <h1 className="text-2xl font-bold tracking-wide">
        IFEEMPIRE
      </h1>

      <div className="hidden md:flex gap-8 text-gray-300">

        <a href="#">Home</a>

        <a href="#">About</a>

        <a href="#">Services</a>

        <a href="#">Contact</a>

      </div>

      <button className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
        Get Started
      </button>

    </nav>
  );
}