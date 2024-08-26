import MainNavBar from '@/components/main-nav';
import { IconClassName } from '@/lib/config';
import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';
import { CustomButton } from './customButton';
import { Input } from './Input';

const Navbar = async () => {
  return (
    <div className="flex items-center justify-between h-20 gap-x-4">
      <Input />
      <MainNavBar />
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
