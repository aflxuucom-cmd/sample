import { ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-matcha-cream font-serif text-2xl font-bold tracking-wider">
          MATON
        </a>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {["Home", "Products", "Testimonial"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-matcha-cream/80 hover:text-matcha-cream text-sm font-sans tracking-wide transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Utilities */}
        <div className="flex items-center gap-6">
          <a
            href="#signin"
            className="text-matcha-cream/80 hover:text-matcha-cream text-sm font-sans tracking-wide transition-colors duration-200 hidden sm:block"
          >
            Sign In
          </a>
          <a
            href="#cart"
            className="text-matcha-cream/80 hover:text-matcha-cream transition-colors duration-200 relative"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
