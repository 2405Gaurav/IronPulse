import { ArrowRight, Dumbbell, Instagram, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-50 to-blue-50 border-t border-blue-100">
      <div className="container mx-auto px-6 py-8">
        {/* Main content - compact layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand section - simplified */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-100 to-sky-100 border border-blue-200 rounded-lg">
              <Dumbbell className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                IronPulse
              </h1>
              <p className="text-xs text-slate-500">by Gaurav Thakur</p>
            </div>
          </div>

          {/* Quick links - horizontal */}
          <div className="flex flex-wrap gap-6 text-sm">
            {["Home", "Exercises", "Plans", "Gyms"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social icons - compact */}
          <div className="flex gap-2">
            {[
              { icon: Instagram, color: "hover:text-pink-500" },
              { icon: Linkedin, color: "hover:text-blue-600" },
              { icon: Twitter, color: "hover:text-sky-500" },
              { icon: Facebook, color: "hover:text-blue-700" },
              { icon: Youtube, color: "hover:text-red-500" },
            ].map(({ icon: Icon, color }, index) => (
              <a
                key={index}
                href="#"
                className={`p-2 text-slate-400 ${color} transition-colors duration-200 hover:bg-white/50 rounded-lg`}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar - minimal */}
        <div className="mt-6 pt-4 border-t border-blue-100 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© 2024 IronPulse. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;