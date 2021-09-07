import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import { useEffect } from 'react'
import SliderForProductPages from '../slider/sliderForProductPages'


const HeaderLeft = (props) => {
    const { currentProductInfo, setShowMainPageSliderModal, setCurrentImageForMainPageModal, scaleImageSize, currentImageForMainPageModal, } = props

    const openImageModal = () => {
        setShowMainPageSliderModal(true)
    }
    const changeCurrentImage = (item) => {
        setCurrentImageForMainPageModal(item)
    }
    useEffect(() => {
        if (currentProductInfo) {
            changeCurrentImage(currentProductInfo.image[0])
        }
    }, [currentProductInfo && currentProductInfo.image[0]])

    //Слайдер
    const sliderHTML = () => {
        return (
            <>
                <div style={{ display: 'none' }} id='main-page-slider__wrapper' className="headerLeft__left forSlider">
                    <div className="headerLeft__slider" >
                        {currentProductInfo && currentProductInfo.image.map((item, i) => (
                            <div key={i} className="slide headerLeftSlide">
                                <div onMouseOver={() => changeCurrentImage(item)} className={'img__wrapper ' + (currentImageForMainPageModal === item && 'active')}>
                                    <img className='left__img' src={item} alt="1" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='directionForSlider' style={{ display: 'none' }}>
                    <i id='main-page-slider__btn-left' className="fasDirection fas fa-angle-left"></i>
                    <i id='main-page-slider__btn-right' className="fasDirection fas fa-angle-right"></i>
                </div>
            </>
        )
    }
    const sliderData = {
        sliderHTML,
        sliderWrapperId: 'main-page-slider__wrapper',
        sliderBtnLeftId: 'main-page-slider__btn-left',
        sliderBtnLeftRightId: 'main-page-slider__btn-right',
        slidesClass: 'headerLeftSlide'
    }


    return (
        <div className='mainPageProduct__headerLeft'>

            <div className="headerLeft__left noneSlider" >
                <div className="headerLeft__slider" >
                    {currentProductInfo && currentProductInfo.image.map((item, i) => (
                        <div key={i} className="slide">
                            <div onMouseOver={() => changeCurrentImage(item)} className={'img__wrapper ' + (currentImageForMainPageModal === item && 'active')}>
                                <img className='left__img' src={item} alt="1" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <SliderForProductPages sliderData={sliderData} />

            <div className="headerLeft__right">
                <img onLoad={scaleImageSize.bind(this, '100%', '100%')} onClick={openImageModal} id='mainPageImage' src={currentImageForMainPageModal} alt=""></img>
                <div><i className="fa fa-search"></i>  Нажмите на изображение для увеличения</div>
            </div>

        </div>

    )
}
// onLoad={scaleImageMaxSize.bind(this, '100%', '100%')}

export default connect(State, Actions)(HeaderLeft)