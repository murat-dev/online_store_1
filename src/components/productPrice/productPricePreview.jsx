import State from '../../redux/state'
import Actions from '../../redux/actions'
import { connect } from 'react-redux'
import './productPrice.scss'
import { useEffect, useState } from 'react'


const ProductPrice = (props) => {
    let [percentStr, setPercentStr] = useState('')
    let { priceForCartPreview, priceForSavingPreview, currentProductPreviewInfo } = props


    const productSaving = (oldPrice, newPrice) => {
        let diff = oldPrice - newPrice
        let percent = Math.floor((diff / oldPrice) * 100)
        setPercentStr(`Экономия: ${diff} руб. (${percent}%)`)
    }

    useEffect(() => {
        if (priceForSavingPreview && priceForSavingPreview.oldPrice) {
            productSaving(priceForSavingPreview.oldPrice, priceForSavingPreview.newPrice)
        }
    }, [priceForSavingPreview])

    return (
        <>
            {currentProductPreviewInfo && currentProductPreviewInfo.info.status &&
                    <div className='info-block__price-saving'>
                        <div className='info-block__price'>
                            {priceForCartPreview && <div className="new-price">{priceForCartPreview.newPrice && priceForCartPreview.newPrice + ' руб.'}</div>}
                            {priceForCartPreview && <div className="old-price">{priceForCartPreview.oldPrice > 0 && priceForCartPreview.oldPrice + ' руб.'}</div>}
                        </div>
                        {priceForSavingPreview && priceForSavingPreview.oldPrice > 0 && <div className='info-block__saving'> {percentStr} </div>}
                    </div>
            }
        </>
    )
}


export default connect(State, Actions)(ProductPrice)