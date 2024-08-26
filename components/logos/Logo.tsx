import { DarkLogo } from './darkLogo';

interface ColorProps {
  color?: string
}

export const Logo = ({ color }: ColorProps) => {
  return (
    <div className={`flex items-center gap-x-4 text-3xl font-semibold ${color ?? "text-[#116A6C]"}`}>
      <span>
        <DarkLogo size={24} />
      </span>
      Blüten
    </div>
  );
};
