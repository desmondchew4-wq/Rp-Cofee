import { useState } from 'react';
import { menuCategories, menuItems } from '../data/menuData';
import { ShoppingCart } from 'lucide-react';

const SteamLines = () => (
  <div className="absolute bottom-[105%] left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
    <div className="animate-steam1 w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(to top, rgba(245,230,200,0.5), transparent)', filter: 'blur(1.5px)' }} />
    <div className="animate-steam2 w-1.5 h-8 rounded-full" style={{ background: 'linear-gradient(to top, rgba(245,230,200,0.4), transparent)', filter: 'blur(1.5px)' }} />
    <div className="animate-steam3 w-1.5 h-5 rounded-full" style={{ background: 'linear-gradient(to top, rgba(245,230,200,0.3), transparent)', filter: 'blur(1.5px)' }} />
  </div>
);

export default function Menu() {
  const [active, setActive] = useState('Coffee');

  return (
    <section id="menu" className="py-24 relative" style={{ background: '#0A0A0A' }}>
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #C9952A 0px, #C9952A 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #C9952A 0px, #C9952A 1px, transparent 1px, transparent 60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-coffee-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">What We Serve</p>
          <h2 className="font-bebas text-5xl md:text-6xl text-coffee-cream mb-4">Our Menu</h2>
          <div className="section-divider mb-6" />
          <p className="text-coffee-cream/50 max-w-xl mx-auto">
            Setiap menu dibuat dengan bahan premium pilihan. Hover untuk preview minumannya.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat ? 'menu-tab-active' : 'menu-tab-inactive'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Board */}
        <div className="glass rounded-2xl p-8 warm-glow">
          {/* Board header */}
          <div className="flex items-center gap-3 mb-8 pb-5 border-b border-coffee-gold/20">
            <div className="w-3 h-3 rounded-full bg-coffee-gold" />
            <span className="font-bebas text-2xl text-coffee-gold tracking-widest">{active}</span>
            <div className="flex-1 h-px bg-coffee-gold/20" />
            <span className="text-coffee-cream/30 text-xs font-medium uppercase tracking-wider">RP Coffee Menu Board</span>
          </div>

          {/* Items Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {menuItems[active]?.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-coffee-gold/8 border border-transparent hover:border-coffee-gold/20"
              >
                {/* Emoji with steam effect */}
                <div className="relative flex-shrink-0">
                  <SteamLines />
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(201,149,42,0.1)', border: '1px solid rgba(201,149,42,0.15)' }}
                  >
                    {item.emoji}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold text-coffee-cream group-hover:text-coffee-gold transition-colors truncate">
                      {item.name}
                    </p>
                    <span className="text-coffee-gold font-bold text-sm flex-shrink-0">{item.price}</span>
                  </div>
                  <p className="text-coffee-cream/40 text-xs mt-1 line-clamp-1">{item.desc}</p>
                </div>

                {/* Hover cart icon */}
                <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-7 h-7 rounded-full bg-coffee-gold flex items-center justify-center"
                  >
                    <ShoppingCart size={13} color="#0A0A0A" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
