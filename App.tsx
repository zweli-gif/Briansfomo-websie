
import React, { useState } from 'react';
import { Page, Gathering } from './types';
import { GATHERINGS } from './constants';
import { Header } from './components/Header';
import Home from './pages/Home';
import Explore from './pages/Explore';
import EventDetail from './pages/EventDetail';
import SafeExit from './pages/SafeExit';
import CreateGathering from './pages/CreateGathering';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedEvent, setSelectedEvent] = useState<Gathering | null>(null);

  const handleSelectEvent = (event: Gathering) => {
    setSelectedEvent(event);
    setCurrentPage('event-detail');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setPage={setCurrentPage} />;
      case 'explore':
        // Overwriting the previous Explore to integrate handleSelectEvent
        return (
          <div className="max-w-7xl mx-auto px-4 py-20 space-y-12 animate-in fade-in duration-500">
            <div className="text-center space-y-4">
              <h2 className="text-6xl font-black tracking-tighter">Find Your Table</h2>
              <p className="text-xl text-navy/60 font-medium">Intimate gatherings hosted by neighbors like you.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {GATHERINGS.map((g) => (
                <div 
                  key={g.id} 
                  onClick={() => handleSelectEvent(g)}
                  className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden border border-[#e5dddc] hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={g.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={g.title} />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-md text-navy text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                        {g.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-10 space-y-6">
                    <h3 className="text-3xl font-black group-hover:text-primary transition-colors">{g.title}</h3>
                    <div className="flex items-center gap-3">
                      <img src={g.curator.avatar} className="size-8 rounded-full border border-primary/20" alt={g.curator.name} />
                      <p className="text-sm font-bold text-navy/60">Curated by {g.curator.name}</p>
                    </div>
                    <div className="flex justify-between items-center pt-6 border-t border-[#f4f1f0]">
                      <div>
                        <p className="text-xs font-black text-navy/40 uppercase tracking-widest">Price</p>
                        <p className="text-2xl font-black text-primary">R{g.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-black text-navy/40 uppercase tracking-widest">When</p>
                        <p className="font-bold">{g.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'event-detail':
        return selectedEvent ? <EventDetail event={selectedEvent} setPage={setCurrentPage} /> : null;
      case 'safe-exit':
        return <SafeExit />;
      case 'create':
        return <CreateGathering />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/20">
      <Header currentPage={currentPage} setPage={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <footer className="bg-navy text-white/40 py-20 px-4 md:px-20 mt-auto">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <div className="size-8">
                  <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
                  </svg>
                </div>
                <h2 className="text-white font-black text-2xl tracking-tighter">BRIANSFOMO</h2>
              </div>
              <p className="text-xl italic font-medium text-white/60">"Come be with us, Mntase."</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div className="space-y-4">
                <p className="text-xs font-black text-white/20 uppercase tracking-widest">Platform</p>
                <ul className="space-y-2 text-sm font-bold text-white/60">
                  <li><button onClick={() => setCurrentPage('explore')} className="hover:text-primary">Browse Events</button></li>
                  <li><button onClick={() => setCurrentPage('create')} className="hover:text-primary">Become a Curator</button></li>
                  <li><button className="hover:text-primary">About Us</button></li>
                </ul>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-black text-white/20 uppercase tracking-widest">Belonging</p>
                <ul className="space-y-2 text-sm font-bold text-white/60">
                  <li><button onClick={() => setCurrentPage('safe-exit')} className="hover:text-primary">Safe Exit Protocol</button></li>
                  <li><button className="hover:text-primary">Trust & Safety</button></li>
                  <li><button className="hover:text-primary">Community Guidelines</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-black uppercase tracking-widest">
            <p>© 2026 BRIANSFOMO. Built for belonging in South Africa.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
