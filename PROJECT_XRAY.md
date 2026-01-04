# 🔬 PROJECT X-RAY: OTRABOTKA.BY
## Полная техническая документация проекта

> **Версия:** 1.0  
> **Дата анализа:** 2025  
> **Название проекта:** Использовать дизайн для сайта  
> **Домен:** otrabotka.by  
> **Сервер:** 89.23.96.192  
> **GitHub:** https://github.com/offflinerpsy/otrabotka-by

---

## 📋 СОДЕРЖАНИЕ

1. [Обзор проекта](#-обзор-проекта)
2. [Технологический стек](#-технологический-стек)
3. [Архитектура приложения](#-архитектура-приложения)
4. [Структура файлов](#-структура-файлов)
5. [Компоненты](#-компоненты)
6. [Система дизайна](#-система-дизайна)
7. [Анимации и интерактивность](#-анимации-и-интерактивность)
8. [Данные и контент](#-данные-и-контент)
9. [Роутинг и навигация](#-роутинг-и-навигация)
10. [Деплой и инфраструктура](#-деплой-и-инфраструктура)

---

## 🏢 ОБЗОР ПРОЕКТА

### О компании

| Параметр | Значение |
|----------|----------|
| **Название** | ООО «Трейднефтепром» |
| **Директор** | Поджаров Игорь Александрович |
| **УНН** | 193918407 |
| **ОКПО** | 502923095000 |
| **ОКЭД** | 46719 |
| **Телефон** | +375-25-521-24-09 |
| **Email** | Tradenefteprom@bk.ru |
| **Юр. адрес** | 220035, г. Минск, ул.Тарханова 13а, помещение 33, секция 10 |
| **Факт. адрес** | 220045, г. Минск, пр-т Дзержинского, 127 пом. 484 |
| **Банк** | ЗАО «МТБанк», БИК: MTBKBY22 |
| **Счёт BYN** | BY38MTBK30120001093300134799 |

### Суть бизнеса

**Переработка отработанных масел путем вакуумной дистилляции**

- Собственный завод с технологией Vbolt VBT-DB
- Производительность: до 2000 л/час
- Выход базового масла: 80-90%
- Сбор и вывоз отработанных масел по всей Беларуси
- Экологическая документация под ключ

---

## 🛠 ТЕХНОЛОГИЧЕСКИЙ СТЕК

### Core Framework

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "typescript": "implicit",
  "vite": "6.3.5"
}
```

### UI & Styling

```json
{
  "tailwindcss": "v4.1.3",
  "class-variance-authority": "^0.7.1",
  "clsx": "*",
  "tailwind-merge": "*"
}
```

### Animations

```json
{
  "motion": "*"  // motion/react (Framer Motion v11+)
}
```

### UI Components (Radix UI)

```json
{
  "@radix-ui/react-accordion": "^1.2.3",
  "@radix-ui/react-alert-dialog": "^1.1.6",
  "@radix-ui/react-aspect-ratio": "^1.1.2",
  "@radix-ui/react-avatar": "^1.1.3",
  "@radix-ui/react-checkbox": "^1.1.4",
  "@radix-ui/react-collapsible": "^1.1.3",
  "@radix-ui/react-context-menu": "^2.2.6",
  "@radix-ui/react-dialog": "^1.1.6",
  "@radix-ui/react-dropdown-menu": "^2.1.6",
  "@radix-ui/react-hover-card": "^1.1.6",
  "@radix-ui/react-label": "^2.1.2",
  "@radix-ui/react-menubar": "^1.1.6",
  "@radix-ui/react-navigation-menu": "^1.2.5",
  "@radix-ui/react-popover": "^1.1.6",
  "@radix-ui/react-progress": "^1.1.2",
  "@radix-ui/react-radio-group": "^1.2.3",
  "@radix-ui/react-scroll-area": "^1.2.3",
  "@radix-ui/react-select": "^2.1.6",
  "@radix-ui/react-separator": "^1.1.2",
  "@radix-ui/react-slider": "^1.2.3",
  "@radix-ui/react-slot": "^1.1.2",
  "@radix-ui/react-switch": "^1.1.3",
  "@radix-ui/react-tabs": "^1.1.3",
  "@radix-ui/react-toggle": "^1.1.2",
  "@radix-ui/react-toggle-group": "^1.1.2",
  "@radix-ui/react-tooltip": "^1.1.8"
}
```

### Icons

```json
{
  "lucide-react": "^0.487.0"
}
```

### Используемые иконки Lucide (25+)

```typescript
import { 
  Droplet, Truck, FileText, Check, Phone, Mail, 
  ArrowRight, MapPin, Package, Zap, Award, Shield, 
  Users, Target, Factory, Gauge, Recycle, Beaker, 
  Flame, Wind, ChevronLeft, ChevronRight, Menu, X, 
  Building2, User, CreditCard, Hash, Copy, Instagram, ArrowUp
} from 'lucide-react';
```

### Additional Libraries

```json
{
  "embla-carousel-react": "^8.6.0",
  "input-otp": "^1.4.2",
  "next-themes": "^0.4.6",
  "react-day-picker": "^8.10.1",
  "react-hook-form": "^7.55.0",
  "react-resizable-panels": "^2.1.7",
  "recharts": "^2.15.2",
  "sonner": "^2.0.3",
  "vaul": "^1.1.2",
  "cmdk": "^1.1.1"
}
```

### Build Tools

```json
{
  "@vitejs/plugin-react-swc": "^3.10.2",
  "@types/node": "^20.10.0"
}
```

---

## 🏗 АРХИТЕКТУРА ПРИЛОЖЕНИЯ

### Паттерн: Monolithic SPA

Весь основной код находится в одном файле `App.tsx` (2364 строки):

```
App.tsx
├── Импорты (строки 1-26)
├── SITE_CONFIG (строки 27-36)
├── PAGES_STRUCTURE (строки 38-170)
├── SVG компоненты (строки 172-200)
├── Breadcrumbs (строки 202-250)
├── HeroWithParallax (строки 252-478)
├── HomePage (строки 480-700)
├── VacuumGallery (строки 702-780)
├── AboutPage (строки 782-1400)
├── ServicesPage (строки 1402-1700)
├── PointsPage (строки 1702-2000)
├── ContactsPage (строки 2002-2200)
└── App (главный роутер, строки 2202-2364)
```

### Роутинг: Client-side State Router

```typescript
function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  
  const handleNavigate = (slug: string) => {
    setCurrentRoute(slug);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentRoute) {
      case '/': return <HomePage onNavigate={handleNavigate} />;
      case '/about': return <AboutPage onNavigate={handleNavigate} />;
      case '/services': return <ServicesPage onNavigate={handleNavigate} />;
      case '/points': return <PointsPage onNavigate={handleNavigate} />;
      case '/contacts': return <ContactsPage onNavigate={handleNavigate} />;
      default: return <HomePage onNavigate={handleNavigate} />;
    }
  };
  
  return (
    <>
      <Header currentPage={currentRoute} onNavigate={handleNavigate} />
      {renderPage()}
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
```

---

## 📁 СТРУКТУРА ФАЙЛОВ

```
figma_export/
├── src/
│   ├── App.tsx                          # Главный файл (2364 строк)
│   ├── main.tsx                         # Entry point
│   ├── index.css                        # Tailwind CSS v4 (3179 строк)
│   ├── styles/
│   │   └── globals.css                  # CSS переменные (208 строк)
│   ├── assets/                          # Figma exported images
│   │   ├── 0ef914d7a765c3012a28c7076295695e3c009124.png
│   │   ├── 1f3bb52c84bd883680755fd9c1169650e8fac2a7.png
│   │   ├── 5318ac3b9018886fb691dd49ad8d4521effef82d.png
│   │   ├── 7e9b1e017e16ed318c62e3f3a7a2da6c108ec93e.png
│   │   ├── 86b0771ecac5b51df01798010016074da869335e.png
│   │   ├── c1c9c571683cff87b5adc0931d8495ad4e7821ae.png
│   │   ├── f3e71c050c2408dfaff4c64f4fc2b50ef02730b0.png
│   │   └── f66ff7c6a6c66e3a83ddf3d5069a4957d63e0458.png
│   ├── imports/
│   │   └── svg-649d6ayg3u.ts            # SVG paths объект
│   └── components/
│       ├── Header.tsx                   # Навигация (180 строк)
│       ├── Footer.tsx                   # Футер (170 строк)
│       ├── CompanyCard.tsx              # Карточка предприятия (332 строки)
│       ├── figma/
│       │   └── ImageWithFallback.tsx    # Компонент загрузки изображений
│       └── ui/                          # 48 UI компонентов (shadcn/ui стиль)
│           ├── accordion.tsx
│           ├── alert-dialog.tsx
│           ├── alert.tsx
│           ├── aspect-ratio.tsx
│           ├── avatar.tsx
│           ├── badge.tsx
│           ├── breadcrumb.tsx
│           ├── button.tsx
│           ├── calendar.tsx
│           ├── card.tsx
│           ├── carousel.tsx
│           ├── chart.tsx
│           ├── checkbox.tsx
│           ├── collapsible.tsx
│           ├── command.tsx
│           ├── context-menu.tsx
│           ├── dialog.tsx
│           ├── drawer.tsx
│           ├── dropdown-menu.tsx
│           ├── form.tsx
│           ├── hover-card.tsx
│           ├── input-otp.tsx
│           ├── input.tsx
│           ├── label.tsx
│           ├── menubar.tsx
│           ├── navigation-menu.tsx
│           ├── pagination.tsx
│           ├── popover.tsx
│           ├── progress.tsx
│           ├── radio-group.tsx
│           ├── resizable.tsx
│           ├── scroll-area.tsx
│           ├── select.tsx
│           ├── separator.tsx
│           ├── sheet.tsx
│           ├── sidebar.tsx
│           ├── skeleton.tsx
│           ├── slider.tsx
│           ├── sonner.tsx
│           ├── switch.tsx
│           ├── table.tsx
│           ├── tabs.tsx
│           ├── textarea.tsx
│           ├── toast.tsx
│           ├── toaster.tsx
│           ├── toggle-group.tsx
│           ├── toggle.tsx
│           └── tooltip.tsx
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── .gitignore
└── PROJECT_XRAY.md                      # Этот файл
```

---

## 🧩 КОМПОНЕНТЫ

### 1. Header.tsx

**Назначение:** Фиксированная навигация с адаптивным поведением при скролле

**Функциональность:**
- Отслеживание скролла (`scrolled` state)
- Мобильное меню (гамбургер)
- Параллакс эффект на scroll
- CTA кнопка с телефоном

**Анимации:**
```typescript
<motion.header
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
/>

<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} />

<motion.button whileHover={{ y: -2 }} />
```

**Стейт:**
```typescript
const [scrolled, setScrolled] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
```

---

### 2. Footer.tsx

**Назначение:** Футер сайта с контактами и навигацией

**Секции:**
1. Информация о компании + Instagram
2. Быстрые ссылки навигации
3. Список услуг
4. Контактная информация

**Функции:**
- `scrollToTop()` - плавная прокрутка вверх
- Кнопка ArrowUp с анимацией hover

---

### 3. CompanyCard.tsx

**Назначение:** Модальное окно с реквизитами предприятия

**Данные (companyData):**
```typescript
const companyData = {
  legalName: 'ООО «Трейднефтепром»',
  director: 'Поджаров Игорь Александрович',
  phone: '+375-25-521-24-09',
  email: 'Tradenefteprom@bk.ru',
  legalAddress: '220035, ...',
  actualAddress: '220045, ...',
  warehouseAddresses: ['...', '...'],
  accountBYN: 'BY38MTBK30120001093300134799',
  oked: '46719',
  bic: 'MTBKBY22',
  bankName: 'ЗАО «МТБанк»',
  bankAddress: '220007, г. Минск, ул. Толстого, 10',
  unn: '193918407',
  okpo: '502923095000'
};
```

**Функции:**
- `copyToClipboard()` - копирование с fallback через `document.execCommand`
- Компонент `CopyButton` с анимацией check

**Анимации:**
```typescript
<AnimatePresence>
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} />
</AnimatePresence>
```

---

### 4. HeroWithParallax

**Назначение:** Hero секция с параллакс эффектом фона

**Параллакс логика:**
```typescript
const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 1200], [0, 300]);
const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
```

**Декоративные элементы:**
- Градиентные блики с blur
- Scroll indicator с анимацией pulse
- Glassmorphism карточки "Кто мы"

---

### 5. VacuumGallery

**Назначение:** Слайдер изображений вакуумной установки

**Функциональность:**
- Авто-ротация каждые 4 секунды
- Кнопки prev/next
- Индикаторы точками

**Стейт:**
```typescript
const [currentSlide, setCurrentSlide] = useState(0);
const images = [imgVacuum1, imgVacuum2, imgVacuum3];
```

**Анимации слайдов:**
```typescript
<motion.img
  animate={{
    opacity: currentSlide === idx ? 1 : 0,
    scale: currentSlide === idx ? 1 : 1.1,
  }}
  transition={{ duration: 0.7, ease: "easeInOut" }}
/>
```

---

### 6. UI Components (48 компонентов)

**Паттерн:** shadcn/ui style с Radix UI primitives

**Общая структура:**
```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center...",
  {
    variants: {
      variant: { default: "...", destructive: "...", outline: "..." },
      size: { default: "...", sm: "...", lg: "..." }
    }
  }
)

export const Button = React.forwardRef<...>((props, ref) => {
  return <Slot ref={ref} className={cn(buttonVariants(props))} {...props} />
})
```

---

## 🎨 СИСТЕМА ДИЗАЙНА

### Цветовая палитра

**Основные цвета:**
```css
--primary-yellow: #fcd900
--primary-yellow-hover: #e5c400
--black: #000000
--white: #ffffff
```

**Прозрачности:**
```css
white/5, white/10, white/20, white/30, white/50, white/70, white/80, white/90
black/60, black/70, black/80, black/95
```

**CSS Variables (globals.css):**
```css
:root {
  --font-size: 16px;
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --primary: #030213;
  --secondary: oklch(0.95 0.0058 264.53);
  --destructive: #d4183d;
  --border: rgba(0, 0, 0, 0.1);
  --radius: 0.625rem;
}
```

### Типографика

**Шрифты:**
```css
font-family: 'Roboto:Bold', sans-serif
font-family: 'Roboto:Medium', sans-serif
font-family: 'Roboto:Regular', sans-serif
```

**Font Variation Settings:**
```typescript
style={{ fontVariationSettings: "'wdth' 100" }}
```

**Размеры текста:**
```
Заголовки:
- H1: 48px / 72px / 88px (mobile/tablet/desktop)
- H2: 32px / 48px
- H3: 22px / 26px

Текст:
- Body: 16px / 18px
- Small: 13px / 14px
- Micro: 11px / 12px
```

### Spacing & Layout

**Горизонтальные отступы (responsive):**
```css
px-[20px]          /* mobile */
md:px-[60px]       /* tablet */
lg:px-[120px]      /* desktop */

/* Или альтернативная сетка: */
px-[20px]
md:px-[100px]
lg:px-[260px]
```

**Вертикальные отступы секций:**
```css
py-16 md:py-24     /* 64px / 96px */
py-24 md:py-32     /* 96px / 128px */
```

### Border Radius

```css
rounded-lg         /* 8px */
rounded-xl         /* 12px */
rounded-2xl        /* 16px */
rounded-3xl        /* 24px */
rounded-full       /* circle */
```

### Shadows

```css
shadow-md
shadow-lg
shadow-xl
shadow-2xl
shadow-[#fcd900]/20    /* colored shadow */
shadow-[#fcd900]/50    /* bright colored shadow */
```

### Glassmorphism Pattern

```css
.glassmorphism-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
}
```

Tailwind классы:
```html
<div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl">
```

---

## ✨ АНИМАЦИИ И ИНТЕРАКТИВНОСТЬ

### 1. Parallax Effect (Hero)

```typescript
const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 1200], [0, 300]);
const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

<motion.div style={{ y, backgroundImage: `url(${imgHeroBg})` }} />
<motion.div style={{ opacity: heroOpacity }} />
```

### 2. Entry Animations

**Fade + Slide Up:**
```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
/>
```

**Slide from sides:**
```typescript
// From left:
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}

// From right:
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
```

### 3. Scroll-triggered Animations

```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: idx * 0.15 }}
/>
```

### 4. Hover Effects

**Scale + Y transform:**
```typescript
<motion.button
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
/>
```

**Card lift:**
```typescript
<motion.div whileHover={{ y: -5 }} />
```

**Icon translate:**
```typescript
<ArrowRight className="group-hover:translate-x-1 transition-transform" />
```

### 5. Staggered Animations

```typescript
{items.map((item, idx) => (
  <motion.div
    transition={{ delay: idx * 0.1, duration: 0.5 }}
  />
))}
```

### 6. Image Scale on Hover

```typescript
<div className="overflow-hidden">
  <img className="group-hover:scale-105 transition-transform duration-300" />
