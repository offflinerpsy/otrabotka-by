import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Droplet, Truck, FileText, Check, Phone, Mail, Phone as PhoneIcon2, ArrowRight, MapPin, Package, Zap, Award, Shield, Users, Target, Factory, Gauge, Recycle, Beaker, Flame, Wind, ChevronLeft, ChevronRight } from 'lucide-react';
import svgPaths from "./imports/svg-649d6ayg3u";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CompanyCard } from './components/CompanyCard';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import AboutPage from './components/AboutPage';

// Импортированные изображения из Figma
import imgBackground from "figma:asset/86b0771ecac5b51df01798010016074da869335e.png";
import imgHeroBg from "figma:asset/1f3bb52c84bd883680755fd9c1169650e8fac2a7.png";
import imgBackground1 from "figma:asset/7e9b1e017e16ed318c62e3f3a7a2da6c108ec93e.png";
import imgBackground2 from "figma:asset/f3e71c050c2408dfaff4c64f4fc2b50ef02730b0.png";

// Изображения вакуумной установки
import imgVacuum1 from "figma:asset/f66ff7c6a6c66e3a83ddf3d5069a4957d63e0458.png";
import imgVacuum2 from "figma:asset/0ef914d7a765c3012a28c7076295695e3c009124.png";
import imgVacuum3 from "figma:asset/5318ac3b9018886fb691dd49ad8d4521effef82d.png";

// Локальные изображения
const imgHeroBgDesktop = "/images/hero-bg.png";
const imgHeroBgMobile = "/images/hero-bg-mobile.png";
const imgAutopark = "/images/autopark.png";
const imgMobilePoint = "/images/mobile-point.png";

// ============= КОНТЕНТ МАНИФЕСТ =============
const SITE_CONFIG = {
  name: "Сбор отработанных масел",
  phone_primary: "+375-25-521-24-09",
  phone_secondary: "+375-29-322-44-55",
  email: "Tradenefteprom@bk.ru",
  address: "г. Минск, пр-т Дзержинского, 127 пом. 484",
  unp: "193918407",
  instagram: "#"
};

const PAGES_STRUCTURE = [
  {
    id: "home",
    slug: "/",
    parent: null,
    order: 1,
    show_in_menu: true,
    nav_label: "Главная",
    seo: {
      title: "Сбор и утилизация отработанных масел по Беларуси — вывоз, выкуп, документы",
      h1: "Сбор и утилизация отработанных масел"
    }
  },
  {
    id: "about",
    slug: "/about",
    parent: null,
    order: 2,
    show_in_menu: true,
    nav_label: "О нас",
    seo: {
      title: "О компании — сбор и перевозка отработанных масел",
      h1: "О компании"
    }
  },
  {
    id: "services",
    slug: "/services",
    parent: null,
    order: 3,
    show_in_menu: true,
    nav_label: "Услуги",
    seo: {
      title: "Услуги — сбор, транспортировка и экодокументы",
      h1: "Услуги"
    }
  },
  {
    id: "collect-and-transit",
    slug: "/services/collect-and-transit",
    parent: "services",
    order: 1,
    show_in_menu: false,
    nav_label: "Сбор и вывоз",
    seo: {
      title: "Сбор и вывоз отработанного масла — покупка, откачка, документы",
      h1: "Сбор и вывоз отработанного масла"
    }
  },
  {
    id: "capacity-and-transport",
    slug: "/services/capacity-and-transport",
    parent: "services",
    order: 2,
    show_in_menu: false,
    nav_label: "Ёмкость и транспорт",
    seo: {
      title: "Ёмкости для сбора и транспорт для вывоза отработанных масел",
      h1: "Ёмкость и транспорт"
    }
  },
  {
    id: "dev-eco-documentation",
    slug: "/services/dev-eco-documentation",
    parent: "services",
    order: 3,
    show_in_menu: false,
    nav_label: "Эко-документация",
    seo: {
      title: "Разработка экологической документации под ключ",
      h1: "Экологическая документация"
    }
  },
  {
    id: "points",
    slug: "/points",
    parent: null,
    order: 4,
    show_in_menu: true,
    nav_label: "Пункты сбора",
    seo: {
      title: "Пункты сбора — выездные решения",
      h1: "Пункты сбора"
    }
  },
  {
    id: "moveable",
    slug: "/points/moveable",
    parent: "points",
    order: 1,
    show_in_menu: false,
    nav_label: "Передвижной пункт",
    seo: {
      title: "Передвижной заготовительный пункт — откачка в труднодоступных местах",
      h1: "Передвижной заготовительный пункт"
    }
  },
  {
    id: "info",
    slug: "/info",
    parent: null,
    order: 5,
    show_in_menu: true,
    nav_label: "Информация",
    seo: {
      title: "Информация — виды масел, FAQ, сертификаты",
      h1: "Информация"
    }
  },
  {
    id: "oils-type",
    slug: "/info/oils-type",
    parent: "info",
    order: 1,
    show_in_menu: false,
    nav_label: "Виды масел",
    seo: {
      title: "Виды принимаемых отработанных масел",
      h1: "Виды принимаемых масел"
    }
  },
  {
    id: "faq",
    slug: "/info/faq",
    parent: "info",
    order: 2,
    show_in_menu: false,
    nav_label: "FAQ",
    seo: {
      title: "FAQ — условия приёма и организационные вопросы",
      h1: "Вопрос–ответ"
    }
  },
  {
    id: "certs",
    slug: "/info/certificates",
    parent: "info",
    order: 3,
    show_in_menu: false,
    nav_label: "Сертификаты",
    seo: {
      title: "Сертификаты и правовые требования",
      h1: "Сертификаты и закон"
    }
  },
  {
    id: "contacts",
    slug: "/contacts",
    parent: null,
    order: 6,
    show_in_menu: true,
    nav_label: "Контакты",
    seo: {
      title: "Контакты — заявка и консультация",
      h1: "Контакты"
    }
  }
];

