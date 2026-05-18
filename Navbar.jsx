import { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Best Seller', href: '#bestseller' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#footer' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-lg shadow-black/50' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-coffee-gold to-coffee-amber flex items-center justify-center">
            <Coffee size={18} color="#0A0A0A" strokeWidth={2.5} />
          </div>
          <span className="font-bebas text-2xl tracking-widest text-coffee-cream group-hover:text-coffee-gold transition-colors">
            RP <span className="text-coffee-gold">COFFEE</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm font-medium text-coffee-cream/80 hover:text-coffee-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex btn-gold px-5 py-2 rounded-full text-sm font-semibold items-center gap-2"
        >
          Order Sekarang
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-coffee-cream hover:text-coffee-gold transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden glass border-t border-coffee-gold/10 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-coffee-cream/80 hover:text-coffee-gold transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="btn-gold px-5 py-2 rounded-full text-sm font-semibold text-center mt-2"
          >
            Order Sekarang
          </a>
        </div>
      )}
    </header>
  );
}
