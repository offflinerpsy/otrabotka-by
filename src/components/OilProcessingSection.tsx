import { Factory, Droplet, Flame, Wind, Beaker, Zap, Check, Recycle, Award, Gauge } from "lucide-react";
import heroImage from "@/assets/oil-refinery-hero.jpg";
import heroImageMobile from "@/assets/oil-refinery-hero-mobile.jpg";

const fontStyle = { fontVariationSettings: "'wdth' 100" };

const processSteps = [
  {
    icon: Beaker,
    title: "Подготовка",
    description: "Отработанные масла очищаются от крупных твердых и металлических включений.",
  },
  {
    icon: Flame,
    title: "Нагрев и испарение",
    description: "Масло поступает в вакуумный реактор, где нагревается до ~325-380°C.",
  },
  {
    icon: Gauge,
    title: "Разделение",
    description: "Компоненты масла испаряются при разных температурных режимах.",
  },
  {
    icon: Wind,
    title: "Конденсация",
    description: "Пары охлаждаются в конденсаторах и превращаются в жидкие фракции.",
  },
  {
    icon: Droplet,
    title: "Сбор",
    description: "Получаются разные продукты: бензин, дизельное топливо, базовое масло.",
  },
];

const advantages = [
  "Снижение температуры — избежание крекинга молекул углеводородов",
  "Энергоэффективность — меньше тепла по сравнению с обычной дистилляцией",
  "Высокий выход — до 70-80% готового продукта в зависимости от сырья",
];

const applications = [
  "Производство новых смазочных материалов",
  "Получение альтернативных видов топлива",
  "Утилизация без вреда для окружающей среды",
];

const distillateResults = [
  { 
    percent: "5-7%", 
    label: "Первый дистиллят",
    sublabel: "Лёгкие фракции",
    dropColor: "#ef4444",
  },
  { 
    percent: "70-80%", 
    label: "Второй дистиллят",
    sublabel: "Базовое масло",
    dropColor: "#fcd900",
    featured: true
  },
  { 
    percent: "15-25%", 
    label: "Третий дистиллят",
    sublabel: "Тяжёлые остатки",
    dropColor: "#374151",
  },
];

