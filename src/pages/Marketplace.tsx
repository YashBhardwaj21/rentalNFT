import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Grid3X3, List } from 'lucide-react';
import NFTCard from '@/components/ui/nft-card';
import Navigation from '@/components/layout/Navigation';

const Marketplace = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Mock NFT data - replace with API call
  const mockNFTs = [
    {
      id: '1',
      name: 'Cosmic Wanderer #342',
      image: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=400',
      price: '2.5',
      rentalPrice: '0.1',
      currency: 'ETH',
      collection: 'Cosmic Collection',
      creator: 'ArtistX',
      timeLeft: '2d 5h',
    },
    {
      id: '2', 
      name: 'Digital Dreams #128',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
      price: '1.8',
      rentalPrice: '0.08',
      currency: 'ETH',
      collection: 'Dreams Gallery',
      creator: 'CryptoArt',
      isRented: true,
    },
    {
      id: '3',
      name: 'Neon Genesis #89',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400',
      price: '3.2',
      rentalPrice: '0.15',
      currency: 'ETH',
      collection: 'Neon Series',
      creator: 'FutureVision',
    },
    {
      id: '4',
      name: 'Abstract Harmony #256',
      image: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=400',
      price: '0.9',
      rentalPrice: '0.05',
      currency: 'ETH',
      collection: 'Harmony Collection',
      creator: 'MinimalArt',
    },
    // Add more mock items...
  ];

  const categories = ['All', 'Art', 'Music', 'Gaming', 'Sports', 'Photography'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            NFT Marketplace
          </h1>
          <p className="text-muted-foreground">
            Discover, collect, and rent unique digital assets
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card border border-card-border rounded-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search NFTs, collections, creators..."
                className="pl-10 bg-input border-border"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    selectedCategory === category 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Sort & View */}
            <div className="flex items-center gap-3">
              <Select defaultValue="recent">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Recently Added</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border border-border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* NFT Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {mockNFTs.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg">
            Load More NFTs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;