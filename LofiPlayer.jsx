import { useState } from 'react';
import { Play, Pause, SkipForward, Music2, ChevronDown } from 'lucide-react';

const tracks = [
  { title: 'Late Night Coffee', artist: 'Lo-Fi Vibes' },
  { title: 'Midnight Brew', artist: 'Chill Beats' },
  { title: 'Dark Roast Dreams', artist: 'Coffee Radio' },
  { title: 'Subuh Sessions', artist: 'Karawang Beats' },
];

export default function LofiPlayer() {
  const [playing, setPlaying] = useState(false);
  const [trackIdx, setTrackIdx] = useState(0);
  const [collapsed, setCollapsed] = useState(false);

  const track = tracks[trackIdx];

  const next = () => setTrackIdx((i) => (i + 1) % tracks.length);

  if (collapsed) {
    return (
      <button
        onClick={() => setCollapsed(false)}
        className="fixed bottom-24 right-6 z-50 w-12 h-12 music-player rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
      >
        <Music2 size={18} className="text-coffee-gold" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 music-player rounded-2xl p-4 w-64 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Music2 size={14} className="text-coffee-gold" />
          <span className="text-coffee-cream/60 text-xs font-medium uppercase tracking-wider">Lo-Fi Radio</span>
        </div>
        <button
          onClick={() => setCollapsed(true)}
          className="text-coffee-cream/30 hover:text-coffee-cream/60 transition-colors"
        >
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Vinyl + track */}
      <div className="flex items-center gap-3 mb-4">
        {/* Vinyl disc */}
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${playing ? 'vinyl-spin' : ''}`}
          style={{
            background: 'conic-gradient(from 0deg, #1A1208, #2C1A0E, #C9952A 15%, #1A1208 30%, #2C1A0E 45%, #C9952A 60%, #1A1208 75%, #2C1A0E 90%, #1A1208)',
          }}
        >
          <div className="w-4 h-4 rounded-full bg-coffee-black border-2 border-coffee-gold/40" />
        </div>

        {/* Track info */}
        <div className="flex-1 min-w-0">
          <p className="text-coffee-cream text-sm font-semibold truncate">{track.title}</p>
          <p className="text-coffee-cream/40 text-xs truncate">{track.artist}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="h-1 rounded-full bg-coffee-gold/15 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              background: 'linear-gradient(90deg, #C9952A, #E8A830)',
              width: playing ? '45%' : '20%',
            }}
          />
        </div>
        <div className="flex justify-between text-coffee-cream/25 text-xs mt-1">
          <span>1:23</span>
          <span>3:45</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={next}
          className="text-coffee-cream/40 hover:text-coffee-cream/70 transition-colors"
        >
          <SkipForward size={16} />
        </button>
        <button
          onClick={() => setPlaying(!playing)}
          className="w-10 h-10 rounded-full btn-gold flex items-center justify-center"
        >
          {playing
            ? <Pause size={16} color="#0A0A0A" />
            : <Play size={16} color="#0A0A0A" className="ml-0.5" />
          }
        </button>
        <button
          onClick={next}
          className="text-coffee-cream/40 hover:text-coffee-cream/70 transition-colors"
        >
          <SkipForward size={16} />
        </button>
      </div>

      {/* Live indicator */}
      <div className="flex items-center justify-center gap-1.5 mt-3">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-coffee-cream/25 text-xs">Streaming Lo-Fi Radio</span>
      </div>
    </div>
  );
}
