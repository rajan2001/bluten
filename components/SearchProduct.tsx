import { DropDownComponent } from '@/components/DropDownComponent';
import { Input } from '@/components/Input';
import { Logo } from '@/components/logos/Logo';
import { List } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

export const SearchProduct = () => {
    return <div className="flex items-center justify-between">
        <Logo />
        <div className="md:flex items-center gap-x-4 w-[65%] hidden">
            <Input />
            <DropDownComponent />
            <div className="text-xs text-[#365758] font-sora bg-[#9bf1f4] px-2 py-1 rounded-md flex items-center">
                Verfügbarkeit <Switch className="ml-2 data-[state=checked]:bg-[#62C3C630]" />
            </div>
            <div className="bg-[#9bf1f4] px-1 rounded-md ">
                <List className="h-[24px] w-[24px] text-[#045A5C]" />
            </div>
        </div>
    </div>
}