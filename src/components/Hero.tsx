import { Bitcoin, ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { marketStats } from '@/data/tokens';
import { formatMarketCap } from '@/data/tokens';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1">
                <Bitcoin className="w-3 h-3 mr-1" />
                Bitcoin Native
              </Badge>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-3 py-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                Live Data
              </Badge>
            </div>

            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
                Discover{' '}
                <span className="gradient-text">Bitcoin</span>
                <br />
                Native Tokens
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Track prices, market cap, and trading volume for BRC-20, Runes, Alkanes, 
                and BRC-20 2.0 tokens built on the Bitcoin blockchain.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary text-base px-8 py-3">
                Explore Tokens
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-border text-base px-8 py-3">
                View Exchanges
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <p className="text-3xl font-bold text-foreground">{marketStats.totalTokens}+</p>
                <p className="text-sm text-muted-foreground">Tokens Tracked</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">{formatMarketCap(marketStats.totalMarketCap)}</p>
                <p className="text-sm text-muted-foreground">Total Market Cap</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">6</p>
                <p className="text-sm text-muted-foreground">Exchanges</p>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* BRC-20 Card */}
            <div className="card-hover bg-card rounded-xl p-6 border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <Bitcoin className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">BRC-20</h3>
              <p className="text-sm text-muted-foreground mb-4">
                The original token standard on Bitcoin using Ordinals protocol
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-blue-400 font-medium">6 Tokens</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            {/* Runes Card */}
            <div className="card-hover bg-card rounded-xl p-6 border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Runes</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Efficient fungible tokens using Bitcoin's UTXO model
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-purple-400 font-medium">6 Tokens</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            {/* Alkanes Card */}
            <div className="card-hover bg-card rounded-xl p-6 border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Alkanes</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Smart contracts on Bitcoin with WASM technology
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400 font-medium">6 Tokens</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            {/* BRC-20 2.0 Card */}
            <div className="card-hover bg-card rounded-xl p-6 border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">BRC-20 2.0</h3>
              <p className="text-sm text-muted-foreground mb-4">
                EVM-compatible smart contracts on Bitcoin
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-orange-400 font-medium">2 Tokens</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
