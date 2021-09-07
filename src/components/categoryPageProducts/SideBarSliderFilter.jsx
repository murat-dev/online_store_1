
import './style.scss'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import { useEffect, useState, useRef } from "react"

// let positionThumbMin
//     let positionThumbMax
//     let sliderPriceNotActiveWidth
//     let clickX
//     let startX

const SideBarSliderFilter = ({ setResetCategorySidBarFilterPrice, resetCategorySidBarFilterPrice,
    sliderData, windowWidth, setCurrentCategorySidBarSliderFilters, сurrentCategorySidBarSliderFilters,
    index }) => {

    let positionThumbMin
    let positionThumbMax
    let sliderPriceNotActiveWidth
    let clickX
    let startX


    const { min, max, title } = sliderData
    const [showFilter, setShowFilter] = useState(true)
    const [stateMin, setStateMin] = useState(min.value)
    const [stateMax, setStateMax] = useState(max.value)
    const [dragStoped, setDragStoped] = useState(false)

    const contentRef = useRef()
    const thumbMinRef = useRef()
    const thumbMaxRef = useRef()
    const sliderPriceActiveRef = useRef()
    const sliderPriceNotActiveRef = useRef()


    const closeAndOpen = () => {

        if (showFilter) {
            contentRef.current.style.maxHeight = '0px'
            contentRef.current.style.paddingBottom = '0px'
            contentRef.current.style.transition = '0.6s'
        }
        else {
            contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px'
            contentRef.current.style.paddingBottom = '15px'
        }

        setShowFilter(!showFilter)
    }
    useEffect(() => {
        if (contentRef && showFilter) {
            contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px'
        }

    })


    const setThumbsParameters = () => {

        sliderPriceNotActiveWidth = sliderPriceNotActiveRef?.current?.clientWidth

        if (stateMin < min.value || stateMin > stateMax) return
        else {
            let offsetPercentMin = (stateMin - min.value) / (max.value - min.value) * 100
            let offsetPxMin = (sliderPriceNotActiveWidth - 20) / 100 * offsetPercentMin
            positionThumbMin = offsetPxMin
        }

        if (stateMax > max.value || stateMax < stateMin) return
        else {
            let offsetPercentMax = (stateMax - min.value) / (max.value - min.value) * 100
            let offsetPxMax = (sliderPriceNotActiveWidth - 20) / 100 * offsetPercentMax
            positionThumbMax = offsetPxMax
        }

        setPositionThumbs(1)
        setPositionThumbs(2)
        setPositionSliderNotActive()
        addEvents()
    }

    const addEvents = () => {
        if (thumbMinRef && thumbMaxRef) {
            thumbMinRef.current.onpointerdown = startDragMin
            thumbMaxRef.current.onpointerdown = startDragMax
        }
    }

    const getSliderPrice = (thumbs) => {
        if (thumbs === 1) {
            let totalWidth = sliderPriceNotActiveRef.current.clientWidth - 20
            let percentOffsetMin = Math.floor(positionThumbMin / totalWidth * 100)
            let currentMinPrice = Math.floor((max.value - min.value) / 100 * percentOffsetMin)

            setStateMin(currentMinPrice + min.value)
        }

        if (thumbs === 2) {
            let totalWidth = sliderPriceNotActiveRef.current.clientWidth - 20
            let percentOffsetMax = Math.floor(positionThumbMax / totalWidth * 100)
            let currentMaxPrice = Math.floor((max.value - min.value) / 100 * percentOffsetMax)

            setStateMax(currentMaxPrice + min.value)
        }
    }
    const startDragMin = (event) => {
        setDragStoped(false)
        clickX = event.pageX
        if (positionThumbMin > 4) {
            positionThumbMin = positionThumbMin -= 4
            setPositionThumbs(1)
            setPositionSliderNotActive()
        }
        startX = positionThumbMin
        window.onpointerup = stopDrag
        window.onpointermove = draggingMin
        thumbMinRef.current.ontouchend = stopDrag
    }
    const draggingMin = (event) => {
        let drag = event.pageX
        let dragShift = drag - clickX

        positionThumbMin = startX + dragShift
        if (positionThumbMin < 0) positionThumbMin = 0
        if (positionThumbMin > positionThumbMax) positionThumbMin = positionThumbMax

        setPositionThumbs(1)
        setPositionSliderNotActive()
        getSliderPrice(1)
    }
    const startDragMax = (event) => {
        setDragStoped(false)
        clickX = event.pageX
        if (positionThumbMax > (positionThumbMin + 4)) {
            positionThumbMax -= 4
            setPositionThumbs(2)
            setPositionSliderNotActive()
        }
        startX = positionThumbMax
        window.onpointerup = stopDrag
        window.onpointermove = draggingMax
        thumbMaxRef.current.ontouchend = stopDrag
    }
    const draggingMax = (event) => {
        let drag = event.pageX
        let dragShift = drag - clickX

        positionThumbMax = startX + dragShift

        if (positionThumbMax > sliderPriceNotActiveWidth - 20) positionThumbMax = sliderPriceNotActiveWidth - 20
        if (positionThumbMax < positionThumbMin) positionThumbMax = positionThumbMin

        setPositionThumbs(2)
        setPositionSliderNotActive()
        getSliderPrice(2)
    }
    const stopDrag = () => {
        window.onpointermove = null
        window.onpointerup = null
        setDragStoped(true)
    }
    const setPositionThumbs = (thumbs) => {
        if (thumbs === 1) {
            thumbMinRef.current.style.transform = `translate(${positionThumbMin}px)`
        }
        if (thumbs === 2) {
            thumbMaxRef.current.style.transform = `translate(${positionThumbMax}px)`
        }
    }
    const setPositionSliderNotActive = () => {
        sliderPriceActiveRef.current.style.width = positionThumbMax - positionThumbMin + 'px'
        sliderPriceActiveRef.current.style.transform = `translate(${positionThumbMin}px)`
    }
    const resetPriceFilter = () => {
        setStateMin(min.value)
        setStateMax(max.value)
        setResetCategorySidBarFilterPrice(false)
    }
    const startSliderFilter = () => {
        if (stateMin === min.value && stateMax === max.value) {
            setThumbsParameters()
        }
    }
    const setInputNumber = (thumbs, event) => {
        // if (!/^\d+$/.test(event.target.value)) return
        if (thumbs === 1) {
            setStateMin(Number(event.target.value))
        }
        if (thumbs === 2) {
            setStateMax(Number(event.target.value))
        }
    }

    const inputOnBlur = () => {
        setThumbsParameters()
        changeFilterSliderProducts()
    }

    const changeFilterSliderProducts = () => {
        let clone = JSON.parse(JSON.stringify(сurrentCategorySidBarSliderFilters))
        clone[index].min.value = stateMin
        clone[index].max.value = stateMax

        setCurrentCategorySidBarSliderFilters(clone)
    }

    useEffect(() => {
        addEvents()
    }, [thumbMaxRef, thumbMaxRef])

    useEffect(() => {
        startSliderFilter()
    }, [stateMin, stateMax])

    useEffect(() => {
        setThumbsParameters()
    }, [thumbMaxRef, thumbMaxRef, sliderPriceActiveRef, sliderPriceNotActiveRef?.current?.clientWidth])

    useEffect(() => {
        if (resetCategorySidBarFilterPrice) resetPriceFilter()
    }, [resetCategorySidBarFilterPrice])

    useEffect(() => {
        if (dragStoped) changeFilterSliderProducts()
    }, [dragStoped])

    useEffect(() => {
        setThumbsParameters()
    }, [windowWidth])

    return (
        <div className="categoryPage__sideBarFilter">
            <div onClick={closeAndOpen} className="sideBarFilter__top">
                <div className="sideBarFilter__topTitle">{title}</div>
                <div className="sideBarFilter__topIcon"><i className={"fas fa-chevron-down " + (!showFilter && "close")}></i></div>
            </div>

            <div ref={contentRef} className="sideBarFilter__content">
                <div className="sideBarFilter-content__price-filter">

                    <div className="price-filter__inputs">
                        <input onChange={setInputNumber.bind(this, 1)}
                            onBlur={inputOnBlur}
                            value={stateMin !== min.value ? stateMin : ''}
                            className="price-filter__input min"
                            placeholder={min.value} type="text" />
                        <div>—</div>
                        <input onChange={setInputNumber.bind(this, 2)}
                            onBlur={inputOnBlur}
                            value={stateMax !== max.value ? stateMax : ''}
                            className="price-filter__input max"
                            placeholder={max.value} type="text" />
                    </div>

                    <div className="price-filter__price-hints">
                        {min.title && <div className="price-hint">{min.value} {min.title}</div>}
                        {max.title && <div className="price-hint">{max.value} {max.title}</div>}
                    </div>

                    <div ref={sliderPriceNotActiveRef} className="sideBarFilter__slider-price">
                        <div ref={sliderPriceActiveRef} className="slider-price"></div>
                        <div ref={thumbMinRef} id='thumb-min' className="slider-price__thumb"></div>
                        <div ref={thumbMaxRef} id='thumb-max' className="slider-price__thumb"></div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default connect(State, Actions)(SideBarSliderFilter)













































// import './style.scss'
// import { connect } from 'react-redux'
// import State from '../../redux/state'
// import Actions from '../../redux/actions'
// import { useEffect, useState, useRef } from "react"

// const SideBarFilterPrice = ({ minPrice, maxPrice, setResetCategorySidBarFilterPrice, resetCategorySidBarFilterPrice,
//     setCurrentSliderPrices, currentSliderPrices, sliderData, windowWidth }) => {

//     let positionThumbMin
//     let positionThumbMax
//     let sliderPriceNotActiveWidth
//     let clickX
//     let startX

//     const { min, max, title } = sliderData
//     const [showFilter, setShowFilter] = useState(true)
//     const [sliderPriceMin, setSliderPriceMin] = useState(minPrice)
//     const [sliderPriceMax, setSliderPriceMax] = useState(maxPrice)
//     const [dragStoped, setDragStoped] = useState(false)

//     const contentRef = useRef()
//     const thumbMinRef = useRef()
//     const thumbMaxRef = useRef()
//     const sliderPriceActiveRef = useRef()
//     const sliderPriceNotActiveRef = useRef()


//     const closeAndOpen = () => {

//         if (showFilter) {
//             contentRef.current.style.maxHeight = '0px'
//             contentRef.current.style.paddingBottom = '0px'
//             contentRef.current.style.transition = '0.6s'
//         }
//         else {
//             contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px'
//             contentRef.current.style.paddingBottom = '15px'
//         }

//         setShowFilter(!showFilter)
//     }
//     useEffect(() => {
//         if (contentRef && showFilter) {
//             contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px'
//         }

//     })


//     const setThumbsParameters = () => {

//         sliderPriceNotActiveWidth = sliderPriceNotActiveRef.current?.clientWidth
//         if (sliderPriceMin === minPrice) {
//             positionThumbMin = 0
//         }
//         else if (sliderPriceMin < minPrice || sliderPriceMin > sliderPriceMax) positionThumbMin = positionThumbMin
//         else {
//             let percentOffsetMin = minPrice / maxPrice * 100
//             let percentOffset = Math.floor(sliderPriceMin / (maxPrice - minPrice) * 100 - percentOffsetMin)
//             let offsetPx = (sliderPriceNotActiveWidth - 20) / 100 * percentOffset
//             positionThumbMin = offsetPx
//         }

//         if (sliderPriceMax === maxPrice) {
//             positionThumbMax = sliderPriceNotActiveWidth - 20
//         }
//         else if (sliderPriceMax > maxPrice || sliderPriceMax < sliderPriceMin) positionThumbMax = positionThumbMax
//         else {
//             let percentOffsetMax = minPrice / maxPrice * 100
//             let percentOffset = Math.floor(sliderPriceMax / (maxPrice - minPrice) * 100 - percentOffsetMax)
//             let offsetPx = (sliderPriceNotActiveWidth - 20) / 100 * percentOffset
//             positionThumbMax = offsetPx
//         }

//         setPositionThumbs(1)
//         setPositionThumbs(2)
//         setPositionSliderNotActive()
//     }
//     const addEvents = () => {
//         if (thumbMinRef && thumbMaxRef) {
//             thumbMinRef.current.onpointerdown = startDragMin
//             thumbMaxRef.current.onpointerdown = startDragMax
//         }
//     }

//     const getSliderPrice = (thumbs) => {
//         if (thumbs === 1) {
//             let totalWidth = sliderPriceNotActiveRef.current.clientWidth - 20
//             let percentOffsetMin = Math.floor(positionThumbMin / totalWidth * 100)
//             let currentMinPrice = Math.floor((maxPrice - minPrice) / 100 * percentOffsetMin)

//             setSliderPriceMin(currentMinPrice + minPrice)
//         }

//         if (thumbs === 2) {
//             let totalWidth = sliderPriceNotActiveRef.current.clientWidth - 20
//             let percentOffsetMax = Math.floor(positionThumbMax / totalWidth * 100)
//             let currentMaxPrice = Math.floor((maxPrice - minPrice) / 100 * percentOffsetMax)

//             setSliderPriceMax(currentMaxPrice + minPrice)
//         }
//     }
//     const startDragMin = (event) => {
//         setDragStoped(false)
//         clickX = event.pageX
//         if (positionThumbMin > 4) {
//             positionThumbMin = positionThumbMin -= 4
//             setPositionThumbs(1)
//             setPositionSliderNotActive()
//         }
//         startX = positionThumbMin
//         window.onpointerup = stopDrag
//         window.onpointermove = draggingMin
//         thumbMinRef.current.ontouchend = stopDrag
//     }
//     const draggingMin = (event) => {
//         let drag = event.pageX
//         let dragShift = drag - clickX

//         positionThumbMin = startX + dragShift
//         if (positionThumbMin < 0) positionThumbMin = 0
//         if (positionThumbMin > positionThumbMax) positionThumbMin = positionThumbMax

//         setPositionThumbs(1)
//         setPositionSliderNotActive()
//         getSliderPrice(1)
//     }
//     const startDragMax = (event) => {
//         console.log(positionThumbMax)
//         setDragStoped(false)
//         clickX = event.pageX
//         if (positionThumbMax > (positionThumbMin + 4)) {
//             positionThumbMax -= 4
//             setPositionThumbs(2)
//             setPositionSliderNotActive()
//         }
//         startX = positionThumbMax
//         window.onpointerup = stopDrag
//         window.onpointermove = draggingMax
//         thumbMaxRef.current.ontouchend = stopDrag
//     }
//     const draggingMax = (event) => {
//         let drag = event.pageX
//         let dragShift = drag - clickX

//         positionThumbMax = startX + dragShift

//         if (positionThumbMax > sliderPriceNotActiveWidth - 20) positionThumbMax = sliderPriceNotActiveWidth - 20
//         if (positionThumbMax < positionThumbMin) positionThumbMax = positionThumbMin

//         setPositionThumbs(2)
//         setPositionSliderNotActive()
//         getSliderPrice(2)
//     }
//     const stopDrag = () => {
//         console.log(positionThumbMax)
//         window.onpointermove = null
//         window.onpointerup = null
//         setDragStoped(true)
//     }
//     const setPositionThumbs = (thumbs) => {
//         if (thumbs === 1) {
//             thumbMinRef.current.style.transform = `translate(${positionThumbMin}px)`
//         }
//         if (thumbs === 2) {
//             thumbMaxRef.current.style.transform = `translate(${positionThumbMax}px)`
//         }
//     }
//     const setPositionSliderNotActive = () => {
//         sliderPriceActiveRef.current.style.width = positionThumbMax - positionThumbMin + 'px'
//         sliderPriceActiveRef.current.style.transform = `translate(${positionThumbMin}px)`
//     }
//     const resetPriceFilter = () => {
//         setSliderPriceMin(minPrice)
//         setSliderPriceMax(maxPrice)
//         setResetCategorySidBarFilterPrice(false)
//     }
//     const startSliderFilter = () => {
//         if (sliderPriceMin === minPrice && sliderPriceMax === maxPrice) {
//             setThumbsParameters()
//             addPriceInRedux()
//         }
//     }
//     const setInputPrices = (thumbs, event) => {
//         // if (!/^\d+$/.test(event.target.value)) return
//         if (thumbs === 1) {
//             setSliderPriceMin(event.target.value)
//         }
//         if (thumbs === 2) {
//             setSliderPriceMax(event.target.value)
//         }
//     }
//     const addPriceInRedux = () => {
//         let clone = { ...currentSliderPrices }
//         clone.min = sliderPriceMin
//         clone.max = sliderPriceMax
//         setCurrentSliderPrices(clone)
//     }
//     const inputOnBlur = () => {
//         addPriceInRedux()
//         setThumbsParameters()
//     }

//     useEffect(() => {
//         addEvents()
//     }, [thumbMaxRef, thumbMaxRef])

//     useEffect(() => {
//         startSliderFilter()
//     }, [sliderPriceMin, sliderPriceMax])

//     useEffect(() => {
//         setThumbsParameters()
//     }, [thumbMaxRef, thumbMaxRef, sliderPriceActiveRef, sliderPriceNotActiveRef?.current?.clientWidth])

//     useEffect(() => {
//         if (resetCategorySidBarFilterPrice) resetPriceFilter()
//     }, [resetCategorySidBarFilterPrice])

//     useEffect(() => {
//         if (dragStoped) addPriceInRedux()
//     }, [dragStoped])

//     useEffect(()=>{
//         setThumbsParameters()
//         addEvents()
//     }, [windowWidth])

//     return (
//         <div className="categoryPage__sideBarFilter">
//             <div onClick={closeAndOpen} className="sideBarFilter__top">
//                 <div className="sideBarFilter__topTitle">{title}</div>
//                 <div className="sideBarFilter__topIcon"><i className={"fas fa-chevron-down " + (!showFilter && "close")}></i></div>
//             </div>

//             <div ref={contentRef} className="sideBarFilter__content">
//                 <div className="sideBarFilter-content__price-filter">

//                     <div className="price-filter__inputs">
//                         <input onChange={setInputPrices.bind(this, 1)}
//                             onBlur={inputOnBlur}
//                             value={sliderPriceMin !== minPrice ? sliderPriceMin : ''}
//                             className="price-filter__input min"
//                             placeholder={minPrice} type="text" />
//                         <div>—</div>
//                         <input onChange={setInputPrices.bind(this, 2)}
//                             onBlur={inputOnBlur}
//                             value={sliderPriceMax !== maxPrice ? sliderPriceMax : ''}
//                             className="price-filter__input max"
//                             placeholder={maxPrice} type="text" />
//                     </div>

//                     <div className="price-filter__price-hints">
//                         <div className="price-hint">{minPrice} руб.</div>
//                         <div className="price-hint">{maxPrice} руб.</div>
//                     </div>

//                     <div ref={sliderPriceNotActiveRef} className="sideBarFilter__slider-price">
//                         <div ref={sliderPriceActiveRef} className="slider-price"></div>
//                         <div ref={thumbMinRef} id='thumb-min' className="slider-price__thumb"></div>
//                         <div ref={thumbMaxRef} id='thumb-max' className="slider-price__thumb"></div>
//                     </div>
//                 </div>
//             </div>

//         </div>

//     )
// }

// export default connect(State, Actions)(SideBarFilterPrice)