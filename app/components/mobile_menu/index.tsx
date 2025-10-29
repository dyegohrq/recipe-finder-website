import Link from "next/link";

type MobileMenuProps = {
  activeMenu: boolean;
};

export function MobileMenu({ activeMenu }: MobileMenuProps) {
  return (
    <ul className={` absolute bg-neutral-0 top-[68px] left-4 md:left-8 right-4 md:right-8 lg:hidden ${ activeMenu ? 'opacity-100' : 'opacity-0' } transition-all duration-300 ease-in-out origin-center rounded-lg p-2 flex flex-col gap-2 `} >
      <li>
        <Link href={'/'} className=" textpresent-7 text-strong-950 w-full h-full  flex" >Home</Link>
      </li>
      <li>
        <Link href={'/about'} className=" textpresent-7 text-strong-950 w-full h-full flex" >About</Link>
      </li>
      <li>
        <Link href={'/recipes'} className=" textpresent-7 text-strong-950 w-full h-full flex " > Recipes </Link>
      </li>
      <li  >
        <Link href={'/recipes'} className="w-full h-full flex py-3 px-4 bg-neutral-900 items-center justify-center rounded-[10px] textpresent-5 text-neutral-0 " > Browse recipes </Link>
      </li>
    </ul>
  );
}