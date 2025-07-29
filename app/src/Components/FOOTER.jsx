import { ArrowRight, Dumbbell } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* Footer with improved styling */}
      <footer className="px-6 py-16 text-white bg-gray-900 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <div className="flex gap-4 items-center mb-4">
                <div className="p-2 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-lg shadow-md">
                  <Dumbbell className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-3xl font-bold">ABLIFT</h1>
              </div>
              <p className="mb-4 text-gray-400">
                Your personal guide to fitness excellence
              </p>
              <p className="text-gray-400">Created by ABHAY BANSAL </p>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-bold">Quick Links</h2>
              <ul className="space-y-2">
                {[
                  "Home",
                  "Exercises",
                  "Workout Plans",
                  "Diet Plans",
                  "Find Gyms",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="flex gap-2 items-center text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      <ArrowRight className="w-3 h-3" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-bold">Connect</h2>
              <ul className="space-y-2">
                {[
                  "Instagram",
                  "LinkedIn",
                  "Twitter",
                  "Facebook",
                  "YouTube",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-bold">Legal</h2>
              <ul className="space-y-2">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                  "GDPR",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 mt-12 text-center text-gray-400 border-t border-gray-800">
            © 2024 ABLIFT. All rights reserved.
          </div>
        </div>
      </footer>
      ;
    </>
  );
};

export default Footer;
