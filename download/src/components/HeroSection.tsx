import matchaBowl from "@/assets/matcha-hero-bowl.png";
import matchaCeremonial from "@/assets/matcha-ceremonial.png";

const HeroSection = () => {
  return (
    <section className="section-dark relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-matcha-dark via-matcha-deep to-matcha-dark opacity-90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-32">
        {/* 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
          {/* Left column */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <span className="text-accent text-xs font-sans font-semibold tracking-[0.2em] uppercase">
                Limited Offer
              </span>
              <h3 className="text-matcha-cream font-serif text-2xl mt-2">
                Free Starter Kits
              </h3>
              <p className="text-matcha-white-muted text-sm font-sans mt-3 leading-relaxed max-w-[260px]">
                Begin your matcha journey with our curated starter collection. Everything you need in one box.
              </p>
            </div>

            {/* Small product thumbnails */}
            <div className="flex gap-3">
              {[matchaCeremonial, matchaBowl].map((img, i) => (
                <div
                  key={i}
                  className="w-16 h-16 rounded-xl overflow-hidden border border-matcha-white/10"
                >
                  <img src={img} alt="Product" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Japanese text */}
            <p className="text-matcha-white-muted/40 font-serif text-lg italic tracking-wider">
              抹茶の芸術
            </p>
          </div>

          {/* Center - Hero product */}
          <div className="flex flex-col items-center animate-fade-up-delay-1">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl shadow-matcha-dark/50 border-2 border-matcha-white/10">
                <img
                  src={matchaBowl}
                  alt="Premium Matcha Bowl"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative dots */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full animate-pulse" />
              <div className="absolute bottom-8 left-2 w-2 h-2 bg-accent/60 rounded-full" />
            </div>

            {/* Main headline */}
            <h1 className="editorial-heading text-4xl md:text-6xl lg:text-7xl text-matcha-cream text-center mt-10">
              Best Matcha
              <br />
              <span className="italic">in Town</span>
            </h1>
          </div>

          {/* Right column */}
          <div className="space-y-6 md:text-right animate-fade-up-delay-2">
            <div>
              <span className="text-accent text-xs font-sans font-semibold tracking-[0.2em] uppercase">
                New Arrival
              </span>
              <h3 className="text-matcha-cream font-serif text-2xl mt-2">
                Premium Matcha
              </h3>
              <p className="text-matcha-white-muted text-sm font-sans mt-3 leading-relaxed max-w-[260px] md:ml-auto">
                Stone-ground ceremonial grade matcha sourced from Uji, Kyoto. Pure, vibrant, unforgettable.
              </p>
            </div>

            <p className="text-matcha-white-muted/60 text-sm font-sans">
              30gr · Ceremonial Grade
            </p>

            <div className="md:flex md:justify-end">
              <button className="btn-lime">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
