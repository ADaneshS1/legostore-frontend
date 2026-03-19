import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GameCard from "./components/GameCard";
import { $api } from "./modules/common/api";

export function App() {
  const { data: products, isLoading } = $api.useQuery("get", "/products");

  if (isLoading || !products) {
    return (
      <div className="min-h-screen bg-[#121420] flex items-center justify-center">
        <h2 className="text-white animate-pulse">Loading products...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121420] font-sans pb-20 text-white">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-6 lg:px-10 mt-12">
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Trending Now
            </h2>
            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <GameCard
                key={product.id}
                title={product.name}
                imageUrl={product.imageUrl}
                price={
                  product.price
                    ? `Rp ${product.price.toLocaleString()}`
                    : "Free"
                }
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-20 py-10 border-t border-slate-800 text-center text-gray-500 text-sm">
        © 2026 KADS Games. All rights reserved
      </footer>
    </div>
  );
}

export default App;
