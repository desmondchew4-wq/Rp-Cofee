import { MapPin, Phone, Clock, AtSign, Music2, Coffee, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="relative pt-20 pb-8 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #150F05 40%, #1A1208 100%)' }}>
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,149,42,0.5), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="md:col-span-1 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coffee-gold to-coffee-amber flex items-center justify-center">
                <Coffee size={20} color="#0A0A0A" strokeWidth={2.5} />
              </div>
              <span className="font-bebas text-2xl tracking-widest text-coffee-cream">
                RP <span className="text-coffee-gold">COFFEE</span>
              </span>
            </div>
            <p className="text-coffee-cream/50 text-sm leading-relaxed">
              Tempat nongkrong cozy di Karawang. Kopi premium, suasana hangat, buka sampai subuh.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-coffee-gold hover:bg-coffee-gold/10 transition-colors"
                title="Instagram"
              >
                <AtSign size={16} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-coffee-gold hover:bg-coffee-gold/10 transition-colors text-base leading-none"
                title="TikTok"
              >
                ♪
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-coffee-gold hover:bg-coffee-gold/10 transition-colors text-base leading-none"
                title="WhatsApp"
              >
                💬
              </a>
              <a
                href="https://linktr.ee"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-coffee-gold hover:bg-coffee-gold/10 transition-colors"
                title="Linktree"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h3 className="font-poppins font-bold text-coffee-cream text-sm uppercase tracking-wider">Informasi</h3>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-coffee-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-coffee-cream/70 text-sm leading-relaxed">Jl. Kopi Indah No. 12</p>
                  <p className="text-coffee-cream/70 text-sm">Karawang Barat, Jawa Barat</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-coffee-gold flex-shrink-0" />
                <a href="https://wa.me/6281234567890" className="text-coffee-cream/70 text-sm hover:text-coffee-gold transition-colors">
                  +62 812-3456-7890
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <Clock size={16} className="text-coffee-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-coffee-cream/70 text-sm">Setiap Hari</p>
                  <p className="text-coffee-gold text-sm font-semibold">14.00 – 04.00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-poppins font-bold text-coffee-cream text-sm uppercase tracking-wider">Navigasi</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'Tentang Kami', href: '#about' },
                { label: 'Menu', href: '#menu' },
                { label: 'Best Seller', href: '#bestseller' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Review', href: '#reviews' },
              ].map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-coffee-cream/60 text-sm hover:text-coffee-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div className="space-y-4">
            <h3 className="font-poppins font-bold text-coffee-cream text-sm uppercase tracking-wider">Temukan Kami</h3>
            <div className="glass rounded-xl overflow-hidden h-44">
              <iframe
                title="RP Coffee Map Footer"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1!2d107.3!3d-6.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTgnMDAuMCJTIDEwN8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1"
                style={{ filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.1)', border: 0 }}
                allowFullScreen
              />
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-coffee-gold text-xs hover:underline"
            >
              <MapPin size={12} />
              Buka di Google Maps
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(201,149,42,0.12)' }}
        >
          <p className="text-coffee-cream/30 text-xs text-center">
            © 2025 RP Coffee · All rights reserved · Karawang, Jawa Barat
          </p>
          <div className="flex items-center gap-2 text-coffee-cream/20 text-xs">
            <Music2 size={11} className="text-coffee-gold/40" />
            <span>Made with ☕ & love</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
