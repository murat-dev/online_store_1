const initialState = {
    allProduct:[],
    currentProducts:[],
    currentProductInfo:null,
    currentProductPreviewInfo:null,
    сurrentCategorySidBarFilters:[],
    сurrentCategorySidBarSliderFilters:[],
    currentSliderPrices:{
        min:null,
        max:null
    },
    currentSearchProducts:[],
    searchValue:'',
    myCart:[],
    myFavorites:[],
    myCompare:[],
    myCompareTitles:[],
    myViews: [],
    resetCategorySidBarFilterPrice:false,
    showPreInfoModal:false,
    priceForSaving:null,
    priceForCart:null,

    priceForSavingPreview:null,
    priceForCartPreview:null,

    showMainPageSliderModal:false,
    showAcessoriesModal:false,
    currentImageForMainPageModal:'',
    eventsAdded:false, 
    sliderForBestSellData:null,
    showBackCallModal:false,
    showCartModal:false,
    showMenuMobileModal:false,

    bottomBarModals:{
        compare:{
            show:false,
            title:null
        },
        favorite:{
            show:false,
            title:null
        },
        cart:{
            show:false,
        }
    },
    windowWidth:null,
}


export default (state = initialState, {type, payload}) =>{
    switch (type) {
        case 'setCurrentCategorySidBarSliderFilters': return {
            ...state, сurrentCategorySidBarSliderFilters:payload
        }
        case 'setCurrentProductPreviewInfo': return {
            ...state, currentProductPreviewInfo:payload
        }
        case 'setShowMenuMobileModal': return {
            ...state, showMenuMobileModal:payload
        }
        case 'setWindowWidth': return {
            ...state, windowWidth:payload
        }
        case 'setSearchValue': return {
            ...state, searchValue:payload
        }
        case 'setCurrentSearchProducts': return {
            ...state, currentSearchProducts:payload
        }
        case 'setShowCartModal': return {
            ...state, showCartModal:payload
        }
        case 'setShowBackCallModal': return {
            ...state, showBackCallModal:payload
        }
        case 'setBottomBarModals': return {
            ...state, bottomBarModals:payload
        }
        case 'setMyCompareTitles': return {
            ...state, myCompareTitles:payload
        }
        case 'setMyFavorites': return {
            ...state, myFavorites:payload
        }
        case 'setMyCompare': return {
            ...state, myCompare:payload
        }
        case 'setMyViews': return {
            ...state, myViews:payload
        }
        case 'setMyCart': return {
            ...state, myCart:payload
        }
        case 'set_currentSliderPrices': return {
            ...state, currentSliderPrices:payload
        }
        case 'set_resetCategorySidBarFilterPrice': return {
            ...state, resetCategorySidBarFilterPrice:payload
        }
        case 'set_currentCategorySidBarFilters': return {
            ...state, сurrentCategorySidBarFilters:payload
        }
        case 'set_currentProducts': return {
            ...state, currentProducts:payload
        }
        case 'set_sliderForBestSellData': return {
            ...state, sliderForBestSellData:payload
        }
        case 'set_eventsAdded': return {
            ...state, eventsAdded:payload
        }
        case 'set_showAcessoriesModal': return {
            ...state, showAcessoriesModal:payload
        }
        case 'set_currentImageForMainPageModal': return {
            ...state, currentImageForMainPageModal:payload
        }
        case 'set_showMainPageSliderModal': return {
            ...state, showMainPageSliderModal:payload
        }
        
        case 'set_priceForCart': return {
            ...state, priceForCart:payload
        }
        case 'set_priceForSaving': return {
            ...state, priceForSaving:payload
        }

        case 'setPriceForCartPreview': return {
            ...state, priceForCartPreview:payload
        }
        case 'setPriceForSavingPreview': return {
            ...state, priceForSavingPreview:payload
        }

        case 'set_allProduct': return {
            ...state, allProduct:payload
        }
        case 'set_productPreInfo': return {
            ...state, currentProductInfo:payload
        }
        case 'set_showPreInfoModal': return {
            ...state, showPreInfoModal:payload
        }
        default: return state
    }
}