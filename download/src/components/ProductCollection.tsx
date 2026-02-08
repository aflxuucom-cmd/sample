import matchaCeremonial from "@/assets/matcha-ceremonial.png";
import matchaWhisk from "@/assets/matcha-whisk.png";
import matchaMug from "@/assets/matcha-mug.png";
import matchaTeapot from "@/assets/matcha-teapot.png";

const miniProducts = [
  { name: "Everyday Grade", weight: "50g", price: "$18", tag: "Popular" },
  { name: "Culinary Grade", weight: "100g", price: "$22", tag: "Best Value" },
  { name: "Premium Blend", weight: "30g", price: "$28", tag: "New" },
];

const accessories = [
  { name: "Bamboo Whisk", price: "$12", img: matchaWhisk },
  { name: "Ceramic Mug", price: "$16", img: matchaMug },
  { name: "Tea Pot", price: "$24", img: matchaTeapot },
];

const ProductCollection = () => {
  return (
    <section className="section-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Headline */}
        <div className="text-center mb-16">
          <span className="text-muted-foreground text-xs font-sans font-semibold tracking-[0.2em] uppercase">
            Our Collection
          </span>
          <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl text-foreground mt-3">
            Discover the World
            <br />
            <span className="italic">of Matcha</span>
          </h2>
        </div>

        {/* Grid: left stacked cards + right featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left: stacked mini cards */}
          <div className="space-y-4">
            {miniProducts.map((p, i) => (
              <div key={i} className="product-card flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-accent/30" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-foreground">{p.name}</h4>
                    <p className="text-muted-foreground text-xs font-sans">{p.weight}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-sans text-accent-foreground bg-accent/15 px-2 py-0.5 rounded-full">
                    {p.tag}
                  </span>
                  <p className="font-serif text-xl text-foreground mt-1">{p.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: featured product */}
          <div className="product-card flex flex-col items-center justify-center text-center">
            <span className="text-xs font-sans text-muted-foreground tracking-[0.15em] uppercase mb-4">
              Featured
            </span>
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg shadow-foreground/10">
              <img
                src={matchaCeremonial}
                alt="Ceremonial Grade Matcha"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-serif text-2xl text-foreground">Ceremonial Grade</h3>
            <p className="text-muted-foreground text-sm font-sans mt-2 max-w-[280px]">
              The finest stone-ground matcha for traditional tea ceremonies
            </p>
            <p className="font-serif text-3xl text-foreground mt-4">$34</p>
            <button className="btn-lime mt-6">Add to Cart</button>
          </div>
        </div>

        {/* Accessories row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {accessories.map((item, i) => (
            <div key={i} className="product-card text-center">
              <div className="w-24 h-24 mx-auto rounded-xl overflow-hidden mb-4 bg-secondary">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-serif text-lg text-foreground">{item.name}</h4>
              <p className="font-sans text-lg text-foreground mt-1">{item.price}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="btn-lime">Explore All Products</button>
        </div>
      </div>
    </section>
  );
};

export default ProductCollection;
