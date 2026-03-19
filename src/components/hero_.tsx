export function Hero() {
  return (
    <div className="px-10 py-4">
      <div className="w-full h-87.5 bg-[#1a1c29] rounded-xl flex items-center justify-between px-20">
        <h2 className="text-5xl font-bold text-white">Lego Store</h2>
        <div className="bg-red-600 p-4 rounded-lg">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg"
            alt="Lego Logo"
            className="w-32 h-32"
          />
        </div>
      </div>
    </div>
  );
}
