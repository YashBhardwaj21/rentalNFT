import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Heart, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NFTCardProps {
  nft: {
    id: string;
    name: string;
    image: string;
    price?: string;
    currency?: string;
    timeLeft?: string;
    isRented?: boolean;
    rentalPrice?: string;
    collection?: string;
    creator?: string;
  };
  className?: string;
  showRentOption?: boolean;
}

const NFTCard = ({ nft, className, showRentOption = true }: NFTCardProps) => {
  return (
    <Card className={cn(
      "group overflow-hidden border-card-border bg-card hover:shadow-card transition-all duration-300 hover:scale-[1.02]",
      className
    )}>
      {/* NFT Image */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={nft.image} 
          alt={nft.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Status Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {nft.isRented && (
            <Badge variant="secondary" className="bg-warning text-warning-foreground">
              Rented
            </Badge>
          )}
          {nft.timeLeft && (
            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
              <Clock className="w-3 h-3 mr-1" />
              {nft.timeLeft}
            </Badge>
          )}
        </div>

        {/* Heart Icon */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          <Heart className="w-4 h-4" />
        </Button>

        {/* View Details Overlay */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="outline" size="sm">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Details
          </Button>
        </div>
      </div>

      {/* NFT Info */}
      <div className="p-4 space-y-3">
        {/* Collection & Creator */}
        <div className="text-xs text-muted-foreground">
          {nft.collection && <span>{nft.collection}</span>}
          {nft.creator && nft.collection && <span className="mx-2">•</span>}
          {nft.creator && <span>by {nft.creator}</span>}
        </div>

        {/* NFT Name */}
        <h3 className="font-semibold text-foreground truncate">{nft.name}</h3>

        {/* Pricing */}
        <div className="flex items-center justify-between">
          {nft.price && (
            <div className="text-sm">
              <span className="text-muted-foreground">Price: </span>
              <span className="font-semibold text-primary">
                {nft.price} {nft.currency || 'ETH'}
              </span>
            </div>
          )}
          {nft.rentalPrice && showRentOption && (
            <div className="text-sm">
              <span className="text-muted-foreground">Rent: </span>
              <span className="font-semibold text-accent">
                {nft.rentalPrice} {nft.currency || 'ETH'}/day
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          {nft.price && (
            <Button size="sm" className="flex-1">
              Buy Now
            </Button>
          )}
          {nft.rentalPrice && showRentOption && (
            <Button variant="outline" size="sm" className="flex-1">
              Rent
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default NFTCard;