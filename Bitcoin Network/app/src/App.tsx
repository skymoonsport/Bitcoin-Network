import { useState } from 'react';
import './App.css';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MarketStats from '@/components/MarketStats';
import TokenTable from '@/components/TokenTable';
import Exchanges from '@/components/Exchanges';
import Trending from '@/components/Trending';
import About from '@/components/About';
import Footer from '@/components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('cryptocurrencies');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const renderContent = () => {
    switch (activeTab) {
      case 'cryptocurrencies':
        return (
          <div className="space-y-8">
            <MarketStats />
            <TokenTable 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory} 
            />
          </div>
        );
      case 'exchanges':
        return <Exchanges />;
      case 'trending':
        return <Trending />;
      case 'about':
        return <About />;
      default:
        return (
          <div className="space-y-8">
            <MarketStats />
            <TokenTable 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory} 
            />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main>
        {activeTab === 'cryptocurrencies' && <Hero />}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderContent()}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
