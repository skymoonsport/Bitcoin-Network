import { Bitcoin, BookOpen, Code, ExternalLink, Shield, Zap, Cpu, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const tokenStandards = [
  {
    name: 'BRC-20',
    icon: Bitcoin,
    color: 'blue',
    description: 'The first token standard on Bitcoin using the Ordinals protocol. Enables fungible token creation through JSON inscriptions on satoshis.',
    features: ['Simple JSON inscriptions', 'No smart contracts needed', 'Wide adoption', 'Large ecosystem'],
    website: 'https://brc-20.io',
    launched: 'March 2023',
    creator: 'Domo',
  },
  {
    name: 'Runes',
    icon: Zap,
    color: 'purple',
    description: 'A more efficient token protocol using Bitcoin\'s UTXO model. Reduces blockchain bloat and improves token transfer efficiency.',
    features: ['UTXO-based', 'Efficient transfers', 'Reduced fees', 'Native Bitcoin integration'],
    website: 'https://runesprotocol.com',
    launched: 'April 2024',
    creator: 'Casey Rodarmor',
  },
  {
    name: 'Alkanes',
    icon: Cpu,
    color: 'green',
    description: 'Smart contract platform on Bitcoin using WebAssembly. Enables complex DeFi applications and programmable tokens.',
    features: ['WASM smart contracts', 'Turing complete', 'DeFi capable', 'Post-quantum security'],
    website: 'https://alkanes.xyz',
    launched: 'August 2024',
    creator: 'Alkanes Team',
  },
  {
    name: 'BRC-20 2.0',
    icon: Layers,
    color: 'orange',
    description: 'EVM-compatible upgrade to BRC-20. Brings Ethereum-style smart contracts to Bitcoin with native settlement.',
    features: ['EVM compatible', 'Smart contracts', 'Cross-chain bridges', 'DeFi ready'],
    website: 'https://brc20.io',
    launched: 'September 2025',
    creator: 'Best In Slot & Domo',
  },
];

const resources = [
  {
    title: 'Ordinals Documentation',
    description: 'Learn about the Ordinals protocol that enables NFTs and tokens on Bitcoin.',
    link: 'https://docs.ordinals.com',
    icon: BookOpen,
  },
  {
    title: 'Bitcoin Developer Guide',
    description: 'Official Bitcoin documentation for developers building on the network.',
    link: 'https://developer.bitcoin.org',
    icon: Code,
  },
  {
    title: 'Runes Protocol',
    description: 'Official documentation for the Runes token standard.',
    link: 'https://docs.unisat.io/reference/knowledge/runes',
    icon: Zap,
  },
  {
    title: 'Alkanes Explorer',
    description: 'Explore Alkanes tokens and smart contracts on Bitcoin.',
    link: 'https://ordiscan.com/alkanes',
    icon: Cpu,
  },
];

export default function About() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-1 mb-4">
          <Bitcoin className="w-4 h-4 mr-2" />
          About Bitcoin Network
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Your Gateway to Bitcoin Native Tokens
        </h2>
        <p className="text-lg text-muted-foreground">
          Bitcoin Network is the premier platform for tracking and exploring tokens built on the 
          Bitcoin blockchain. From BRC-20 to Runes, Alkanes to BRC-20 2.0 - we cover the entire 
          ecosystem of Bitcoin native assets.
        </p>
      </div>

      {/* Token Standards */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
          Token Standards on Bitcoin
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tokenStandards.map((standard, index) => {
            const Icon = standard.icon;
            return (
              <div
                key={standard.name}
                className="card-hover bg-card rounded-xl p-6 border border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-${standard.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-7 h-7 text-${standard.color}-400`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-foreground">{standard.name}</h4>
                      <Badge variant="outline" className={`text-xs bg-${standard.color}-500/20 text-${standard.color}-400 border-${standard.color}-500/30`}>
                        {standard.launched}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{standard.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {standard.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-muted-foreground">Creator: </span>
                        <span className="text-foreground font-medium">{standard.creator}</span>
                      </div>
                      <a
                        href={standard.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 text-sm flex items-center gap-1"
                      >
                        Learn more
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Resources */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
          Developer Resources
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <a
                key={resource.title}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover bg-card rounded-xl p-5 border border-border/50 animate-fade-in block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{resource.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                <div className="flex items-center gap-1 text-primary text-sm">
                  Visit
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Security Notice */}
      <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-xl p-6 border border-yellow-500/20">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-yellow-400" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Security First</h4>
            <p className="text-muted-foreground mb-4">
              Always do your own research before investing in any token. Verify contract addresses, 
              check official sources, and never share your private keys. Bitcoin Network provides 
              data for informational purposes only and is not financial advice.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                DYOR
              </Badge>
              <Badge variant="outline" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                Not Financial Advice
              </Badge>
              <Badge variant="outline" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                Verify Contracts
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-foreground mb-6">Supported Platforms</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {['Magic Eden', 'UniSat', 'OKX', 'Binance', 'Gate.io', 'Oyl'].map((partner) => (
            <div
              key={partner}
              className="px-6 py-3 bg-card rounded-lg border border-border/50 text-muted-foreground font-medium"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
