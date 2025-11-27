import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-900 text-beige-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Our <span className="text-primary">Love</span>
            </h3>
            <p className="text-beige-200 font-light">
              A journey of love, captured forever in moments and memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Sections</h4>
            <ul className="space-y-2 text-beige-200 font-light">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-primary transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#memories" className="hover:text-primary transition-colors">
                  Memories
                </a>
              </li>
              <li>
                <a href="#albums" className="hover:text-primary transition-colors">
                  Albums
                </a>
              </li>
            </ul>
          </div>

          {/* Message */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Special Message</h4>
            <p className="text-beige-200 font-light italic">
              "Forever starts when you meet the person you can't bear to lose. Thank you for being my forever."
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brown-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-beige-200 font-light text-center md:text-left">
              © {currentYear} Our Love Story. Made with{" "}
              <Heart className="w-4 h-4 inline fill-primary text-primary" /> for each other.
            </p>
            <p className="text-beige-200 font-light text-sm">
              Forever yours 💕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
