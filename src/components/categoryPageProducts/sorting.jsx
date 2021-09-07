import { useState } from "react"
import './style.scss'



const Sorting = ({ showTypeActive, setShowTypeActive, setTitleSorting, titleSorting }) => {
    // const [showTypeActive, setShowTypeActive] = useState(1)
    // const [showTitleSorting, setShowTitleSorting] = useState('Сортировать по:')


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

                <SortingModal stateData={stateData} />
            </div>

            <div className="sorting__show-type">
                <div onClick={() => setShowTypeActive(1)}><i className={"fa fa-th-large " + (showTypeActive === 1 && "active")} aria-hidden="true"></i></div>
                <div onClick={() => setShowTypeActive(2)}><i className={"fa fa-th-list " + (showTypeActive === 2 && "active")} aria-hidden="true"></i></div>
                <div onClick={() => setShowTypeActive(3)}><i className={"fa fa-align-justify " + (showTypeActive === 3 && "active")} aria-hidden="true"></i></div>
            </div>
        </div>
    )
}



const SortingModal = ({ stateData }) => {
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
    // useEffect(()=>{
    //     document.body.onclick = ()=>setShowSortingModal('close')
    // })
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


export default Sorting