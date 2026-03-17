import { Outlet, Link, useLocation } from "react-router";
import { Phone, Mail, Heart, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function RootLayout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        {/* Top bar */}
        <div className="bg-emerald-700 text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex gap-6">
              <a href="tel:+18239920223" className="flex items-center gap-2 hover:text-emerald-200">
                <Phone size={16} />
                <span>+1-823-992-0223</span>
              </a>
              <a href="mailto:trainer@yogafit.com" className="flex items-center gap-2 hover:text-emerald-200">
                <Mail size={16} />
                <span>trainer@yogafit.com</span>
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200">
                <Twitter size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="text-emerald-600" size={32} />
              <span className="text-2xl font-bold text-emerald-800">YogaFit</span>
            </Link>

            <nav className="flex gap-8">
              <Link 
                to="/" 
                className={`${isActive("/") && location.pathname === "/" ? "text-emerald-600 font-semibold" : "text-gray-700"} hover:text-emerald-600 transition-colors`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`${isActive("/about") ? "text-emerald-600 font-semibold" : "text-gray-700"} hover:text-emerald-600 transition-colors`}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className={`${isActive("/services") ? "text-emerald-600 font-semibold" : "text-gray-700"} hover:text-emerald-600 transition-colors`}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className={`${isActive("/contact") ? "text-emerald-600 font-semibold" : "text-gray-700"} hover:text-emerald-600 transition-colors`}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="text-emerald-400" size={28} />
                <span className="text-xl font-bold">YogaFit</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Transform your body and mind through the ancient practice of yoga. Join us on a journey to wellness.
              </p>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400">
                  <Instagram size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400">
                  <Twitter size={20} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-emerald-400">Home</Link></li>
                <li><Link to="/about" className="hover:text-emerald-400">About Us</Link></li>
                <li><Link to="/services" className="hover:text-emerald-400">Services</Link></li>
                <li><Link to="/contact" className="hover:text-emerald-400">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/services" className="hover:text-emerald-400">Yoga Classes</Link></li>
                <li><Link to="/services" className="hover:text-emerald-400">Meditation Sessions</Link></li>
                <li><Link to="/services" className="hover:text-emerald-400">Corporate Wellness</Link></li>
                <li><Link to="/services" className="hover:text-emerald-400">Personal Training</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-emerald-400" />
                  <a href="tel:+18239920223" className="hover:text-emerald-400">+1-823-992-0223</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-emerald-400" />
                  <a href="mailto:trainer@yogafit.com" className="hover:text-emerald-400">trainer@yogafit.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 flex justify-between items-center">
            <p>&copy; 2026 YogaFit. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-emerald-400">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-emerald-400">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
