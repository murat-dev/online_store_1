import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import './product.scss'
import { useHistory } from 'react-router';
import MainButton from '../core/button'
import InputCart from '../core/inputCart'


const ProductPreviewText = (props) => {
    const [percent, setPercent] = useState(null)
    const { product, currentProducts, setCurrentProducts, index } = props
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

    return (
        <div className='product-preview-text'>
            {product.info.status && <div className="preview-text__status">В наличии</div>}
            <div className="preview-text__title-articul">
                <div className='title-articul__articul'>Артикул: {product.code}</div>
                <div onClick={()=> history.push(product.url)} className='title-articul__title'>{product.title}</div>
            </div>
            <div className="preview-text-input-count">
                <InputCart
                    productForChangeCount={currentProducts}
                    setProductForChangeCount={setCurrentProducts}
                    productIndex={index}
                    addClassInput={'forClassInput'} />
            </div>
            <div className="preview-text__price">
                {product.price.oldPrice && <div className='oldPrice'>{product.price.oldPrice.toLocaleString('ru')} руб.</div>}
                <div className="newPrice-discount">
                    <div className="newPrice">{product.price.newPrice.toLocaleString('ru')} руб.</div>
                    {product.price.oldPrice && <div className="discount">-{percent}%</div>}
                </div>
            </div>
            <div className="preview-text__btn">
                <MainButton productForCart={product} addClass={'preview-text__btn'} type={'preview-text'}/>
            </div>
        </div>
    )
}

export default connect(State, Actions)(ProductPreviewText)
