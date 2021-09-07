import './style.scss'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import { connect } from 'react-redux'
import cart from '../../assets/image/cart.png'
import { useHistory, useLocation } from "react-router-dom"
import CartModal from '../cartModal/CartModal'
import { useEffect } from 'react'

const CartIcon = ({ totalPriceInCart, myCart, addClass, cartTop, setShowCartModal }) => {
    const history = useHistory()
    const location = useLocation()

    const getedCountCart = () => {
        return myCart.reduce((accumulator, item) => accumulator + item.count, 0)
    }

    const showCartModal = () => {
        if (cartTop && location.pathname !== '/cart') setShowCartModal(true)
    }
    const hideCartModal = () => {
        if (cartTop) setShowCartModal(false)
    }
    useEffect(() => {
        if (location.pathname === '/cart') setShowCartModal(false)
    }, [location])
    return (
        <div onMouseOver={showCartModal} onMouseLeave={hideCartModal} className="cart-icon__wrapper">
            <div onClick={() => history.push('/cart')} className={'cart-icon ' + addClass}>
                <div className='cart-icon__title'>Корзина</div>
                <img className='cart-icon__img' src={cart} alt="Load.." />
                <div className='cart-icon__count'>{getedCountCart()}</div>
                <div className='cart-icon__price'>{totalPriceInCart().toLocaleString('ru')} руб.</div>
            </div>
            {cartTop && <CartModal />}
        </div>
    )
}

export default connect(State, Actions)(CartIcon)