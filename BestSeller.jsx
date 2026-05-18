import { bestSellers } from '../data/menuData';
import { ShoppingCart, Flame } from 'lucide-react';

const coffeeColors = [
  { bg: 'rgba(101,60,20,0.25)', border: 'rgba(201,149,42,0.3)', glow: 'rgba(201,149,42,0.15)' },
  { bg: 'rgba(120,80,30,0.2)', border: 'rgba(232,168,48,0.3)', glow: 'rgba(232,168,48,0.15)' },
  { bg: 'rgba(20,60,40,0.25)', border: 'rgba(52,211,153,0.2)', glow: 'rgba(52,211,153,0.08)' },
  { bg: 'rgba(80,50,20,0.25)', border: 'rgba(201,149,42,0.25)', glow: 'rgba(201,149,42,0.1)' },
];

export default function BestSeller() {
  return (
    <section id="bestseller" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #150F05 50%, #0A0A0A 100%)' }}>
      {/* Ambient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,149,42,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <Flame size={16} className="text-coffee-gold" />
            <p className="text-coffee-gold text-sm font-semibold tracking-[0.2em] uppercase">Trending Now</p>
            <Flame size={16} className="text-coffee-gold" />
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl text-coffee-cream mb-4">Best Sellers</h2>
          <div className="section-divider mb-6" />
          <p className="text-coffee-cream/50 max-w-xl mx-auto">
            Menu-menu yang paling dicari pelanggan RP Coffee. Dicoba sekali, pasti ketagihan.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((item, i) => (
            <div
              key={item.name}
              className="card-hover rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: `linear-gradient(135deg, ${coffeeColors[i].bg}, rgba(10,10,10,0.9))`,
                border: `1px solid ${coffeeColors[i].border}`,
                boxShadow: `0 8px 32px ${coffeeColors[i].glow}`,
              }}
            >
              {/* Image area */}
              <div
                className="relative h-52 flex items-center justify-center"
                style={{ background: `radial-gradient(circle at 50% 80%, ${coffeeColors[i].bg}, transparent)` }}
              >
                {/* Tag */}
                <div className="absolute top-3 left-3 bg-coffee-gold text-coffee-black text-xs font-bold px-3 py-1 rounded-full">
                  {item.tag}
                </div>

                {/* Big emoji */}
                <div className="relative">
                  {/* Steam for coffee items */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 flex gap-1.5 mb-1 pointer-events-none">
                    <div className="animate-steam1 w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(to top, rgba(245,230,200,0.4), transparent)', filter: 'blur(1.5px)' }} />
                    <div className="animate-steam2 w-1.5 h-8 rounded-full" style={{ background: 'linear-gradient(to top, rgba(245,230,200,0.3), transparent)', filter: 'blur(1.5px)' }} />
                    <div className="animate-steam3 w-1.5 h-5 rounded-full" style={{ background: 'linear-gradient(to top, rgba(245,230,200,0.25), transparent)', filter: 'blur(1.5px)' }} />
                  </div>
                  <div className="text-7xl animate-float select-none" style={{ animationDelay: `${i * 0.5}s` }}>
                    {item.emoji}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-poppins font-bold text-coffee-cream text-lg mb-1">{item.name}</h3>
                <p className="text-coffee-cream/50 text-xs mb-4 leading-relaxed flex-1">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span
                    className="font-bold text-lg"
                    style={{ background: 'linear-gradient(135deg, #C9952A, #E8A830)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                  >
                    {item.price}
                  </span>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5"
                  >
                    <ShoppingCart size={13} />
                    Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <a
            href="#menu"
            className="btn-outline-gold px-8 py-3 rounded-full text-sm font-semibold inline-block"
          >
            Lihat Semua Menu
          </a>
        </div>
      </div>
    </section>
  );
}
