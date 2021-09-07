import './cartModal.scss'
import CartModalPreview from './CartModalPreview'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import { useHistory } from 'react-router-dom'

const CartModal = ({ myCart, showCartModal, setShowCartModal }) => {
    const history = useHistory()
    const linkToCheckout = () =>{
        setShowCartModal(false)
        history.push('/checkout')
    }
    return (
        <div className={"cart-modal " + (showCartModal && 'cart-modal__opened')}>
            {myCart.map((item, i) => (
                <CartModalPreview key={i + item.code} cartProduct={item} index={i} />
            ))}
            {myCart.length ?
                <button className="cart-modal__btn" onClick={linkToCheckout}>Оформление заказа</button>
                :
                <div className='cart-modal__empty'>Ваша карзина пуста.</div>
            }
        </div>
    )
}

export default connect(State, Actions)(CartModal)