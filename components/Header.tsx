
import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setPage: (page: Page) => void;
  userRole?: 'mntase' | 'curator' | 'admin';
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setPage, userRole = 'mntase' }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5dddc] bg-white/90 backdrop-blur-md px-4 md:px-20 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-2 text-primary cursor-pointer"
          onClick={() => setPage('home')}
        >
          <div className="size-8">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
            </svg>
          </div>
          <h1 className="text-xl font-black leading-tight tracking-tight text-navy">BRIANSFOMO</h1>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-bold text-sm">
          <button onClick={() => setPage('explore')} className={`hover:text-primary transition-colors ${currentPage === 'explore' ? 'text-primary underline decoration-2 underline-offset-8' : ''}`}>Browse Events</button>
          
          {userRole === 'mntase' && (
            <button onClick={() => setPage('booking-status')} className="hover:text-primary transition-colors">My Bookings</button>
          )}
          
          {userRole === 'curator' && (
            <button onClick={() => setPage('curator-dashboard')} className="hover:text-primary transition-colors">Curator Dashboard</button>
          )}

          <div className="relative">
            <div 
              className="size-10 rounded-full border-2 border-primary/20 bg-cover bg-center cursor-pointer hover:border-primary transition-all overflow-hidden" 
              style={{ backgroundImage: `url(https://i.pravatar.cc/100?u=brian)` }}
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="absolute right-0 mt-3 w-56 bg-white border border-[#e5dddc] rounded-2xl shadow-2xl py-2 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                <button onClick={() => { setPage('onboarding'); setShowDropdown(false); }} className="w-full text-left px-4 py-3 text-sm font-bold hover:bg-background flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">person</span> My Profile
                </button>
                <button onClick={() => { setPage('safe-exit'); setShowDropdown(false); }} className="w-full text-left px-4 py-3 text-sm font-bold hover:bg-background flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">door_open</span> Safe Exit & Belonging
                </button>
                <div className="border-t border-[#e5dddc] my-1"></div>
                <button onClick={() => { setPage('login'); setShowDropdown(false); }} className="w-full text-left px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">logout</span> Log Out
                </button>
              </div>
            )}
          </div>
        </nav>

        <button className="md:hidden text-navy" onClick={() => setPage('safe-exit')}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};
