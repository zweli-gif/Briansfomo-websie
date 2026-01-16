
import React from 'react';
import { Page } from '../types';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="pb-24">
      {/* Valentine's Day Banner */}
      <div className="bg-primary text-white text-center py-3 px-4 text-sm font-black tracking-widest uppercase">
        Don't spend Valentine's Day alone — <button onClick={() => setPage('explore')} className="underline">Find your table</button>
      </div>

      {/* Hero Section */}
      <section className="px-4 pt-10">
        <div 
          className="relative min-h-[600px] max-w-7xl mx-auto flex flex-col items-center justify-center text-center p-8 rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(26, 42, 58, 0.45) 0%, rgba(231, 107, 85, 0.6) 100%), url(https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200)` }}
        >
          <div className="z-10 space-y-6">
            <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
              End loneliness.<br/>Create belonging.
            </h1>
            <p className="text-white/95 text-xl md:text-2xl font-medium max-w-2xl mx-auto drop-shadow-md">
              Curated gatherings in homes across Johannesburg.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <button 
                onClick={() => setPage('explore')}
                className="bg-white text-navy font-black h-16 px-12 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                Find a Gathering
              </button>
              <button 
                onClick={() => setPage('create')}
                className="bg-navy/80 backdrop-blur-md text-white border border-white/20 font-black h-16 px-12 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                Become a Curator
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - 3 Step Visual */}
      <section className="max-w-7xl mx-auto px-4 pt-24 space-y-16">
        <h2 className="text-center text-4xl md:text-6xl font-black tracking-tight">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { step: '01', title: 'Browse', desc: 'Find an intimate gathering that matches your vibe.', icon: 'search' },
            { step: '02', title: 'Book', desc: 'Apply to join. Curators approve guests to ensure a great vibe.', icon: 'confirmation_number' },
            { step: '03', title: 'Belong', desc: 'Show up, be yourself, and leave as a friend.', icon: 'diversity_3' }
          ].map((item, i) => (
            <div key={i} className="group relative pt-10">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 text-8xl font-black text-navy/5 -z-10">{item.step}</span>
              <div className="bg-white size-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl border border-[#e5dddc] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl text-primary">{item.icon}</span>
              </div>
              <h3 className="text-2xl font-black mb-3">{item.title}</h3>
              <p className="text-navy/60 text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Value Props Section */}
      <section className="max-w-7xl mx-auto px-4 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'No car needed', desc: 'Hosting is about your table and your story, not your garage.', icon: 'commute' },
            { title: 'No property needed', desc: 'Host in any safe, welcoming space. Authenticity is the only asset.', icon: 'home_pin' },
            { title: 'Just your table', desc: 'Meaningful connections happen in the simplest places.', icon: 'restaurant' }
          ].map((item, i) => (
            <div key={i} className="bg-[#fcf8f7] p-10 rounded-[2.5rem] border border-primary/10 space-y-4">
              <span className="material-symbols-outlined text-primary text-4xl">{item.icon}</span>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="text-navy/60 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curator Income Section */}
      <section className="max-w-7xl mx-auto px-4 pt-32">
        <div className="bg-navy rounded-[3rem] p-8 md:p-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 blur-[120px] -z-0"></div>
          <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="flex-1 space-y-8">
              <span className="inline-block bg-primary/20 text-primary border border-primary/30 px-6 py-2 rounded-full text-sm font-black tracking-widest uppercase">Curator Program</span>
              <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">Earn R8,400/mo</h2>
              <p className="text-white/70 text-xl leading-relaxed max-w-lg font-medium">
                Host 6 intimate dinners a month and build a sustainable side income while creating community.
              </p>
              <button 
                onClick={() => setPage('create')}
                className="bg-primary hover:bg-primary/90 text-white font-black h-16 px-12 rounded-2xl shadow-xl transition-transform hover:scale-105 active:scale-95 text-lg"
              >
                Apply to Host Now
              </button>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-square bg-white/5 rounded-[3rem] p-4 border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&q=80&w=800" 
                  alt="Ubuntu table" 
                  className="w-full h-full object-cover rounded-[2.5rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
