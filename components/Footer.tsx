'use client';

import { routes } from '@/lib/config';
import { DarkLogo } from './logos/darkLogo';
import { Logo } from './logos/Logo';

export const Footer = () => {
  return (
    <div className="bg-[#1A8D91] rounded-tl-[30px] rounded-tr-[30px] font-sora mt-24 overflow-hidden ">
      <div className=" max-w-[75%] mx-auto flex flex-col md:flex-row  items-start gap-10 text-xs  justify-center py-10 text-white ">
        <div className='flex flex-row md:flex-col gap-6 items-center'>
          <Logo color='white' />
          <div className="  text-white/50 font-thin flex flex-row md:flex-col gap-4 ">
            <p>AGB</p>
            <p>Impressum</p>
            <p>Datenschutz</p>
          </div>
        </div>
        <div className=" flex-wrap md:flex items-center gap-4 flex-1 hidden">
          {routes.map((route) => (
            <div
              key={route.href}
              className="flex items-center gap-x-1"
            >
              <span>{<DarkLogo size={12} />}</span> {route.label}
            </div>
          ))}
        </div>
        <div className="flex-1">
          <p className=" text-white/50 font-thin">Standort</p>
          <p className=" mt-4 font-semibold">
            Bergstraße 49 - 5769469 Weinheim(3 Glocken Quartier)
          </p>
        </div>
        <div>
          <p className="  text-white/50 font-thin">Telefon</p>
          <p className=" mt-4">0223 545 5250</p>
        </div>
        <div>
          <p className="  text-white/50 font-thin">Öffnungszeiten</p>
          <div className="mt-4">
            <p className=" text-white/50 font-thin">Mo-Fr</p>
            <p className="mt-2">09:00 – 18:00 Uhr</p>
          </div>
          <div className="mt-4">
            <p className=" text-white/50 font-thin">Sa</p>
            <p className="mt-2">09:00 – 14:00 Uhr</p>
          </div>
        </div>
      </div>
    </div>
  );
};
