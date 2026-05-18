import { MapPin, Star, Clock, Utensils, ShoppingBag, Bike } from 'lucide-react';

const SteamCup = () => (
  <div className="relative inline-block">
    <div className="text-8xl select-none">☕</div>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 flex gap-2 pointer-events-none">
      <div
        className="animate-steam1 w-2 h-8 rounded-full"
        style={{ background: 'linear-gradient(to top, rgba(245,230,200,0.45), transparent)', filter: 'blur(2px)' }}
      />
      <div
        className="animate-steam2 w-2 h-10 rounded-full"
        style={{ background: 'linear-gradient(to top, rgba(245,230,200,0.35), transparent)', filter: 'blur(2px)' }}
      />
      <div
        className="animate-steam3 w-2 h-7 rounded-full"
        style={{ background: 'linear-gradient(to top, rgba(245,230,200,0.3), transparent)', filter: 'blur(2px)' }}
      />
    </div>
  </div>
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1208 30%, #2C1A0E 60%, #0A0A0A 100%)',
      }}
    >
      {/* Ambient light blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,149,42,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(107,63,36,0.2) 0%, transparent 70%)', filter: 'blur(50px)' }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '256px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24 pb-16">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in-up">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-coffee-cream/80 font-medium">Buka Sekarang</span>
          <span className="text-coffee-gold font-semibold text-sm">• Open Until 4 AM</span>
        </div>

        {/* Headline */}
        <h1
          className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-6"
          style={{ color: '#F5E6C8', textShadow: '2px 4px 20px rgba(0,0,0,0.8)' }}
        >
          Ngopi Sampai{' '}
          <span
            className="font-bebas"
            style={{
              background: 'linear-gradient(135deg, #C9952A, #E8A830, #C9952A)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Subuh?
          </span>
          <br />
          <span className="text-coffee-cream/90">RP Coffee</span>{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #C9952A, #E8A830)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Tempatnya.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-coffee-cream/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Kopi premium, suasana industrial yang cozy, buka hingga dini hari.
          <br className="hidden md:block" />
          Tempatnya nongkrong di Karawang.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#menu"
            className="btn-gold px-8 py-3.5 rounded-full text-base font-bold w-full sm:w-auto"
          >
            Lihat Menu
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-gold px-8 py-3.5 rounded-full text-base font-bold w-full sm:w-auto"
          >
            Order Sekarang
          </a>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-coffee-cream/60 hover:text-coffee-gold transition-colors text-base font-medium"
          >
            <MapPin size={18} />
            Google Maps
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-14">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={16} fill="#E8A830" color="#E8A830" />
              ))}
            </div>
            <span className="text-coffee-cream font-bold text-lg">4.9</span>
            <span className="text-coffee-cream/50 text-sm">(520+ Reviews)</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-coffee-gold/20" />
          <div className="flex items-center gap-5 text-coffee-cream/60 text-sm">
            <span className="flex items-center gap-1.5"><Utensils size={15} className="text-coffee-gold" /> Dine-in</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><ShoppingBag size={15} className="text-coffee-gold" /> Takeaway</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Bike size={15} className="text-coffee-gold" /> Delivery</span>
          </div>
        </div>

        {/* Steam Cup */}
        <div className="flex justify-center animate-float">
          <SteamCup />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0A0A0A)' }}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-coffee-cream/30 text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-coffee-gold/40 to-transparent" />
      </div>
    </section>
  );
}
