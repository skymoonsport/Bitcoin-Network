import { TrendingUp, TrendingDown, Activity, DollarSign, BarChart3, PieChart } from 'lucide-react';
import { marketStats } from '@/data/tokens';
import { formatMarketCap } from '@/data/tokens';

export default function MarketStats() {
  const stats = [
    {
      label: 'Total Market Cap',
      value: formatMarketCap(marketStats.totalMarketCap),
      change: '+2.34%',
      isPositive: true,
      icon: DollarSign,
    },
    {
      label: '24h Volume',
      value: formatMarketCap(marketStats.totalVolume24h),
      change: '+5.67%',
      isPositive: true,
      icon: BarChart3,
    },
    {
      label: 'Total Tokens',
      value: marketStats.totalTokens.toString(),
      change: '+3 this week',
      isPositive: true,
      icon: Activity,
    },
    {
      label: 'BTC Dominance',
      value: `${marketStats.btcDominance}%`,
      change: '-0.5%',
      isPositive: false,
      icon: PieChart,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="card-hover bg-card rounded-xl p-5 border border-border/50"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <div className={`flex items-center gap-1 mt-2 text-sm ${stat.isPositive ? 'price-up' : 'price-down'}`}>
                  {stat.isPositive ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
