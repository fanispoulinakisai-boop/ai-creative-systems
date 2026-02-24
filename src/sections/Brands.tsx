const Brands = () => {
  const brands = [
    { name: 'Amazon', logo: 'AMAZON' },
    { name: 'Citi', logo: 'CITI' },
    { name: 'Johnson Controls', logo: 'JOHNSON CONTROLS' },
    { name: 'Cisco', logo: 'CISCO' },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-mint">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center font-display text-xl sm:text-2xl font-bold text-foreground/80 mb-10 tracking-wide">
          15 Years Directing Commercial Work For Teams At
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="font-display text-2xl sm:text-3xl font-bold text-foreground/30 hover:text-foreground/60 transition-colors cursor-default"
            >
              {brand.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
