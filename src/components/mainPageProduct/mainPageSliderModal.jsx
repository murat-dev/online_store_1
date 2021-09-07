import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import { useEffect, useState } from 'react'
// import { useState } from 'react'


const MainPageSliderModal = ({ setShowMainPageSliderModal, showMainPageSliderModal, currentProductInfo,
    setCurrentImageForMainPageModal, currentImageForMainPageModal }) => {

    const [indexImage, setIndexImage] = useState(1)

    const offsetBottomBlock = () => {
        let imgBottomSlider = document.querySelector('.imgs__slider')
        let imgWidth = document.querySelector('#imgSlider__mainPageBottom').clientWidth
        let index = currentProductInfo.image.indexOf(currentImageForMainPageModal)
        imgBottomSlider.style.transform = (`translate(${-(index * imgWidth) + 100}px)`)
    }

    const slideToRight = () => {
        let index = currentProductInfo.image.indexOf(currentImageForMainPageModal)
        if (index === currentProductInfo.image.length - 1) {
            setCurrentImageForMainPageModal(currentProductInfo.image[0])
        }
        else {
            setCurrentImageForMainPageModal(currentProductInfo.image[index + 1])
        }
    }

    const slideToLeft = () => {
        let index = currentProductInfo.image.indexOf(currentImageForMainPageModal)
        if (index === 0) {
            setCurrentImageForMainPageModal(currentProductInfo.image[currentProductInfo.image.length - 1])
        }
        else {
            setCurrentImageForMainPageModal(currentProductInfo.image[index - 1])
        }
    }
    useEffect(() => {
        if (currentProductInfo && currentImageForMainPageModal) {
            setIndexImage(currentProductInfo.image.indexOf(currentImageForMainPageModal))
            offsetBottomBlock()
        }
    }, [currentImageForMainPageModal])

    return (
        <div className={'mainPageSliderModal ' + (showMainPageSliderModal && 'active')}>
            <div onClick={() => setShowMainPageSliderModal(false)} className='mainPageSliderModal__shadow'></div>

            <div className="mainPageSliderModal__body">
                <div className="mainPageSliderModal__content">
                    <img src={currentImageForMainPageModal} alt="1" />
                    <div className="scrolling">
                        <div className="leftScroll" onClick={slideToLeft}>
                            <div className="scroll"></div>
                        </div>
                        <div className="rightScroll" onClick={slideToRight}>
                            <div className="scroll"></div>
                        </div>
                    </div>
                    <i className="fas fa-times" onClick={() => setShowMainPageSliderModal(false)}></i>
                </div>
            </div>
            <div className="mainPageSliderModal__title">{indexImage + 1}/{currentProductInfo && currentProductInfo.image.length} {' ' + currentProductInfo?.title}</div>


            <div className="mainPageSliderModal__bottom">
                <div className="imgs__slider">
                    {currentProductInfo && currentProductInfo.image.map((item, i) => (
                        <div className={"img__wrapper " + (currentImageForMainPageModal === item ? 'active' : '')} key={i}>
                            <img id='imgSlider__mainPageBottom'  onClick={() => setCurrentImageForMainPageModal(item)} src={item} alt="1" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default connect(State, Actions)(MainPageSliderModal)