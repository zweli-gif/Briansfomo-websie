
import React from 'react';

const CreateGathering: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">Create Your Gathering</h2>
        <p className="text-navy/60 text-xl italic">"Share your table, your story, your ubuntu."</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Form Column */}
        <div className="lg:col-span-2">
          <section className="bg-white p-6 md:p-10 rounded-3xl border border-[#e5dddc] shadow-sm space-y-8">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-black text-navy/40 uppercase tracking-widest">Event Type</span>
                  <select className="h-14 rounded-xl border-[#e5dddc] focus:ring-primary focus:border-primary px-4 text-base bg-background/30">
                    <option>Come sit with us (Dining)</option>
                    <option>Come walk with us (Outdoors)</option>
                    <option>Come talk with us (Storytelling)</option>
                    <option>Come play with us (Games)</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-black text-navy/40 uppercase tracking-widest">Gathering Title</span>
                  <input className="h-14 rounded-xl border-[#e5dddc] focus:ring-primary focus:border-primary px-4 bg-background/30" placeholder="e.g. Mama’s Famous Chakalaka Night" type="text" />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-black text-navy/40 uppercase tracking-widest">Date</span>
                  <input className="h-14 rounded-xl border-[#e5dddc] focus:ring-primary focus:border-primary px-4 bg-background/30" type="date" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-black text-navy/40 uppercase tracking-widest">Start Time</span>
                  <input className="h-14 rounded-xl border-[#e5dddc] focus:ring-primary focus:border-primary px-4 bg-background/30" type="time" />
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-black text-navy/40 uppercase tracking-widest">Location (Area/Neighbourhood)</span>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-navy/30">location_on</span>
                  <input className="w-full h-14 pl-12 rounded-xl border-[#e5dddc] focus:ring-primary focus:border-primary px-4 bg-background/30" placeholder="e.g. Maboneng, Johannesburg" type="text" />
                </div>
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-black text-navy/40 uppercase tracking-widest">Number of Spots (4-12)</span>
                  <input className="h-14 rounded-xl border-[#e5dddc] focus:ring-primary focus:border-primary px-4 bg-background/30" type="number" min="4" max="12" defaultValue="6" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-black text-navy/40 uppercase tracking-widest">Price per person (ZAR)</span>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-navy/30">R</span>
                    <input className="w-full h-14 pl-10 rounded-xl border-[#e5dddc] focus:ring-primary focus:border-primary px-4 bg-background/30" type="number" defaultValue="250" />
                  </div>
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-black text-navy/40 uppercase tracking-widest">What's the story behind this gathering?</span>
                <textarea className="rounded-xl border-[#e5dddc] focus:ring-primary focus:border-primary p-4 bg-background/30 min-h-[160px]" placeholder="Tell your guests what makes this gathering special, the menu, or the theme..."></textarea>
              </label>

              <div className="space-y-3">
                <span className="text-xs font-black text-navy/40 uppercase tracking-widest">Gathering Photo</span>
                <div className="border-2 border-dashed border-[#e5dddc] rounded-2xl p-12 flex flex-col items-center justify-center gap-4 bg-background/10 hover:bg-primary/5 transition-colors cursor-pointer group">
                  <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl">add_a_photo</span>
                  </div>
                  <div className="text-center">
                    <p className="font-bold">Click to upload or drag and drop</p>
                    <p className="text-sm text-navy/40">High resolution images work best</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <button className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black text-xl rounded-2xl shadow-xl transition-all active:scale-95">
                  Publish Gathering
                </button>
                <p className="flex items-center justify-center gap-2 text-sm text-navy/60 font-medium">
                  <span className="material-symbols-outlined text-lg">verified_user</span>
                  You’ll review and approve each guest before they can pay.
                </p>
              </div>
            </form>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6 lg:sticky lg:top-24">
          <section className="bg-white p-8 rounded-3xl border border-[#e5dddc] shadow-sm text-center space-y-6">
            <h3 className="text-xs font-black text-navy/40 uppercase tracking-widest">Host Profile</h3>
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="size-24 rounded-full border-4 border-primary/20 bg-cover bg-center shadow-lg" style={{ backgroundImage: `url(https://picsum.photos/seed/brian/200/200)` }} />
                <div className="absolute -bottom-1 -right-1 size-8 rounded-full bg-gold border-4 border-white flex items-center justify-center text-white shadow-md">
                  <span className="material-symbols-outlined text-lg">star</span>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-black">Brian M.</h4>
                <p className="text-primary font-bold">Curator since 2023</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy/60 bg-background px-4 py-1.5 rounded-full">
                <span className="material-symbols-outlined text-lg">location_on</span>
                South Africa
              </div>
            </div>
            <p className="italic text-navy/60 leading-relaxed text-sm pt-6 border-t border-background">
              "Gathering people around a table is my way of keeping the spirit of Ubuntu alive in our city."
            </p>
          </section>

          <section className="bg-navy text-white p-8 rounded-3xl shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">info</span>
              <h4 className="text-xl font-bold">Gathering Tip</h4>
            </div>
            <p className="text-white/70 leading-relaxed">
              Gatherings with a specific story or menu description usually fill up 3x faster. Don't be shy to share your passion!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CreateGathering;
