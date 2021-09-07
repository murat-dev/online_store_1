export default () => {
    return (
        state => ({
            allProduct: state.allProduct,
            currentProducts: state.currentProducts,
            currentProductInfo: state.currentProductInfo,
            сurrentCategorySidBarFilters: state.сurrentCategorySidBarFilters,
            showPreInfoModal: state.showPreInfoModal,
            priceForCart: state.priceForCart,
            priceForSaving: state.priceForSaving,
            currentProductPanel: state.set_currentProductPanel,
            showMainPageSliderModal: state.showMainPageSliderModal,
            currentImageForMainPageModal: state.currentImageForMainPageModal,
            showAcessoriesModal: state.showAcessoriesModal,
            eventsAdded: state.eventsAdded,
            sliderForBestSellData: state.sliderForBestSellData,
            resetCategorySidBarFilterPrice: state.resetCategorySidBarFilterPrice,
            currentSliderPrices: state.currentSliderPrices,
            myCart: state.myCart,
            myFavorites: state.myFavorites,
            myCompare: state.myCompare,
            myViews: state.myViews,
            myCompareTitles: state.myCompareTitles,
            bottomBarModals: state.bottomBarModals,
            showBackCallModal: state.showBackCallModal,
            showCartModal: state.showCartModal,
            currentSearchProducts: state.currentSearchProducts,
            searchValue: state.searchValue,
            windowWidth: state.windowWidth,
            showMenuMobileModal: state.showMenuMobileModal,
            currentProductPreviewInfo: state.currentProductPreviewInfo,
            priceForSavingPreview: state.priceForSavingPreview,
            priceForCartPreview: state.priceForCartPreview,
            сurrentCategorySidBarSliderFilters: state.сurrentCategorySidBarSliderFilters
        })
    )
}

