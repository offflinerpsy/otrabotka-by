import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, ArrowUp } from 'lucide-react';

const SITE_CONFIG = {
  name: "Сбор отработанных масел",
  phone_primary: "+375 XX XXX-XX-XX",
  phone_secondary: "",
  email: "info@oils-collection.by",
  address: "г. Минск, ул. Примерная, д. 1",
  unp: "XXXXXXXXX",
  instagram: "#"
};

const PAGES_STRUCTURE = [
  { id: "home", slug: "/", nav_label: "Главная", show_in_menu: true },
  { id: "about", slug: "/about", nav_label: "О нас", show_in_menu: true },
  { id: "services", slug: "/services", nav_label: "Услуги", show_in_menu: true },
  { id: "points", slug: "/points", nav_label: "Пункты сбора", show_in_menu: true },
  { id: "contacts", slug: "/contacts", nav_label: "Контакты", show_in_menu: true },
];

export function Footer({ onNavigate }: { onNavigate: (slug: string) => void }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fcd900]/5 to-transparent opacity-50" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="px-[20px] md:px-[60px] lg:px-[120px] py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="size-[50px] bg-[#fcd900] rounded-lg flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-black" />
                </div>
                <div>
                  <p className="font-['Roboto:Bold',sans-serif] text-white text-[20px] tracking-wide" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ГудОйл
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[#fcd900] text-[12px] tracking-wider uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Переработка масел
                  </p>
                </div>
              </div>
              <p className="font-['Roboto:Regular',sans-serif] text-white/70 text-[14px] leading-[24px] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                Собственный завод по переработке отработанных масел с технологией Vbolt VBT-DB
              </p>
              <div className="flex gap-3">
                <motion.a
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-[40px] bg-white/10 hover:bg-[#fcd900] rounded-lg flex items-center justify-center transition-all group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="size-[20px] text-white group-hover:text-black transition-colors" />
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-['Roboto:Bold',sans-serif] text-white text-[16px] mb-6 uppercase tracking-wider" style={{ fontVariationSettings: "'wdth' 100" }}>
                Навигация
              </h3>
              <ul className="space-y-3">
                {PAGES_STRUCTURE.filter(p => p.show_in_menu).map((page) => (
                  <li key={page.id}>
                    <button
                      onClick={() => onNavigate(page.slug)}
                      className="font-['Roboto:Regular',sans-serif] text-white/70 hover:text-[#fcd900] text-[14px] transition-colors text-left"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {page.nav_label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-['Roboto:Bold',sans-serif] text-white text-[16px] mb-6 uppercase tracking-wider" style={{ fontVariationSettings: "'wdth' 100" }}>
                Услуги
              </h3>
              <ul className="space-y-3">
                {[
                  'Сбор и вывоз масел',
                  'Переработка на заводе',
                  'Предоставление тары',
                  'Эко-документация'
                ].map((service) => (
                  <li key={service}>
                    <p className="font-['Roboto:Regular',sans-serif] text-white/70 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {service}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-['Roboto:Bold',sans-serif] text-white text-[16px] mb-6 uppercase tracking-wider" style={{ fontVariationSettings: "'wdth' 100" }}>
                Контакты
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="size-[18px] text-[#fcd900] mt-1 shrink-0" />
                  <a
                    href={`tel:${SITE_CONFIG.phone_primary}`}
                    className="font-['Roboto:Regular',sans-serif] text-white/70 hover:text-[#fcd900] text-[14px] transition-colors"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {SITE_CONFIG.phone_primary}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="size-[18px] text-[#fcd900] mt-1 shrink-0" />
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="font-['Roboto:Regular',sans-serif] text-white/70 hover:text-[#fcd900] text-[14px] transition-colors break-all"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="size-[18px] text-[#fcd900] mt-1 shrink-0" />
                  <p className="font-['Roboto:Regular',sans-serif] text-white/70 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {SITE_CONFIG.address}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="px-[20px] md:px-[60px] lg:px-[120px] py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-['Roboto:Regular',sans-serif] text-white/50 text-[13px] text-center md:text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                © {new Date().getFullYear()} ГудОйл. Все права защищены. УНП: {SITE_CONFIG.unp}
              </p>
              <motion.button
                onClick={scrollToTop}
                className="size-[44px] bg-[#fcd900] hover:bg-[#e5c400] rounded-lg flex items-center justify-center transition-all shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowUp className="size-[20px] text-black" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
