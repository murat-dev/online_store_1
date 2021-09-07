import imgMain from '../../assets/image/main.jpg'
import ProductPreview from '../../components/productPreview/productPreview.jsx'
import './style.scss'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import { useRef } from 'react'
import SliderForBestSell from '../../components/slider/sliderForBestSell'


const Main = ({ allProduct }) => {
    const sliderWrapper = useRef(null)
    const slider = useRef(null)
    const sliderBtnRight = useRef(null)
    const sliderBtnLeft = useRef(null)

    const bestDeals = () => {
        return allProduct.filter(item => item.info.bestDeals === true)
    }

    const bestSellers = () => {
        return allProduct.filter(item => item.info.bestSellers === true)
    }

    const sliderHTML = () => {
        return (
            <div ref={sliderWrapper} id='best-deals__slider-wrapper' className="best-deals" >
                <div ref={slider} className="best-deals__slider" >
                    {bestDeals().map((item, i) => (
                        <ProductPreview key={i} product={item} addClass={' best-deals-slider__slides'} />
                    ))}
                </div>
            </div>
        )
    }

    const sliderData = {
        sliderHTML, 
        sliderWrapperId:'best-deals__slider-wrapper',
        sliderBtnLeftId:'best-deals__btn-left',
        sliderBtnLeftRightId:'best-deals__btn-right',
        slidesClass:'best-deals-slider__slides  '
    }


    return (
        <div className='main-page'>
            <img src={imgMain} alt="1" />
            <div className='best-deals__top'>
                <div className='best-deals__title'> Лучшие предложенияна 9 марта 2021</div>
                <div className='best-deals__slider-icons'>
                    <div ref={sliderBtnLeft} id='best-deals__btn-left' className='sliderDirection__item left'>
                        <span></span>
                        <span></span>
                    </div>
                    <div ref={sliderBtnRight} id='best-deals__btn-right' className='sliderDirection__item right'>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <SliderForBestSell sliderData={sliderData}/>

            <div className='best-seller__title'> Хиты продаж</div>
            <div className="best-seller" >
                {bestSellers().map((item, i) => (
                    <ProductPreview key={i} product={item} />
                ))}
            </div>
        </div>
    )
}

export default connect(State, Actions)(Main)





































// import imgMain from '../../assets/image/main.jpg'
// import ProductPreview from '../../components/productPreview/productPreview'
// import './main.scss'
// import { connect } from 'react-redux'
// import State from '../../redux/state'
// import Actions from '../../redux/actions'
// import { useEffect, useRef, useState } from 'react'
// import SliderForBestSell from '../../components/slider/sliderForBestSell'
// import { withRouter } from 'react-router-dom'



// const Main = ({ allProduct }) => {
//     const sliderWrapper = useRef(null)
//     const slider = useRef(null)
//     const sliderBtnRight = useRef(null)
//     const sliderBtnLeft = useRef(null)
//     const [sliderDataState, setSliderDataState] = useState(null)
//     let sliderDataTest

//     const bestDeals = () => {
//         return allProduct.filter(item => item.info.bestDeals === true)
//     }

//     const bestSellers = () => {
//         return allProduct.filter(item => item.info.bestSellers === true)
//     }


//     const sliderHTML = () => {
//         return (
//             <div ref={sliderWrapper} className="best-deals" >
//                 <div ref={slider} className="best-deals__slider" >
//                     {bestDeals().map((item, i) => (
//                         <ProductPreview key={i} product={item} />
//                     ))}
//                 </div>
//             </div>
//         )
//     }

//     const sliderData = {
//         sliderHTML,
//         sliderWrapper: sliderWrapper.current,
//         slider: slider.current,
//         sliderBtnLeft: sliderBtnLeft.current,
//         sliderBtnRight: sliderBtnRight.current,
//     }

//     useEffect(() => {

//         if (sliderWrapper && slider && slider.current?.childNodes.length && sliderBtnLeft && sliderBtnRight) {
//             sliderDataTest = {
//                 sliderHTML,
//                 sliderWrapper: sliderWrapper.current,
//                 slider: slider.current,
//                 sliderBtnLeft: sliderBtnLeft.current,
//                 sliderBtnRight: sliderBtnRight.current,
//                 slides:slider.current.childNodes
//             }
//             setSliderDataState(sliderDataTest)
//             console.log(sliderDataState)
//         }
//     }, [sliderWrapper, slider, sliderBtnLeft, sliderBtnRight, slider.current?.childNodes.length])

//     return (
//         <div className='main-page'>
//             <img src={imgMain} alt="1" />
//             <div className='best-deals__top'>
//                 <div onClick={() => console.log(sliderDataState)} className='best-deals__title'> Лучшие предложенияна 9 марта 2021</div>
//                 <div className='best-deals__slider-icons'>
//                     <div ref={sliderBtnLeft} className='sliderDirection__item left'>
//                         <span></span>
//                         <span></span>
//                     </div>
//                     <div ref={sliderBtnRight} className='sliderDirection__item right'>
//                         <span></span>
//                         <span></span>
//                     </div>
//                 </div>
//             </div>

//             <SliderForBestSell sliderData={sliderData} />

//             <div className='best-seller__title'> Хиты продаж</div>
//             <div className="best-seller" >
//                 {bestSellers().map((item, i) => (
//                     <ProductPreview key={i} product={item} />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default withRouter(connect(State, Actions)(Main))