import { reviews } from '../data/menuData';
import { Star, Quote } from 'lucide-react';

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="#E8A830" color="#E8A830" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,149,42,0.4), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-coffee-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Social Proof</p>
          <h2 className="font-bebas text-5xl md:text-6xl text-coffee-cream mb-4">Kata Mereka</h2>
          <div className="section-divider mb-6" />

          {/* Overall rating */}
          <div className="inline-flex items-center gap-4 glass px-8 py-4 rounded-2xl mb-8">
            <div className="text-center">
              <div className="font-bebas text-5xl text-coffee-gold leading-none">4.9</div>
              <StarRating count={5} />
              <p className="text-coffee-cream/40 text-xs mt-1">Google Rating</p>
            </div>
            <div className="w-px h-14 bg-coffee-gold/20" />
            <div className="text-center">
              <div className="font-bebas text-5xl text-coffee-gold leading-none">520+</div>
              <p className="text-coffee-cream/60 text-sm font-medium">Total Reviews</p>
              <p className="text-coffee-cream/40 text-xs">dari berbagai platform</p>
            </div>
          </div>
        </div>

        {/* Marquee Row 1 */}
        <div className="overflow-hidden mb-4">
          <div className="animate-marquee flex gap-4 w-max">
            {[...reviews, ...reviews].map((r, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 review-card rounded-xl p-5 space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-coffee-cream font-semibold text-sm">{r.name}</p>
                    <p className="text-coffee-cream/40 text-xs">{r.handle}</p>
                  </div>
                  <Quote size={20} className="text-coffee-gold/30" />
                </div>
                <StarRating count={r.rating} />
                <p className="text-coffee-cream/65 text-sm leading-relaxed">{r.text}</p>
                <span className="inline-block text-xs text-coffee-gold/60 border border-coffee-gold/20 rounded-full px-2.5 py-0.5">
                  {r.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 — reverse */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 w-max"
            style={{ animation: 'marquee 35s linear infinite reverse' }}
          >
            {[...reviews.slice(3), ...reviews, ...reviews.slice(0, 3)].map((r, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 review-card rounded-xl p-5 space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-coffee-cream font-semibold text-sm">{r.name}</p>
                    <p className="text-coffee-cream/40 text-xs">{r.handle}</p>
                  </div>
                  <Quote size={20} className="text-coffee-gold/30" />
                </div>
                <StarRating count={r.rating} />
                <p className="text-coffee-cream/65 text-sm leading-relaxed">{r.text}</p>
                <span className="inline-block text-xs text-coffee-gold/60 border border-coffee-gold/20 rounded-full px-2.5 py-0.5">
                  {r.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,149,42,0.4), transparent)' }}
      />
    </section>
  );
}
