import { MapPin, Phone, Clock, AtSign } from 'lucide-react';

const info = [
  {
    icon: <Clock size={20} className="text-coffee-gold" />,
    label: 'Jam Buka',
    value: 'Setiap Hari · 14.00 – 04.00 WIB',
  },
  {
    icon: <MapPin size={20} className="text-coffee-gold" />,
    label: 'Lokasi',
    value: 'Jl. Kopi Indah No. 12, Karawang Barat, Jawa Barat',
  },
  {
    icon: <Phone size={20} className="text-coffee-gold" />,
    label: 'WhatsApp',
    value: '+62 812-3456-7890',
    href: 'https://wa.me/6281234567890',
  },
  {
    icon: <AtSign size={20} className="text-coffee-gold" />,
    label: 'Instagram',
    value: '@rpcoffee.karawang',
    href: 'https://instagram.com',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #1A1208 50%, #0A0A0A 100%)' }}>
      {/* Ambient */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,149,42,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-coffee-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Our Story</p>
          <h2 className="font-bebas text-5xl md:text-6xl text-coffee-cream mb-4">Tentang RP Coffee</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Story */}
          <div className="space-y-6">
            <p className="text-coffee-cream/70 text-lg leading-relaxed">
              <span className="text-coffee-gold font-semibold text-xl">RP Coffee</span> hadir sebagai tempat nongkrong cozy di Karawang dengan suasana hangat, kopi premium, dan tempat nyaman buat ngobrol sampai malam.
            </p>
            <p className="text-coffee-cream/60 leading-relaxed">
              Kami percaya bahwa secangkir kopi bukan sekadar minuman — ia adalah pengalaman. Dari biji kopi pilihan single origin hingga racikan signature house blend yang hanya ada di sini, setiap tegukan RP Coffee dirancang untuk menemanimu melewati malam panjang.
            </p>
            <p className="text-coffee-cream/60 leading-relaxed">
              Dengan interior dark industrial yang aesthetic, musik lo-fi mengalun lembut, dan cahaya warm yang bikin betah — RP Coffee adalah rumah keduamu di Karawang.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 pt-2">
              {['Single Origin', 'Specialty Coffee', 'Open Late', 'Cozy Vibes', 'Karawang #1'].map(tag => (
                <span key={tag} className="text-xs font-medium text-coffee-gold border border-coffee-gold/30 rounded-full px-4 py-1.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Info cards */}
          <div className="space-y-4">
            {info.map((item) => (
              <div key={item.label} className="glass rounded-xl p-4 flex items-start gap-4 card-hover">
                <div className="w-10 h-10 rounded-lg bg-coffee-gold/10 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-coffee-cream/50 text-xs font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="text-coffee-cream hover:text-coffee-gold transition-colors font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-coffee-cream font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map embed */}
            <div className="glass rounded-xl overflow-hidden h-48 mt-4">
              <iframe
                title="RP Coffee Location"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1!2d107.3!3d-6.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTgnMDAuMCJTIDEwN8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1"
                style={{ filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.1)', border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
