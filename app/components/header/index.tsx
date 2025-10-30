import Image from 'next/image'
import logo from '../../../public/assets/images/logo.svg'
import { Mobile_menu } from '../icon_menu'
import { MenuDesktop } from '../menu_desktop'
import { Button } from '../button'

export function Header() {
    return(
        <div>
            <header className=' flex items-center justify-between w-full h-20 px-4 md:px-8 xl:px-16 border-b border-b-neutral-300 ' >
                <Image
                    src={logo}
                    alt='logo healthy recipe finder'
                />
                <MenuDesktop/>
                <Mobile_menu/>
                <Button label='Browser recipes' link='/recipes' wFull={false} variant='desktop' />
            </header>
        </div>
    )
}