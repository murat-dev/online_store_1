
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import './style.scss'
import { useEffect, useState } from 'react'
import ProductPreview from '../productPreview/productPreview'
import Characteristics from './characteristics'

const MainPageBottom = ({ productData, allProduct, currentProductInfo }) => {
    const [activePanelList, setActivePanelList] = useState(0)
    const [activePanelListMobile, setActivePanelListMobile] = useState(0)
    const [reccomendedArray, setReccomendedArray] = useState([])

    const recomendedProducts = (arr) => {
        let reccArr = []
        for (let i = 0; i < currentProductInfo.recomendedProductCode.length; i++) {
            reccArr.push(arr.filter(item => item.code === currentProductInfo.recomendedProductCode[i])[0])
        }
        setReccomendedArray(reccArr)
    }

    const clickTitlePanelListMobile = (index) => {
        if (index === activePanelListMobile) setActivePanelListMobile('')
        else setActivePanelListMobile(index)
    }

    useEffect(() => {
        if (currentProductInfo?.recomendedProductCode?.length) recomendedProducts(allProduct)
    }, [currentProductInfo])

    return (
        <div className='mainPageBottom'>

            <div className="mainPageBottom__panelList">
                <div className="mainPageBottom__panelListTitle">
                    {productData.panelList.map((item, i) => (
                        <div key={i} onClick={() => setActivePanelList(i)} className={'panelList__item ' + (activePanelList === i && 'active')}>{item.title}</div>
                    ))}
                </div>

                <div className="panelList__info">
                    {productData.panelList.map((item, i) => (
                        <div key={i} className={'info__item ' + (activePanelList === i && 'active')}>
                            {item.title === 'ХАРАКТЕРИСТИКИ' ?
                                currentProductInfo?.characteristics.length &&
                                currentProductInfo.characteristics.map((item, i) => (
                                    <Characteristics key={i} data={{ title: item.title, info: item.info }} />
                                ))
                                :
                                item.content()
                            }
                        </div>
                    ))}
                </div>
            </div>

            <div className="mainPageBottom__panelListMobile">
                {productData.panelList.map((item, i) => (
                    <div key={i} className={"mainPageBottom__panelListMobileItem " + (activePanelListMobile === i && " selected")}>
                        <div onClick={clickTitlePanelListMobile.bind(this, i)} className="mainPageBottom__panelListMobileTitle"> {item.title} </div>

                        <div className="mainPageBottom__panelListMobileInfo ">
                            {item.title === 'ХАРАКТЕРИСТИКИ' ?
                                currentProductInfo?.characteristics.length &&
                                currentProductInfo.characteristics.map((item, i) => (
                                    <Characteristics key={i} data={{ title: item.title, info: item.info }} />
                                ))
                                :
                                item.content()
                            }
                        </div>
                    </div>
                ))}


                {/* <div className="mainPageBottom__panelListMobileItem selected">
                    <div className="mainPageBottom__panelListMobileTitle "> Характеристики </div>
                    <div className="mainPageBottom__panelListMobileInfo ">фывфыв</div>
                </div> */}
            </div>

            {reccomendedArray.length ?
                <>
                    <div className="reccomendedProduct__title ">Рекомендуем посмотреть</div>
                    <div className='reccomendedProduct'>
                        {reccomendedArray.map((item, i) => (
                            <ProductPreview key={i} product={item} />
                        ))}
                    </div>
                </>
                : ''
            }

        </div>
    )
}

export default connect(State, Actions)(MainPageBottom)