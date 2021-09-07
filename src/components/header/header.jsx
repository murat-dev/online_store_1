import './header.scss'
import logo from '../../assets/image/logo.png'
import logoMobile from '../../assets/image/logomobile.png'
// import cart from '../../assets/image/cart.png'
import i1 from '../../assets/image/i1.png'
import i2 from '../../assets/image/i2.png'
import i3 from '../../assets/image/i3.png'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import CartIcon from '../core/cartIcon'
import SearchModal from './SearchModal'
import dataBase from '../../assets/dataBase'



const Header = (props) => {
    const location = useLocation()
    const history = useHistory()

    const { getDataFromCart, setShowBackCallModal, setCurrentSearchProducts, currentSearchProducts, searchValue, setSearchValue,
        hideSearchModal } = props

    const fetchget = async () => {
        await axios.get('/mangals.json')
            .then(res => console.log(res))
    }

    const scrollY = () => {
        let coo = window.scrollY
        window.scrollTo(0, -coo)
    }

    const showSearchProducts = () => {

        let arr
        if (searchValue.length >= 4) {
            arr = dataBase.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            setCurrentSearchProducts(arr)
        }
        else setCurrentSearchProducts([])
    }

    useEffect(() => {
        scrollY()
    }, [location.pathname])

    useEffect(() => {
        getDataFromCart()
    }, [])

    useEffect(() => {
        showSearchProducts()
    }, [searchValue])

    useEffect(() => {
        if (location.pathname !== '/search') hideSearchModal()

    }, [location.pathname])
    return (
        <div className='header'>
            <div className='header__logo'>
                <img className="header__logo-img"
                    onClick={() => history.push('/')} src={logo} alt="1" />
                <img className="header__logoMobile-img"
                    onClick={() => history.push('/')} src={logoMobile} alt="1" />
            </div>
            <div className='header__right'>
                <div className='header-right__top'>
                    <div className='phone'>
                        <a href='tel:+74999387030' className='phone__top'>
                            <div>+7 (495) 507-02-41</div>
                            <div>Пн-Вс 9:00-21:00</div>
                        </a>
                        <div className='phone__bottom'>
                            <div>
                                <i className="fas fa-phone-alt"></i>
                                <div onClick={() => setShowBackCallModal(true)}>Заказать обратный звонок</div>
                            </div>
                            <div>
                                <i className="fas fa-envelope"></i>
                                <a href="mailto:mangalik.ru@yandex.ru">mangalik.ru@yandex.ru</a>
                            </div>
                        </div>
                    </div>
                    <CartIcon cartTop={true} addClass={'cartTop'} />

                </div>
                <div className='header-right__bottom'>
                    <div className='search'>
                        <input onChange={e => setSearchValue(e.target.value)} value={searchValue} placeholder='Поиск по товарам' type="text" />
                        <i className="fas fa-search" onClick={fetchget}></i>
                        {currentSearchProducts.length ?
                            <SearchModal />
                            : ''
                        }
                    </div>
                    <div className='info'>
                        <div>
                            <img src={i1} alt="" />
                            <div>Быстрая доставка</div>
                        </div>
                        <div>
                            <img src={i2} alt="" />
                            <div>Доступные способы оплаты</div>
                        </div>
                        <div>
                            <img src={i3} alt="" />
                            <div>Более 500+ товаров</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default connect(State, Actions)(Header)