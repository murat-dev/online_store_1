import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import './product.scss'
import { useHistory } from 'react-router';
import MainButton from '../core/button'
import CompareFavorites from '../core/compareFavoritesIcon'


const ProductPreviewList = (props) => {
    const [percent, setPercent] = useState(null)
    const { product } = props
    const history = useHistory()

    const getPercent = (oldPrice, newPrice) => {
        let diff = oldPrice - newPrice
        setPercent(Math.floor((diff / oldPrice) * 100))
    }

    const navLink = (url) => {
        history.push(url)
    }

    useEffect(() => {
        if (product?.price.oldPrice) {
            getPercent(product.price.oldPrice, product.price.newPrice)
        }
    }, [product?.price.oldPrice])

    const test = () => {
        console.log(product)
    }
    return (
        <div className='product-preview-list'>
            <div className="image-block">
                {product && <img src={product.image[0]} alt="1" />}
                {product?.price.oldPrice &&
                    <div className="discounts">-{percent}%</div>
                }
            </div>

            <div className="center-block">
                {product && <div className="center-block__articul">Артикул: {product.code}</div>}
                {product && <div onClick={navLink.bind(this, product.url)} className="center-block-title">{product.title}</div>}

                {product.characteristics.length ?
                    product.characteristics.map((item, i) => (
                        item.title !== 'Габаритные размеры (Д х Ш х В)' &&
                        item.title !== 'Размер жаровни Д х Ш' &&
                        <div onClick={test} key={i} className="center-block-attributes">
                            <div className="attributes__title">{item.title}</div>
                            <div className="attributes__info">{item.info}</div>
                        </div>
                    ))
                    : ""
                }

            </div>

            <div className="button-block">
                <div className="button-block__price">
                    {product?.price.oldPrice && <div className="old-price">{product.price.oldPrice.toLocaleString('ru')} руб.</div>}
                    {product && <div className="new-price">{product.price.newPrice.toLocaleString('ru')} руб.</div>}
                </div>
                <MainButton productForCart={product} addClass={'preview-list__btn'} type={'preview-list'} />
                <CompareFavorites product={product} addClass={'button-block__compare-favorites'} />
            </div>
        </div>
    )
}

export default connect(State, Actions)(ProductPreviewList)


