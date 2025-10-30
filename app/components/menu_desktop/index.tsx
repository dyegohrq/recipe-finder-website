'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MenuDesktop() {
    const pathname = usePathname() 
    const links = [
        {
            label: 'Home',
            url: '/',
        },
        {
            label: 'About',
            url: '/about',
        },
        {
            label: 'Recipes',
            url: '/recipes',
        },
    ]


  return (
    <div>
        <ul className="hidden xl:flex gap-10 ">
          {
            links.map((links) => {
                const isActive = pathname === links.url;

                return(
                    <li key={links.label}  >
                    <Link href={links.url} className={` textpresent-7 text-neutral-900 border-b-[3px] ${isActive ? ' border-orange-500 ' : 'border-b-transparent hover:border-orange-500'} transition-all duration-300 ease-in-out `}>
                        {links.label}
                    </Link>
                </li>
                )
            })
          }
        </ul>
    </div>
  );
}
