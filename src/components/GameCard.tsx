import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface GameProps {
  title: string;
  price: string;
  imageUrl: string | null;
}

export default function GameCard({ title, price, imageUrl }: GameProps) {
  return (
    <Card className="bg-[#1a1c29] border-none overflow-hidden group cursor-pointer transition-all hover:ring-2 hover:ring-blue-500/50">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl || "https://via.placeholder.com/300x400?text=No+Image"}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute top-2 right-2">
          <Badge className="bg-blue-600/80 backdrop-blur-md">New</Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-white font-bold text-sm line-clamp-1">{title}</h3>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0">
        <span className="text-blue-400 font-bold text-sm">{price}</span>
      </CardFooter>
    </Card>
  );
}
