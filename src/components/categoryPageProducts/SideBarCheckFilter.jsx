import { useState, useEffect, useRef } from 'react'
import './style.scss'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'

const SideBarFilters = ({ index, сurrentCategorySidBarFilters, setCurrentCategorySidBarFilters, }) => {
    const [showFilter, setShowFilter] = useState(true)
    const contentRef = useRef(null)
    const sideBarFilter = useRef(null)
    const [loadAllAttributes, setLoadAllAttributes] = useState(false)

    const closeAndOpen = () => {
        // contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px'
        if (showFilter) {
            contentRef.current.style.maxHeight = '0px'
            contentRef.current.style.paddingBottom = '0px'
            contentRef.current.style.transition = '0.6s'
        }
        else {
            contentRef.current.style.transition = '0.6s'
            contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px'
            contentRef.current.style.paddingBottom = '15px'
        }
        setShowFilter(!showFilter)
    }
    
    useEffect(()=>{
        if(contentRef && showFilter){
            contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px'
        }
     })

    const showAllContent = () => {
        setLoadAllAttributes(true)
    }

    const changeAttribute = (i) => {
        let clone = JSON.parse(JSON.stringify(сurrentCategorySidBarFilters))
        clone[index].select[i].active = !сurrentCategorySidBarFilters[index].select[i].active
        setCurrentCategorySidBarFilters(clone)
    }
 

    return (
        <>


            <div ref={sideBarFilter} className="categoryPage__sideBarFilter">
                <div onClick={closeAndOpen} className="sideBarFilter__top">
                    <div className="sideBarFilter__topTitle">{сurrentCategorySidBarFilters[index]?.title}</div>
                    <div className="sideBarFilter__topIcon"><i className={"fas fa-chevron-down " + (!showFilter && "close")}></i></div>
                </div>

                <div ref={contentRef} className={"sideBarFilter__content"}>

                    {сurrentCategorySidBarFilters.length && !loadAllAttributes && сurrentCategorySidBarFilters[index].select.slice(0, 5).map((item, i) => (
                        <div key={i} className="content__items">
                            <label className={'content__item' + (i > 4 ? ' animation-item' : '')}>
                                <input onChange={changeAttribute.bind(this, i)} checked={item.active} type="checkbox" /> {item.title}
                            </label>
                        </div>
                    ))}

                    {сurrentCategorySidBarFilters.length && loadAllAttributes && сurrentCategorySidBarFilters[index].select.map((item, i) => (
                        <div key={i} className="content__items">
                            <label className={'content__item' + (i > 4 ? ' animation-item' : '')}>
                                <input onChange={changeAttribute.bind(this, i)} checked={item.active} type="checkbox" value={i} /> {item.title}
                            </label>
                        </div>
                    ))}

                    {!loadAllAttributes && сurrentCategorySidBarFilters[index].select.length > 5 &&
                        <label onClick={showAllContent} className='content__item'>
                            <span className='add-all'>показать еще </span>
                        </label>
                    }

                </div>
            </div>

        </>
    )
}


export default connect(State, Actions)(SideBarFilters)