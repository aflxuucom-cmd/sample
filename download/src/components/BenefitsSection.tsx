import { Leaf, Brain, Heart } from "lucide-react";
import matchaWellness from "@/assets/matcha-wellness.png";

const benefits = [
  {
    icon: Leaf,
    title: "Rich Flavor & Vibrant Color",
    desc: "Our matcha delivers an unmatched umami depth with a naturally vivid green hue.",
  },
  {
    icon: Brain,
    title: "Authentic Japanese Matcha",
    desc: "Sourced directly from Uji, Kyoto — the birthplace of Japan's finest matcha tradition.",
  },
  {
    icon: Heart,
    title: "Health & Sustainability",
    desc: "Packed with antioxidants and sustainably farmed with respect for the earth.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top section: headline + image tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
          {/* Left: headline */}
          <div className="flex flex-col justify-center">
            <span className="text-muted-foreground text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-4">
              Why Matcha?
            </span>
            <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
              Experience Wellness
              <br />
              <span className="italic">with Every Sip</span>
            </h2>
          </div>

          {/* Right: 2 image tiles */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <img
                src={matchaWellness}
                alt="Anti Oxidant"
                className="w-full h-full object-cover object-left"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-matcha-dark/80 to-transparent">
                <span className="text-matcha-cream text-sm font-sans font-semibold">Anti Oxidant</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <img
                src={matchaWellness}
                alt="Relax & Focus"
                className="w-full h-full object-cover object-right"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-matcha-dark/80 to-transparent">
                <span className="text-matcha-cream text-sm font-sans font-semibold">Relax & Focus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: 3 benefit columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((item, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mx-auto md:mx-0 mb-5">
                <item.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h4 className="font-serif text-xl text-foreground mb-3">{item.title}</h4>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
