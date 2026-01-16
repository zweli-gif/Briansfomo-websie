
import React from 'react';

const SafeExit: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter">Your Right to Leave.</h1>
        <p className="text-2xl text-navy/60 font-medium">"Come be with us, Mntase. And leave when you need to."</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { icon: 'favorite', title: 'Belonging Is a Right', desc: 'Not a reward. If you are here, you belong. Period.' },
          { icon: 'shield', title: 'Sovereign Spaces', desc: 'Curators set the rules, but you control your own safety and peace.' },
          { icon: 'logout', title: 'No Pressure', desc: 'No one should ever feel trapped or obligated to stay if they feel uncomfortable.' },
          { icon: 'verified', title: 'Dignity Over All', desc: 'We value your comfort and psychological safety over social etiquette.' }
        ].map((item, i) => (
          <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-[#e5dddc] shadow-sm space-y-4">
            <span className="material-symbols-outlined text-primary text-4xl">{item.icon}</span>
            <h3 className="text-2xl font-black">{item.title}</h3>
            <p className="text-navy/60 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-navy text-white rounded-[3rem] p-12 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-black">The Safe Exit Phrases</h2>
          <p className="text-white/60">Memorize these. They are your keys to a quiet exit.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4">
            <h4 className="text-primary font-black text-2xl">"Ndilungile, Mntase"</h4>
            <p className="text-lg font-medium">I need a private check-in.</p>
            <p className="text-sm text-white/40 italic">Use this if you feel overwhelmed and need to talk to the host privately.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4">
            <h4 className="text-primary font-black text-2xl">"Yizo, Mntase"</h4>
            <p className="text-lg font-medium">I am leaving now. No questions.</p>
            <p className="text-sm text-white/40 italic">Use this to leave immediately. No explanation is required or asked.</p>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10 italic text-white/60">
          "Belonging includes the right to pause and the right to go. Always."
        </div>
      </section>
    </div>
  );
};

export default SafeExit;
