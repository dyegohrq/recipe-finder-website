type MobileMenuProps = {
  activeMenu: boolean;
};

export function MobileMenu({ activeMenu }: MobileMenuProps) {
  return (
    <ul className={` absolute bg-neutral-0 top-16 left-4 md:left-8 right-4 md:right-8 lg:hidden ${ activeMenu ? 'opacity-100' : 'opacity-0' } transition-all duration-300 ease-in-out origin-center `} >
       <li>aaa</li> 
    </ul>
  );
}