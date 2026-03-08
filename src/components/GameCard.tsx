interface GameProps {
  title: string;
  genre: string;
  price: string;
  image: string;
}

export default function GameCard({ title, genre, price, image }: GameProps) {
  return (
    <div className="bg-[#24273a] rounded-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-white font-bold text-sm mb-1">{title}</h3>
        <p className="text-gray-400 text-xs mb-2">{genre}</p>
        <p className="text-white text-sm font-semibold">{price}</p>
      </div>
    </div>
  );
}
