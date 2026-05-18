import { Camera } from 'lucide-react';

// Using Unsplash for coffee/cafe photos
const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    alt: 'Coffee cup close up',
    label: 'Premium Coffee',
    size: 'large',
  },
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80',
    alt: 'Cafe interior',
    label: 'Cozy Interior',
    size: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=80',
    alt: 'Barista brewing',
    label: 'Craft Brewing',
    size: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
    alt: 'Latte art',
    label: 'Latte Art',
    size: 'medium',
  },
  {
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&q=80',
    alt: 'Cafe at night',
    label: 'Night Vibes',
    size: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80',
    alt: 'Coffee beans',
    label: 'Premium Beans',
    size: 'medium',
  },
  {
    src: 'https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=400&q=80',
    alt: 'Cafe ambiance',
    label: 'Dark Ambiance',
    size: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?w=400&q=80',
    alt: 'Coffee flat lay',
    label: 'Aesthetic',
    size: 'small',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative" style={{ background: 'linear-gradient(180deg, #0A0A0A, #1A1208, #0A0A0A)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <Camera size={16} className="text-coffee-gold" />
            <p className="text-coffee-gold text-sm font-semibold tracking-[0.2em] uppercase">Instagram Worthy</p>
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl text-coffee-cream mb-4">Gallery</h2>
          <div className="section-divider mb-6" />
          <p className="text-coffee-cream/50 max-w-xl mx-auto">
            Setiap sudut RP Coffee layak dijadikan konten. Tag kami <span className="text-coffee-gold">@rpcoffee.karawang</span>
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {/* Col 1 */}
          <div className="flex flex-col gap-3">
            <div className="gallery-item aspect-[4/5]">
              <img src={galleryItems[1].src} alt={galleryItems[1].alt} />
              <div className="gallery-overlay" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-medium opacity-0 group-hover:opacity-100">{galleryItems[1].label}</div>
            </div>
            <div className="gallery-item aspect-square">
              <img src={galleryItems[4].src} alt={galleryItems[4].alt} />
              <div className="gallery-overlay" />
            </div>
          </div>

          {/* Col 2 — tall */}
          <div className="flex flex-col gap-3">
            <div className="gallery-item aspect-[3/4]" style={{ height: '340px' }}>
              <img src={galleryItems[0].src} alt={galleryItems[0].alt} />
              <div className="gallery-overlay" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-sm font-semibold">{galleryItems[0].label}</span>
              </div>
            </div>
            <div className="gallery-item aspect-square">
              <img src={galleryItems[7].src} alt={galleryItems[7].alt} />
              <div className="gallery-overlay" />
            </div>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-3">
            <div className="gallery-item aspect-square">
              <img src={galleryItems[2].src} alt={galleryItems[2].alt} />
              <div className="gallery-overlay" />
            </div>
            <div className="gallery-item aspect-[4/5]">
              <img src={galleryItems[5].src} alt={galleryItems[5].alt} />
              <div className="gallery-overlay" />
            </div>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-3">
            <div className="gallery-item aspect-[3/4]" style={{ height: '300px' }}>
              <img src={galleryItems[3].src} alt={galleryItems[3].alt} />
              <div className="gallery-overlay" />
            </div>
            <div className="gallery-item aspect-square">
              <img src={galleryItems[6].src} alt={galleryItems[6].alt} />
              <div className="gallery-overlay" />
            </div>
          </div>
        </div>

        {/* IG CTA */}
        <div className="text-center mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 btn-outline-gold px-8 py-3 rounded-full text-sm font-semibold"
          >
            <span>📸</span>
            Lihat di Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
