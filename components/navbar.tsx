import MainNavBar from '@/components/main-nav';
import { IconClassName } from '@/lib/config';
import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';
import { CustomButton } from './customButton';
import { Input } from './Input';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from './logos/Logo';


const Navbar = async () => {
  return (
    <div className="flex items-center justify-between h-20 gap-x-4">
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon className='lg:hidden h-6 mr-8 w-6 cursor-pointer' />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle><Logo /></SheetTitle>
            <MainNavBar className='flex flex-col gap-y-9 items-start gap-x-0 space-x-0' />
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <Input />

      <MainNavBar className='hidden lg:flex' />
      <div className="flex items-center text-xs gap-x-4 ml-4">
        <button>
          <ShoppingCart className={cn(IconClassName)} />
        </button>
        <CustomButton>Anmelden</CustomButton>
      </div>
    </div>
  );
};

export default Navbar;
