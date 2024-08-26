import { DarkLogo } from './darkLogo';

export const Logo = () => {
  return (
    <div className="flex items-center gap-x-4 text-3xl font-semibold text-[#116A6C]">
      <span>
        <DarkLogo size={24} />
      </span>
      Blüten
    </div>
  );
};
