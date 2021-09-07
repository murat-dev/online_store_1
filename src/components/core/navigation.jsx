import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './style.scss'


const Navigation = ({ navigation }) => {
    const location = useLocation()
    const [showNavModal, setShowNavModal] = useState(null)

    const onMouseNavigation = (title) => {
        setShowNavModal(title)
    }

    const offMouseNavigation = () => {
        setShowNavModal(null)
    }

    return (
        <div className='pages-navigation'>
            {navigation && navigation.map((item, i) => (
                item.active ?
                    <div key={i} className='pages-navigation__item'><span></span>{item.title}</div>
                    :
                    <div key={i}
                        onMouseEnter={() => onMouseNavigation(item.title)}
                        onMouseLeave={offMouseNavigation}
                        className='pages-navigation__item'><span></span><NavLink to={item.path}>{item.title}</NavLink>

                        {item.title === 'Мангалы и аксессуары' &&
                            <MangalyAndAksesuaryModal location={location} showNavModal={showNavModal} title={item.title} />
                        }
                        {item.title === 'Аксессуары для мангалов' &&
                            <AksesuaryDlyaMangalov location={location} showNavModal={showNavModal} title={item.title} />
                        }
                        {item.title === 'Казаны чугунные' &&
                            <KazaniChuguny location={location} showNavModal={showNavModal} title={item.title} />
                        }
                    </div>

            ))}
        </div>
    )
}

const MangalyAndAksesuaryModal = ({ showNavModal, location, title }) => {
    const thisArray = [
        { title: 'Мангалы c крышeй', path: '/category/mangali/s-krishey/' },
        { title: 'Мангалы без крыши', path: '/category/mangali/1/' },
        { title: 'Мангалы с печкой под казан', path: '/category/mangali/s-pechkoy/' },
        { title: 'Мангалы из стали 5 мм', path: '/category/mangali/iz-stali-5-mm/' },
        { title: 'Мангалы с крышкой', path: '/category/mangali/s-kryshkoy/' },
        { title: 'Стационарные мангалы', path: '/category/mangali/stacionarnye/' },
        { title: 'Мангалы на колесах', path: '/category/mangali/na-kolesah/' },
        { title: 'Мангалы с казаном', path: '/category/mangali/s-kazanom/' },
        { title: 'Мангалы для дачи', path: '/category/mangali/mangaly-dlya-dachi/' },
        { title: 'Жаровни к мангалам', path: '/category/mangali/zharovni-k-mangalu/' },
        { title: 'Аксессуары для мангалов', path: '/category/mangali/aksessuari/' }
    ]
    return (
        <div className={"pages-navigation__modal-wrapper " + (showNavModal === title && 'show')}>
            <div className='pages-navigation__modal'>
                {thisArray.map((item, i) => (
                    location.pathname !== item.path && <div key={i} className='pages-navigation__item'><NavLink to={item.path}>{item.title}</NavLink></div>
                ))}
            </div>
        </div>
    )
}

const AksesuaryDlyaMangalov = ({ showNavModal, location, title }) => {
    const thisArray = [
        { title: 'Вертела', path: '/category/mangali/aksessuari/vertela/' },
        { title: 'Шампуры', path: '/category/mangali/aksessuari/shampury/' },
        { title: 'Подставки для казана', path: '/category/mangali/aksessuari/podstavka-kazana-na-mangal/' },
        { title: 'Решётки гриль', path: '/category/mangali/aksessuari/reshetki-gril/' },
    ]
    return (
        <div className={"pages-navigation__modal-wrapper " + (showNavModal === title && 'show')}>
            <div className='pages-navigation__modal'>
                {thisArray.map((item, i) => (
                    location.pathname !== item.path && <div key={i} className='pages-navigation__item'><NavLink to={item.path}>{item.title}</NavLink></div>
                ))}
            </div>
        </div>
    )
}


const KazaniChuguny = ({ showNavModal, location, title }) => {
    const thisArray = [
        { title: 'На 6 литров', path: '/category/kazany-chugunnye/3-5-litra/' },
        { title: 'На 8 литров', path: '/category/kazany-chugunnye/na-8-litrov/' },
        { title: 'На 10 литров', path: '/category/kazany-chugunnye/na-10-litrov/' },
        { title: 'На 12 литров', path: '/category/kazany-chugunnye/na-12-litrov/' },
        { title: 'На 16 литров', path: '/category/kazany-chugunnye/na-16-litrov/' },
        { title: 'На 22 литров', path: '/category/kazany-chugunnye/na-22-litra/' },
        { title: 'Узбекские казаны', path: '/category/kazany-chugunnye/uzbekskie/' },
        { title: 'Афганские казаны', path: '/category/kazany-chugunnye/afganskie/' },
    ]
    return (
        <div className={"pages-navigation__modal-wrapper " + (showNavModal === title && 'show')}>
            <div className='pages-navigation__modal'>
                {thisArray.map((item, i) => (
                    location.pathname !== item.path && <div key={i} className='pages-navigation__item'><NavLink to={item.path}>{item.title}</NavLink></div>
                ))}
            </div>
        </div>
    )
}

export default Navigation