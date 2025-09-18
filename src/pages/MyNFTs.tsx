import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, TrendingUp, Clock, Wallet } from 'lucide-react';
import NFTCard from '@/components/ui/nft-card';
import Navigation from '@/components/layout/Navigation';

const MyNFTs = () => {
  // Mock user data - replace with API calls
  const userStats = {
    totalNFTs: 12,
    totalValue: '45.2 ETH',
    activeListings: 3,
    totalRentals: 8,
  };

  const ownedNFTs = [
    {
      id: '1',
      name: 'My Cosmic Art #124',
      image: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=400',
      price: '2.8',
      rentalPrice: '0.12',
      currency: 'ETH',
      collection: 'Personal Collection',
      creator: 'You',
      status: 'listed',
    },
    {
      id: '2',
      name: 'Digital Portrait #89',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
      currency: 'ETH',
      collection: 'Art Collection',
      creator: 'You', 
      status: 'unlisted',
    },
  ];

  const rentedNFTs = [
    {
      id: '3',
      name: 'Borrowed Dreams #256',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400',
      rentalPrice: '0.08',
      currency: 'ETH',
      collection: 'Dream Series',
      creator: 'ArtistX',
      timeLeft: '3d 12h',
      isRented: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
              My Collection
            </h1>
            <p className="text-muted-foreground">
              Manage your NFTs and rental activities
            </p>
          </div>
          <Button className="bg-gradient-primary hover:bg-gradient-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Create Listing
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-card border border-card-border rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total NFTs</p>
                <p className="text-2xl font-bold text-foreground">{userStats.totalNFTs}</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-2xl font-bold text-foreground">{userStats.totalValue}</p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Listings</p>
                <p className="text-2xl font-bold text-foreground">{userStats.activeListings}</p>
              </div>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Badge className="w-6 h-6 bg-accent text-accent-foreground" />
              </div>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Rentals</p>
                <p className="text-2xl font-bold text-foreground">{userStats.totalRentals}</p>
              </div>
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-warning" />
              </div>
            </div>
          </div>
        </div>

        {/* NFT Tabs */}
        <Tabs defaultValue="owned" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="owned">Owned NFTs</TabsTrigger>
            <TabsTrigger value="rented">Rented NFTs</TabsTrigger>
            <TabsTrigger value="listings">My Listings</TabsTrigger>
          </TabsList>

          <TabsContent value="owned" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Your NFT Collection</h2>
              <div className="flex gap-2">
                <Badge variant="outline">
                  {ownedNFTs.length} NFTs
                </Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {ownedNFTs.map((nft) => (
                <div key={nft.id} className="relative">
                  <NFTCard nft={nft} showRentOption={false} />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={nft.status === 'listed' ? 'default' : 'secondary'}
                      className={nft.status === 'listed' ? 'bg-success text-success-foreground' : ''}
                    >
                      {nft.status === 'listed' ? 'Listed' : 'Unlisted'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rented" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Currently Renting</h2>
              <div className="flex gap-2">
                <Badge variant="outline">
                  {rentedNFTs.length} Active Rentals
                </Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {rentedNFTs.map((nft) => (
                <NFTCard key={nft.id} nft={nft} showRentOption={false} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="listings" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Your Active Listings</h2>
              <Button variant="outline">
                Manage All Listings
              </Button>
            </div>
            
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">No active listings</h3>
              <p className="text-muted-foreground mb-4">Start earning by listing your NFTs for sale or rent</p>
              <Button>Create Your First Listing</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MyNFTs;