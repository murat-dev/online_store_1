import React, { useEffect, useState } from 'react'
import './bottomBar.scss'
import Carticon from '../core/cartIcon'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import BottomBarModal from './bottomBarModal'

const BottomBar = ({ myFavorites, myCompare, myViews, myCart, bottomBarModals }) => {
    const history = useHistory()
    const [showScroll, setShowScroll] = useState(false)

    const scrollToUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const eventScroll = () => {
        if (window.pageYOffset > 150) {
            setShowScroll(true)
        }
        else {
            setShowScroll(false)
        }
    }

    const getedCountCart = () => {
        return myCart.reduce((accumulator, item) => accumulator + item.count, 0)
    }

    useEffect(() => {
        window.onscroll = eventScroll
        return () => {
            window.onscroll = null
        }
    }, [])
    return (
        <div className="bottom-bar__wrapper">
            <div className="bottom-bar">
                <div className="bottom-bar__select">

                    <div onClick={() => history.push('/favorites')} className={"select select__favorite "
                        + (bottomBarModals.favorite.show === 1 ? "show-select__favorite" : bottomBarModals.favorite.show === 2 && "show-select__favorite2")}>
                        <div> <i className="material-icons">favorite_border</i></div>
                        <div className='select__title'>Избранное</div>
                        <div className='select__title second'>избранное</div>
                        <div className='count'>{myFavorites.length}</div>
                        <BottomBarModal title={bottomBarModals.favorite.title} addClass={"bottom-bar__modal-favorite "
                            + (bottomBarModals.favorite.show === 1 ? "show-modal__favorite" : bottomBarModals.favorite.show === 2 && "show-modal__favorite2")} />
                    </div>

                    <div onClick={() => history.push('/compare')} className={"select select__compare "
                        + (bottomBarModals.compare.show === 1 ? "show-select__compare" : bottomBarModals.compare.show === 2 && "show-select__compare2")}>
                        <div> <i className="material-icons">tune</i></div>
                        <div className='select__title'>Сравнить товары</div>
                        <div className='select__title second'>сравнить</div>
                        <div className='count'>{myCompare.length}</div>
                        <BottomBarModal title={bottomBarModals.compare.title} addClass={'bottom-bar__modal-compare '
                            + (bottomBarModals.compare.show === 1 ? "show-modal__compare" : bottomBarModals.compare.show === 2 && "show-modal__compare2")} />
                    </div>

                    <div onClick={() => history.push('/viewed')} className="select select__viewed">
                        <div> <i className="far fa-eye"></i></div>
                        <div className='select__title'>Просмотренные товары</div>
                        <div className='select__title second'>вы смотрели</div>
                        <div className='count'>{myViews.length}</div>
                    </div>

                    <div onClick={() => history.push('/cart')} className={" bottom-bar__carts "
                        + (bottomBarModals.cart.show === 1 ? "show-select__cart" : bottomBarModals.cart.show === 2 && "show-select__cart2")}>

                        <div className='select bottom-bar__cart-minWidth'>
                            <i className="fas fa-shopping-cart"></i>
                            <div>корзина</div>
                            <div className='count'>{getedCountCart()}</div>
                        </div>

                        <Carticon addClass='bottom-bar__cart' bottomBarModal={true} />
                        <BottomBarModal title={'Добавлен в корзину'} addClass={'bottom-bar__modal-cart '
                            + (bottomBarModals.cart.show === 1 ? "show-modal__cart" : bottomBarModals.cart.show === 2 && "show-modal__cart2")} />
                    </div>

                </div>

                {/* <Carticon addClass='bottom-bar__cart' bottomBarModal={true} /> */}
                <div onClick={scrollToUp} className={"scroll-top " + (showScroll ? 'active' : '')}>
                    <i className="fas fa-caret-up"></i>
                </div>
            </div>
        </div>
    )
}

<span className="material-icons-outlined">
    tune
</span>



export default connect(State, Actions)(BottomBar)



