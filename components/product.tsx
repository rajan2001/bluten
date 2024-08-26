import Image from 'next/image';
import { Badge } from './ui/badge';
import { CustomButton } from './customButton';

export const Product = ({ product }: any) => {
  return (
    <div className="rounded-tl-[30px] rounded-br-[30px] border-2 border-[#28E3E9] font-sora shadow-md ">
      <Badge
        variant="outline"
        className={` m-4 text-sm font-normal ${product.Veg ? 'text-[#0D7052] bg-[#0D705210]' : 'text-[#A10C0C] bg-[#A10C0C10]'} rounded-full`}
      >
        <span
          className={`mr-2 rounded-full h-1 w-1 ${product.Veg ? 'bg-[#0D7052]' : 'bg-[#A10C0C]'}`}
        ></span>
        {product.title}
      </Badge>
      <div className="h-[150px] items-center justify-center flex">
        <Image
          src={'/images/product.png'}
          alt="product"
          height={100}
          width={100}
          className=" object-cover h-full"
        />
      </div>
      <div className="bg-[#62C3C630] border-t-2 border-[#28E3E9] p-6 space-y-6 rounded-br-[30px]">
        <div>
          <span className="bg-[#62C3C650] py-1 px-3 rounded-lg font-semibold text-[#365758] inline-block mb-4">
            {product.heading}
          </span>
          <div className="flex items-center w-full justify-between gap-2">
            <span className="bg-white py-1 px-3 rounded-lg text-[#365758] flex-1 text-center text-sm">
              THC {product.thc}{' '}
            </span>

            <span className="bg-[#62C3C6] py-1 px-3 rounded-lg text-white flex-1 text-center text-sm">
              CBD &lt; 1%
            </span>
            <Image
              src={'/images/Group.png'}
              alt="group"
              width={25}
              height={25}
            />
          </div>
        </div>

        <h1 className="text-[#116A6C] font-semibold text-[18px]">{product.description}</h1>
        <div className=" text-sm text-[#365758] space-y-2">
          <div className="flex items-center justify-between">
            Kultivar <p>{product.ingredient1}</p>
          </div>
          <div className="flex items-center justify-between">
            Genetik <p>Hybrid</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-x-2">
          <span className="text-[#116A6C] text-2xl font-extrabold">
            <span className="text-[#62C3C6]">€</span> 11,66
            <p className="text-xs font-extralight">pro Gramm</p>
          </span>
          <CustomButton className={'flex-1 text-xs py-2 px-4'}>in den Warenkorb</CustomButton>
        </div>
      </div>
    </div>
  );
};
