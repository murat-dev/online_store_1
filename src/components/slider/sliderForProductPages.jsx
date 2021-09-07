import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'

const SliderForMainPage = ({ sliderData }) => {

    const { sliderHTML, sliderWrapperId, sliderBtnLeftId, sliderBtnLeftRightId, slidesClass } = sliderData
    const [sliderWrapper, setSliderWrapper] = useState(null)
    const [slider, setSlider] = useState(null)
    const [slides, setSlides] = useState([])
    const [sliderBtnLeft, setSliderBtnLeft] = useState(null)
    const [sliderBtnRight, setSliderBtnRight] = useState(null)


    let slidesToShow = 4
    let slidesToScroll = 3
    let clickX
    let startX
    let currentSLide = 0
    let positionX = 0
    let currentSLideChanged = false

    const getSliderEllements = () => {
        setSliderWrapper(document.querySelector(`#${sliderWrapperId}`))
        setSlider(sliderWrapper?.childNodes[0])
        setSlides(document.querySelectorAll(`.${slidesClass}`))
        setSliderBtnLeft(document.querySelector(`#${sliderBtnLeftId}`))
        setSliderBtnRight(document.querySelector(`#${sliderBtnLeftRightId}`))
    }

    const adaptiveResize = () => {
        if (window.innerWidth <= 456) {
            slidesToShow = 3
        }
        if (window.innerWidth <= 350) {
            slidesToShow = 2
        }
    }

    const setParameters = () => {
        if (slider && sliderWrapper && slides.length) {
            adaptiveResize()
            slides.forEach(item => {
                item.style.minWidth = sliderWrapper.clientWidth / slidesToShow + 'px'
            })
            currentSLide = 0
            positionX = -currentSLide * slides[0].clientWidth
            setStyleTransition()
            setSliderPosition()
            // console.log('setParameters')
        }
    }

    // const delayFunc = (func, time = 100) => {
    //     let timer
    //     return () => {
    //         clearTimeout(timer)
    //         timer = setTimeout(func, time)
    //     }
    // }

    const addEvents = () => {
        if (slider && slides.length && sliderWrapper && sliderBtnRight && sliderBtnLeft) {
            sliderBtnRight.onclick = moveSliderToRight
            sliderBtnLeft.onclick = moveSliderToLeft
            window.onresize = setParameters
            slider.onpointerdown = startDrag
        }
    }

    const startDrag = (e) => {
        document.body.style.cursor = 'grabbing'
        resetStyleTransition()
        clickX = e.pageX
        startX = positionX
        // console.log('старт драг ')
        window.onpointermove = dragging
        window.onpointerup = stopDrag
        slider.ontouchend = stopDrag
    }

    const stopDrag = () => {
        document.body.style.cursor = 'auto'
        currentSLideChanged = false
        positionX = -currentSLide * slides[0].clientWidth
        setStyleTransition()
        setSliderPosition()
        window.onpointermove = null
        window.onpointerup = null
        slider.ontouchend = null
    }

    const dragging = (e) => {
        let drag = e.pageX
        let dragShift = drag - clickX
        let easing = dragShift / 5
        let maximumX = (slides.length * slides[0].clientWidth) - sliderWrapper.clientWidth

        positionX = Math.max(Math.min(startX + dragShift, easing), -maximumX + easing)

        if (dragShift > 20 && !currentSLideChanged && !currentSLide <= 0) {
            adaptiveSlidesToScrollLeft()
            currentSLideChanged = true

        }
        if (dragShift < -20 && !currentSLideChanged && (currentSLide <= slides.length - slidesToShow - 1)) {
            adaptiveSlidesToScrollRight()
            currentSLideChanged = true
        }

        setSliderPosition()
    }

    const moveSliderToLeft = () => {
        adaptiveSlidesToScrollLeft()
        positionX = -currentSLide * slides[0].clientWidth
        setSliderPosition()
    }

    const moveSliderToRight = () => {
        adaptiveSlidesToScrollRight()
        positionX = -currentSLide * slides[0].clientWidth
        setSliderPosition()
    }

    const adaptiveSlidesToScrollRight = () => {
        let cloneSlidesToScroll = slidesToScroll
        for (let i = slidesToScroll; i > 0; i--) {
            if (currentSLide + cloneSlidesToScroll > slides.length - slidesToShow) {
                cloneSlidesToScroll -= 1
            }
        }
        currentSLide = currentSLide + cloneSlidesToScroll
    }

    const adaptiveSlidesToScrollLeft = () => {
        let cloneSlidesToScroll = slidesToScroll
        for (let i = slidesToScroll; i > 0; i--) {
            if (currentSLide - cloneSlidesToScroll < 0) {
                cloneSlidesToScroll -= 1
                if (currentSLide + cloneSlidesToScroll === 0) {
                    currentSLide = currentSLide - cloneSlidesToScroll
                    return
                }
            }
        }
        currentSLide = currentSLide - cloneSlidesToScroll
    }

    const setSliderPosition = () => {
        slider.style.transform = `translate(${positionX}px, 0)`
    }

    const setStyleTransition = () => {
        slider.style.transition = `all 0.25s ease 0s`
    }

    const resetStyleTransition = () => {
        slider.style.transition = `all 0s ease 0s`
    }

    useEffect(() => {
        addEvents()
        return () => {
            window.onresize = null
        }
    }, [slider, slides.length, sliderWrapper, sliderBtnRight, sliderBtnLeft, window.innerWidth])

    useEffect(() => {
        setParameters()
    }, [slider, sliderWrapper?.clientWidth, slides.length])

    useEffect(() => {
        getSliderEllements()
    }, [sliderData, sliderWrapper, slider, slider?.childNodes, window.innerWidth])


    return (
        <>
            {sliderHTML()}
        </>
    )
}

