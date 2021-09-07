import axios from 'axios'

const Actions = {
    setAllProduct: (item) => ({ type: 'set_allProduct', payload: item }),
    setCurrentProducts: item => ({ type: 'set_currentProducts', payload: item }),
    setCurrentProductInfo: item => ({ type: 'set_productPreInfo', payload: item }),
    setCurrentProductPreviewInfo: item => ({ type: 'setCurrentProductPreviewInfo', payload: item }),
    setShowPreInfoModal: item => ({ type: 'set_showPreInfoModal', payload: item }),
    setPriceForSaving: item => ({ type: 'set_priceForSaving', payload: item }),
    setPriceForCart: item => ({ type: 'set_priceForCart', payload: item }),

    setPriceForSavingPreview: item => ({ type: 'setPriceForSavingPreview', payload: item }),
    setPriceForCartPreview: item => ({ type: 'setPriceForCartPreview', payload: item }),

    setShowMainPageSliderModal: item => ({ type: 'set_showMainPageSliderModal', payload: item }),
    setShowAcessoriesModal: item => ({ type: 'set_showAcessoriesModal', payload: item }),
    setCurrentImageForMainPageModal: item => ({ type: 'set_currentImageForMainPageModal', payload: item }),
    setEventsAdded: item => ({ type: 'set_eventsAdded', payload: item }),
    setSliderForBestSellData: item => ({ type: 'set_sliderForBestSellData', payload: item }),
    setCurrentCategorySidBarFilters: item => ({ type: 'set_currentCategorySidBarFilters', payload: item }),
    setResetCategorySidBarFilterPrice: item => ({ type: 'set_resetCategorySidBarFilterPrice', payload: item }),
    setCurrentSliderPrices: item => ({ type: 'set_currentSliderPrices', payload: item }),
    setMyCart: item => ({ type: 'setMyCart', payload: item }),
    setMyFavorites: item => ({ type: 'setMyFavorites', payload: item }),
    setMyCompare: item => ({ type: 'setMyCompare', payload: item }),
    setMyViews: item => ({ type: 'setMyViews', payload: item }),
    setMyCompareTitles: item => ({ type: 'setMyCompareTitles', payload: item }),
    setBottomBarModals: item => ({ type: 'setBottomBarModals', payload: item }),
    setShowBackCallModal: item => ({ type: 'setShowBackCallModal', payload: item }),
    setShowCartModal: item => ({ type: 'setShowCartModal', payload: item }),
    setCurrentSearchProducts: item => ({ type: 'setCurrentSearchProducts', payload: item }),
    setSearchValue: item => ({ type: 'setSearchValue', payload: item }),
    setWindowWidth: item => ({ type: 'setWindowWidth', payload: item }),
    setShowMenuMobileModal: item => ({ type: 'setShowMenuMobileModal', payload: item }),
    setCurrentCategorySidBarSliderFilters: item => ({ type: 'setCurrentCategorySidBarSliderFilters', payload: item }),
    

    closeProductPreInfoModal: () => (dispatch) => {
        dispatch(Actions.setCurrentProductPreviewInfo(null))
        dispatch(Actions.setShowPreInfoModal(false))
        dispatch(Actions.setPriceForSavingPreview(null))
        dispatch(Actions.setPriceForCartPreview(null))
    },

    priceCalculator: () => (dispatch, getState) => {
        let { currentProductInfo } = getState()
        let priceForCart = { ...currentProductInfo.price }
        let priceForSaving = { ...currentProductInfo.price }

        if (currentProductInfo.select) {
            for (let i = 0; i < currentProductInfo.select.length; i++) {
                for (let j = 0; j < currentProductInfo.select[i].choice.length; j++) {
                    if (currentProductInfo.select[i].choice[j].active) {
                        priceForCart.newPrice += currentProductInfo.select[i].choice[j].price.newPrice
                        priceForCart.oldPrice += currentProductInfo.select[i].choice[j].price.oldPrice
                        priceForSaving.newPrice += currentProductInfo.select[i].choice[j].price.newPrice
                        priceForSaving.oldPrice += currentProductInfo.select[i].choice[j].price.oldPrice
                    }
                }
            }
        }
        if (currentProductInfo.add) {
            for (let i = 0; i < currentProductInfo.add.length; i++) {
                if (currentProductInfo.add[i].active) {
                    priceForCart.newPrice += currentProductInfo.add[i].price
                }
            }
        }
        dispatch(Actions.setPriceForCart(priceForCart))
        dispatch(Actions.setPriceForSaving(priceForSaving))
    },

    priceCalculatorPreview: () => (dispatch, getState) => {
        let {currentProductPreviewInfo } = getState()
        let priceForCart = { ...currentProductPreviewInfo.price }
        let priceForSaving = { ...currentProductPreviewInfo.price }

        if (currentProductPreviewInfo.select) {
            for (let i = 0; i < currentProductPreviewInfo.select.length; i++) {
                for (let j = 0; j < currentProductPreviewInfo.select[i].choice.length; j++) {
                    if (currentProductPreviewInfo.select[i].choice[j].active) {
                        priceForCart.newPrice += currentProductPreviewInfo.select[i].choice[j].price.newPrice
                        priceForCart.oldPrice += currentProductPreviewInfo.select[i].choice[j].price.oldPrice
                        priceForSaving.newPrice += currentProductPreviewInfo.select[i].choice[j].price.newPrice
                        priceForSaving.oldPrice += currentProductPreviewInfo.select[i].choice[j].price.oldPrice
                    }
                }
            }
        }
        if (currentProductPreviewInfo.add) {
            for (let i = 0; i < currentProductPreviewInfo.add.length; i++) {
                if (currentProductPreviewInfo.add[i].active) {
                    priceForCart.newPrice += currentProductPreviewInfo.add[i].price
                }
            }
        }
        dispatch(Actions.setPriceForCartPreview(priceForCart))
        dispatch(Actions.setPriceForSavingPreview(priceForSaving))
    },

    scaleImageSize: (heightSize, widthSize, e) => () => {
        if (e.target.height > e.target.width) {
            e.target.style.maxWidth = '100%'
            e.target.style.width = ''
            e.target.style.height = ''
        }
        else if (e.target.width >= e.target.height) {
            e.target.style.width = widthSize
            e.target.style.height = 'auto'
        }
    },
    // scaleImageMaxSize: (heightSize, widthSize, e) => () => {
    //     if (e.target.height > e.target.width) {
    //         e.target.style.width = 'auto'
    //         e.target.style.height = heightSize
    //     }
    //     else if (e.target.width >= e.target.height) {
    //         e.target.style.width = widthSize
    //         e.target.style.height = 'auto'
    //     }
    // },
    getDataFromCart: () => (dispatch, getState) => {
        let storage = JSON.parse(localStorage.getItem('myCart'))
        dispatch(Actions.setMyCart(storage))
    },

    totalPriceInCart: () => (dispatch, getState) => {
        let { myCart } = getState()
        let price = 0
        for (let i = 0; i < myCart.length; i++) {
            let localPrice = 0
            localPrice += myCart[i].price.newPrice
            for (let j = 0; j < myCart[i].add.length; j++) {
                if (myCart[i].add[j].active) {
                    localPrice += myCart[i].add[j].price
                }
            }
            price += localPrice * myCart[i].count
        }
        return price
    },

    hideSearchModal:() => (dispatch, getState) => {
        dispatch(Actions.setCurrentSearchProducts([]))
        dispatch(Actions.setSearchValue(''))
    }   

}

export default Actions