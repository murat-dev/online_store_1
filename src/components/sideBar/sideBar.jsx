import { NavLink } from 'react-router-dom'
import './sideBar.scss'

const SideBar = () =>{
    const pathname = window.location.pathname
    return(
        <div className='sideBar'>
            <ul>
                <li><NavLink to='/o_magazine' className={pathname === '/o_magazine' ? 'selected':''}>О магазине</NavLink></li>
                <li><NavLink to='/dostavka' className={pathname === '/dostavka' ? 'selected':''}>Доставка и оплата</NavLink></li>
                <li><NavLink to='/samovyvoz' className={pathname === '/samovyvoz' ? 'selected':''}>Самовывоз</NavLink></li>
                <li><NavLink to='/kontakty' className={pathname === '/kontakty' ? 'selected':''}>Контакты</NavLink></li>
            </ul>
        </div>
    )
}

// export default SideBar