export default connect(State, Actions)(SliderForMainPage)


























// const SliderForMainPage = ({ sliderData }) => {
//     const { slider, sliderWrapper, sliderBtnLeft, sliderBtnRight, sliderHTML } = sliderData
//     let slidesToShow = 4
//     let slidesToScroll = 3
//     let clickX
//     let startX
//     let currentSLide = 0
//     let positionX = 0
//     let currentSLideChanged = false

//     let slideWidth
//     let sliderWidth

//     const setParameters = () => {
//         if (slider && sliderWrapper.clientWidth && slider.childNodes.length) {
//             slider.childNodes.forEach(item => {
//                 item.style.minWidth = sliderWrapper.clientWidth / slidesToShow + 'px'
//             })
//             slideWidth = slider.childNodes[0].clientWidth
//             sliderWidth = slider.childNodes.length * slider.childNodes[0].clientWidth

//             setStyleTransition()
//             setSliderPosition()
//             console.log('параметеры обновились ' + slideWidth + ' ' + sliderWidth)
//         }
//     }

//     const delayFunc = (func, time = 100) => {
//         let timer
//         return () => {
//             clearTimeout(timer)
//             timer = setTimeout(func, time)
//         }
//     }

//     const addEvents = () => {
//         if (slider && sliderWrapper.clientWidth && slider.childNodes.length && sliderBtnRight && sliderBtnLeft && (window.innerWidth <= 900)) {
//             sliderBtnRight.onclick = moveSliderToRight
//             sliderBtnLeft.onclick = moveSliderToLeft
//             window.onresize = delayFunc(setParameters)
//             // window.onpointerup = stopDrag
//             slider.onpointerdown = startDrag
//             console.log('назначены события')

//         }
//     }

//     const startDrag = (e) => {
//         window.onpointerup = stopDrag
//         resetStyleTransition()
//         clickX = e.pageX
//         startX = positionX
//         // console.log('старт драг ')
//         window.onpointermove = dragging
//     }

