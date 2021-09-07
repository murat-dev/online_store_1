import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import './product.scss'
import { useHistory } from 'react-router';
import MainButton from '../core/button'
import CompareFavorites from '../core/compareFavoritesIcon'


const ProductPreview = (props) => {
    const [percent, setPercent] = useState(null)
    const { product, setShowPreInfoModal, addClass, forMyFavorites, setMyFavorites,
        setBottomBarModals, bottomBarModals, setCurrentProductPreviewInfo } = props
    const history = useHistory()
    const [closeWithOpaсity, setCloseWithOpaсity] = useState(false)

    const setProductPreInfo = (product) => {
        setCurrentProductPreviewInfo(product)
        setShowPreInfoModal(true)
    }

    const getPercent = (oldPrice, newPrice) => {
        let diff = oldPrice - newPrice
        setPercent(Math.floor((diff / oldPrice) * 100))
    }

    const navLink = (url) => {
        history.push(url)
    }
    const deleteFavoritesProduct = () => {
        const storage = JSON.parse(localStorage.getItem('myFavorites'))
        const filteredFavorites = storage.filter(item => item.code !== product.code)
        localStorage.setItem('myFavorites', JSON.stringify(filteredFavorites))
        setCloseWithOpaсity(true)
        setTimeout(() => setMyFavorites(filteredFavorites), 500)

        let cloneBottomBarModals = JSON.parse(JSON.stringify(bottomBarModals))
        if (cloneBottomBarModals.favorite.show === 1) cloneBottomBarModals.favorite.show = 2
        else cloneBottomBarModals.favorite.show = 1
        cloneBottomBarModals.favorite.title = 'Удалён из избранного'
        setBottomBarModals(cloneBottomBarModals)
    }

    useEffect(() => {
        if (product?.price.oldPrice) {
            getPercent(product.price.oldPrice, product.price.newPrice)
        }
    }, [product?.price.oldPrice])

    return (
        <div className={'product-preview__standart ' + (addClass ? addClass : '') + (closeWithOpaсity ? ' close-with-opacity' : '')}>
            <div className='product'>
                <div className='product__top'>
                    <div className="product__img-block">
                        <div className="product__img-block">
                            <div className="product__img-wrapper" onClick={navLink.bind(this, product && product.url)}>
                                <img className="product__main-img" src={product && product.image[0]} alt="загрузка..." />
                            </div>
                            <div className='product__attr'>
                                {product && product.info.plusPresent && <div className='plus-present'>+ПОДАРОК</div>}
                                {percent && <div className="discount">{percent}%</div>}
                            </div>
                            <div className='magnifier-icon' onClick={setProductPreInfo.bind(this, product)}>
                                <i className="material-icons"> zoom_in </i>
                            </div>


                            <CompareFavorites product={product} addClass={'product__favorite-compare'} />

                        </div>
                    </div>

                    <div onClick={navLink.bind(this, product?.url)} className="product__title">{product?.title}</div>
                    <div className="product__status">
                        <span className="product__status-title">В наличии</span>
                        <span className="product__status-icon"></span>
                    </div>
                </div>
                <div className='product__bottom'>
                    <div className="product__price">
                        {product && product.price.oldPrice &&
                            <div className="old-price">{product?.price.oldPrice.toLocaleString('ru')} руб</div>
                        }
                        <div className="new-price">{product?.price.newPrice.toLocaleString('ru')} руб</div>
                    </div>

                    <MainButton productForCart={product} addClass={'preview-standart__btn'} type={'preview-standart'} />
                </div>



                {forMyFavorites &&
                    <div className="product-preview__forMyFavorites">
                        <div><i className="fas fa-times"></i></div>
                        <div onClick={deleteFavoritesProduct}>Удалить из списка</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default connect(State, Actions)(ProductPreview)


