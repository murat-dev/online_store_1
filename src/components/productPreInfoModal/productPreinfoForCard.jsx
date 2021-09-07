// import './forCart.scss'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import MainButton from '../core/button'
import InputCart from '../core/inputCart'


const ProductPreInfoForCart = (props) => {
    let { priceCalculatorPreview, currentProductPreviewInfo, setCurrentProductPreviewInfo } = props

    const setProductSelect = (indexChoice, indexSelect) => {
        let clone = { ...currentProductPreviewInfo }
        for (let i = 0; i < currentProductPreviewInfo.select[indexSelect].choice.length; i++) {
            if (i === indexChoice) {
                currentProductPreviewInfo.select[indexSelect].choice[i].active = true
                currentProductPreviewInfo.select[indexSelect].titleChoiceActive = currentProductPreviewInfo.select[indexSelect].choice[i].title
            }
            else {
                currentProductPreviewInfo.select[indexSelect].choice[i].active = false
            }
        }
        setCurrentProductPreviewInfo(clone)
        priceCalculatorPreview()
        checkAvailable()
    }
    const setProductAdd = (index) => {
        let clone = { ...currentProductPreviewInfo }
        clone.add[index].active = !clone.add[index].active
        setCurrentProductPreviewInfo(clone)
        priceCalculatorPreview()
    }
    const checkAvailable = () => {
        let clone = { ...currentProductPreviewInfo }
        let сoincidence = []
        let notAvailableLength
        for(let i = 0; i < clone.notAvailable.length; i++){
            for(let j = 0; j < clone.notAvailable[i].length; j++){
                if(clone.select[clone.notAvailable[i][j].select].choice[clone.notAvailable[i][j].choice].active){
                    сoincidence.push(1) 
                }
            }
            notAvailableLength = clone.notAvailable[i].length
        }
        if(notAvailableLength === сoincidence.length){
            clone.info.status = false
        }
        else{
            clone.info.status = true
        }
        setCurrentProductPreviewInfo(clone)
    }

    return (
        <div className="product-pre-info__for-cart">
            {currentProductPreviewInfo && currentProductPreviewInfo.select.map((itemSelect, indexSelect) => (
                    <div key={indexSelect}>
                        {itemSelect.type === 'short' ?
                            <div className="for-cart__select-short">
                                <div className="select-short__title">{itemSelect.title + ' ' + itemSelect.titleChoiceActive} </div>
                                <div className="select-short__items">
                                    {itemSelect.choice.map((itemChoice, indexChoice) => (
                                        <div onClick={() => setProductSelect(indexChoice, indexSelect)} key={indexChoice} className={"select-short__item " + (itemChoice.active && "active")} >{itemChoice.title}</div>
                                    ))}
                                </div>
                            </div>
                            : itemSelect.type === 'long' &&
                            <div className="for-cart__select-long">
                                {itemSelect.choice.map((itemChoice, indexChoice) => (
                                    <label key={indexChoice} onClick={() => setProductSelect(indexChoice, indexSelect)} htmlFor={"select-long__radio" + indexChoice}>
                                        <input onChange={()=>{}} id={'select-long__radio' + indexChoice} type="radio" checked={itemChoice.active} />
                                        {itemChoice.title}  <span className='select-long__articul'>{itemChoice.articul}</span> {itemChoice.price?.title}
                                    </label>
                                ))}
                            </div>
                        }
                    </div>
                ))
            }
            { currentProductPreviewInfo && currentProductPreviewInfo.add.map((item, i) => (
                    <div key={i} className="for-cart__added">
                        <input onChange={()=>setProductAdd(i)} id={'for-cart-added__checkbox' + i} type="checkbox" checked={item.active}  />
                        <label htmlFor={"for-cart-added__checkbox" + i}>{item.title}</label>
                    </div>
                ))
            }


            <div className="for-cart__bottom">
                <div className="for-cart-bottom__content">
                    <div className="for-cart-bottom-content__count-btn">
                        <InputCart productForChangeCount={currentProductPreviewInfo} setProductForChangeCount={setCurrentProductPreviewInfo}/>
                        <MainButton type={'pre-info-modal'} productForCart={currentProductPreviewInfo} addClass={"for-cart-bottom__button-cart " + (currentProductPreviewInfo && !currentProductPreviewInfo.info.status && 'disabled')}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default connect(State, Actions)(ProductPreInfoForCart)