
import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { COMPANY } from '../constants';

export const FAB: React.FC = () => {
  const buttons = [
    {
      icon: <MessageCircle size={28} />,
      color: "bg-[#25D366]",
      glow: "shadow-[0_0_20px_rgba(37,211,102,0.5)]",
      link: COMPANY.whatsappLink,
      tooltip: "Fale no WhatsApp",
      delay: "0s"
    },
    {
      icon: <Phone size={28} />,
      color: "bg-[#0088cc]",
      glow: "shadow-[0_0_20px_rgba(0,136,204,0.5)]",
      link: `tel:${COMPANY.phone.replace(/\D/g, '')}`,
      tooltip: "Ligar Agora",
      delay: "0.2s"
    },
    {
      icon: <MapPin size={28} />,
      color: "bg-[#EA4335]",
      glow: "shadow-[0_0_20px_rgba(234,67,53,0.5)]",
      link: COMPANY.mapsLink,
      tooltip: "Nossa Localização",
      delay: "0.4s"
    }
  ];

  return (
    <div className="fixed right-6 bottom-6 z-[9999] flex flex-col gap-4">
      {buttons.map((btn, idx) => (
        <div key={idx} className="group relative flex items-center justify-end">
          <span className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 shadow-xl">
            {btn.tooltip}
          </span>
          <a
            href={btn.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btn.color} ${btn.glow} w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white transition-all hover:scale-115 animate-bounce`}
            style={{ animationDelay: btn.delay }}
          >
            {btn.icon}
          </a>
        </div>
      ))}
    </div>
  );
};