export const OilProcessingSection = () => {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Завод по переработке масел" 
            className="hidden md:block w-full h-full object-cover"
          />
          <img 
            src={heroImageMobile} 
            alt="Завод по переработке масел" 
            className="md:hidden w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-[600px] md:min-h-[700px] flex items-center px-[20px] md:px-[100px] lg:px-[260px] py-16 md:py-24">
          <div className="w-full max-w-[900px]">
            <div className="flex items-center gap-4 mb-8">
              <div className="size-[70px] shrink-0 flex items-center justify-center bg-[#fcd900] rounded-2xl shadow-xl">
                <Factory className="size-9 text-black" strokeWidth={2} />
              </div>
              <p
                className="font-['Roboto:Bold',sans-serif] font-bold text-sm tracking-[4px] uppercase text-white/70"
                style={fontStyle}
              >
                Наше производство
              </p>
            </div>

            <h1
              className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.1] text-[32px] md:text-[48px] lg:text-[64px] text-white mb-8"
              style={fontStyle}
            >
              Собственный завод по переработке отработанных масел
            </h1>

            <div className="h-[4px] w-[80px] bg-[#fcd900] mb-8" />

            <p
              className="font-['Roboto:Regular',sans-serif] font-normal text-lg md:text-xl leading-relaxed text-white/90 max-w-[700px] mb-12"
              style={fontStyle}
            >
              Полный цикл: сбор и переработка отработанных масел в Республике Беларусь путём вакуумной дистилляции.
            </p>

            {/* Vacuum Distillation Description */}
            <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-10 max-w-[800px]">
              <h2
                className="font-['Roboto:Medium',sans-serif] text-xl md:text-2xl text-white mb-6"
                style={fontStyle}
              >
                Вакуумная дистилляция
              </h2>
              <p
                className="font-['Roboto:Regular',sans-serif] font-normal text-base md:text-[17px] leading-relaxed text-white/80"
                style={fontStyle}
              >
                Современная технология очистки и регенерации, которая использует пониженное давление для снижения температуры кипения компонентов масла, позволяя разделять его на фракции с меньшими энергозатратами и лучшим качеством.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="py-16 md:py-24 px-[20px] md:px-[100px] lg:px-[260px] bg-white">
        <div className="text-center mb-12 md:mb-16">
          <div className="h-[4px] w-[60px] bg-[#fcd900] mb-8 mx-auto" />
          <h2
            className="font-['Roboto:Medium',sans-serif] leading-[1.2] text-[28px] md:text-[36px] lg:text-[44px] text-black mb-4"
            style={fontStyle}
          >
            Результаты переработки
          </h2>
          <p
            className="font-['Roboto:Regular',sans-serif] font-normal text-base md:text-[17px] leading-relaxed text-black/70 max-w-[600px] mx-auto"
            style={fontStyle}
          >
            Выход продуктов вакуумной дистилляции отработанного масла
          </p>
        </div>

        {/* Results Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1100px] mx-auto">
          {distillateResults.map((item, idx) => (
            <div
              key={idx}
              className={`relative bg-gray-50 rounded-2xl p-6 md:p-8 border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${item.featured ? 'md:scale-105 md:-my-4 border-[#fcd900]' : 'border-gray-200'}`}
            >
              {/* Gradient accent bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ backgroundColor: item.dropColor }}
              />
              
              {/* Droplet Icon - FIXED SIZE CONTAINER */}
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="w-20 h-24 md:w-24 md:h-28">
                  <svg 
                    viewBox="0 0 100 120" 
                    className="w-full h-full"
                  >
                    <defs>
                      <linearGradient id={`dropGradient-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={item.dropColor} stopOpacity="1" />
                        <stop offset="100%" stopColor={item.dropColor} stopOpacity="0.7" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M50 10 C50 10 85 55 85 75 C85 95 70 110 50 110 C30 110 15 95 15 75 C15 55 50 10 50 10Z"
                      fill={`url(#dropGradient-${idx})`}
                      stroke={item.dropColor}
                      strokeWidth="2"
                    />
                    <ellipse cx="35" cy="60" rx="8" ry="15" fill="white" opacity="0.3" />
                  </svg>
                </div>
              </div>

              {/* Percentage */}
              <div className="mb-4 text-center">
                <span 
                  className="font-['Roboto:Bold',sans-serif] font-bold text-4xl md:text-5xl leading-none"
                  style={{ ...fontStyle, color: item.dropColor }}
                >
                  {item.percent}
                </span>
              </div>

              {/* Labels */}
              <h3
                className="font-['Roboto:Medium',sans-serif] text-lg text-black mb-1 text-center"
                style={fontStyle}
              >
                {item.label}
              </h3>
              <p
                className="font-['Roboto:Regular',sans-serif] font-normal text-sm text-black/60 text-center"
                style={fontStyle}
              >
                {item.sublabel}
              </p>

              {/* Featured badge */}
              {item.featured && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-[#fcd900] text-xs font-bold text-black" style={fontStyle}>
                    Основной
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-16 md:py-24 px-[20px] md:px-[100px] lg:px-[260px] bg-gray-50">
        <div className="text-center mb-12 md:mb-16">
          <div className="h-[4px] w-[60px] bg-[#fcd900] mb-8 mx-auto" />
          <h2
            className="font-['Roboto:Medium',sans-serif] leading-[1.2] text-[28px] md:text-[36px] lg:text-[44px] text-black mb-4"
            style={fontStyle}
          >
            Принцип работы
          </h2>
          <p
            className="font-['Roboto:Regular',sans-serif] font-normal text-base md:text-[17px] leading-relaxed text-black/70 max-w-[600px] mx-auto"
            style={fontStyle}
          >
            5 этапов вакуумной дистилляции отработанного масла
          </p>
        </div>

        {/* Desktop Layout - 5 columns */}
        <div className="hidden lg:grid grid-cols-5 gap-4 max-w-[1400px] mx-auto">
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="bg-white rounded-2xl p-6 min-h-[280px] h-full relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Step number - large background */}
                <div 
                  className="absolute -top-4 -right-4 text-[120px] font-bold text-black/[0.03] leading-none select-none"
                  style={fontStyle}
                >
                  {idx + 1}
                </div>
                
                {/* Icon container */}
                <div className="size-16 mb-5 flex items-center justify-center bg-[#fcd900] rounded-2xl shadow-lg">
                  <step.icon className="size-8 text-black" strokeWidth={1.5} />
                </div>
                
                {/* Step badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span 
                    className="size-6 flex items-center justify-center rounded-full bg-[#fcd900] text-black text-xs font-bold"
                    style={fontStyle}
                  >
                    {idx + 1}
                  </span>
                  <span className="font-['Roboto:Regular',sans-serif] text-xs font-medium text-black/50 uppercase tracking-wider" style={fontStyle}>
                    Этап
                  </span>
                </div>
                
                {/* Title */}
                <h4 className="font-['Roboto:Medium',sans-serif] text-xl text-black mb-3" style={fontStyle}>
                  {step.title}
                </h4>
                
                {/* Description */}
                <p className="font-['Roboto:Regular',sans-serif] font-normal text-sm leading-relaxed text-black/60" style={fontStyle}>
                  {step.description}
                </p>

                {/* Arrow connector */}
                {idx < processSteps.length - 1 && (
                  <div className="absolute top-1/2 -right-2 z-20 -translate-y-1/2">
                    <div className="size-6 flex items-center justify-center rounded-full bg-[#fcd900] shadow-lg">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden space-y-6">
          {processSteps.map((step, idx) => (
            <div key={idx} className="flex gap-5">
              {/* Step indicator */}
              <div className="relative shrink-0">
                <div className="size-14 flex items-center justify-center bg-[#fcd900] rounded-xl shadow-lg">
                  <step.icon className="size-7 text-black" strokeWidth={1.5} />
                </div>
                <span 
                  className="absolute -top-1 -right-1 size-5 flex items-center justify-center rounded-full bg-black text-white text-[10px] font-bold"
                  style={fontStyle}
                >
                  {idx + 1}
                </span>
              </div>

              {/* Content card */}
              <div className="flex-1 bg-white rounded-xl p-4 shadow-md">
                <span className="font-['Roboto:Medium',sans-serif] text-[10px] font-medium text-[#fcd900] uppercase tracking-wider mb-1 block" style={fontStyle}>
                  Этап {idx + 1}
                </span>
                <h4 className="font-['Roboto:Medium',sans-serif] text-lg text-black mb-2" style={fontStyle}>
                  {step.title}
                </h4>
                <p className="font-['Roboto:Regular',sans-serif] font-normal text-sm leading-relaxed text-black/60" style={fontStyle}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADVANTAGES & APPLICATIONS */}
      <section className="py-16 md:py-24 px-[20px] md:px-[100px] lg:px-[260px] bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-[1200px] mx-auto">
          {/* Advantages */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="size-[60px] shrink-0 flex items-center justify-center bg-[#fcd900] rounded-2xl shadow-lg">
                <Zap className="size-7 text-black" strokeWidth={2} />
              </div>
              <h3
                className="font-['Roboto:Medium',sans-serif] text-2xl md:text-[28px] text-black"
                style={fontStyle}
              >
                Преимущества
              </h3>
            </div>
            
            <div className="space-y-5">
              {advantages.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="size-7 shrink-0 rounded-full bg-[#fcd900]/20 flex items-center justify-center mt-0.5">
                    <Check className="size-4 text-[#fcd900]" strokeWidth={3} />
                  </div>
                  <p
                    className="font-['Roboto:Regular',sans-serif] font-normal text-base leading-relaxed text-black/70"
                    style={fontStyle}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="size-[60px] shrink-0 flex items-center justify-center bg-[#fcd900] rounded-2xl shadow-lg">
                <Recycle className="size-7 text-black" strokeWidth={2} />
              </div>
              <h3
                className="font-['Roboto:Medium',sans-serif] text-2xl md:text-[28px] text-black"
                style={fontStyle}
              >
                Применение
              </h3>
            </div>
            
            <div className="space-y-5">
              {applications.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="size-7 shrink-0 rounded-full bg-[#fcd900]/20 flex items-center justify-center mt-0.5">
                    <Award className="size-4 text-[#fcd900]" strokeWidth={2} />
                  </div>
                  <p
                    className="font-['Roboto:Regular',sans-serif] font-normal text-base leading-relaxed text-black/70"
                    style={fontStyle}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OilProcessingSection;
