import State from '../../redux/state'
import Actions from '../../redux/actions'
import { connect } from 'react-redux'
import './productPrice.scss'
import { useEffect, useState } from 'react'


const ProductPrice = (props) => {
    let [percentStr, setPercentStr] = useState('')
    let { priceForCart, priceForSaving, currentProductInfo } = props


    const productSaving = (oldPrice, newPrice) => {
        let diff = oldPrice - newPrice
        let percent = Math.floor((diff / oldPrice) * 100)
        setPercentStr(`Экономия: ${diff} руб. (${percent}%)`)
    }

    useEffect(() => {
        if (priceForSaving && priceForSaving.oldPrice) {
            productSaving(priceForSaving.oldPrice, priceForSaving.newPrice)
        }
    }, [priceForSaving])

    return (
        <>
            {currentProductInfo && currentProductInfo.info.status &&
                    <div className='info-block__price-saving'>
                        <div className='info-block__price'>
                            {priceForCart && <div className="new-price">{priceForCart.newPrice && priceForCart.newPrice + ' руб.'}</div>}
                            {priceForCart && <div className="old-price">{priceForCart.oldPrice > 0 && priceForCart.oldPrice + ' руб.'}</div>}
                        </div>
                        {priceForSaving && priceForSaving.oldPrice > 0 && <div className='info-block__saving'> {percentStr} </div>}
                    </div>
            }
        </>
    )
}


export default connect(State, Actions)(ProductPrice)