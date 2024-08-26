import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import DualRangeSliderCustomLabel from '@/components/DualSlider';
import { select } from '@/lib/config';
import { CustomButton } from './customButton';
import { X } from 'lucide-react';


export const FilterComponent = () => {
    return <div className="space-y-10">
        <div className=" space-y-8">
            <p className="text-center">Preis</p>
            <DualRangeSliderCustomLabel />
        </div>

        <div className=" space-y-8 border-t pt-8">
            <p className="text-center">Hersteller </p>
            <div className=" space-y-4">
                {select.map((select) => (
                    <div
                        key={select.id}
                        className="flex items-center space-x-2"
                    >
                        <Checkbox
                            checked={select.checked}
                            id={select.label}
                        />
                        <Label
                            htmlFor={select.label}
                            className="text-[#365758] font-extralight"
                        >
                            {select.label}
                        </Label>
                    </div>
                ))}
                <CustomButton className={'bg-transparent border border-[#ECFEAA] text-xs w-full'}>
                    mehr anzeigen
                </CustomButton>
            </div>
        </div>

        <div className=" space-y-8 border-t pt-8">
            <p className="text-center">THC Gehalt</p>
            <DualRangeSliderCustomLabel />
        </div>

        <div className=" space-y-8 border-t pt-8">
            <p className="text-center">CBD Gehalt</p>
            <DualRangeSliderCustomLabel />
        </div>

        <div className=" space-y-6 border-t pt-8">
            <p className="text-center">Genetik</p>
            <div className="flex gap-2">
                <button className="bg-[#62C3C6] px-4 py-1 text-xs text-white rounded-md flex-1">
                    Indica
                </button>
                <button className="bg-[#62C3C630] px-4 py-1 text-xs rounded-md flex-1">
                    Sativa
                </button>
                <button className="bg-[#62C3C630] px-4 py-1 text-xs rounded-md flex-1">
                    Hybrid
                </button>
            </div>
        </div>

        <div className=" space-y-6 border-t pt-8">
            <p className="text-center">Bestrahltung</p>
            <div className="flex gap-2">
                <button className="bg-[#62C3C6] px-4 py-1 text-xs text-white rounded-md">
                    bestrahlt
                </button>
                <button className="bg-[#62C3C630] px-4 py-1 text-xs rounded-md flex-1">
                    nicht bestrahlt
                </button>
            </div>
        </div>

        <button className="flex text-xs items-center w-full justify-center border-t pt-8">
            {' '}
            <X className=" mr-2 h-4 w-4  text-[#62C3C6]" /> alle Filter zurücksetzen
        </button>
    </div>
}