import './style.scss'
import Navigation from '../../components/core/navigation'
import ProductPreview from '../../components/productPreview/productPreview'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import dataBase from '../../assets/dataBase'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { orderBy } from 'lodash'



const Search = ({ }) => {
    const query = new URLSearchParams(useLocation().search).get('query')
    const [titleSorting, setTitleSorting] = useState('Сортировать по:')

    const pageData = {
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Найти', path: '/', active: true },
        ],
    }
    const getSearchProductFromQuery = (arr) => {
        return dataBase.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
    }

    useEffect(() => {
        console.log(query)
    }, [])

    const categorySortProducts = (arr) => {
        if (titleSorting === 'Сортировать по:') return arr
        if (titleSorting === 'Цена') return orderBy(arr, 'price.newPrice', 'asc')
        if (titleSorting === 'Название') return orderBy(arr, 'title', 'asc')
        return arr
    }

    return (
        <div className='search'>
            <Navigation navigation={pageData.navigation} />
            <h3>Результаты поиска ({query ? getSearchProductFromQuery().length : dataBase.length})</h3>

            {!query &&
                <SortingSearch titleSorting={titleSorting} setTitleSorting={setTitleSorting} />
            }

            {query && <div className="search__title">Запрос: <b>{query}</b></div>}

            {query && getSearchProductFromQuery.length &&
                <div className="search__content">
                    {getSearchProductFromQuery().map((item, i) => (
                        <ProductPreview product={item} key={i} />
                    ))}
                </div>
            }

            {!query &&
                <div className="search__content">
                    {categorySortProducts(dataBase).map((item, i) => (
                        <ProductPreview product={item} key={i} />
                    ))}
                </div>
            }

            {query && !getSearchProductFromQuery().length && <p>В этой категории нет ни одного товара.</p>}
        </div>
    )
}


const SortingSearch = ({ titleSorting, setTitleSorting }) => {

    const [showSortingModal, setShowSortingModal] = useState('closeWithAnimation')
    const [sortingTitleActive, setSortingTitleActive] = useState('Цена')


    const stateData = {
        setTitleSorting,
        setSortingTitleActive,
        setShowSortingModal,
        sortingTitleActive,
        showSortingModal,
    }

    const showSortModal = () => {
        if (showSortingModal !== 'open') setShowSortingModal('open')
        else setShowSortingModal('closeWithAnimation')

    }

    return (
        <div className="categoryPage__sorting">
            <div className="sorting__toggle-dropdown-wrapper">

                <div onClick={showSortModal} className="sorting__toggle-dropdown">
                    <div className='toggle-dropdown__title'>{titleSorting}{titleSorting !== 'Сортировать по:' && ' ↑'}</div>
                    <div className='toggle-dropdown__icon'><i className="material-icons"> keyboard_arrow_down</i></div>
                </div>

                <SortingSearchModal stateData={stateData} />
            </div>

        </div>
    )
}



const SortingSearchModal = ({ stateData }) => {
    const { setTitleSorting, setSortingTitleActive, sortingTitleActive, showSortingModal, setShowSortingModal } = stateData
    const sortingArray = [
        { title: 'Название' },
        { title: 'Цена' },
        { title: 'Хиты продаж' },
        { title: 'Оценка покупателей' },
        { title: 'Дата добавления' },
        { title: 'В наличии' },
    ]

    const changesOnClick = (title) => {
        setTitleSorting(title)
        setSortingTitleActive(title)
        setShowSortingModal('close')
    }

    return (
        <div className={"sorting__modal " + showSortingModal}>
            {sortingArray.map((item, i) => (
                <div
                    key={i}
                    className={sortingTitleActive === item.title ? 'active' : ''}
                    onClick={() => changesOnClick(item.title)}>
                    {item.title}

                    {sortingTitleActive === item.title && <span>&nbsp;&nbsp;&nbsp;↑</span>}
                </div>
            ))}
        </div>
    )
}

export default connect(State, Actions)(Search)