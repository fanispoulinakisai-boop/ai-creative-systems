const Footer = () => {
  return (
    <footer className="relative py-12 bg-foreground text-white/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-white">
              AI Creative Systems
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#plans" className="hover:text-white transition-colors">
              Sessions
            </a>
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-sm text-white/40">
              fanis@futurevideo.media
            </p>
            <p className="text-sm">
              © 2026 AI Creative Systems. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
