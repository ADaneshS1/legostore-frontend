import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import GameCard from "./components/GameCard";

// const games = [
//   {
//     title: "LEGO® Marvel Super Heroes 2",
//     genre: "Action, Open-World",
//     price: "Rp 150.000,00",
//     image: "/path-to-marvel.jpg",
//   },
//   {
//     title: "LEGO® DC Super-Villains",
//     genre: "Adventure, Crime",
//     price: "Rp 150.000,00",
//     image: "/path-to-dc.jpg",
//   },
//   {
//     title: "LEGO® Batman™ 3: Beyond Gotham",
//     genre: "Action, Sci-Fi",
//     price: "Rp 150.000,00",
//     image: "/path-to-batman.jpg",
//   },
// ];

function App() {
  return (
    <div className="min-h-screen bg-[#121420] font-sans pb-20">
      <Navbar />
      <Hero />

      {/* <main className="px-10 mt-10">
        <section className="mb-12">
          <h2 className="text-white text-2xl font-bold mb-6">Trending Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {games.slice(0, 3).map((game, i) => (
              <GameCard key={i} {...game} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-white text-2xl font-bold mb-6">Recommended</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {games.slice(0, 3).map((game, i) => (
              <GameCard key={i} {...game} />
            ))}
          </div>
        </section>
      </main> */}

      <footer className="mt-20 text-center text-gray-500 text-sm">
        © 2026 KADS Games. All rights reserved
      </footer>
    </div>
  );
}

export default App;
