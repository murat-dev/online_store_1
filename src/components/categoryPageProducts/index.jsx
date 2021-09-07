
import Navigation from "../core/navigation"
import ProductPreview from "../productPreview/productPreview.jsx"
import ProductPreviewList from "../productPreview/productPreviewList.jsx"
import ProductPreviewText from "../productPreview/productPreviewText.jsx"
import SideBarCheckFilter from "./SideBarCheckFilter"
import SideBarSliderFilter from "./SideBarSliderFilter"
import Sorting from "./sorting"
import './style.scss'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import dataBase from '../../assets/dataBase'
import { useEffect, useState } from "react"
import { orderBy } from 'lodash'
import { useHistory, useLocation } from "react-router-dom"





const CategoryPageProducts = ({ pageData, currentProducts, setCurrentProducts, setCurrentCategorySidBarFilters,
    сurrentCategorySidBarFilters, setResetCategorySidBarFilterPrice, setCurrentCategorySidBarSliderFilters, сurrentCategorySidBarSliderFilters, }) => {

    const [startCurrentProducts, setStartCurrentProducts] = useState([])
    const [showTypeActive, setShowTypeActive] = useState(1)
    const [titleSorting, setTitleSorting] = useState('Сортировать по:')
    const [activePage, setActivePage] = useState(1)
    const [pageList, setPageList] = useState([])
    const location = useLocation()
    const history = useHistory()

    let page = new URLSearchParams(location.search).get('page')
    const showProductsOnPage = 10

    const changePage = (num) => {
        history.push(location.pathname + `?page=${num}`)
    }
    const setParametersForPagination = () => {
        let numberOfPages = Math.ceil(currentProducts.length / showProductsOnPage)
        const arr = []
        for (let i = 0; i < numberOfPages; i++) {
            arr.push(i + 1)
        }
        setPageList(arr)
    }
    const currentProductsFromPage = arr => {
        let from = (activePage - 1) * showProductsOnPage
        let arrClone = JSON.parse(JSON.stringify(arr))
        return arrClone.splice(from, showProductsOnPage)
    }
    const paginationHTML = () => {
       
        
        return (
            pageList.length > 1 &&
            <div className='categoryPage__pagination bottom'>
                {activePage > 1 &&
                    <div onClick={() => setActivePage(1)} className='categoryPage__pagination-btn'>←</div>
                }
                {pageList.map((item, i) => (
                    <div key={i} onClick={() => changePage(item)} className={'categoryPage__pagination-btn ' + (activePage === item && 'selected')}>{item}</div>
                ))}
                {activePage !== pageList.length &&
                    <div onClick={() => setActivePage(pageList.length)} className='categoryPage__pagination-btn'>→</div>
                }
            </div>
        )
    }

    const startCategoryProducts = () => {
        let arr = []
        for (let i = 0; i < dataBase.length; i++) {
            let filterItem = false
            for (let j = 0; j < dataBase[i].type.length; j++) {
                if (filterItem) break
                for (let k = 0; k < pageData.type.length; k++) {
                    filterItem = dataBase[i].type[j] === pageData.type[k]
                    if (filterItem) {
                        arr.push(dataBase[i])
                        break
                    }
                }
            }
        }
        setStartCurrentProducts(arr)
        setCurrentProducts(arr)
    }

    const categoryFilterProducts = () => {
        let productsArray = []
        let canBeChanged = false
        if (сurrentCategorySidBarFilters?.length) {
            for (let k = 0; k < startCurrentProducts.length; k++) {
                let productAdded = false
                for (let i = 0; i < сurrentCategorySidBarFilters.length; i++) {
                    if (productAdded) break
                    for (let j = 0; j < сurrentCategorySidBarFilters[i].select.length; j++) {
                        if (productAdded) break
                        if (сurrentCategorySidBarFilters[i].select[j].active) {
                            canBeChanged = true
                            for (let h = 0; h < startCurrentProducts[k].categoryFilters.length; h++) {
                                if (productAdded) break
                                if (startCurrentProducts[k].categoryFilters[h].title === сurrentCategorySidBarFilters[i].title) {

                                    for (let s = 0; s < startCurrentProducts[k].categoryFilters[h].select.length; s++) {

                                        if (startCurrentProducts[k].categoryFilters[h].select[s] === сurrentCategorySidBarFilters[i].select[j].title) {
                                            productAdded = true
                                            productsArray.push(startCurrentProducts[k])
                                        }
                                    }
                                }

                            }
                        }

                    }
                }
            }
        }
        if (сurrentCategorySidBarSliderFilters?.length) {
            if (canBeChanged) categorySliderFilterProducts(productsArray)
            else categorySliderFilterProducts(startCurrentProducts)
        }
        else {
            if (canBeChanged) setCurrentProducts(productsArray)
            else setCurrentProducts(startCurrentProducts)
        }

    }

    const categorySliderFilterProducts = (arr) => {
        // проверяем
        let productArray = []
        let codeDelete = []
        for (let i = 0; i < arr.length; i++) {
            let deleted = false
            let filtersFinded = []
            for (let j = 0; j < arr[i].categorySliderFilter.length; j++) {
                if (deleted) break
                for (let k = 0; k < сurrentCategorySidBarSliderFilters.length; k++) {
                    if (arr[i].categorySliderFilter[j].title === сurrentCategorySidBarSliderFilters[k].title) {
                        filtersFinded.push(1)
                        if (arr[i].categorySliderFilter[j].select < сurrentCategorySidBarSliderFilters[k].min.value ||
                            arr[i].categorySliderFilter[j].select > сurrentCategorySidBarSliderFilters[k].max.value) {
                            codeDelete.push(arr[i].code)
                            deleted = true
                            break
                        }
                    }
                }
            }
            if (!deleted && (filtersFinded.length !== сurrentCategorySidBarSliderFilters.length)) {
                codeDelete.push(arr[i].code)
            }
        }
        // удаляем
        for (let i = 0; i < arr.length; i++) {
            let codeFound = false
            for (let j = 0; j < codeDelete.length; j++) {
                if (arr[i].code === codeDelete[j]) {
                    codeFound = true
                    break
                }
            }
            if (!codeFound) productArray.push(arr[i])
        }
        // console.log(productArray)
        // console.log(codeDelete)
        setCurrentProducts(productArray)
    }

    const categorySortProducts = (arr) => {
        if (titleSorting === 'Сортировать по:') return arr
        if (titleSorting === 'Цена') return orderBy(arr, 'price.newPrice', 'asc')
        if (titleSorting === 'Название') return orderBy(arr, 'title', 'asc')
        return arr
    }

    const allResets = () => {
        setCurrentCategorySidBarFilters(pageData.categorySideBarFilters)
        setResetCategorySidBarFilterPrice(true)
        setCurrentCategorySidBarSliderFilters(pageData.categorySideBarSliderFilters)
    }

    useEffect(() => {
        if (page) setActivePage(Number(page))
    }, [location])

    useEffect(() => {
        setParametersForPagination()
    }, [currentProducts])

    useEffect(() => {
        if (pageData.type.length) startCategoryProducts()
        setCurrentCategorySidBarFilters(pageData.categorySideBarFilters)
        setCurrentCategorySidBarSliderFilters(pageData.categorySideBarSliderFilters)
    }, [])

    useEffect(() => {
        if (startCurrentProducts.length && (сurrentCategorySidBarFilters.length || сurrentCategorySidBarSliderFilters.length)) categoryFilterProducts()
    }, [сurrentCategorySidBarFilters, сurrentCategorySidBarSliderFilters,])

    return (
        <div className='categoryPage'>

            {pageData.categorySideBarFilters.length || pageData.categorySideBarSliderFilters.length ?
                <div className="categoryPage__sideBarFiltersWrapper">
                    <div className="categoryPage__sideBarFilters">
                        {pageData.categorySideBarSliderFilters && pageData.categorySideBarSliderFilters.map((item, i) => (
                            <SideBarSliderFilter key={i} sliderData={item} index={i} />
                        ))}

                        {сurrentCategorySidBarFilters.map((item, i) => (
                            <SideBarCheckFilter key={i} index={i} />
                        ))}

                        <div className="clear-filters">
                            <div onClick={allResets} className="clear-filters__button"> Очистить фильтр </div>
                        </div>
                    </div>
                </div>
                : ""
            }


            <div className="categoryPage__mainBlock">
                <Navigation navigation={pageData.navigation} />
                <h1 className="categoryPage__title">{pageData.title}</h1>

                {currentProducts.length ?
                    <>
                        <Sorting
                            setShowTypeActive={setShowTypeActive}
                            showTypeActive={showTypeActive}
                            titleSorting={titleSorting}
                            setTitleSorting={setTitleSorting} />

                        {paginationHTML()}

                        {showTypeActive === 1 &&
                            <div className="categoryPage-mainBlock__product-preview">
                                {categorySortProducts(currentProductsFromPage(currentProducts)).map((item, i) => (
                                    <ProductPreview key={i} product={item} addClass={' categoryPageClass'} />
                                ))}

                            </div>
                        }
                        {showTypeActive === 2 &&
                            <div className="categoryPage-mainBlock__content-list">
                                {categorySortProducts(currentProductsFromPage(currentProducts)).map((item, i) => (
                                    <ProductPreviewList key={i} product={item} />
                                ))}
                            </div>
                        }
                        {showTypeActive === 3 &&
                            <div className="categoryPage-mainBlock__content-text">
                                {categorySortProducts(currentProductsFromPage(currentProducts)).map((item, i) => (
                                    <ProductPreviewText key={i} index={i} product={item} />
                                ))}
                            </div>
                        }
                        {paginationHTML()}
                    </>
                    :
                    <div className="categoryPage__noFinded-block">
                        <p>Не найдено ни одного товара.</p>
                        <div className="clear-filters noneFinded">
                            <div onClick={allResets} className="clear-filters__button"> Очистить фильтр </div>
                        </div>
                    </div>
                }

                {pageData.bottomText && pageData.bottomText()}

            </div>
        </div>
    )
}

export default connect(State, Actions)(CategoryPageProducts)