</div>
```

### 7. Mobile Menu Animation

```typescript
<motion.div
  animate={{
    opacity: mobileMenuOpen ? 1 : 0,
    y: mobileMenuOpen ? 0 : -20,
    pointerEvents: mobileMenuOpen ? 'auto' : 'none'
  }}
  transition={{ duration: 0.3 }}
/>
```

### 8. Scroll Indicator Pulse

```typescript
<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 1.5, repeat: Infinity }}
/>
```

### 9. Modal AnimatePresence

```typescript
<AnimatePresence>
  {isOpen && (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} />
    </>
  )}
</AnimatePresence>
```

---

## 📊 ДАННЫЕ И КОНТЕНТ

### SITE_CONFIG

```typescript
const SITE_CONFIG = {
  name: "Сбор отработанных масел",
  phone_primary: "+375 XX XXX-XX-XX",
  phone_secondary: "",
  email: "info@oils-collection.by",
  address: "г. Минск, ул. Примерная, д. 1",
  unp: "XXXXXXXXX",
  instagram: "#"
};
```

### PAGES_STRUCTURE (13 страниц)

```typescript
const PAGES_STRUCTURE = [
  { id: "home", slug: "/", nav_label: "Главная", show_in_menu: true, order: 1, parent: null,
    seo: { title: "Сбор и утилизация отработанных масел по Беларуси...", h1: "Сбор и утилизация..." }
  },
  { id: "about", slug: "/about", nav_label: "О нас", show_in_menu: true, order: 2 },
  { id: "services", slug: "/services", nav_label: "Услуги", show_in_menu: true, order: 3 },
  
  // Дочерние страницы услуг
  { id: "collect-and-transit", slug: "/services/collect-and-transit", parent: "services" },
  { id: "capacity-and-transport", slug: "/services/capacity-and-transport", parent: "services" },
  { id: "dev-eco-documentation", slug: "/services/dev-eco-documentation", parent: "services" },
  
  { id: "points", slug: "/points", nav_label: "Пункты сбора", show_in_menu: true, order: 4 },
  { id: "moveable", slug: "/points/moveable", parent: "points" },
  
  { id: "info", slug: "/info", nav_label: "Информация", show_in_menu: true, order: 5 },
  { id: "oils-type", slug: "/info/oils-type", parent: "info" },
  { id: "faq", slug: "/info/faq", parent: "info" },
  { id: "certs", slug: "/info/certificates", parent: "info" },
  
  { id: "contacts", slug: "/contacts", nav_label: "Контакты", show_in_menu: true, order: 6 }
];
```

### Данные страницы "О нас"

**Статистика:**
```typescript
const stats = [
  { value: "80-90%", label: "Выход базового масла" },
  { value: "500+", label: "Тонн в месяц" },
  { value: "24/7", label: "Работа завода" }
];
```

**Вакуумная дистилляция:**
```typescript
const vacuumDistillation = [
  { title: "Первый дистиллят", description: "Растворенные топлива...", icon: Droplet },
  { title: "Второй дистиллят", description: "Базовые масла...", icon: Droplet },
  { title: "Третий дистиллят", description: "Кубовый остаток...", icon: Package }
];
```

**Этапы процесса:**
```typescript
const processSteps = [
  { title: "Высокоскоростное центрифугирование", icon: Zap },
  { title: "Тонкопленочный испаритель", icon: Wind },
  { title: "Мембранная дистилляция", icon: Beaker },
  { title: "Каталитический крекинг", icon: Flame }
];
```

**Результаты переработки:**
```typescript
const outputProducts = [
  { name: "Базовое масло SN75-SN500", percentage: "80-90%" },
  { name: "Вода", percentage: "3-5%" },
  { name: "Легкий газойль", percentage: "5-7%" },
  { name: "Остаток асфальта", percentage: "5-8%" }
];
```

**Виды масел:**
```typescript
const oilTypes = [
  "Отработанное моторное масло",
  "Отработанное смазочное масло",
  "Отработанное судовое масло",
  "Черное моторное масло",
  "Отработанное минеральное масло",
  "Отработанное гидравлическое масло",
  "Грязное трансмиссионное масло",
  "Трансмиссионное масло"
];
```

**Преимущества:**
```typescript
const advantages = [
  { title: "Только 1 катализатор", description: "1-3%, стоимость $30/тонна", icon: Beaker },
  { title: "Низкое энергопотребление", description: "3×10⁵ ккал + 40 кВтч", icon: Zap },
  { title: "Высокое качество", description: "Цвет №0.1-0.5", icon: Award },
  { title: "Экологичность", description: "ISO9001:2008, SGS, CE, BV", icon: Recycle }
];
```

**FAQ:**
```typescript
const faqItems = [
  { q: "Как происходит переработка отработанного масла?", a: "..." },
  { q: "Какие виды масел вы принимаете?", a: "..." },
  { q: "Что получается в результате переработки?", a: "..." },
  // ... 8 вопросов
];
```

---

## 🔀 РОУТИНГ И НАВИГАЦИЯ

### State-based Router

```typescript
const [currentRoute, setCurrentRoute] = useState<string>('/');

