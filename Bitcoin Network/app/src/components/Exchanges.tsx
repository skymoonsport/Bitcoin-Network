import { ExternalLink, TrendingUp, Globe } from 'lucide-react';
import { exchanges, formatMarketCap } from '@/data/tokens';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Exchanges() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Bitcoin Exchanges</h2>
          <p className="text-muted-foreground mt-1">
            Top platforms for trading Bitcoin native tokens
          </p>
        </div>
        <Button variant="outline" className="border-border">
          View All Exchanges
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exchanges.map((exchange, index) => (
          <div
            key={exchange.id}
            className="card-hover bg-card rounded-xl p-6 border border-border/50 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-lg font-bold">
                  {exchange.name.slice(0, 2)}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{exchange.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs bg-green-500/20 text-green-400 border-green-500/30">
                      Active
                    </Badge>
                  </div>
                </div>
              </div>
              <a
                href={exchange.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {exchange.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-secondary/50 rounded-lg p-3">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                  <TrendingUp className="w-3 h-3" />
                  Volume (24h)
                </div>
                <p className="font-semibold text-foreground">{formatMarketCap(exchange.volume24h)}</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-3">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                  <Globe className="w-3 h-3" />
                  Markets
                </div>
                <p className="font-semibold text-foreground">{exchange.markets}</p>
              </div>
            </div>

            <Button className="w-full btn-secondary">
              Visit Exchange
            </Button>
          </div>
        ))}
      </div>

      {/* Featured Section */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-foreground mb-6">Featured Platforms</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Magic Eden */}
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-2xl font-bold">
                ME
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground">Magic Eden</h4>
                <p className="text-muted-foreground">The largest NFT & Runes marketplace</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-2xl font-bold text-foreground">$1.7B</p>
                <p className="text-xs text-muted-foreground">Annual Volume</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">83%</p>
                <p className="text-xs text-muted-foreground">Market Share</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">850+</p>
                <p className="text-xs text-muted-foreground">Collections</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Runes</Badge>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Ordinals</Badge>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">NFTs</Badge>
            </div>
          </div>

          {/* UniSat */}
          <div className="bg-gradient-to-br from-orange-900/30 to-yellow-900/30 rounded-xl p-6 border border-orange-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-2xl font-bold text-black">
                UN
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground">UniSat</h4>
                <p className="text-muted-foreground">Leading Bitcoin wallet & marketplace</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-2xl font-bold text-foreground">$420M</p>
                <p className="text-xs text-muted-foreground">Annual Volume</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">320+</p>
                <p className="text-xs text-muted-foreground">Markets</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">1M+</p>
                <p className="text-xs text-muted-foreground">Users</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">Wallet</Badge>
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Marketplace</Badge>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Inscribe</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
