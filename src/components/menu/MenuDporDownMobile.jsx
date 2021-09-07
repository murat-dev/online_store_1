import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './menuDropDownMobile.scss'
import { connect, } from 'react-redux'
import Actions from "../../redux/actions"
import State from "../../redux/state"

const MenuDropDownMobile = ({ showMenuMobileModal, setShowMenuMobileModal }) => {
    const history = useHistory()
    const [currentHistoryMenu, setCurrentHistoryMenu] = useState([])

    const closeMobileMenu = (noAnimation) => {
        const menuDropDownMobile = document.querySelector('.menuDropDownMobile')
        const menuDropDownMobileShadow = document.querySelector('.menuDropDownMobile__shadow')

        if(noAnimation){
            menuDropDownMobile.style.transition = '0s ease'
            menuDropDownMobileShadow.style.transition = '0s ease'
        } 
        else{
            menuDropDownMobile.style.transition = '0.5s ease'
            menuDropDownMobileShadow.style.transition = '0.5s ease'
        }

        setShowMenuMobileModal(false)
        document.body.style.overflowY = 'auto'
    }
    const linkTo = (url) => {
        closeMobileMenu(true)
        history.push(url)
        console.log('переход')
    }

    const linkToMenu = (toTitle) => {
        const cloneCurrentHistoryMenu = [...currentHistoryMenu]
        if (toTitle === 'back') cloneCurrentHistoryMenu.pop()
        else cloneCurrentHistoryMenu.push(toTitle)
        console.log(currentHistoryMenu)
        setCurrentHistoryMenu(cloneCurrentHistoryMenu)
    }

    const mainData = {
        linkTo, linkToMenu
    }

    return (
        <div className={"menuDropDownMobile__wrapper " + (showMenuMobileModal && 'opened')}>
            <div className="menuDropDownMobile__shadow"></div>
            <div className="menuDropDownMobile">
                <div className="menuDropDownMobile__header">
                    {currentHistoryMenu.length ?
                        <>
                            <div onClick={linkToMenu.bind(this, 'back')} className="backToMenu-title"> НАЗАД В МЕНЮ</div>
                            <i className="fas fa-arrow-left"></i>
                        </>
                        :
                        <div className="backToMenu-title"></div>
                    }
                    <i className="fas fa-times" onClick={()=>closeMobileMenu(false)}></i>
                </div>
                {!currentHistoryMenu.length ?
                    <StartMenu mainData={mainData} />
                    : currentHistoryMenu[currentHistoryMenu.length - 1] === 'allCategoryMenu' &&
                    <AllCategoryMenu mainData={mainData} />
                }
            </div>
        </div>
    )
}



