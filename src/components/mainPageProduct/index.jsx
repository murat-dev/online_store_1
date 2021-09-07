import { useEffect } from 'react'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import './style.scss'
import HeaderRight from './headerRight'
import HeaderLeft from './headerLeft'
import MainPageBottom from './bottom'
import AccessoriesModal from './accessoriesModal'
import MainPageSliderModal from './mainPageSliderModal'
import Navigation from '../core/navigation.jsx'
import CompareFavorites from '../core/compareFavoritesIcon'
import dataBase from '../../assets/dataBase'


const MainProductHeader = (props) => {

    const getInfoByProductCode = (code) => {
        props.setCurrentProductInfo(dataBase.filter(item => item.code === code)[0])
    }

    const addViewsProduct = () => {
        console.log(props.currentProductInfo)
        const storage = JSON.parse(localStorage.getItem('myViews'))
        for (let i = 0; i < storage.length; i++) {
            if (storage[i].code === props.currentProductInfo.code) return
        }
        storage.push(props.currentProductInfo)
        localStorage.setItem('myViews', JSON.stringify(storage))
        props.setMyViews(storage)
    }

    useEffect(() => {
        getInfoByProductCode(props.productData.code)
        return () => {
            props.setCurrentProductInfo(null)
        }
    }, [])

    useEffect(() => {
        if (props.currentProductInfo && props.currentProductInfo.price) {
            props.priceCalculator()
        }
    }, [props.currentProductInfo && props.currentProductInfo.price])

    useEffect(() => {
        if (props.currentProductInfo) addViewsProduct()
    }, [props.currentProductInfo])

    return (
        <div className='main-page-product'>
            <Navigation navigation={props.productData.navigation} />

            <div className="main-page-product__bottom">
                <div className='header-bottom__title'>{props.currentProductInfo?.title}</div>

                <CompareFavorites product={props.currentProductInfo} addClass={'main-page-product__compare-favorites'} />


            </div>
            <div className="main-page-product__main">
                <div className="main-page-product__left-block">
                    <HeaderLeft />
                </div>
                <div className="main-page-product__right-block">
                    <HeaderRight  />
                </div>
            </div>
            <MainPageBottom productData={props.productData} />


            <MainPageSliderModal productData={props.productData} />
            <AccessoriesModal />
        </div>
    )
}

export default connect(State, Actions)(MainProductHeader)