import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

function Nav() {
    return (
        <nav className={navStyles.nav}>
            <ul className={navStyles.ul}>
                <li className={navStyles.li}>
                    <Link href='/'>Home</Link>
                </li>
                <li className={navStyles.li}>
                    <Link href='/about'>About</Link>
                </li>
                <li className={navStyles.li}>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
