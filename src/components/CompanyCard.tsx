import { motion, AnimatePresence } from 'motion/react';
import { X, Building2, User, Phone, Mail, MapPin, CreditCard, Hash, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface CompanyCardProps {
  isOpen: boolean;
  onClose: () => void;
}

const companyData = {
  legalName: 'ООО «Трейднефтепром»',
  director: 'Поджаров Игорь Александрович',
  phone: '+375-25-521-24-09',
  email: 'Tradenefteprom@bk.ru',
  legalAddress: '220035, Республика Беларусь, г. Минск, ул.Тарханова 13а, помещение 33, секция 10',
  actualAddress: '220045, Республика Беларусь, г. Минск, пр-т Дзержинского,127 пом. 484',
  warehouseAddresses: [
    '222750, Минская обл., Минский р-н, Колодищанский с/с, 161',
    'г.Орша, ул. 2-ая Шкловская, 12'
  ],
  accountBYN: 'BY38MTBK30120001093300134799',
  oked: '46719',
  bic: 'MTBKBY22',
  bankName: 'ЗАО «МТБанк»',
  bankAddress: '220007, г. Минск, ул. Толстого, 10',
  unn: '193918407',
  okpo: '502923095000'
};

export function CompanyCard({ isOpen, onClose }: CompanyCardProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    // Альтернативный метод копирования для совместимости
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    
    document.body.removeChild(textArea);
  };

  const CopyButton = ({ text, field, small }: { text: string; field: string; small?: boolean }) => (
    <button
      onClick={() => copyToClipboard(text, field)}
      className={`${small ? 'p-1.5' : 'p-2'} bg-[#fcd900]/10 hover:bg-[#fcd900]/30 rounded-lg transition-all group flex-shrink-0`}
      title="Копировать"
    >
      {copiedField === field ? (
        <Check className={`${small ? 'size-3' : 'size-4'} text-[#fcd900]`} />
      ) : (
        <Copy className={`${small ? 'size-3' : 'size-4'} text-white/50 group-hover:text-[#fcd900]`} />
      )}
    </button>
  );

  const allRequisites = `ООО «Трейднефтепром»
Директор: ${companyData.director}
Телефон: ${companyData.phone}
E-mail: ${companyData.email}

Юридический адрес: ${companyData.legalAddress}
Фактический адрес: ${companyData.actualAddress}

Банковские реквизиты:
Расчетный счет (BYN): ${companyData.accountBYN}
Банк: ${companyData.bankName}
БИК: ${companyData.bic}

УНН: ${companyData.unn}
ОКПО: ${companyData.okpo}
ОКЭД: ${companyData.oked}`.trim();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative px-6 py-5 border-b border-white/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-12 bg-[#fcd900]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="size-6 text-[#fcd900]" />
                  </div>
                  <div>
                    <h2 className="font-['Roboto:Bold',sans-serif] text-[20px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Карточка предприятия
                    </h2>
                    <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-white/50" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {companyData.legalName}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="size-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all group flex-shrink-0"
                >
                  <X className="size-5 text-white/70 group-hover:text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                <div className="space-y-4">
                  {/* Контакты */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <User className="size-4 text-[#fcd900] flex-shrink-0 mt-0.5" />
                        <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-white/90 flex-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {companyData.director}
                        </p>
                        <CopyButton text={companyData.director} field="director" small />
                      </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <Phone className="size-4 text-[#fcd900] flex-shrink-0 mt-0.5" />
                        <a href={`tel:${companyData.phone}`} className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#fcd900] hover:underline flex-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {companyData.phone}
                        </a>
                        <CopyButton text={companyData.phone} field="phone" small />
                      </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 md:col-span-2">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <Mail className="size-4 text-[#fcd900] flex-shrink-0 mt-0.5" />
                        <a href={`mailto:${companyData.email}`} className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#fcd900] hover:underline flex-1 break-all" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {companyData.email}
                        </a>
                        <CopyButton text={companyData.email} field="email" small />
                      </div>
                    </div>
                  </div>

                  {/* Адреса */}
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <MapPin className="size-4 text-[#fcd900] flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="font-['Roboto:Medium',sans-serif] text-[12px] text-white/50 mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Юридический адрес
                          </p>
                          <div className="flex items-start justify-between gap-2">
                            <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-white/90 flex-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {companyData.legalAddress}
                            </p>
                            <CopyButton text={companyData.legalAddress} field="legalAddress" small />
                          </div>
                        </div>
                      </div>

                      <div className="h-px bg-white/10" />

                      <div className="flex items-start gap-2">
                        <MapPin className="size-4 text-[#fcd900] flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="font-['Roboto:Medium',sans-serif] text-[12px] text-white/50 mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Фактический адрес
                          </p>
                          <div className="flex items-start justify-between gap-2">
                            <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-white/90 flex-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {companyData.actualAddress}
                            </p>
                            <CopyButton text={companyData.actualAddress} field="actualAddress" small />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Банковские реквизиты */}
                  <div className="bg-gradient-to-br from-[#fcd900]/10 to-[#fcd900]/5 backdrop-blur-md border border-[#fcd900]/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <CreditCard className="size-4 text-[#fcd900]" />
                        <h3 className="font-['Roboto:Bold',sans-serif] text-[15px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Банковские реквизиты
                        </h3>
                      </div>
                      <button
                        onClick={() => copyToClipboard(allRequisites, 'all')}
                        className="px-3 py-1.5 bg-[#fcd900]/20 hover:bg-[#fcd900]/30 rounded-lg transition-all flex items-center gap-1.5 group"
                      >
                        {copiedField === 'all' ? (
                          <>
                            <Check className="size-3.5 text-[#fcd900]" />
                            <span className="font-['Roboto:Medium',sans-serif] text-[12px] text-[#fcd900]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Скопировано
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-3.5 text-white/70 group-hover:text-[#fcd900]" />
                            <span className="font-['Roboto:Medium',sans-serif] text-[12px] text-white/70 group-hover:text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Всё
                            </span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="font-['Roboto:Medium',sans-serif] text-[11px] text-white/50 mb-0.5" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Расчетный счет (BYN)
                          </p>
                          <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-white font-mono" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {companyData.accountBYN}
                          </p>
                        </div>
                        <CopyButton text={companyData.accountBYN} field="accountBYN" small />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="font-['Roboto:Medium',sans-serif] text-[11px] text-white/50 mb-0.5" style={{ fontVariationSettings: "'wdth' 100" }}>
                              БИК
                            </p>
                            <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-white font-mono" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {companyData.bic}
                            </p>
                          </div>
                          <CopyButton text={companyData.bic} field="bic" small />
                        </div>

                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="font-['Roboto:Medium',sans-serif] text-[11px] text-white/50 mb-0.5" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Банк
                            </p>
                            <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-white truncate" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {companyData.bankName}
                            </p>
                          </div>
                          <CopyButton text={companyData.bankName} field="bankName" small />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Коды */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-1.5">
                          <Hash className="size-3.5 text-[#fcd900]" />
                          <p className="font-['Roboto:Medium',sans-serif] text-[11px] text-white/50" style={{ fontVariationSettings: "'wdth' 100" }}>
                            УНН
                          </p>
                        </div>
                        <CopyButton text={companyData.unn} field="unn" small />
                      </div>
                      <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-white font-mono" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {companyData.unn}
                      </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-1.5">
                          <Hash className="size-3.5 text-[#fcd900]" />
                          <p className="font-['Roboto:Medium',sans-serif] text-[11px] text-white/50" style={{ fontVariationSettings: "'wdth' 100" }}>
                            ОКПО
                          </p>
                        </div>
                        <CopyButton text={companyData.okpo} field="okpo" small />
                      </div>
                      <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-white font-mono" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {companyData.okpo}
                      </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-1.5">
                          <Hash className="size-3.5 text-[#fcd900]" />
                          <p className="font-['Roboto:Medium',sans-serif] text-[11px] text-white/50" style={{ fontVariationSettings: "'wdth' 100" }}>
                            ОКЭД
                          </p>
                        </div>
                        <CopyButton text={companyData.oked} field="oked" small />
                      </div>
                      <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-white font-mono" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {companyData.oked}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}