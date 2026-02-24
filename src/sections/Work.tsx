import { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';

interface WorkItem {
  id: string;
  title: string;
  type: 'video' | 'image';
  vimeoId?: string;
  image?: string;
  thumbnail: string;
}

const works: WorkItem[] = [
  {
    id: 'copilot',
    title: 'CoPilot Ad Campaign',
    type: 'video',
    vimeoId: '1117095329',
    thumbnail: '/images/copilot-thumb.jpg',
  },
  {
    id: 'healthai',
    title: 'Health AI Platform',
    type: 'image',
    image: '/images/healthai.jpg',
    thumbnail: '/images/healthai.jpg',
  },
  {
    id: 'dub',
    title: 'Dub Finance App Campaign',
    type: 'video',
    vimeoId: '1095877525',
    thumbnail: '/images/dub-thumb.jpg',
  },
  {
    id: 'haircare',
    title: 'Haircare Brand Launch',
    type: 'image',
    image: '/images/haircare.jpg',
    thumbnail: '/images/haircare.jpg',
  },
  {
    id: 'cisco',
    title: 'Port 53 + Cisco Social Ad',
    type: 'video',
    vimeoId: '1167779701',
    thumbnail: '/images/cisco-thumb.jpg',
  },
  {
    id: 'adidas',
    title: 'Adidas Fashion Portrait',
    type: 'image',
    image: '/images/adidas.png',
    thumbnail: '/images/adidas.png',
  },
  {
    id: 'apple',
    title: 'Consumer Tech Film Still',
    type: 'image',
    image: '/images/apple.png',
    thumbnail: '/images/apple.png',
  },
];

const Work = () => {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedWork(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedWork) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedWork]);

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Selected Work
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              What AI Can Do
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed whitespace-nowrap">
            A mix of AI-generated campaigns and traditional commercial work.&nbsp;<br className="hidden sm:block" />This is the production standard we build toward.
          </p>
        </div>

        {/* Work grid - 7 tiles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelectedWork(work)}
              onMouseEnter={() => work.type === 'video' && setHoveredVideo(work.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer bg-white"
            >
              {/* Thumbnail/Image - hidden when video is playing */}
              <img
                src={work.thumbnail}
                alt={work.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${
                  work.type === 'video' && hoveredVideo === work.id ? 'opacity-0' : 'opacity-100'
                }`}
                style={work.id === 'adidas' ? { objectPosition: 'center 25%' } : undefined}
              />

              {/* Video hover autoplay (muted, looping) */}
              {work.type === 'video' && hoveredVideo === work.id && work.vimeoId && (
                <div className="absolute inset-0 z-10 bg-white">
                  <iframe
                    src={`https://player.vimeo.com/video/${work.vimeoId}?autoplay=1&muted=1&loop=1&background=1&title=0&byline=0&portrait=0`}
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title={work.title}
                  />
                </div>
              )}

              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-300 z-20" />

              {/* Play icon for videos */}
              {work.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center z-30">
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 text-foreground fill-foreground ml-1" />
                  </div>
                </div>
              )}

              {/* Title overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                <h3 className="font-display text-lg font-semibold text-white">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedWork(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-foreground/80 backdrop-blur-sm" />

          {/* Modal content */}
          <div
            className="relative z-10 w-full max-w-5xl bg-cream rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
                {selectedWork.title}
              </h3>

              {selectedWork.type === 'video' && selectedWork.vimeoId ? (
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-foreground/5">
                  <iframe
                    src={`https://player.vimeo.com/video/${selectedWork.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title={selectedWork.title}
                  />
                </div>
              ) : selectedWork.type === 'image' && selectedWork.image ? (
                <div className="relative rounded-2xl overflow-hidden bg-foreground/5">
                  <img
                    src={selectedWork.image}
                    alt={selectedWork.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
