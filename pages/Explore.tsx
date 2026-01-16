
import React from 'react';
import { GATHERINGS } from '../constants';

const Explore: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState('All');
  const filters = [
    { name: 'All', icon: '' },
    { name: 'Dinners', icon: 'restaurant', color: 'text-primary' },
    { name: 'Walks', icon: 'directions_walk', color: 'text-sage' },
    { name: 'Quiet', icon: 'self_improvement', color: 'text-navy' },
    { name: 'Cooking', icon: 'skillet', color: 'text-gold' },
    { name: 'Storytelling', icon: 'auto_stories', color: 'text-primary' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <div className="space-y-2">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">Find Your Table</h2>
        <p className="text-navy/60 text-xl">Intimate community gatherings across South Africa.</p>
      </div>

      {/* Filters */}
      <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
        {filters.map((f) => (
          <button
            key={f.name}
            onClick={() => setActiveFilter(f.name)}
            className={`flex h-11 shrink-0 items-center gap-2 px-6 rounded-xl border transition-all ${
              activeFilter === f.name 
                ? 'bg-primary text-white border-primary font-bold shadow-md' 
                : 'bg-white border-[#e5dddc] hover:border-primary text-navy font-medium'
            }`}
          >
            {f.icon && <span className={`material-symbols-outlined text-sm ${activeFilter === f.name ? 'text-white' : f.color}`}>{f.icon}</span>}
            <span className="text-sm">{f.name}</span>
          </button>
        ))}
      </div>

      {/* Event Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {GATHERINGS.map((g) => (
          <div key={g.id} className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#e5dddc] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                src={g.image} 
                alt={g.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className={`${g.color} bg-opacity-90 backdrop-blur-sm text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg`}>
                  {g.type}
                </span>
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">{g.title}</h3>
                <div className="flex items-center gap-3">
                  {/* Fixed: Use g.curator.avatar as defined in types.ts */}
                  <img src={g.curator.avatar} className="size-8 rounded-full border border-primary/20" alt={g.curator.name} />
                  <p className="text-sm font-semibold text-navy/60">Curator: {g.curator.name}</p>
                </div>
              </div>

              <div className="space-y-2 text-navy/80 text-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">calendar_today</span>
                  <span>{g.date} • {g.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                  <span>{g.location}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-[#f4f1f0] flex items-center justify-between">
                <p className="text-2xl font-black text-primary">R{g.price}</p>
                <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">group</span>
                  {g.spotsLeft} spots left
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
