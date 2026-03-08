export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-[#121420] text-white">
      <div className="flex items-center gap-12">
        <h1 className="text-2xl font-bold text-blue-500 leading-none">
          Lego <br /> <span className="text-blue-600">Store</span>
        </h1>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-blue-400">
            Games
          </a>
          <a href="#" className="hover:text-blue-400">
            DLC
          </a>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="font-semibold hover:text-blue-400">Log In</button>
      </div>
    </nav>
  );
}
