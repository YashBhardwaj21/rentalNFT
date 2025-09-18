import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Shield, TrendingUp, Users, Wallet, Play } from 'lucide-react';
import NFTCard from '@/components/ui/nft-card';
import Navigation from '@/components/layout/Navigation';
import heroImage from '@/assets/hero-nft-marketplace.jpg';

const Index = () => {
  // Featured NFTs data
  const featuredNFTs = [
    {
      id: '1',
      name: 'Ethereal Dreams #001',
      image: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=400',
      price: '3.5',
      rentalPrice: '0.15',
      currency: 'ETH',
      collection: 'Ethereal Collection',
      creator: 'DigitalArtist',
    },
    {
      id: '2',
      name: 'Neon Genesis #256',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
      price: '2.8',
      rentalPrice: '0.12',
      currency: 'ETH',
      collection: 'Genesis Series',
      creator: 'NeonCreator',
    },
    {
      id: '3',
      name: 'Cosmic Voyage #078',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400',
      price: '4.2',
      rentalPrice: '0.18',
      currency: 'ETH',
      collection: 'Cosmic Collection',
      creator: 'SpaceArt',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6 bg-card/50 backdrop-blur-sm border-primary/20">
            🚀 The Future of NFT Ownership
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Rent & Own
            </span>
            <br />
            <span className="text-foreground">Digital Assets</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The first marketplace where you can rent NFTs before you buy. 
            Try before you invest, or earn passive income from your collection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90 text-lg px-8">
              <Link to="/marketplace" className="flex items-center">
                Explore Marketplace
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">RentableNFT</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Revolutionary features that change how you interact with digital assets
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-card-border rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Try Before You Buy</h3>
              <p className="text-muted-foreground">
                Rent NFTs for a fraction of the cost to experience their utility before making a full purchase.
              </p>
            </div>
            
            <div className="bg-card border border-card-border rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Passive Income</h3>
              <p className="text-muted-foreground">
                List your NFTs for rent and earn consistent returns while retaining ownership.
              </p>
            </div>
            
            <div className="bg-card border border-card-border rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure & Trustless</h3>
              <p className="text-muted-foreground">
                Smart contract powered rentals ensure security for both owners and renters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured NFTs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Featured NFTs</h2>
              <p className="text-xl text-muted-foreground">
                Discover trending digital assets available for rent and purchase
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/marketplace">
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredNFTs.map((nft) => (
              <NFTCard key={nft.id} nft={nft} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">NFTs Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">2.5K+</div>
              <div className="text-muted-foreground">Active Rentals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Creators</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-warning mb-2">1.2M+</div>
              <div className="text-muted-foreground">Volume Traded</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-secondary rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your NFT Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already earning and exploring in the NFT rental ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90" asChild>
                <Link to="/register">
                  <Users className="mr-2 w-5 h-5" />
                  Get Started
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/login">
                  <Wallet className="mr-2 w-5 h-5" />
                  Connect Wallet
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
