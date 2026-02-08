import matchaFooter from "@/assets/matcha-footer.png";

const Footer = () => {
  return (
    <footer className="section-dark relative overflow-hidden">
      {/* CTA area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: CTA */}
          <div>
            <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl text-matcha-cream">
              Save up to <span className="text-accent">50%</span>
              <br />
              <span className="italic">or more on matcha powder</span>
            </h2>
            <p className="text-matcha-white-muted text-sm font-sans mt-6 max-w-md leading-relaxed">
              Subscribe to our newsletter and get exclusive deals on our premium matcha collection. Free shipping on your first order.
            </p>
            <button className="btn-lime mt-8">
              Shop the Sale
            </button>
          </div>

          {/* Right: decorative photo */}
          <div className="hidden md:block">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-matcha-dark/50">
              <img
                src={matchaFooter}
                alt="Matcha tools and preparation"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer nav */}
      <div className="border-t border-matcha-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h3 className="font-serif text-xl text-matcha-cream mb-4">MATON</h3>
              <p className="text-matcha-white-muted/60 text-sm font-sans leading-relaxed">
                Premium Japanese matcha, crafted with care and delivered to your door.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-matcha-cream text-sm font-sans font-semibold mb-4 tracking-wide">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "Products", "About Us", "Blog"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-matcha-white-muted/60 hover:text-matcha-cream text-sm font-sans transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-matcha-cream text-sm font-sans font-semibold mb-4 tracking-wide">Support</h4>
              <ul className="space-y-2">
                {["FAQ", "Shipping", "Returns", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-matcha-white-muted/60 hover:text-matcha-cream text-sm font-sans transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-matcha-cream text-sm font-sans font-semibold mb-4 tracking-wide">Contact</h4>
              <ul className="space-y-2 text-matcha-white-muted/60 text-sm font-sans">
                <li>hello@maton.co</li>
                <li>+1 (555) 123-4567</li>
                <li>Kyoto, Japan</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-matcha-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-matcha-white-muted/40 text-xs font-sans">
              © 2026 MATON. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service"].map((link) => (
                <a key={link} href="#" className="text-matcha-white-muted/40 hover:text-matcha-cream text-xs font-sans transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
