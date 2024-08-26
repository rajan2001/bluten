'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DarkLogo } from './logos/darkLogo';

const MainNavBar = ({ className, ...props }: React.HtmlHTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();

  const routes = [
    {
      href: `/`,
      label: 'Rezept einlösen',
      active: pathname === `/`,
    },
    {
      href: `/Live Bestand`,
      label: 'Live Bestand',
      active: pathname === `/Live Bestand`,
    },
    {
      href: `/Videosprechstunde`,
      label: 'Videosprechstunde',
      active: pathname === `/Videosprechstunde`,
    },
    {
      href: `/FAQs`,
      label: 'FAQs',
      active: pathname === `/FAQs`,
    },
    {
      href: `/Kontakt`,
      label: 'Kontakt',
      active: pathname === `/Kontakt`,
    },
  ];
  return (
    <nav
      className={cn(
        'flex items-center justify-around space-x-4 lg:space-x-6 font-sora w-1/2',
        className
      )}
    >
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            'text-xs font-medium transition-colors hover:text-primary flex items-center gap-x-1',
            route.active ? 'text-black dark:text-white' : 'text-muted-foreground'
          )}
        >
          <span>
            {
              <DarkLogo
                size={12}
                color={route.active ? '#28E3E9' : '#62C3C6'}
                opacity={route.active ? '1' : '0.3'}
              />
            }
          </span>{' '}
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNavBar;
