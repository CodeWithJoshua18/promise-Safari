import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">Promise Expeditions</h2>
          <p className="text-sm text-gray-400">
            Explore the world with us. Your trusted travel partner for
            unforgettable adventures.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/tours" className="hover:text-gray-300">Tours</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Phone size={16}/> +254 700 123 456
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Mail size={16}/> info@promiseexpeditions.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <MapPin size={16}/> Nairobi, Kenya
          </p>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} Promise Expeditions. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
