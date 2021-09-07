import './cartModal.scss'
import closeIcon from '../../assets/image/clearList.png'
import { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import { useHistory } from 'react-router-dom'

const CartModalPreview = ({ cartProduct, index, myCart, setMyCart, setShowCartModal }) => {
    const previewRef = useRef()
    const history = useHistory()

    const deletePreview = () => {
        previewRef.current.style.maxHeight = '0px'
        previewRef.current.style.paddingBottom = '0px'
        previewRef.current.style.marginBottom = '0px'
        previewRef.current.style.border = 'none'
        previewRef.current.style.transition = '0.8s'
        setTimeout(() => {
            let cloneMyCart = JSON.parse(JSON.stringify(myCart))
            cloneMyCart.splice(index, 1)
            setMyCart(cloneMyCart)
            localStorage.setItem('myCart', JSON.stringify(cloneMyCart))
        }, 800)
    }

    const linkTitle = (url) =>{
        setShowCartModal(false)
        history.push(url)
    }

    useEffect(() => {
        previewRef.current.style.maxHeight = previewRef.current.scrollHeight + 'px'
    })
    return (
        <div ref={previewRef} className="cart-modal__preview">
            <div className="cart-modal-preview__left-block">
                <img src={cartProduct.image[0]} alt="" />
            </div>
            <div className="cart-modal-preview__right-block">
                <div className="cart-modal-preview__title" onClick={()=> linkTitle(cartProduct.url)}> {cartProduct.title} </div>
                <div className="cart-modal-preview__count">{cartProduct.count} шт.</div>
                <div className="cart-modal-preview__price">
                    {cartProduct.price.oldPrice &&
                        <div className="old-price">{cartProduct.price.oldPrice.toLocaleString('ru')}</div>
                    }
                    <div className="new-price">{cartProduct.price.newPrice.toLocaleString('ru')} руб.</div>
                </div>
            </div>
            <img className="cart-modal-preview__close-icon" src={closeIcon} alt="" onClick={deletePreview} />
        </div>
    )
}

export default connect(State, Actions)(CartModalPreview)