const handleNavigate = (slug: string) => {
  setCurrentRoute(slug);
  window.scrollTo(0, 0);
};

const renderPage = () => {
  switch (currentRoute) {
    case '/': return <HomePage onNavigate={handleNavigate} />;
    case '/about': return <AboutPage onNavigate={handleNavigate} />;
    case '/services': return <ServicesPage onNavigate={handleNavigate} />;
    case '/points': return <PointsPage onNavigate={handleNavigate} />;
    case '/contacts': return <ContactsPage onNavigate={handleNavigate} />;
    default: return <HomePage onNavigate={handleNavigate} />;
  }
};
```

### Breadcrumbs

```typescript
function Breadcrumbs({ currentPageId }: { currentPageId: string }) {
  const buildBreadcrumbs = () => {
    const crumbs = [];
    let page = PAGES_STRUCTURE.find(p => p.id === currentPageId);
    
    while (page) {
      crumbs.unshift({ label: page.nav_label, slug: page.slug });
      if (page.parent) {
        page = PAGES_STRUCTURE.find(p => p.id === page.parent);
      } else break;
    }
    return crumbs;
  };
  
  // Рендер хлебных крошек с разделителем "/"
}
```

### Custom Navigation Event

```typescript
// Для хлебных крошек
window.dispatchEvent(new CustomEvent('navigate', { detail: crumb.slug }));
```

---

## 🚀 ДЕПЛОЙ И ИНФРАСТРУКТУРА

### Серверная инфраструктура

| Параметр | Значение |
|----------|----------|
| **IP адрес** | 89.23.96.192 |
| **ОС** | Ubuntu 24.04 |
| **Web-сервер** | nginx 1.24.0 |
| **Путь к сайту** | /var/www/otrabotka |
| **nginx config** | /etc/nginx/sites-available/otrabotka |

### nginx конфигурация

```nginx
server {
    listen 80;
    server_name otrabotka.by www.otrabotka.by _;
    root /var/www/otrabotka;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Vite Configuration

```typescript
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // Package aliases
      'lucide-react@0.487.0': 'lucide-react',
      '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
      // ... другие пакеты
      
      // Figma asset aliases
      'figma:asset/f66ff7c6a6c66e3a83ddf3d5069a4957d63e0458.png': 
        path.resolve(__dirname, './src/assets/f66ff7c6a6c66e3a83ddf3d5069a4957d63e0458.png'),
      // ... 8 изображений
      
      // Path alias
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});
```

### GitHub Repository

- **URL:** https://github.com/offflinerpsy/otrabotka-by
- **.gitignore:**
  ```
  node_modules/
  dist/
  build/
  .vite/
  ```

### Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}
```

---

## 📸 ИЗОБРАЖЕНИЯ

### Figma Assets

| Хеш файла | Использование |
|-----------|---------------|
| `86b0771ecac5b51df01798010016074da869335e.png` | imgBackground |
| `1f3bb52c84bd883680755fd9c1169650e8fac2a7.png` | imgHeroBg |
| `7e9b1e017e16ed318c62e3f3a7a2da6c108ec93e.png` | imgBackground1 |
| `f3e71c050c2408dfaff4c64f4fc2b50ef02730b0.png` | imgBackground2 |
| `f66ff7c6a6c66e3a83ddf3d5069a4957d63e0458.png` | imgVacuum1 |
| `0ef914d7a765c3012a28c7076295695e3c009124.png` | imgVacuum2 |
| `5318ac3b9018886fb691dd49ad8d4521effef82d.png` | imgVacuum3 |
| `c1c9c571683cff87b5adc0931d8495ad4e7821ae.png` | logoImage (Header) |

### External Images (Unsplash)

Используются изображения с Unsplash через CDN:
```
https://images.unsplash.com/photo-XXXXXXXXX?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600
```

---

## 🔧 ОСОБЕННОСТИ РЕАЛИЗАЦИИ

### 1. Figma Export Integration

Проект создан через Figma Make с особым синтаксисом импорта:
```typescript
import imgBackground from "figma:asset/86b0771ecac5b51df01798010016074da869335e.png";
```

Резолвится через Vite aliases.

### 2. SVG Paths Object

Все SVG пути вынесены в отдельный объект:
```typescript
import svgPaths from "./imports/svg-649d6ayg3u";

<path d={svgPaths.p7fb2e00} fill="currentColor" />
```

### 3. ImageWithFallback Component

Компонент для загрузки изображений с placeholder:
```typescript
<ImageWithFallback 
  src="https://..."
  alt="Description"
  className="w-full h-full object-cover"
/>
```

### 4. Copy to Clipboard Fallback

Альтернативный метод копирования для совместимости:
```typescript
const copyToClipboard = (text: string, field: string) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
};
```

### 5. Tailwind v4 Configuration

index.css содержит полный compiled Tailwind CSS v4.1.3 (3179 строк) с:
- @layer properties
- @layer theme
- @layer base
- @layer components
- @layer utilities

---

## 📝 ЗАМЕТКИ ДЛЯ РАЗРАБОТКИ

### TODO:
- [ ] Добавить React Router для правильной навигации по URL
- [ ] Вынести страницы в отдельные файлы
- [ ] Добавить SEO мета-теги (react-helmet)
- [ ] Настроить SSL сертификат на сервере
- [ ] Добавить формы обратной связи (API)
- [ ] Интегрировать аналитику

### Потенциальные улучшения:
- Lazy loading для компонентов страниц
- Service Worker для офлайн поддержки
- Сжатие изображений (WebP)
- Critical CSS extraction

---

> **Документ создан:** 2025  
> **Автор:** GitHub Copilot (Claude Opus 4.5)  
> **Проект:** OTRABOTKA.BY - Переработка отработанных масел
