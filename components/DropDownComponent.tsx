import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IconClassName } from '@/lib/config';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export const DropDownComponent = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-xs text-[#365758] font-sora bg-[#9bf1f4] px-2 py-1 rounded-md flex items-center">
        Sortieren nach <ChevronDown className={cn(IconClassName, 'ml-2')} />
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};
