export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 bg-black/80 backdrop-blur-md">

      <h1 className="text-2xl font-bold">
        IFEEMPIRE
      </h1>

      <div className="flex gap-8">

        <a href="#home" className="hover:text-yellow-400 transition">
          Home
        </a>

        <a href="#services" className="hover:text-yellow-400 transition">
          Services
        </a>

        <a href="#about" className="hover:text-yellow-400 transition">
          About
        </a>

        <a href="#contact" className="hover:text-yellow-400 transition">
          Contact
        </a>

      </div>

    </nav>
  );
}