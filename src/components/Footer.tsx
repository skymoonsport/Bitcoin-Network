import { Bitcoin, Github, Twitter, MessageCircle } from 'lucide-react';

const footerLinks = {
  products: [
    { label: 'Token Tracker', href: '#' },
    { label: 'Exchange List', href: '#' },
    { label: 'Price Charts', href: '#' },
    { label: 'API', href: '#' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'BRC-20 Guide', href: '#' },
    { label: 'Runes Guide', href: '#' },
    { label: 'Alkanes Guide', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
  social: [
    { label: 'Twitter', icon: Twitter, href: '#' },
    { label: 'Discord', icon: MessageCircle, href: '#' },
    { label: 'GitHub', icon: Github, href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f7931a] to-[#ffd700] flex items-center justify-center">
                <Bitcoin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-lg font-bold gradient-text">Bitcoin Network</h3>
                <p className="text-xs text-muted-foreground">Bitcoin Native Tokens</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Your comprehensive source for Bitcoin native tokens including BRC-20, 
              Runes, Alkanes, and BRC-20 2.0. Track prices, market cap, and trading 
              volume in real-time.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Bitcoin Network. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
