import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import './style.scss'
import ProductPrice from '../productPrice/productPrice'
import MainButton from '../core/button'


const HeaderRight = (props) => {
    let { currentProductInfo, setCurrentProductInfo, priceCalculator, setShowAcessoriesModal } = props

    const setProductCount = e => {
        if (!/^\d+$/.test(e.target.value)) return
        if (e.target.value === '') return
        let clone = { ...currentProductInfo }
        clone.count = e.target.value
        setCurrentProductInfo(clone)
    }
    const setProductCountPlusMinus = (value) => {
        let clone = { ...currentProductInfo }
        if (clone.count <= 1 && value === -1) return
        let num = Number(clone.count) + value
        clone.count = num
        setCurrentProductInfo(clone)
    }

    const setProductSelect = (indexChoice, indexSelect) => {
        let clone = { ...currentProductInfo }
        for (let i = 0; i < currentProductInfo.select[indexSelect].choice.length; i++) {
            if (i === indexChoice) {
                currentProductInfo.select[indexSelect].choice[i].active = true
                currentProductInfo.select[indexSelect].titleChoiceActive = currentProductInfo.select[indexSelect].choice[i].title
            }
            else {
                currentProductInfo.select[indexSelect].choice[i].active = false
            }
        }
        setCurrentProductInfo(clone)
        priceCalculator()
        checkAvailable()
    }

    const setProductAdd = (index) => {
        let clone = { ...currentProductInfo }
        clone.add[index].active = !clone.add[index].active
        setCurrentProductInfo(clone)
        priceCalculator()
    }

    const checkAvailable = () => {
        let clone = { ...currentProductInfo }
        let сoincidence = []
        let notAvailableLength
        for (let i = 0; i < clone.notAvailable.length; i++) {
            for (let j = 0; j < clone.notAvailable[i].length; j++) {
                if (clone.select[clone.notAvailable[i][j].select].choice[clone.notAvailable[i][j].choice].active) {
                    сoincidence.push(1)
                }
            }
            notAvailableLength = clone.notAvailable[i].length
        }
        if (notAvailableLength === сoincidence.length) {
            clone.info.status = false
        }
        else {
            clone.info.status = true
        }
        setCurrentProductInfo(clone)
    }

    return (
        <div className="main-page-product__for-cart">
            <ProductPrice />

            <div className='info-block__status-wrapper'>
                {currentProductInfo?.code ?
                    <>
                        {currentProductInfo?.info.status ?
                            <div className='info-block__status'>
                                <i className="fas fa-bars"></i>
                                <div>В наличии</div>
                            </div>
                            :
                            <div className='info-block__status not-available'>
                                <i className="fas fa-bars"></i>
                                Товар с выбранным набором характеристик недоступен для покупки
                            </div>
                        }
                    </>
                    : ""
                }
            </div>
            {currentProductInfo && currentProductInfo.select.map((itemSelect, indexSelect) => (
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
                                    <input onChange={() => { }} id={'select-long__radio' + indexChoice} type="radio" checked={itemChoice.active} />
                                    {itemChoice.title}  <span className='select-long__articul'>{itemChoice.articul}</span> {itemChoice?.price?.title}
                                </label>
                            ))}
                        </div>
                    }
                </div>
            ))
            }

            {currentProductInfo && currentProductInfo.add.map((item, i) => (
                <div key={i} className="for-cart__added">
                    <input onChange={() => setProductAdd(i)} id={'for-cart-added__checkbox' + i} type="checkbox" checked={item.active} />
                    <label htmlFor={"for-cart-added__checkbox" + i}>{item.title}</label>
                </div>
            ))
            }


            <div className="for-cart__bottom">
                <div className="for-cart-bottom__content">
                    {currentProductInfo?.accessoriesProductCode?.length ?
                        <div className="accessories" onClick={() => setShowAcessoriesModal(true)}>Добавить аксессуары</div> : null
                    }

                    <div className="for-cart-bottom-content__count-btn">
                        <div className="for-cart-bottom__count">
                            <input className="for-cart__count" value={!currentProductInfo ? '' : currentProductInfo.count} onChange={setProductCount} type="text" />
                            <div className='for-cart-count__icons'>
                                <div className='for-cart-count__icon top-icon' onClick={setProductCountPlusMinus.bind(this, 1)}><i className="fas fa-sort-up"></i></div>
                                <div className='for-cart-count__icon bottom-icon' onClick={setProductCountPlusMinus.bind(this, -1)}><i className="fas fa-sort-down"></i></div>
                            </div>
                        </div>

                        <MainButton productForCart={currentProductInfo} addClass={"main-page-product__btn " + (currentProductInfo && !currentProductInfo.info.status && 'disabled')} type={'main-page'}/>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default connect(State, Actions)(HeaderRight)