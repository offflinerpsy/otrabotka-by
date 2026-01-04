import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';
import svgPaths from "../imports/svg-649d6ayg3u";
import logoImage from "figma:asset/c1c9c571683cff87b5adc0931d8495ad4e7821ae.png";

const SITE_CONFIG = {
  name: "Сбор отработанных масел",
  phone_primary: "+375-25-521-24-09",
  phone_secondary: "+375-29-322-44-55",
  email: "Tradenefteprom@bk.ru",
};

const PAGES_STRUCTURE = [
  { id: "home", slug: "/", nav_label: "Главная", show_in_menu: true, order: 1 },
  { id: "about", slug: "/about", nav_label: "О нас", show_in_menu: true, order: 2 },
  { id: "services", slug: "/services", nav_label: "Услуги", show_in_menu: true, order: 3 },
  { id: "points", slug: "/points", nav_label: "Пункты сбора", show_in_menu: true, order: 4 },
  { id: "info", slug: "/info", nav_label: "Информация", show_in_menu: false, order: 5 },
  { id: "contacts", slug: "/contacts", nav_label: "Контакты", show_in_menu: true, order: 6 },
];

function PhoneIcon() {
  return (
    <div className="relative size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g>
          <path d={svgPaths.p7fb2e00} fill="currentColor" />
          <path d={svgPaths.p33181c00} fill="currentColor" />
          <path clipRule="evenodd" d={svgPaths.p3e111300} fill="currentColor" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

export function Header({ currentPage, onNavigate }: { currentPage: string; onNavigate: (slug: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = PAGES_STRUCTURE
    .filter(p => p.show_in_menu)
    .sort((a, b) => a.order - b.order);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-xl shadow-2xl' 
            : 'bg-black/95 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div 
          className={`px-[20px] md:px-[60px] lg:px-[120px] transition-all duration-300 ${
            scrolled ? 'py-3' : 'py-5'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => onNavigate('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <img 
                  src={logoImage} 
                  alt="Трейднефтепром" 
                  className={`transition-all duration-300 ${scrolled ? 'h-[45px]' : 'h-[55px]'}`}
                />
              </div>
              <div className={`transition-all duration-300 ${scrolled ? 'hidden md:block' : 'block'}`}>
                <p className="font-['Roboto:Bold',sans-serif] text-white text-[16px] tracking-wide leading-tight" style={{ fontVariationSettings: "'wdth' 100" }}>
                  ООО «Трейднефтепром»
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[#fcd900] text-[10px] tracking-wide leading-tight mt-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Переработка отработанных масел<br />путем вакуумной дистилляции
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => onNavigate(item.slug)}
                  className={`font-['Roboto:Medium',sans-serif] text-[15px] tracking-wide transition-all relative group ${
                    currentPage === item.slug 
                      ? 'text-[#fcd900]' 
                      : 'text-white/90 hover:text-white'
                  }`}
                  style={{ fontVariationSettings: "'wdth' 100" }}
                  whileHover={{ y: -2 }}
                >
                  {item.nav_label}
                  <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-[#fcd900] transition-all ${
                    currentPage === item.slug ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </motion.button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                href={`tel:${SITE_CONFIG.phone_primary}`}
                className="bg-[#fcd900] hover:bg-[#e5c400] text-black px-6 py-3 rounded-lg font-['Roboto:Medium',sans-serif] text-[15px] transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                style={{ fontVariationSettings: "'wdth' 100" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="size-[18px]" />
                <span>{SITE_CONFIG.phone_primary}</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X className="size-[28px]" /> : <Menu className="size-[28px]" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          y: mobileMenuOpen ? 0 : -20,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-[80px] left-0 right-0 bg-black/95 backdrop-blur-xl z-40 lg:hidden border-t border-white/10"
      >
        <nav className="px-[20px] py-6 flex flex-col gap-4">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => {
                onNavigate(item.slug);
                setMobileMenuOpen(false);
              }}
              className={`font-['Roboto:Medium',sans-serif] text-[16px] text-left py-3 px-4 rounded-lg transition-all ${
                currentPage === item.slug 
                  ? 'text-black bg-[#fcd900]' 
                  : 'text-white hover:bg-white/10'
              }`}
              style={{ fontVariationSettings: "'wdth' 100" }}
              whileTap={{ scale: 0.98 }}
            >
              {item.nav_label}
            </motion.button>
          ))}
          
          <motion.a
            href={`tel:${SITE_CONFIG.phone_primary}`}
            className="bg-[#fcd900] hover:bg-[#e5c400] text-black px-6 py-4 rounded-lg font-['Roboto:Medium',sans-serif] text-[16px] transition-all mt-4 flex items-center justify-center gap-2"
            style={{ fontVariationSettings: "'wdth' 100" }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="size-[18px]" />
            <span>{SITE_CONFIG.phone_primary}</span>
          </motion.a>
        </nav>
      </motion.div>
    </>
  );
}