// Компоненты иконок
function PhoneIcon() {
  return (
    <div className="relative size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g>
          <path d={svgPaths.p7fb2e00} fill="var(--fill-0, black)" />
          <path d={svgPaths.p33181c00} fill="var(--fill-0, black)" />
          <path clipRule="evenodd" d={svgPaths.p3e111300} fill="var(--fill-0, black)" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
      <path d={svgPaths.p22c47740} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
    </svg>
  );
}

// ============= ХЛЕБНЫЕ КРОШКИ =============
function Breadcrumbs({ currentPageId }: { currentPageId: string }) {
  const buildBreadcrumbs = () => {
    const crumbs: Array<{ label: string; slug: string }> = [];
    let page = PAGES_STRUCTURE.find(p => p.id === currentPageId);
    
    while (page) {
      crumbs.unshift({ label: page.nav_label, slug: page.slug });
      if (page.parent) {
        page = PAGES_STRUCTURE.find(p => p.id === page!.parent);
      } else {
        break;
      }
    }
    
    if (currentPageId !== 'home' && crumbs[0]?.slug !== '/') {
      crumbs.unshift({ label: 'Главная', slug: '/' });
    }
    
    return crumbs;
  };

  const crumbs = buildBreadcrumbs();
  
  if (crumbs.length <= 1) return null;

  return (
    <div className="px-[20px] md:px-[100px] lg:px-[260px] py-6 bg-gray-50">
      <nav className="flex gap-2 items-center">
        {crumbs.map((crumb, idx) => (
          <div key={crumb.slug} className="flex items-center gap-2">
            {idx > 0 && (
              <span className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-black opacity-30" style={{ fontVariationSettings: "'wdth' 100" }}>
                /
              </span>
            )}
            {idx === crumbs.length - 1 ? (
              <span className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                {crumb.label}
              </span>
            ) : (
              <a
                href={crumb.slug}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo(0, 0);
                  window.dispatchEvent(new CustomEvent('navigate', { detail: crumb.slug }));
                }}
                className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-black opacity-50 hover:opacity-100 transition-opacity" 
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {crumb.label}
              </a>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

// ============= HERO + KTO MY SECTION (единый фон) =============
function HeroWithParallax({ onNavigate }: { onNavigate: (slug: string) => void }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1200], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative bg-black">
      {/* ЕДИНЫЙ ПАРАЛЛАКС ФОН для Hero и "Кто мы" */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          style={{ 
            y,
            backgroundImage: `url(${isMobile ? imgHeroBgMobile : imgHeroBgDesktop})`,
            backgroundSize: 'cover',
            backgroundPosition: isMobile ? 'center center' : 'center 40%',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      {/* HERO CONTENT */}
      <div className="relative h-[100vh] min-h-[700px] w-full z-10">
        <motion.div 
          className="flex flex-col justify-center h-full px-[20px] md:px-[60px] lg:px-[120px]"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-[6px] w-[100px] bg-[#fcd900] mb-8" />
            
            <h1 className="font-['Roboto:Bold',sans-serif] leading-[1.1] text-[48px] md:text-[72px] lg:text-[88px] text-white mb-6 max-w-[900px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Переработка
              <br />
              <span className="text-[#fcd900]">отработанных масел</span>
            </h1>
            
            <p className="font-['Roboto:Regular',sans-serif] leading-[32px] text-[18px] md:text-[22px] text-white/90 tracking-wide max-w-[700px] mb-12" style={{ fontVariationSettings: "'wdth' 100" }}>
              Собственный завод
              <br />
              Технология вакуумной дистилляции позволяет получать базовые масла I, II, III группы высокого качества
              <br />
              Производительность до 2000 л/час
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => onNavigate('/contacts')}
                className="bg-[#fcd900] hover:bg-[#e5c400] rounded-lg h-[60px] px-10 flex items-center gap-3 transition-all shadow-2xl hover:shadow-[#fcd900]/50 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-['Roboto:Bold',sans-serif] text-[18px] text-black tracking-wide" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Оставить заявку
                </span>
                <ArrowRight className="size-[20px] text-black group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => onNavigate('/about')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-lg h-[60px] px-10 flex items-center gap-3 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-['Roboto:Medium',sans-serif] text-[18px] text-white tracking-wide" style={{ fontVariationSettings: "'wdth' 100" }}>
                  О технологии
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-[2px] h-[60px] bg-white/30 relative">
            <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-[#fcd900] to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* СЕКЦИЯ "КТО МЫ" - поверх того же параллакс-фона */}
      <div className="relative py-24 md:py-32 z-10">
        {/* Декоративные блики */}
        <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#fcd900]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-[#fcd900]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="px-[20px] md:px-[60px] lg:px-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[32px] text-[14px] tracking-[4px] uppercase text-white/70 mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
              КТО МЫ
            </p>
            
            <h2 className="font-['Roboto:Bold',sans-serif] leading-[1.2] text-[36px] md:text-[54px] text-white mb-6 max-w-[1000px] mx-auto" style={{ fontVariationSettings: "'wdth' 100" }}>
              Полный цикл переработки отработанных масел
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
            {/* Glassmorphism Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 hover:bg-white/15 transition-all duration-500 h-full shadow-2xl hover:shadow-[#fcd900]/20">
                <div className="flex items-start gap-6 mb-6">
                  <div className="size-[70px] shrink-0 flex items-center justify-center bg-gradient-to-br from-[#fcd900] to-[#e5c400] rounded-2xl shadow-xl">
                    <Factory className="size-[36px] text-black" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-['Roboto:Bold',sans-serif] leading-[36px] text-[26px] text-white mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Собственный завод
                    </h3>
                    <div className="h-[4px] w-[60px] bg-[#fcd900] rounded-full" />
                  </div>
                </div>
                
                <p className="font-['Roboto:Regular',sans-serif] leading-[30px] text-[17px] text-white/90 mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Технология вакуумной дистилляции позволяет получать базовые масла I, II, III группы высокого качества.
                </p>

                <div className="space-y-3">
                  {[
                    'Производительность до 2000 л/час',
                    'Работа 24/7 без остановок'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="size-[20px] text-[#fcd900] shrink-0" strokeWidth={3} />
                      <p className="font-['Roboto:Regular',sans-serif] text-[16px] text-white/80" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Glassmorphism Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 hover:bg-white/15 transition-all duration-500 h-full shadow-2xl hover:shadow-[#fcd900]/20">
                <div className="flex items-start gap-6 mb-6">
                  <div className="size-[70px] shrink-0 flex items-center justify-center bg-gradient-to-br from-[#fcd900] to-[#e5c400] rounded-2xl shadow-xl">
                    <Truck className="size-[36px] text-black" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-['Roboto:Bold',sans-serif] leading-[36px] text-[26px] text-white mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Сбор и вывоз
                    </h3>
                    <div className="h-[4px] w-[60px] bg-[#fcd900] rounded-full" />
                  </div>
                </div>
                
                <p className="font-['Roboto:Regular',sans-serif] leading-[30px] text-[17px] text-white/90 mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Собственная спецтехника и логистика по всей Беларуси. Предоставляем тару, оформляем документы, работаем круглосуточно.
                </p>

                <div className="space-y-3">
                  {[
                    'Бесплатная тара по договору',
                    'Минимальный объём от 200 л',
                    'Полный пакет документов'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="size-[20px] text-[#fcd900] shrink-0" strokeWidth={3} />
                      <p className="font-['Roboto:Regular',sans-serif] text-[16px] text-white/80" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <motion.button
              onClick={() => onNavigate('/about')}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white/30 hover:border-[#fcd900]/50 rounded-xl h-[64px] px-12 inline-flex items-center gap-3 transition-all group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-['Roboto:Bold',sans-serif] text-[18px] text-white tracking-wide" style={{ fontVariationSettings: "'wdth' 100" }}>
                Подробнее о технологии
              </span>
              <ArrowRight className="size-[20px] text-[#fcd900] group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ============= СТРАНИЦА: ГЛАВНАЯ =============
function HomePage({ onNavigate }: { onNavigate: (slug: string) => void }) {
  return (
    <>
      <HeroWithParallax onNavigate={onNavigate} />

      {/* Услуги */}
      <section className="relative py-16 md:py-24 bg-gray-50">
        <div className="px-[20px] md:px-[100px] lg:px-[260px]">
          <div className="mb-12">
            <div className="h-[4px] w-[60px] bg-[#fcd900] mb-6" />
            <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[32px] opacity-30 text-[14px] tracking-[2px] uppercase text-black mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
              ЧТО МЫ ДЕЛАЕМ
            </p>

            <h2 className="font-['Roboto:Regular',sans-serif] font-normal leading-[50px] md:leading-[60px] text-[32px] md:text-[48px] text-black mb-6 max-w-[900px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Полный цикл: от консультации до переработки
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              onClick={() => onNavigate('/services')}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="h-[220px] overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1665930489997-e5e9d527ae39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Сбор и вывоз"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="font-['Roboto:Medium',sans-serif] leading-[32px] text-[22px] text-black mb-4 group-hover:text-[#fcd900] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Сбор и вывоз отработанного масла
                </h3>
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[26px] text-[16px] text-black opacity-70 tracking-[0.36px] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Покупаем, откачиваем и вывозим. Минимум 200 л, вода ≤ 5%
                </p>
                <div className="flex items-center gap-2 text-[#fcd900] group-hover:gap-3 transition-all">
                  <span className="font-['Roboto:Medium',sans-serif] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Подробнее
                  </span>
                  <div className="w-[6px] h-[10px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 6 10">
                      <path d={svgPaths.p1dec8180} stroke="#fcd900" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              onClick={() => onNavigate('/services')}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="h-[220px] overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1702152758730-dd0d963e43d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Ёмкость и транспорт"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="font-['Roboto:Medium',sans-serif] leading-[32px] text-[22px] text-black mb-4 group-hover:text-[#fcd900] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Ёмкость и транспорт
                </h3>
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[26px] text-[16px] text-black opacity-70 tracking-[0.36px] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Бочки и еврокубы по договору, транспорт под объём
                </p>
                <div className="flex items-center gap-2 text-[#fcd900] group-hover:gap-3 transition-all">
                  <span className="font-['Roboto:Medium',sans-serif] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Подробнее
                  </span>
                  <div className="w-[6px] h-[10px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 6 10">
                      <path d={svgPaths.p1dec8180} stroke="#fcd900" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ y: -5 }}
              onClick={() => onNavigate('/services')}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="h-[220px] overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1695370992816-3c5bb771e4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Экодокументация"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="font-['Roboto:Medium',sans-serif] leading-[32px] text-[22px] text-black mb-4 group-hover:text-[#fcd900] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Экологическая документация
                </h3>
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[26px] text-[16px] text-black opacity-70 tracking-[0.36px] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Подготовим и согласуем комплект документов
                </p>
                <div className="flex items-center gap-2 text-[#fcd900] group-hover:gap-3 transition-all">
                  <span className="font-['Roboto:Medium',sans-serif] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Подробнее
                  </span>
                  <div className="w-[6px] h-[10px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 6 10">
                      <path d={svgPaths.p1dec8180} stroke="#fcd900" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Кому полезно */}
      <section className="relative py-16 md:py-24 px-[20px] md:px-[100px] lg:px-[260px] bg-white">
        <div className="mb-12">
          <div className="h-[4px] w-[60px] bg-[#fcd900] mb-6" />
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[32px] opacity-30 text-[14px] tracking-[2px] uppercase text-black mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            КОМУ ПОЛЕЗНО
          </p>

          <h2 className="font-['Roboto:Regular',sans-serif] font-normal leading-[50px] md:leading-[60px] text-[32px] md:text-[48px] text-black mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Работаем с бизнесом и частными лицами
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "СТО и автопарки", img: "https://images.unsplash.com/photo-1637640125496-31852f042a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", position: "center" },
            { title: "Промышленные предприятия", img: "https://images.unsplash.com/photo-1560953981-28e3bab4aab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", position: "center" },
            { title: "Аграрные хозяйства", img: "https://images.unsplash.com/photo-1707515416694-502935a4cff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", position: "center 90%" }
          ].map((item, idx) => (
            <div key={idx} className="group">
              <div className="overflow-hidden rounded-lg mb-6 shadow-md">
                <ImageWithFallback 
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: item.position }}
                />
              </div>
              <h3 className="font-['Roboto:Medium',sans-serif] leading-[32px] text-[22px] text-black mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
                {item.title}
              </h3>
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[26px] text-[16px] text-black opacity-70 tracking-[0.36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Регулярный вывоз по договору или разовые заявки
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// ============= КОМПОНЕНТ: Галерея вакуумных установок =============
function VacuumGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [imgVacuum1, imgVacuum2, imgVacuum3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="relative rounded-2xl overflow-hidden">
        {/* Изображения */}
        <div className="relative h-[400px] lg:h-[500px]">
          {images.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt={`Вакуумная установка ${idx + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={false}
              animate={{
                opacity: currentSlide === idx ? 1 : 0,
                scale: currentSlide === idx ? 1 : 1.1,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
          ))}
          
          {/* Треугольная декоративная накладка в правом нижнем углу */}
          <div 
            className="absolute bottom-0 right-0 w-0 h-0 z-10"
            style={{
              borderLeft: '150px solid transparent',
              borderBottom: '150px solid rgba(252, 217, 0, 0.95)',
            }}
          />
          {/* Внутренний треугольник для глубины */}
          <div 
            className="absolute bottom-0 right-0 w-0 h-0 z-10"
            style={{
              borderLeft: '130px solid transparent',
              borderBottom: '130px solid rgba(252, 217, 0, 0.7)',
            }}
          />
        </div>

        {/* Кнопки навигации */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 size-12 bg-[#fcd900]/90 hover:bg-[#fcd900] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="size-6 text-black" strokeWidth={3} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 size-12 bg-[#fcd900]/90 hover:bg-[#fcd900] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="size-6 text-black" strokeWidth={3} />
        </button>

        {/* Индикаторы */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`size-2.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'bg-[#fcd900] w-8' : 'bg-white/60 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ============= СТРАНИЦА: УСЛУГИ =============
function ServicesPage({ onNavigate }: { onNavigate: (slug: string) => void }) {
  const services = [
    {
      title: "Сбор и вывоз отработанного масла",
      description: "Покупаем отработанные масла, откачиваем из доступных ёмкостей (бочки, еврокубы, наземные/подземные резервуары) и вывозим на переработку собственным транспортом.",
      image: "https://images.unsplash.com/photo-1665930489997-e5e9d527ae39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      icon: Droplet,
      features: [
        "Минимальный объём от 200 л",
        "Содержание воды до 5%",
        "Разовый или регулярный график",
        "Полный пакет документов",
        "Работаем круглосуточно"
      ]
    },
    {
      title: "Ёмкость и транспорт",
      description: "Предоставляем тару по договору бесплатно и подбираем транспорт под ваш объём — от микроавтобуса до вагон-цистерн.",
      image: "https://images.unsplash.com/photo-1761857989912-275b46ab8f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      icon: Truck,
      features: [
        "Бочки 200 л — бесплатно по договору",
        "Еврокубы 1000 л — бесплатно по договору",
        "Микроавтобус до 8 000 л",
        "Полуприцеп до 28 000 л",
        "Вагон-цистерна до 60 000 л"
      ]
    },
    {
      title: "Экологическая документация",
      description: "Готовим и согласуем комплект документов: инструкции, экопаспорт, инвентаризацию, нормативы образования отходов, разрешения и регламенты производственного контроля.",
      image: "https://images.unsplash.com/photo-1674471361339-2e1e1dbd3e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      icon: FileText,
      features: [
        "Инструкции по обращению с отходами",
        "Экологический паспорт предприятия",
        "Инвентаризация и акты",
        "Нормативы образования отходов",
        "Консультации по хранению и передаче"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero секция */}
      <section className="relative py-16 md:py-24 px-[20px] md:px-[100px] lg:px-[260px] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#fcd900] to-transparent opacity-10 blur-3xl rounded-full" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[920px]"
        >
          <div className="h-[4px] w-[60px] bg-[#fcd900] mb-8" />
          
          <h1 className="font-['Roboto:Regular',sans-serif] font-normal leading-[50px] md:leading-[60px] text-[32px] md:text-[48px] text-black mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Полный цикл услуг
          </h1>

          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[18px] text-black tracking-[0.36px] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
            От сбора отработанных масел до оформления документации. Работаем по всей Беларуси с юридическими и физическими лицами.
          </p>
        </motion.div>
      </section>

      {/* Услуги - большие блоки */}
      {services.map((service, idx) => (
        <section 
          key={idx} 
          className={`relative py-16 md:py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="px-[20px] md:px-[100px] lg:px-[260px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Изображение */}
              <motion.div 
                className={`relative rounded-2xl overflow-hidden shadow-2xl ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent z-10" />
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                
                {/* Иконка в углу */}
                <div className="absolute top-8 left-8 z-20">
                  <div className="size-[80px] bg-[#fcd900] rounded-2xl flex items-center justify-center shadow-xl">
                    <service.icon className="size-[45px] text-black" strokeWidth={1.5} />
                  </div>
                </div>
              </motion.div>

              {/* Контент */}
              <div className={idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h2 className="font-['Roboto:Medium',sans-serif] leading-[45px] text-[28px] md:text-[36px] text-black mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {service.title}
                  </h2>

                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[18px] text-black tracking-[0.36px] mb-8 opacity-80" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-10">
                    {service.features.map((feature, featureIdx) => (
                      <motion.div
                        key={featureIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + featureIdx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <Check className="size-[20px] text-[#fcd900] mt-1 shrink-0" strokeWidth={3} />
                        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[26px] text-[17px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onNavigate('/contacts')}
                    className="bg-[#fcd900] rounded-lg h-[56px] px-8 flex items-center gap-3 hover:bg-[#e5c400] transition-all shadow-lg hover:shadow-xl"
                  >
                    <span className="font-['Roboto:Medium',sans-serif] leading-[30px] text-[18px] text-black tracking-[0.36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Заказать услугу
                    </span>
                    <ArrowRight className="size-[18px]" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Процесс работы */}
      <section className="relative py-16 md:py-24 px-[20px] md:px-[100px] lg:px-[260px] bg-black text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1600221891660-7bc38ce938ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="h-[4px] w-[60px] bg-[#fcd900] mb-8 mx-auto" />
            <h2 className="font-['Roboto:Medium',sans-serif] leading-[50px] text-[36px] text-white mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
              Как мы работаем
            </h2>
            <p className="font-['Roboto:Regular',sans-serif] text-[18px] text-white opacity-70 max-w-[700px] mx-auto" style={{ fontVariationSettings: "'wdth' 100" }}>
              Простой и прозрачный процесс от заявки до документов
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { step: "01", title: "Заявка", desc: "Оставляете заявку на сайте или по телефону" },
              { step: "02", title: "Согласование", desc: "Уточняем объём, условия и согласовываем выезд" },
              { step: "03", title: "Откачка", desc: "Приезжаем и выполняем откачку спецтехникой" },
              { step: "04", title: "Документы", desc: "Оформляем полный пакет закрывающих документов" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <motion.div 
                    className="size-[100px] mx-auto rounded-full border-4 border-[#fcd900] flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-['Roboto:Bold',sans-serif] text-[32px] text-[#fcd900]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {item.step}
                    </span>
                  </motion.div>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 left-[calc(100%+1.5rem)] w-[calc(100%-3rem)] h-[2px] bg-[#fcd900] opacity-30" />
                  )}
                </div>
                <h3 className="font-['Roboto:Medium',sans-serif] text-[24px] text-white mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {item.title}
                </h3>
                <p className="font-['Roboto:Regular',sans-serif] text-[16px] text-white opacity-70" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('/contacts')}
              className="bg-[#fcd900] rounded-lg h-[56px] px-10 inline-flex items-center gap-3 hover:bg-[#e5c400] transition-all shadow-lg hover:shadow-xl"
            >
              <span className="font-['Roboto:Medium',sans-serif] leading-[30px] text-[18px] text-black tracking-[0.36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Начать сотрудничество
              </span>
              <ArrowRight className="size-[18px]" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// ============= СТРАНИЦА: ПУНКТЫ СБОРА =============
function PointsPage({ onNavigate }: { onNavigate: (slug: string) => void }) {
  const sections = [
    {
      title: "Передвижной заготовительный пункт",
      description: "Выезжаем туда, где вам удобно, и скупаем отработанные масла — от небольших партий до крупнотоннажных сливов. Работаем с канистрами, бочками и IBC-еврокубами.",
      image: imgMobilePoint,
      icon: MapPin,
      features: [
        "Выезд по всей Беларуси",
        "Работа с любыми объёмами",
        "Шланги 10-50 метров для доступа к резервуарам",
        "Откачка без демонтажа оборудования",
        "Оперативный выезд по заявке"
      ]
    },
    {
      title: "Наш автопарк",
      description: "Собственная спецтехника для откачки и транспортировки отработанных масел. Подбираем транспорт под ваш объём — от микроавтобуса до вагон-цистерн.",
      image: imgAutopark,
      icon: Truck,
      features: [
        "Микроавтобус — до 8 000 л (манёвренный)",
        "Полуприцеп-цистерна — до 28 000 л",
        "Вагон-цистерна — до 60 000 л (ж/д)",
        "Секционные цистерны с подогревом",
        "Гибкий график работы"
      ]
    },
    {
      title: "Тара и оборудование",
      description: "Предоставляем ёмкости для накопления отработанных масел по договору бесплатно. Вся тара соответствует требованиям безопасности и удобна в эксплуатации.",
      image: "https://images.unsplash.com/photo-1743228746138-c8690a2f7ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      icon: Package,
      features: [
        "Бочки 200 л — бесплатно по договору",
        "Еврокубы 1000 л — бесплатно по договору",
        "Удобная переливка и хранение",
        "Безопасная откачка насосами",
        "Доставка тары на объект"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero секция */}
      <section className="relative py-16 md:py-24 px-[20px] md:px-[100px] lg:px-[260px] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#fcd900] to-transparent opacity-10 blur-3xl rounded-full" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[920px]"
        >
          <div className="h-[4px] w-[60px] bg-[#fcd900] mb-8" />
          
          <h1 className="font-['Roboto:Regular',sans-serif] font-normal leading-[50px] md:leading-[60px] text-[32px] md:text-[48px] text-black mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
            Пункты сбора
          </h1>

          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[18px] text-black tracking-[0.36px] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
            Мобильные решения для сбора отработанных масел. Приезжаем к вам с необходимой техникой и оборудованием.
          </p>
        </motion.div>
      </section>

      {/* Основные секции */}
      {sections.map((section, idx) => (
        <section 
          key={idx} 
          className={`relative py-16 md:py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="px-[20px] md:px-[100px] lg:px-[260px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Изображение */}
              <motion.div 
                className={`relative rounded-2xl overflow-hidden shadow-2xl ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent z-10" />
                <ImageWithFallback
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                
                {/* Иконка в углу */}
                <div className="absolute top-8 left-8 z-20">
                  <div className="size-[80px] bg-[#fcd900] rounded-2xl flex items-center justify-center shadow-xl">
                    <section.icon className="size-[45px] text-black" strokeWidth={1.5} />
                  </div>
                </div>
              </motion.div>

              {/* Контент */}
              <div className={idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h2 className="font-['Roboto:Medium',sans-serif] leading-[45px] text-[28px] md:text-[36px] text-black mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {section.title}
                  </h2>

                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] text-[18px] text-black tracking-[0.36px] mb-8 opacity-80" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {section.description}
                  </p>

                  <div className="space-y-4 mb-10">
                    {section.features.map((feature, featureIdx) => (
                      <motion.div
                        key={featureIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + featureIdx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <Check className="size-[20px] text-[#fcd900] mt-1 shrink-0" strokeWidth={3} />
                        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[26px] text-[17px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onNavigate('/contacts')}
                    className="bg-[#fcd900] rounded-lg h-[56px] px-8 flex items-center gap-3 hover:bg-[#e5c400] transition-all shadow-lg hover:shadow-xl"
                  >
                    <span className="font-['Roboto:Medium',sans-serif] leading-[30px] text-[18px] text-black tracking-[0.36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Вызвать выезд
                    </span>
                    <ArrowRight className="size-[18px]" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Процесс работы */}
      <section className="relative py-16 md:py-24 px-[20px] md:px-[100px] lg:px-[260px] bg-black text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1638636206910-49cdd0af6d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="h-[4px] w-[60px] bg-[#fcd900] mb-8 mx-auto" />
            <h2 className="font-['Roboto:Medium',sans-serif] leading-[50px] text-[36px] text-white mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
              Как мы работаем
            </h2>
            <p className="font-['Roboto:Regular',sans-serif] text-[18px] text-white opacity-70 max-w-[700px] mx-auto" style={{ fontVariationSettings: "'wdth' 100" }}>
              Простой процесс от заявки до документов
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { step: "01", title: "Заявка", desc: "Оставляете заявку на выезд" },
              { step: "02", title: "Согласование", desc: "Уточняем объём и доступ" },
              { step: "03", title: "Откачка", desc: "Приезжаем со спецтехникой" },
              { step: "04", title: "Документы", desc: "Оформляем закрывающие документы" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <motion.div 
                    className="size-[100px] mx-auto rounded-full border-4 border-[#fcd900] flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-['Roboto:Bold',sans-serif] text-[32px] text-[#fcd900]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {item.step}
                    </span>
                  </motion.div>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 left-[calc(100%+1.5rem)] w-[calc(100%-3rem)] h-[2px] bg-[#fcd900] opacity-30" />
                  )}
                </div>
                <h3 className="font-['Roboto:Medium',sans-serif] text-[24px] text-white mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {item.title}
                </h3>
                <p className="font-['Roboto:Regular',sans-serif] text-[16px] text-white opacity-70" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('/contacts')}
              className="bg-[#fcd900] rounded-lg h-[56px] px-10 inline-flex items-center gap-3 hover:bg-[#e5c400] transition-all shadow-lg hover:shadow-xl"
            >
              <span className="font-['Roboto:Medium',sans-serif] leading-[30px] text-[18px] text-black tracking-[0.36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Вызвать передвижной пункт
              </span>
              <ArrowRight className="size-[18px]" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}



// ============= СТРАНИЦА: КОНТАКТЫ =============
function ContactsPage({ onOpenCompanyCard }: { onOpenCompanyCard: () => void }) {
  const [volumeValue, setVolumeValue] = useState(500);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* ФОНОВАЯ КАРТИНКА ИЗ HERO */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          alt="Промышленная нефтяная платформа на закате" 
          className="absolute inset-0 w-full h-full object-cover object-center md:object-right-top"
          src={isMobile ? imgHeroBgMobile : imgHeroBgDesktop} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      </div>

      {/* КОНТЕНТ С GLASSMORPHISM */}
      <div className="relative z-10 py-24 md:py-32 px-[20px] md:px-[60px] lg:px-[120px]">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="h-[6px] w-[100px] bg-[#fcd900] mb-6" />
            <h1 className="font-['Roboto:Bold',sans-serif] leading-[1.2] text-[40px] md:text-[56px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
              Контакты
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ЛЕВЫЙ БЛОК - КОНТАКТЫ + КАРТА */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Контактная информация */}
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
                <h2 className="font-['Roboto:Bold',sans-serif] leading-[40px] text-[28px] text-white mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Связаться с нами
                </h2>

                <div className="space-y-6">
                  {/* Телефон */}
                  <div className="flex items-start gap-4">
                    <div className="size-[48px] shrink-0 flex items-center justify-center bg-gradient-to-br from-[#fcd900] to-[#e5c400] rounded-xl">
                      <Phone className="size-[24px] text-black" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-white/60 mb-1 uppercase tracking-wider" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Телефон
                      </p>
                      <a href={`tel:${SITE_CONFIG.phone_primary}`} className="font-['Roboto:Bold',sans-serif] text-[20px] text-white hover:text-[#fcd900] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {SITE_CONFIG.phone_primary}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="size-[48px] shrink-0 flex items-center justify-center bg-gradient-to-br from-[#fcd900] to-[#e5c400] rounded-xl">
                      <Mail className="size-[24px] text-black" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-white/60 mb-1 uppercase tracking-wider" style={{ fontVariationSettings: "'wdth' 100" }}>
                        E-mail
                      </p>
                      <a href={`mailto:${SITE_CONFIG.email}`} className="font-['Roboto:Bold',sans-serif] text-[18px] text-white hover:text-[#fcd900] transition-colors break-all" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>

                  {/* Адрес */}
                  <div className="flex items-start gap-4">
                    <div className="size-[48px] shrink-0 flex items-center justify-center bg-gradient-to-br from-[#fcd900] to-[#e5c400] rounded-xl">
                      <MapPin className="size-[24px] text-black" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-white/60 mb-1 uppercase tracking-wider" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Адрес
                      </p>
                      <p className="font-['Roboto:Bold',sans-serif] text-[18px] text-white mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {SITE_CONFIG.address}
                      </p>
                      <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-white/60" style={{ fontVariationSettings: "'wdth' 100" }}>
                        УНП: {SITE_CONFIG.unp}
                      </p>
                    </div>
                  </div>

                  {/* Карточка партнера */}
                  <div className="pt-6 border-t border-white/20">
                    <motion.button
                      onClick={onOpenCompanyCard}
                      className="w-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#fcd900]/50 rounded-2xl p-4 transition-all group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="size-[12px] bg-[#fcd900] rounded-full animate-pulse" />
                          <p className="font-['Roboto:Bold',sans-serif] text-[18px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Карточка партнера
                          </p>
                        </div>
                        <ArrowRight className="size-5 text-[#fcd900] group-hover:translate-x-1 transition-transform" />
                      </div>
                      <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-white/60 mt-2 text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Реквизиты и контактная информация
                      </p>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Яндекс Карта */}
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?ll=47.690947%2C41.435442&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0MDcyMDY1Nzk1EpUB0KDQvtGB0YHQuNGPLCDQoNC10YHQv9GD0LHQu9C40LrQsCDQlNCw0LPQtdGB0YLQsNC9LCDRgdC10LvRjNGB0L7QstC10YIg0JDRhdGC0YvQvdGB0LrQuNC5LCDRgdC10LvQviDQmtGD0YDRg9C60LDQuywg0J_RgNC40LzQtdGA0L3QsNGPINGD0LvQuNGG0LAsIDEiCg2Hwz5CFeW9JUI%2C&z=17.61" 
                  className="w-full h-[400px] border-0"
                  allowFullScreen={true}
                />
              </div>
            </motion.div>

            {/* ПРАВЫЙ БЛОК - ФОРМА */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl"
            >
              <h2 className="font-['Roboto:Bold',sans-serif] leading-[40px] text-[28px] text-white mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
                Оставить заявку
              </h2>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Имя"
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl font-['Roboto:Regular',sans-serif] text-[16px] text-white placeholder:text-white/50 focus:border-[#fcd900] focus:ring-2 focus:ring-[#fcd900]/50 outline-none transition-all"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />
                
                <input
                  type="tel"
                  placeholder="Телефон"
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl font-['Roboto:Regular',sans-serif] text-[16px] text-white placeholder:text-white/50 focus:border-[#fcd900] focus:ring-2 focus:ring-[#fcd900]/50 outline-none transition-all"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />
                
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl font-['Roboto:Regular',sans-serif] text-[16px] text-white placeholder:text-white/50 focus:border-[#fcd900] focus:ring-2 focus:ring-[#fcd900]/50 outline-none transition-all"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />
                
                <input
                  type="text"
                  placeholder="Адрес/локация"
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl font-['Roboto:Regular',sans-serif] text-[16px] text-white placeholder:text-white/50 focus:border-[#fcd900] focus:ring-2 focus:ring-[#fcd900]/50 outline-none transition-all"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />
                
                <div>
                  <label className="block mb-3 font-['Roboto:Medium',sans-serif] text-[15px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Примерный объём: <span className="text-[#fcd900]">{volumeValue} л</span>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="50"
                    value={volumeValue}
                    onChange={(e) => setVolumeValue(Number(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#fcd900]"
                  />
                </div>
                
                <select
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl font-['Roboto:Regular',sans-serif] text-[16px] text-white focus:border-[#fcd900] focus:ring-2 focus:ring-[#fcd900]/50 outline-none transition-all"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <option className="bg-black">Моторное (минеральное)</option>
                  <option className="bg-black">Моторное (синтетическое)</option>
                  <option className="bg-black">Гидравлическое</option>
                  <option className="bg-black">Трансмиссионное</option>
                  <option className="bg-black">Турбинное</option>
                  <option className="bg-black">Компрессионное</option>
                  <option className="bg-black">Индустриальное</option>
                  <option className="bg-black">Дизельное</option>
                  <option className="bg-black">Авиационное</option>
                  <option className="bg-black">Трансформаторное</option>
                  <option className="bg-black">Другое</option>
                </select>

                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="tara" value="yes" className="accent-[#fcd900] w-4 h-4" />
                    <span className="font-['Roboto:Regular',sans-serif] text-[16px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Нужна тара: Да
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="tara" value="no" className="accent-[#fcd900] w-4 h-4" defaultChecked />
                    <span className="font-['Roboto:Regular',sans-serif] text-[16px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Нет
                    </span>
                  </label>
                </div>
                
                <textarea
                  placeholder="Комментарий"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl font-['Roboto:Regular',sans-serif] text-[16px] text-white placeholder:text-white/50 focus:border-[#fcd900] focus:ring-2 focus:ring-[#fcd900]/50 outline-none resize-none transition-all"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />

                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-white/70" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Нажимая «Отправить», вы даёте согласие на обработку персональных данных.
                </p>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#fcd900] to-[#e5c400] rounded-xl h-[56px] flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-[#fcd900]/50 transition-all group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-['Roboto:Bold',sans-serif] text-[18px] text-black tracking-wide" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Отправить заявку
                  </span>
                  <ArrowRight className="size-[20px] text-black group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============= FOOTER =============
function Footer({ onNavigate }: { onNavigate: (slug: string) => void }) {
  return (
    <footer className="relative bg-[#1a1a1a] pt-16 pb-8">
      {/* Background with opacity */}
      <div className="absolute inset-0 opacity-5">
        <img alt="" className="absolute inset-0 object-cover pointer-events-none size-full" src="https://images.unsplash.com/photo-1680970422424-f63d2355adb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" />
      </div>

      <div className="relative z-10 px-[20px] md:px-[100px] lg:px-[260px]">
        <div className="h-[4px] w-[80px] bg-[#fcd900] mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-['Roboto:Medium',sans-serif] leading-[40px] text-[24px] text-white mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
              Контакты
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-white opacity-50 mb-1">
                  Телефон
                </p>
                <p className="font-['Roboto:Regular',sans-serif] font-normal text-[18px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {SITE_CONFIG.phone_primary}
                </p>
              </div>
              <div>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-white opacity-50 mb-1">
                  Email
                </p>
                <p className="font-['Roboto:Regular',sans-serif] font-normal text-[18px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {SITE_CONFIG.email}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-['Roboto:Medium',sans-serif] leading-[40px] text-[24px] text-white mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
              Услуги
            </h3>
            <nav className="space-y-2">
              {PAGES_STRUCTURE.filter(p => p.parent === 'services').map((item) => (
                <a
                  key={item.id}
                  href={item.slug}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.slug);
                  }}
                  className="block font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-white opacity-70 hover:opacity-100 hover:text-[#fcd900] transition-all" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {item.nav_label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-['Roboto:Medium',sans-serif] leading-[40px] text-[24px] text-white mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
              Информация
            </h3>
            <nav className="space-y-2">
              {PAGES_STRUCTURE.filter(p => p.parent === 'info').map((item) => (
                <a
                  key={item.id}
                  href={item.slug}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.slug);
                  }}
                  className="block font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-white opacity-70 hover:opacity-100 hover:text-[#fcd900] transition-all" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {item.nav_label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-['Roboto:Medium',sans-serif] leading-[40px] text-[24px] text-white mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
              Компания
            </h3>
            <nav className="space-y-2">
              {['О нас', 'Пункты сбора', 'Контакты'].map((item) => {
                const link = item === 'О нас' ? '/about' : item === 'Пункты сбора' ? '/points' : '/contacts';
                return (
                  <a
                    key={item}
                    href={link}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link);
                    }}
                    className="block font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-white opacity-70 hover:opacity-100 hover:text-[#fcd900] transition-all" 
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {item}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-white border-opacity-10">
          <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-white opacity-50" style={{ fontVariationSettings: "'wdth' 100" }}>
            © 2025 {SITE_CONFIG.name} | Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============= MAIN APP =============
export default function App() {
  const [currentRoute, setCurrentRoute] = useState('/');
  const [isCompanyCardOpen, setIsCompanyCardOpen] = useState(false);

  useEffect(() => {
    const handleNavigate = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setCurrentRoute(customEvent.detail);
    };

    window.addEventListener('navigate', handleNavigate as EventListener);
    return () => window.removeEventListener('navigate', handleNavigate as EventListener);
  }, []);

  const handleNavigate = (slug: string) => {
    setCurrentRoute(slug);
    window.scrollTo(0, 0);
  };

  const getCurrentPage = () => {
    return PAGES_STRUCTURE.find(p => p.slug === currentRoute);
  };

  const renderPage = () => {
    const page = getCurrentPage();
    if (!page) return <HomePage />;

    switch (page.id) {
      case 'home': return <HomePage onNavigate={handleNavigate} />;
      case 'about': return <AboutPage onNavigate={handleNavigate} />;
      case 'services': return <ServicesPage onNavigate={handleNavigate} />;
      case 'collect-and-transit': return <ServicesPage onNavigate={handleNavigate} />;
      case 'capacity-and-transport': return <ServicesPage onNavigate={handleNavigate} />;
      case 'dev-eco-documentation': return <ServicesPage onNavigate={handleNavigate} />;
      case 'points': return <PointsPage onNavigate={handleNavigate} />;
      case 'moveable': return <PointsPage onNavigate={handleNavigate} />;
      case 'info': return <AboutPage onNavigate={handleNavigate} />;
      case 'oils-type': return <AboutPage onNavigate={handleNavigate} />;
      case 'faq': return <AboutPage onNavigate={handleNavigate} />;
      case 'certs': return <AboutPage onNavigate={handleNavigate} />;
      case 'contacts': return <ContactsPage onOpenCompanyCard={() => setIsCompanyCardOpen(true)} />;
      default: return <HomePage />;
    }
  };

  const currentPage = getCurrentPage();

  return (
    <div className="bg-black relative min-h-screen">
      <Header currentPage={currentRoute} onNavigate={handleNavigate} />
      <div className={currentPage?.id === 'home' ? '' : 'pt-[120px]'}>
        {renderPage()}
      </div>
      <Footer onNavigate={handleNavigate} />
      <CompanyCard isOpen={isCompanyCardOpen} onClose={() => setIsCompanyCardOpen(false)} />
    </div>
  );
}
