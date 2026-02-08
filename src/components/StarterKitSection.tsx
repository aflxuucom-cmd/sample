import starterKit from "@/assets/matcha-starter-kit.png";
import matchaWhisk from "@/assets/matcha-whisk.png";
import matchaMug from "@/assets/matcha-mug.png";
import matchaCeremonial from "@/assets/matcha-ceremonial.png";

const callouts = [
  { label: "Bamboo Whisk", desc: "Handcrafted chasen for the perfect froth", img: matchaWhisk },
  { label: "Ceramic Mug", desc: "Artisan-made, heat-retaining stoneware", img: matchaMug },
  { label: "Matcha Powder", desc: "30g ceremonial grade, stone-ground", img: matchaCeremonial },
];

const StarterKitSection = () => {
  return (
    <section className="section-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-accent-foreground/60 text-xs font-sans font-semibold tracking-[0.2em] uppercase">
              Everything You Need
            </span>
            <h2 className="editorial-heading text-4xl md:text-5xl text-foreground mt-3">
              Starter Kit
            </h2>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-6xl md:text-8xl font-serif font-bold text-foreground">$25</span>
            <span className="text-muted-foreground text-sm font-sans">/ kit</span>
          </div>
        </div>

        {/* Large photo strip */}
        <div className="rounded-3xl overflow-hidden mb-16 shadow-xl shadow-foreground/5">
          <img
            src={starterKit}
            alt="Matcha Starter Kit"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Product callouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {callouts.map((item, i) => (
            <div key={i} className="product-card flex gap-5 items-start">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-secondary">
                <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-foreground">{item.label}</h4>
                <p className="text-muted-foreground text-sm font-sans mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StarterKitSection;
