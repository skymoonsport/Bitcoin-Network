import { TrendingUp, Flame, Clock, Star } from 'lucide-react';
import { allTokens, formatPrice, formatMarketCap } from '@/data/tokens';
import { Badge } from '@/components/ui/badge';

export default function Trending() {
  // Sort by 24h change for trending
  const trendingTokens = [...allTokens]
    .sort((a, b) => b.priceChange24h - a.priceChange24h)
    .slice(0, 5);

  const recentlyAdded = [...allTokens]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  const topVolume = [...allTokens]
    .sort((a, b) => b.volume24h - a.volume24h)
    .slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Top Gainers */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Flame className="w-5 h-5 text-orange-400" />
          <h3 className="text-xl font-bold text-foreground">Top Gainers (24h)</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {trendingTokens.map((token, index) => (
            <div
              key={token.id}
              className="card-hover bg-card rounded-xl p-4 border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-sm font-bold">
                  {token.symbol.slice(0, 2)}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{token.name}</p>
                  <p className="text-xs text-muted-foreground">{token.symbol}</p>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-lg font-bold text-foreground">${formatPrice(token.price)}</p>
                  <p className="text-xs text-muted-foreground">{formatMarketCap(token.marketCap)}</p>
                </div>
                <div className={`flex items-center gap-1 ${token.priceChange24h >= 0 ? 'price-up' : 'price-down'}`}>
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-medium">+{token.priceChange24h.toFixed(2)}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Volume */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-blue-400" />
          <h3 className="text-xl font-bold text-foreground">Top Volume (24h)</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {topVolume.map((token, index) => (
            <div
              key={token.id}
              className="card-hover bg-card rounded-xl p-4 border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-sm font-bold">
                  {token.symbol.slice(0, 2)}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{token.name}</p>
                  <p className="text-xs text-muted-foreground">{token.symbol}</p>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-lg font-bold text-foreground">${formatPrice(token.price)}</p>
                  <p className="text-xs text-muted-foreground">Vol: {formatMarketCap(token.volume24h)}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {token.type}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recently Added */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-green-400" />
          <h3 className="text-xl font-bold text-foreground">Recently Added</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {recentlyAdded.map((token, index) => (
            <div
              key={token.id}
              className="card-hover bg-card rounded-xl p-4 border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-sm font-bold">
                  {token.symbol.slice(0, 2)}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{token.name}</p>
                  <p className="text-xs text-muted-foreground">{token.symbol}</p>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-lg font-bold text-foreground">${formatPrice(token.price)}</p>
                  <p className="text-xs text-muted-foreground">Added: {token.createdAt}</p>
                </div>
                <Badge variant="outline" className="text-xs bg-green-500/20 text-green-400 border-green-500/30">
                  New
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { name: 'BRC-20', count: 6, color: 'blue', description: 'Original Bitcoin tokens' },
          { name: 'Runes', count: 6, color: 'purple', description: 'UTXO-based tokens' },
          { name: 'Alkanes', count: 6, color: 'green', description: 'Smart contract tokens' },
          { name: 'BRC-20 2.0', count: 2, color: 'orange', description: 'EVM-compatible tokens' },
        ].map((category, index) => (
          <div
            key={category.name}
            className="card-hover bg-card rounded-xl p-5 border border-border/50 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`w-12 h-12 rounded-xl bg-${category.color}-500/20 flex items-center justify-center mb-4`}>
              <Star className={`w-6 h-6 text-${category.color}-400`} />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-1">{category.name}</h4>
            <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
            <p className={`text-2xl font-bold text-${category.color}-400`}>{category.count} Tokens</p>
          </div>
        ))}
      </div>
    </div>
  );
}
