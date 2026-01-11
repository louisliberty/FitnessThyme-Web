import { Star, StarHalf } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
}

export function RatingStars({ rating, size = "md", showNumber = false }: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} className={`${sizeClasses[size]} fill-yellow-400 text-yellow-400`} />
        ))}
        {hasHalfStar && (
          <StarHalf className={`${sizeClasses[size]} fill-yellow-400 text-yellow-400`} />
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`empty-${i}`} className={`${sizeClasses[size]} text-muted-foreground/30`} />
        ))}
      </div>
      {showNumber && (
        <span className="font-medium text-foreground">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}
