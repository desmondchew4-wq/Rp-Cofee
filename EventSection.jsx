import { Music, Calendar, Clock } from 'lucide-react';

const events = [
  {
    date: 'Jum\'at, 23 Mei',
    time: '20:00 – 23:00',
    title: 'Live Acoustic Night',
    artist: 'Reza & The Band',
    genre: 'Acoustic · Indie Folk',
    emoji: '🎸',
  },
  {
    date: 'Sabtu, 24 Mei',
    time: '19:00 – 22:00',
    title: 'DJ Lo-Fi Session',
    artist: 'DJ Kopi Malam',
    genre: 'Lo-Fi · Chillhop',
    emoji: '🎧',
  },
  {
    date: 'Minggu, 25 Mei',
    time: '18:00 – 21:00',
    title: 'Jazz Evening',
    artist: 'Karawang Jazz Trio',
    genre: 'Smooth Jazz · Bossa Nova',
    emoji: '🎷',
  },
];

export default function EventSection() {
  return (
    <section id="events" className="py-20 relative" style={{ background: '#0A0A0A' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #C9952A 0, #C9952A 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <Music size={16} className="text-coffee-gold" />
            <p className="text-coffee-gold text-sm font-semibold tracking-[0.2em] uppercase">Live This Week</p>
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl text-coffee-cream mb-4">Live Music Events</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {events.map((event, i) => (
            <div key={i} className="glass rounded-2xl p-6 card-hover space-y-4">
              {/* Emoji */}
              <div className="text-5xl">{event.emoji}</div>

              {/* Date / time */}
              <div className="flex gap-3 flex-wrap">
                <span className="flex items-center gap-1.5 text-coffee-gold/70 text-xs font-medium">
                  <Calendar size={12} />
                  {event.date}
                </span>
                <span className="flex items-center gap-1.5 text-coffee-cream/40 text-xs">
                  <Clock size={12} />
                  {event.time}
                </span>
              </div>

              <div>
                <h3 className="font-poppins font-bold text-coffee-cream text-lg mb-0.5">{event.title}</h3>
                <p className="text-coffee-gold text-sm font-medium">{event.artist}</p>
                <p className="text-coffee-cream/40 text-xs mt-1">{event.genre}</p>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-coffee-cream/40 text-xs">Free Entry</span>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold px-4 py-1.5 rounded-full text-xs font-bold"
                >
                  Reserve Tempat
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
