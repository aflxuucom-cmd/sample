import matchaLatte from "@/assets/matcha-latte.png";
import matchaCake from "@/assets/matcha-cake.png";

const essentials = [
  {
    name: "Matcha Latte Mix",
    desc: "Premium blend for the perfect at-home latte",
    price: "$19",
    img: matchaLatte,
  },
  {
    name: "Matcha Cake Powder",
    desc: "Baking-grade matcha for vibrant desserts",
    price: "$15",
    img: matchaCake,
  },
];

const EssentialsSection = () => {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-muted-foreground text-xs font-sans font-semibold tracking-[0.2em] uppercase">
            Beyond Tea
          </span>
          <h2 className="editorial-heading text-4xl md:text-5xl text-foreground mt-3">
            Matcha Pairing
            <br />
            <span className="italic">Essentials</span>
          </h2>
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {essentials.map((item, i) => (
            <div key={i} className="product-card overflow-hidden group">
              <div className="rounded-2xl overflow-hidden mb-6 aspect-[4/3]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-foreground">{item.name}</h3>
                  <p className="text-muted-foreground text-sm font-sans mt-1">{item.desc}</p>
                </div>
                <span className="font-serif text-3xl text-foreground">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EssentialsSection;
