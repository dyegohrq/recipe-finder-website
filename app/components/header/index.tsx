import Image from 'next/image'
import logo from '../../../public/assets/images/logo.svg'
import { Mobile_menu } from '../icon_menu'

export function Header() {
    return(
        <div>
            <header className=' flex items-center justify-between w-full h-20 px-4 md:px-8 xl:px-16 ' >
                <Image
                    src={logo}
                    alt='logo healthy recipe finder'
                />
                <ul className='hidden xl:flex ' >
                    <li>Home</li>
                    <li>About</li>
                    <li>Recipes</li>
                </ul>
                <Mobile_menu/>
            </header>
        </div>
    )
}