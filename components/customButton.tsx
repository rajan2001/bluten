import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  className?: String;
}

export const CustomButton = ({ children, className }: ButtonProps) => {
  return (
    <button className={cn('bg-[#ECFEAA] rounded-tl-[24px] rounded-br-[24px] py-2 px-4', className)}>
      {children}
    </button>
  );
};