//     const stopDrag = () => {
//             currentSLideChanged = false
//             positionX = -currentSLide * slider.childNodes[0].clientWidth
//             setStyleTransition()
//             setSliderPosition()
//             window.onpointermove = null
//             window.onpointerup = null
//             console.log('стоп драг')    
//     }

//     const dragging = (e) => {
//         let drag = e.pageX
//         let dragShift = drag - clickX
//         let easing = dragShift / 5
//         let maximumX = (slider.childNodes.length * slider.childNodes[0].clientWidth) - sliderWrapper.clientWidth

//         positionX = Math.max(Math.min(startX + dragShift, easing), -maximumX + easing)

//         if (dragShift > 20 && !currentSLideChanged && !currentSLide <= 0) {
//             adaptiveSlidesToScrollLeft()
//             currentSLideChanged = true

//         }
//         if (dragShift < -20 && !currentSLideChanged && (currentSLide <= slider.childNodes.length - slidesToShow - 1)) {
//             adaptiveSlidesToScrollRight()
//             currentSLideChanged = true
//         }

//         setSliderPosition()
//     }

//     const moveSliderToLeft = () => {
//         adaptiveSlidesToScrollLeft()
//         positionX = -currentSLide * slider.childNodes[0].clientWidth
//         setSliderPosition()
//     }

//     const moveSliderToRight = () => {
//         adaptiveSlidesToScrollRight()
//         positionX = -currentSLide * slider.childNodes[0].clientWidth
//         setSliderPosition()
//     }

//     const adaptiveSlidesToScrollRight = () => {
//         let cloneSlidesToScroll = slidesToScroll
//         for (let i = slidesToScroll; i > 0; i--) {
//             if (currentSLide + cloneSlidesToScroll > slider.childNodes.length - slidesToShow) {
//                 cloneSlidesToScroll -= 1
//                 if (currentSLide + cloneSlidesToScroll <= slider.childNodes.length - slidesToShow) {
//                     currentSLide = currentSLide + cloneSlidesToScroll
//                     return
//                 }
//             }
//         }
//         currentSLide = currentSLide + cloneSlidesToScroll
//     }

//     const adaptiveSlidesToScrollLeft = () => {
//         let cloneSlidesToScroll = slidesToScroll
//         for (let i = slidesToScroll; i > 0; i--) {
//             if (currentSLide - cloneSlidesToScroll < 0) {
//                 cloneSlidesToScroll -= 1
//                 if (currentSLide + cloneSlidesToScroll === 0) {
//                     currentSLide = currentSLide - cloneSlidesToScroll
//                     return
//                 }
//             }
//         }
//         currentSLide = currentSLide - cloneSlidesToScroll
//     }

//     const setSliderPosition = () => {
//         slider.style.transform = `translate(${positionX}px, 0)`
//         if (positionX === 0) sliderBtnLeft.style.display = 'none'
//         if (positionX < 0) sliderBtnLeft.style.display = 'block'

//         if (currentSLide >= slider.childNodes.length - slidesToShow) sliderBtnRight.style.display = 'none'
//         if (currentSLide < slider.childNodes.length - slidesToShow) sliderBtnRight.style.display = 'block'
//     }

//     const setStyleTransition = () => {
//         slider.style.transition = `all 0.25s ease 0s`
//     }

//     const resetStyleTransition = () => {
//         slider.style.transition = `all 0s ease 0s`
//     }


//     useEffect(() => {
//         setParameters()
//     }, [slider && slider.childNodes.length, sliderWrapper && sliderWrapper.clientWidth])

//     useEffect(() => {
//         addEvents()
//     }, [slider && slider.childNodes.length, sliderWrapper, sliderBtnLeft, sliderBtnRight])

//     useEffect(() => {
//         if (window.innerWidth <= 355) {
//             slidesToShow = 3
//             setParameters()
//         }
//     }, [window.innerWidth])

//     return (
//         <>
//             {sliderHTML()}
//         </>
//     )
// }