const AllCategoryMenu = ({ mainData }) => {
    const { linkTo, linkToMenu } = mainData

    const addClickEventForCollapse = () => {
        const items = document.querySelectorAll('.menu__next')
        for (let i = 0; i < items.length; i++) {
            items[i].lastChild.onclick = () => {
                items[i].classList.toggle('active')
                const content = items[i].nextElementSibling
                if (!content.style.maxHeight) {
                    if (items[i].classList.contains('menu__nextSecond')) {
                        items[i].parentNode.style.maxHeight = items[i].parentNode.scrollHeight + content.scrollHeight + 'px'
                        content.style.maxHeight = content.scrollHeight + 'px'
                        console.log(items[i].parentNode)
                    }
                    else {
                        content.style.maxHeight = content.scrollHeight + 'px'
                    }
                }
                else {
                    console.log(items[i].parentNode)
                    content.style.maxHeight = null
                }
            }
        }
    }
    useEffect(() => {
        addClickEventForCollapse()
    }, [])
    return (
        <ul className="menuDropDownMobile__menu all-category">
            <li className="menu__item menu__next">
                <div onClick={linkTo.bind(this, '/category/mangali/')}>Мангалы и аксессуары</div>
                <i className="fas fa-caret-down"></i>
            </li>
            <ul className="menuDropDownMobile__menu menuCollapse first">
                <li onClick={linkTo.bind(this, '/category/mangali/s-krishey/')} className="menu__item">Мангалы с крышей</li>
                <li onClick={linkTo.bind(this, '/category/mangali/1/')} className="menu__item">Мангалы без крыши</li>
                <li onClick={linkTo.bind(this, '/category/mangali/s-pechkoy-pod-kazan/')} className="menu__item">Мангалы с печкой под казан</li>
                <li onClick={linkTo.bind(this, '/category/mangali/iz-stali-5-mm/')} className="menu__item"> Мангалы из стали 5 мм </li>
                <li onClick={linkTo.bind(this, '/category/mangali/s-kryshkoy/')} className="menu__item"> Мангалы с крышкой </li>
                <li onClick={linkTo.bind(this, '/category/mangali/stacionarnye/')} className="menu__item"> Стационарные мангалы </li>
                <li onClick={linkTo.bind(this, '/category/mangali/na-kolesah/')} className="menu__item"> Мангалы на колесах </li>
                <li onClick={linkTo.bind(this, '/category/mangali/s-kazanom/')} className="menu__item"> Мангалы с казаном </li>
                <li onClick={linkTo.bind(this, '/category/mangali/mangaly-dlya-dachi/')} className="menu__item"> Мангалы для дачи </li>
                <li onClick={linkTo.bind(this, '/category/mangali/zharovni-k-mangalu/')} className="menu__item"> Жаровни к мангалам </li>

                <li className="menu__item menu__next menu__nextSecond">
                    <div onClick={linkTo.bind(this, '/category/mangali/aksessuari/')}>Аксессуары для мангалов</div>
                    <i className="fas fa-caret-down"></i>
                </li>
                <ul className="menuDropDownMobile__menu menuCollapse second">
                    <li onClick={linkTo.bind(this, '/category/mangali/aksessuari/vertela/')} className="menu__item">Вертела</li>
                    <li onClick={linkTo.bind(this, '/category/mangali/aksessuari/shampury/')} className="menu__item">Шампуры</li>
                    <li onClick={linkTo.bind(this, '/category/mangali/aksessuari/podstavka-kazana-na-mangal/')} className="menu__item">Подставки для казана</li>
                    <li onClick={linkTo.bind(this, '/category/mangali/aksessuari/reshetki-gril/')} className="menu__item">Решетки гриль</li>
                </ul>
            </ul>

            <li onClick={linkTo.bind(this, '/category/grili/')} className="menu__item"> Грили барбекю</li>

            <li className="menu__item menu__next">
                <div onClick={linkTo.bind(this, '/category/kazany-chugunnye/')}>Казаны чугунные</div>
                <i className="fas fa-caret-down"></i>
            </li>
            <ul className="menuDropDownMobile__menu menuCollapse first">
                <li onClick={linkTo.bind(this, '/category/kazany-chugunnye/3-5-litra/')} className="menu__item">На 6 литров</li>
                <li onClick={linkTo.bind(this, '/category/kazany-chugunnye/na-8-litrov/')} className="menu__item">На 8 литров</li>
                <li onClick={linkTo.bind(this, '/category/kazany-chugunnye/na-10-litrov/')} className="menu__item">На 10 литров</li>
                <li onClick={linkTo.bind(this, '/category/kazany-chugunnye/na-12-litrov/')} className="menu__item">На 12 литров</li>
                <li onClick={linkTo.bind(this, '/category/kazany-chugunnye/na-16-litrov/')} className="menu__item">На 16 литров</li>
                <li onClick={linkTo.bind(this, '/category/kazany-chugunnye/na-22-litra/')} className="menu__item">На 22 литров</li>
                <li onClick={linkTo.bind(this, '/category/kazany-chugunnye/uzbekskie/')} className="menu__item">Узбекские казаны</li>
                <li onClick={linkTo.bind(this, '/category/kazany-chugunnye/afganskie/')} className="menu__item">Афганские казаны</li>
            </ul>

            <li className="menu__item menu__next">
                <div onClick={linkTo.bind(this, '/')}>Печи для казанов</div>
                <i className="fas fa-caret-down"></i>
            </li>
            <ul className="menuDropDownMobile__menu menuCollapse first">
                <li onClick={linkTo.bind(this, '/')} className="menu__item">Печь для казана с трубой</li>
                <li onClick={linkTo.bind(this, '/')} className="menu__item">На 8 литров</li>
                <li onClick={linkTo.bind(this, '/')} className="menu__item">На 10 литров</li>
                <li onClick={linkTo.bind(this, '/')} className="menu__item">На 12 литров</li>
                <li onClick={linkTo.bind(this, '/')} className="menu__item">На 16 литров</li>
                <li onClick={linkTo.bind(this, '/')} className="menu__item">На 22 литров</li>
                <li className="menu__item menu__next menu__nextSecond">
                    <div onClick={linkTo.bind(this, '/')}>Аксессуары для печей под казан</div>
                    <i className="fas fa-caret-down"></i>
                </li>
                <ul className="menuDropDownMobile__menu menuCollapse second">
                    <li onClick={linkTo.bind(this, '/')} className="menu__item">Кольца для печей под казан</li>
                </ul>
            </ul>

            <li className="menu__item menu__next">
                <div onClick={linkTo.bind(this, '/category/komplekty-kazan-pech/')}>Казан + печь (комплекты)</div>
                <i className="fas fa-caret-down"></i>
            </li>
            <ul className="menuDropDownMobile__menu menuCollapse first">
                <li onClick={linkTo.bind(this, '/')} className="menu__item">На 6 литров</li>
                <li onClick={linkTo.bind(this, '/')} className="menu__item">На 8 литров</li>
                <li onClick={linkTo.bind(this, '/')} className="menu__item">На 10 литров</li>
                <li onClick={linkTo.bind(this, '/')} className="menu__item">На 12 литров</li>
                <li onClick={linkTo.bind(this, '/')} className="menu__item">На 16-18 литров</li>
                <li onClick={linkTo.bind(this, '/')} className="menu__item">На 22 литров</li>
            </ul>

            <li onClick={linkTo.bind(this, '/category/pechi-dlya-szhiganiya-musora/')} className="menu__item">Печи для сжигания мусора</li>
            <li onClick={linkTo.bind(this, '/category/smokery/')} className="menu__item"> Смокеры </li>
            <li onClick={linkTo.bind(this, '/category/koptil/')} className="menu__item"> Коптильни </li>
            <li onClick={linkTo.bind(this, '/category/uzbekskaya-posuda/')} className="menu__item"> Узбекская посуда </li>
            <li onClick={linkTo.bind(this, '/category/chugunnye-skovorody/')} className="menu__item"> Чугунные сковороды</li>
        </ul>
    )
}

