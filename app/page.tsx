import { BreadComponent } from '@/components/Breadcrumb';
import { CustomButton } from '@/components/customButton';
import { FilterComponent } from '@/components/FilterComponent';
import { Product } from '@/components/product';
import { SearchProduct } from '@/components/SearchProduct';
import { product } from '@/lib/config';



export default function Home() {
  return (
    <div className=" space-y-16 font-sora">
      <div className="flex items-center justify-between mt-8">
        <BreadComponent />
        <div className="text-xs flex flex-col gap-y-2 text-[#365758]">
          <p>GKV mit Kostenübernahme?</p>
          <CustomButton className="bg-transparent border-2 border-[#62C3C6] py-1 ">
            Preisoptionen
          </CustomButton>
        </div>
      </div>
      <SearchProduct />
      <div className="flex gap-14 flex-col lg:flex-row ">
        <div className="lg:w-[250px] space-y-10 flex flex-col w-full ">
          <div className="bg-[#62C3C610] text-[#045A5C] text-2xl font-semibold text-center">
            Filter
          </div>
          <FilterComponent />
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
          {product.map((product) => (
            <Product
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
