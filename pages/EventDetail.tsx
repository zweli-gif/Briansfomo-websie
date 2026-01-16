
import React from 'react';
import { Gathering, Page } from '../types';

interface EventDetailProps {
  event: Gathering;
  setPage: (page: Page) => void;
}

const EventDetail: React.FC<EventDetailProps> = ({ event, setPage }) => {
  return (
    <div className="pb-24 animate-in fade-in duration-500">
      {/* Hero Header */}
      <div className="relative h-[400px] md:h-[500px]">
        <img src={event.image} className="w-full h-full object-cover" alt={event.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>
        <div className="absolute bottom-12 left-0 w-full px-4 md:px-20">
          <div className="max-w-7xl mx-auto space-y-4">
            <span className="bg-primary text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest">{event.type}</span>
            <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight">{event.title}</h1>
            <div className="flex items-center gap-4 text-white/80 font-bold">
              <div className="flex items-center gap-2">
                <img src={event.curator.avatar} className="size-10 rounded-full border-2 border-primary" alt={event.curator.name} />
                <span>Hosted by {event.curator.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-20 pt-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-black">About this Gathering</h2>
            <p className="text-navy/70 text-xl leading-relaxed whitespace-pre-line">{event.description}</p>
          </section>

          <section className="grid grid-cols-2 gap-8 py-10 border-y border-[#e5dddc]">
            <div className="space-y-2">
              <span className="text-xs font-black text-navy/40 uppercase tracking-widest">When</span>
              <p className="text-lg font-bold">{event.date}<br/>{event.time} - {event.endTime || 'Late'}</p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-black text-navy/40 uppercase tracking-widest">Where</span>
              <p className="text-lg font-bold">{event.location}<br/><span className="text-navy/40 text-sm font-medium italic">Address revealed after booking</span></p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-black">Who's coming</h2>
            {event.confirmedGuests.length > 0 ? (
              <div className="flex flex-wrap gap-6">
                {event.confirmedGuests.map((guest, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <img src={guest.avatar} className="size-16 rounded-full border-2 border-background shadow-md" alt={guest.name} />
                    <span className="text-sm font-bold">{guest.name.split(' ')[0]}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-navy/40 font-medium italic">Be the first to join this table.</p>
            )}
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-black">What to expect</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {event.whatsIncluded.map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-background p-4 rounded-2xl">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Column: Booking Card */}
        <div className="relative">
          <div className="sticky top-28 bg-white border border-[#e5dddc] rounded-[2.5rem] shadow-2xl p-8 space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-xs font-black text-navy/40 uppercase tracking-widest">Price</span>
                <p className="text-4xl font-black text-primary">R{event.price}</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-black text-navy/40 uppercase tracking-widest">Availability</span>
                <p className="text-lg font-bold text-navy/60">{event.spotsLeft} spots left</p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <button 
                onClick={() => setPage('book')}
                className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black text-xl rounded-2xl shadow-xl transition-all active:scale-95"
              >
                Apply to Book
              </button>
              <p className="text-center text-sm font-medium text-navy/40 italic">You won't be charged until the Curator approves your application.</p>
            </div>

            <div className="border-t border-background pt-6">
              <div className="bg-sage/5 p-4 rounded-2xl border border-sage/10 flex gap-3">
                <span className="material-symbols-outlined text-sage">verified_user</span>
                <p className="text-sm font-medium text-sage/80 leading-snug">
                  Safe Exit Protocol active for this gathering. <button onClick={() => setPage('safe-exit')} className="underline">Learn more</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
