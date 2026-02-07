import { useState } from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown, Star, ExternalLink } from 'lucide-react';
import { allTokens, formatPrice, formatMarketCap, formatVolume, tokenCategories } from '@/data/tokens';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type SortField = 'rank' | 'name' | 'price' | 'priceChange24h' | 'marketCap' | 'volume24h';
type SortDirection = 'asc' | 'desc';

interface TokenTableProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function TokenTable({ selectedCategory, setSelectedCategory }: TokenTableProps) {
  const [sortField, setSortField] = useState<SortField>('marketCap');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const toggleFavorite = (tokenId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(tokenId)) {
      newFavorites.delete(tokenId);
    } else {
      newFavorites.add(tokenId);
    }
    setFavorites(newFavorites);
  };

  const filteredTokens = selectedCategory === 'all'
    ? allTokens
    : allTokens.filter(token => {
        if (selectedCategory === 'brc20') return token.type === 'BRC-20';
        if (selectedCategory === 'runes') return token.type === 'Runes';
        if (selectedCategory === 'alkanes') return token.type === 'Alkanes';
        if (selectedCategory === 'brc202') return token.type === 'BRC-20 2.0';
        return true;
      });

  const sortedTokens = [...filteredTokens].sort((a, b) => {
    let comparison = 0;
    switch (sortField) {
      case 'rank':
        comparison = a.rank - b.rank;
        break;
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'price':
        comparison = a.price - b.price;
        break;
      case 'priceChange24h':
        comparison = a.priceChange24h - b.priceChange24h;
        break;
      case 'marketCap':
        comparison = a.marketCap - b.marketCap;
        break;
      case 'volume24h':
        comparison = a.volume24h - b.volume24h;
        break;
    }
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return <ArrowUpDown className="w-4 h-4 text-muted-foreground" />;
    return sortDirection === 'asc' ? (
      <ArrowUp className="w-4 h-4 text-primary" />
    ) : (
      <ArrowDown className="w-4 h-4 text-primary" />
    );
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'BRC-20':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Runes':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Alkanes':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'BRC-20 2.0':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  // Generate sparkline path
  const generateSparkline = (isPositive: boolean) => {
    const points = [];
    const width = 100;
    const height = 30;
    const segments = 10;
    
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * width;
      const baseY = isPositive ? height * 0.7 : height * 0.3;
      const variation = Math.sin(i * 0.8) * height * 0.3;
      const y = baseY + variation + (Math.random() - 0.5) * 5;
      points.push(`${x},${Math.max(2, Math.min(height - 2, y))}`);
    }
    
    return `M ${points.join(' L ')}`;
  };

  return (
    <div className="space-y-4">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {tokenCategories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
            className={`rounded-full ${
              selectedCategory === category.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-transparent border-border hover:bg-secondary'
            }`}
          >
            {category.name}
            <span className="ml-2 text-xs opacity-70">({category.count})</span>
          </Button>
        ))}
      </div>

      {/* Token Table */}
      <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full crypto-table">
            <thead>
              <tr className="border-b border-border/50">
                <th className="w-10"></th>
                <th
                  className="cursor-pointer hover:bg-secondary/50 transition-colors"
                  onClick={() => handleSort('rank')}
                >
                  <div className="flex items-center gap-1"># {getSortIcon('rank')}</div>
                </th>
                <th
                  className="cursor-pointer hover:bg-secondary/50 transition-colors"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center gap-1">Token {getSortIcon('name')}</div>
                </th>
                <th
                  className="cursor-pointer hover:bg-secondary/50 transition-colors text-right"
                  onClick={() => handleSort('price')}
                >
                  <div className="flex items-center justify-end gap-1">Price {getSortIcon('price')}</div>
                </th>
                <th
                  className="cursor-pointer hover:bg-secondary/50 transition-colors text-right"
                  onClick={() => handleSort('priceChange24h')}
                >
                  <div className="flex items-center justify-end gap-1">24h % {getSortIcon('priceChange24h')}</div>
                </th>
                <th
                  className="cursor-pointer hover:bg-secondary/50 transition-colors text-right"
                  onClick={() => handleSort('marketCap')}
                >
                  <div className="flex items-center justify-end gap-1">Market Cap {getSortIcon('marketCap')}</div>
                </th>
                <th
                  className="cursor-pointer hover:bg-secondary/50 transition-colors text-right"
                  onClick={() => handleSort('volume24h')}
                >
                  <div className="flex items-center justify-end gap-1">Volume (24h) {getSortIcon('volume24h')}</div>
                </th>
                <th className="text-right">Last 7 Days</th>
                <th className="text-center">Type</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedTokens.map((token, index) => (
                <tr key={token.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <td className="text-center">
                    <button
                      onClick={() => toggleFavorite(token.id)}
                      className="p-1 rounded hover:bg-secondary transition-colors"
                    >
                      <Star
                        className={`w-4 h-4 ${
                          favorites.has(token.id)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-muted-foreground'
                        }`}
                      />
                    </button>
                  </td>
                  <td className="text-muted-foreground">{token.rank}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <img 
                        src={token.logo} 
                        alt={token.symbol}
                        className="w-8 h-8 rounded-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://placehold.co/64x64/1a1a2e/f7931a?text=${token.symbol.slice(0, 2)}`;
                        }}
                      />
                      <div>
                        <p className="font-medium text-foreground">{token.name}</p>
                        <p className="text-xs text-muted-foreground">{token.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-right font-medium">${formatPrice(token.price)}</td>
                  <td className="text-right">
                    <span className={token.priceChange24h >= 0 ? 'price-up' : 'price-down'}>
                      {token.priceChange24h >= 0 ? '+' : ''}
                      {token.priceChange24h.toFixed(2)}%
                    </span>
                  </td>
                  <td className="text-right">{formatMarketCap(token.marketCap)}</td>
                  <td className="text-right">{formatVolume(token.volume24h)}</td>
                  <td className="text-right">
                    <svg width="100" height="30" className="inline-block">
                      <path
                        d={generateSparkline(token.priceChange24h >= 0)}
                        className={`sparkline ${token.priceChange24h >= 0 ? 'sparkline-up' : 'sparkline-down'}`}
                      />
                    </svg>
                  </td>
                  <td className="text-center">
                    <Badge variant="outline" className={`${getTypeBadgeColor(token.type)} text-xs`}>
                      {token.type}
                    </Badge>
                  </td>
                  <td className="text-center">
                    <a
                      href={token.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-sm"
                    >
                      Details
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
