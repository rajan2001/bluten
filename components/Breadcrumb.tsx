import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ArrowRight } from 'lucide-react';

export const BreadComponent = () => {
  return (
    <Breadcrumb className=" font-sora ">
      <BreadcrumbList>
        <BreadcrumbItem className="text-[#62C3C6] text-xs">
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ArrowRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem className="text-[#62C3C6] text-xs">
          <BreadcrumbLink href="/components">Livebestand</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ArrowRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className=" font-semibold text-xs">Cannabis Blüten</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
