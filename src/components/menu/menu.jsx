import { useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import './menu.scss'
import { connect } from 'react-redux'
import Actions from "../../redux/actions"
import State from "../../redux/state"

const Menu = ({ setShowMenuMobileModal }) => {
    const [burgerActive, setBurgerActive] = useState(false)
    const menuBurgerRef = useRef()

    const openMenu = () => {
        if (window.innerWidth > 980) {
            menuBurgerRef.current.style.display = 'block'
            setBurgerActive(true)
        }
    }

    const closeMenu = () => {
        if (window.innerWidth > 980) {
            menuBurgerRef.current.style.display = 'none'
            setBurgerActive(false)
        }
    }

    const showSearchInput = () => {
        const search = document.querySelector('.search')
        if (search.style.display === 'none' || !search.style.display) search.style.display = 'block'
        else search.style.display = ''
    }

    const showMobileMenu = () => {
        if (window.innerWidth <= 980) {
            const menuDropDownMobile = document.querySelector('.menuDropDownMobile__wrapper')
            const menuDropDownMobileShadow = document.querySelector('.menuDropDownMobile__shadow')
            
            menuDropDownMobile.style.transition = '0.5s ease'
            menuDropDownMobileShadow.style.transition = '0.5s ease'

            document.body.style.overflowY = 'hidden'
            setShowMenuMobileModal(true)
        }
    }

    return (
        <ul className='menu'>

            <div onClick={showMobileMenu} onMouseOver={openMenu} onMouseOut={closeMenu} className={'menu__burger ' + (burgerActive && 'active')}>
                <li className='menu__list'>Каталог товаров</li>
                <i className="fas fa-caret-down"></i>
                <span></span>
                <DropDownMenu menuBurgerRef={menuBurgerRef} closeMenu={closeMenu} />
            </div>

            <li className='menu__list'><NavLink to='/o_magazine'>О магазине</NavLink></li>
            <li className='menu__list'><NavLink to='/dostavka'>Доставка и оплата</NavLink></li>
            <li className='menu__list'><NavLink to='/samovyvoz'>Самовывоз</NavLink></li>
            <li className='menu__list'><NavLink to='/kontakty'>Контакты</NavLink></li>

            <li className='menu__search' onClick={showSearchInput}><i className="fas fa-search"></i></li>
        </ul>
    )
}

const DropDownMenu = ({ menuBurgerRef, closeMenu }) => {
    return (
        <ul ref={menuBurgerRef} onClick={closeMenu} className="menu-burger__drop-down-menu" >
            <li className='next next-mangals'> <NavLink to='/category/mangali/'>Мангалы и аксесуары</NavLink>
                <i className="fas fa-caret-right"></i>
                <ul className='drop-down-menu__mangals'>
                    <li><NavLink to='/category/mangali/s-krishey/'>Мангалы с крышей</NavLink></li>
                    <li><NavLink to='/category/mangali/1/'>Мангалы без крыши</NavLink></li>
                    <li><NavLink to='/category/mangali/s-pechkoy-pod-kazan/'>Мангалы с печкой под казан</NavLink></li>
                    <li><NavLink to='/category/mangali/iz-stali-5-mm/'>Мангалы из стали 5мм</NavLink></li>
                    <li><NavLink to='/category/mangali/s-kryshkoy/'> Мангалы с крышкой </NavLink></li>
                    <li><NavLink to='/category/mangali/stacionarnye/'> Стационарные мангалы </NavLink></li>
                    <li><NavLink to='/category/mangali/na-kolesah/'> Мангалы на колесах </NavLink></li>
                    <li><NavLink to='/category/mangali/s-kazanom/'> Мангалы с казаном </NavLink></li>
                    <li><NavLink to='/category/mangali/mangaly-dlya-dachi/'> Мангалы для дачи </NavLink></li>
                    <li><NavLink to='/category/mangali/zharovni-k-mangalu/'> Жаровни к мангалам </NavLink></li>
                    <li className='next next-pechi-dlya-kazanov__s-truboy'>
                        <NavLink to='/category/mangali/aksessuari/'>Аксессуары для мангалов</NavLink>
                        <i className="fas fa-caret-right second"></i>
                        <ul className='drop-down-menu__pechi-dlya-kazanov__s-truboy'>
                            <li><NavLink to='/category/mangali/aksessuari/vertela/'>Вертела</NavLink></li>
                            <li><NavLink to='/category/mangali/aksessuari/shampury/'>Шампуры</NavLink></li>
                            <li><NavLink to='/category/mangali/aksessuari/podstavka-kazana-na-mangal/'>Подставки для казана</NavLink></li>
                            <li><NavLink to='/category/mangali/aksessuari/reshetki-gril/'>Решётки гриль</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><NavLink to='/category/grili/'>Грили</NavLink></li>
            <li className='next next-kazany-chuguny'><NavLink to='/category/kazany-chugunnye/'>Казаны чугунные</NavLink>
                <i className="fas fa-caret-right"></i>
                <ul className='drop-down-menu__kazany-chuguny'>
                    <li><NavLink to='/category/kazany-chugunnye/3-5-litra/'>На 6 литров</NavLink></li>
                    <li><NavLink to='/category/kazany-chugunnye/na-8-litrov/'>На 8 литров</NavLink></li>
                    <li><NavLink to='/category/kazany-chugunnye/na-10-litrov/'>На 10 литров</NavLink></li>
                    <li><NavLink to='/category/kazany-chugunnye/na-12-litrov/'>На 12 литров</NavLink></li>
                    <li><NavLink to='/category/kazany-chugunnye/na-16-litrov/'>На 16 литров</NavLink></li>
                    <li><NavLink to='/category/kazany-chugunnye/na-22-litra/'>На 22 литра</NavLink></li>
                    <li><NavLink to='/category/kazany-chugunnye/uzbekskie/'>Узбекские казаны</NavLink></li>
                    <li><NavLink to='/category/kazany-chugunnye/afganskie/'>Афганские казаны</NavLink></li>
                </ul>
            </li>
            <li className='next next-pechi-dlya-kazanov'>
                <NavLink to='/category/pechi-pod-kazan/'>Печи для казанов</NavLink>
                <i className="fas fa-caret-right first"></i>
                <ul className='drop-down-menu__pechi-dlya-kazanov'>
                    <li><NavLink to='/'>Печь для казана с трубой</NavLink></li>
                    <li><NavLink to='/'>На 8 литров</NavLink></li>
                    <li><NavLink to='/'>На 10 литров</NavLink></li>
                    <li><NavLink to='/'>На 12 литра</NavLink></li>
                    <li><NavLink to='/'>На 16 литров</NavLink></li>
                    <li><NavLink to='/'>На 22 литра</NavLink></li>
                    <li className='next next-pechi-dlya-kazanov__s-truboy'>
                        <NavLink to='/'>Аксессуары для печей</NavLink>
                        <i className="fas fa-caret-right second"></i>
                        <ul className='drop-down-menu__pechi-dlya-kazanov__s-truboy'>
                            <li><NavLink to='/'>Кольца для печей под казан</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className='next next-kazan-plus-pech'>
                <NavLink to='/category/komplekty-kazan-pech/'>Казан + печь (комплекты)</NavLink>
                <i className="fas fa-caret-right"></i>
                <ul className='drop-down-menu__kazan-plus-pech'>
                    <li><NavLink to='/'>На 6 литров</NavLink></li>
                    <li><NavLink to='/'>На 8 литров</NavLink></li>
                    <li><NavLink to='/'>На 10 литров</NavLink></li>
                    <li><NavLink to='/'>На 12 литров</NavLink></li>
                    <li><NavLink to='/'>На 16-18 литров</NavLink></li>
                    <li><NavLink to='/'>На 22 литра</NavLink></li>
                </ul>
            </li>
            <li><NavLink to='/category/pechi-dlya-szhiganiya-musora/'>Печи для сжигания мусора</NavLink></li>
            <li><NavLink to='/category/smokery/'>Смокеры</NavLink></li>
            <li><NavLink to='/category/koptil/'>Коптильни</NavLink></li>
            <li><NavLink to='/category/uzbekskaya-posuda/'>Узбекская посуда</NavLink></li>
            <li><NavLink to='/category/chugunnye-skovorody/'>Чугунные сковороды</NavLink></li>
        </ul>
    )
}






export default connect(State, Actions)(Menu)