
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import MainButton from '../core/button'

const AccessoriesModal = ({ showAcessoriesModal, setShowAcessoriesModal, allProduct, currentProductInfo }) => {

    const [accessoriesArray, setAccessoriesArray] = useState([])
    const history = useHistory()

    const accessoriesProducts = (arr) => {
        let AccessoriesArr = []
        for (let i = 0; i < currentProductInfo.accessoriesProductCode.length; i++) {
            let findAccessories = arr.filter(item => item.code === currentProductInfo.accessoriesProductCode[i])[0]
            if (findAccessories) AccessoriesArr.push(findAccessories)
        }
        setAccessoriesArray(AccessoriesArr)
    }

    const navLink = (item) => {
        setShowAcessoriesModal(false)
        history.push(item.url)
    }

    useEffect(() => {
        if (currentProductInfo?.accessoriesProductCode?.length && allProduct.length) {
            accessoriesProducts(allProduct)
        }
    }, [allProduct, currentProductInfo])


    return (
        <div className={'accessoriesModal ' + (showAcessoriesModal && 'open')}>
            <div onClick={() => setShowAcessoriesModal(false)} className="accessoriesModal__shadow"></div>
            <div className="accessoriesModal__body">
                <div className="accessoriesModal__content">
                    <div className="accessoriesModal__title">
                        Акксесуары для Мангал ВИТЯЗЬ с печкой под казан, крышкой-гриль и решеткой (2021)
                    </div>
                    {accessoriesArray.map((item, i) => (
                        <div key={i} className="accessoriesModal__content-item">
                            <div className="contentItem__leftBlock">
                                <img src={item?.image[0]} alt="1" />
                            </div>
                            <div className="contentItem__rightBlock">
                                <div className="rightBlock__articul">Артикул: {item?.code}</div>
                                <div onClick={navLink.bind(this, item)} className="rightBlock__title">{item?.title}</div>
                                <div className="discription">{item?.description && item.description}</div>
                                <div className="rightBlock__priceButton">
                                    <div className="price">{item?.price.newPrice} руб.</div>

                                    <MainButton productForCart={item} type={'accessoriesModal'}/>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
                <i className="fas fa-times" onClick={() => setShowAcessoriesModal(false)}></i>
            </div>
        </div>
    )
}
export default connect(State, Actions)(AccessoriesModal)