const StartMenu = ({ mainData }) => {
    const { linkTo, linkToMenu } = mainData
    return (
        <ul className="menuDropDownMobile__menu">
            <li onClick={linkToMenu.bind(this, 'allCategoryMenu')} className="menu__item menu__next-right">
                <div className="menuDropDownMobile__catalog-title">Каталог товаров</div>
                <i className="fas fa-caret-right"></i>
                <i className="fas fa-bars"></i>
            </li>
            <li onClick={linkTo.bind(this, '/o_magazine')} className="menu__item"> О магазине</li>
            <li onClick={linkTo.bind(this, '/dostavka')} className="menu__item"> Доставка и оплата</li>
            <li onClick={linkTo.bind(this, '/samovyvoz')} className="menu__item"> Самовывоз</li>
            <li onClick={linkTo.bind(this, '/kontakty')} className="menu__item"> Контакты</li>
            <li onClick={linkTo.bind(this, '/politika-konfidencialnosti')} className="menu__item"> Политика конфиденциальности</li>
            <li onClick={linkTo.bind(this, '/')} className="menu__item phone">
                <div>+7-495-507-02-41</div>
                <i className="fas fa-phone-alt"></i>
            </li>
        </ul>
    )
}
export default connect(State, Actions)(MenuDropDownMobile)