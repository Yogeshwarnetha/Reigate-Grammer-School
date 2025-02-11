"use client"
import { Facebook, Instagram, Youtube, Linkedin, Map } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--school-primary)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Information */}
          <div className="space-y-4">
            <h2 className="text-1xl font-semibold">Reigate Grammar International School</h2>
            <h3 className="text-1xl">Kuala Lumpur</h3>
            <p className="text-sm">
              Jalan Kajang 2 Utama Seksyen 2,<br />
              Kajang 2 43000 Kajang, Selangor
            </p>
            <a 
              href="mailto:admissions@reigategrammar.edu.my"
              className="text-sm hover:text-[var(--school-accent)] block"
            >
              admissions@reigategrammar.edu.my
            </a>
            <a 
              href="https://wa.me/yourwhatsappnumber" 
              className="inline-block"
              aria-label="WhatsApp"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp"
                className="h-8 w-8"
              />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <nav className="space-y-2">
              <a href="/" className="block hover:text-[var(--school-accent)]">Home</a>
              <a href="/about-us" className="block hover:text-[var(--school-accent)]">About Us</a>
              <a href="/school-life" className="block hover:text-[var(--school-accent)]">School Life</a>
              <a href="/admissions" className="block hover:text-[var(--school-accent)]">Admissions</a>
              <a href="/academics" className="block hover:text-[var(--school-accent)]">Academics</a>
              <a href="/co-curricular-activities" className="block hover:text-[var(--school-accent)]">Co-curricular Activities</a>
              <a href="/news-and-events" className="block hover:text-[var(--school-accent)]">News and Events</a>
            </nav>
          </div>


          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-[var(--school-accent)]" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-[var(--school-accent)]" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-[var(--school-accent)]" aria-label="YouTube">
                  <Youtube className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-[var(--school-accent)]" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
          </div>

          {/* Find Us Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Find Us</h2>
            <div className="space-y-4">
              {/* Social Media Links */}
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1076477755247!2d101.7868!3d3.0124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDAnNDQuNyJOIDEwMcKwNDcnMTIuNSJF!5e0!3m2!1sen!2smy!4v1650000000000!5m2!1sen!2smy"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 bg-[#001B3B]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div>All rights reserved @ 2025</div>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="/privacy-policy" className="hover:text-[var(--school-accent)]">Privacy Policy</a>
              <span>|</span>
              <a href="/support" className="hover:text-[var(--school-accent)]">Support</a>
              <span>|</span>
              <a href="/terms" className="hover:text-[var(--school-accent)]">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;