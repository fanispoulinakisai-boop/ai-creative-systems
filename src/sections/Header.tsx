const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand name */}
        <a href="#" className="font-display text-lg font-medium text-foreground">
          Methodic
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm">
          <a href="#plans" className="text-foreground/70 hover:text-foreground transition-colors">
            Sessions
          </a>
          <a href="#work" className="text-foreground/70 hover:text-foreground transition-colors">
            Work
          </a>
          <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
