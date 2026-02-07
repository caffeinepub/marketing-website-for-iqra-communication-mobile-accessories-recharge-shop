import { Heart } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="bg-gradient-to-br from-teal-700 via-emerald-700 to-teal-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">IQRA COMMUNICATION</h3>
            <p className="text-teal-100 leading-relaxed">
              Your trusted partner for mobile accessories, repairs, and recharge services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-teal-100">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-teal-100">
              <li>
                <a href="tel:9053030920" className="hover:text-white transition-colors">
                  📞 9053030920
                </a>
              </li>
              <li>
                <a href="tel:7027835322" className="hover:text-white transition-colors">
                  📞 7027835322
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-600 pt-8 text-center text-teal-100">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © 2026. Built with{' '}
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />{' '}
            using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
