import React from 'react'
import { NavLink } from 'react-router-dom'
import './productPreInfoModal.scss'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import { connect } from 'react-redux'
import ProductPricePreview from '../productPrice/productPricePreview'
import ProductPreinfoForCard from './productPreinfoForCard'
import SliderPreInfoModal from '../slider/sliderPreInfoModal'

class ProductPreInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            positionSlider: 0,
            activeSlide: 0,
            animationSlidePagination: false,
            price: 0
        }
    }
    componentDidMount = () => {
        this.props.priceCalculatorPreview()
    }

    showSliderItem = (index) => {
        let sliderItemWidth = document.querySelector('.product-pre-info__slider-item').clientWidth
        this.setState({
            positionSlider: -(sliderItemWidth * index),
            activeSlide: index,
            animationSlidePagination: true
        })
    }

    sliderHTML = () => {
        let { currentProductPreviewInfo } = this.props
        let sliderStyle = {
            transform: `translate(${this.state.positionSlider}px, 0px)`,
        }
        let { activeSlide } = this.state
        return (
            <>
                <div className="product-pre-info__slider-wrapper" id='pre-info-modal__slider-wrapper'>
                    <div className={"product-pre-info__slider "} style={sliderStyle}>
                        {currentProductPreviewInfo && currentProductPreviewInfo.image.map((item, i) => (
                            <div className="product-pre-info__slider-item" key={i}>
                                <img className={'productPreInfo__sliderImage '} src={item} alt="1"></img>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="product-pre-info__slider-pagination">
                    {currentProductPreviewInfo && currentProductPreviewInfo.image.map((item, i) => (
                        <div className={"product-pre-info__slider-pagination-item " + (activeSlide === i && 'active')}
                            onClick={this.showSliderItem.bind(this, i)}
                            key={i}>
                        </div>
                    ))}
                </div>
            </>
        )
    }
    sliderData = {
        sliderHTML:this.sliderHTML,
        sliderWrapperId:'pre-info-modal__slider-wrapper',
        slidesClass:'product-pre-info__slider-item',
        paginationsClass:'product-pre-info__slider-pagination'
    }

    render() {
        let { closeProductPreInfoModal, currentProductPreviewInfo } = this.props
        return (
            <>
                <div className='product-pre-info'>
                    <div className="product-pre-info__modal">
                        <div className="header-block">
                            <i onClick={this.props.closeProductPreInfoModal} className="material-icons">  close </i>
                        </div>
                        <div className="product-pre-info__content-block">
                            <div className="product-pre-info__img-block">

                                {/* {this.sliderHTML()} */}
                                <SliderPreInfoModal sliderData={this.sliderData}/>

                                <div className="slider-goto">
                                    <NavLink onClick={closeProductPreInfoModal} to={currentProductPreviewInfo && currentProductPreviewInfo.url}>Нажмите для перехода к товару</NavLink>
                                </div>
                            </div>

                            <div className="product-pre-info__info-block">
                                <div className="info-block__content">
                                    <div className="info-block-content__code">код товара: {currentProductPreviewInfo && currentProductPreviewInfo.code}</div>
                                    <div className="info-block-content__title">{currentProductPreviewInfo && currentProductPreviewInfo.title}</div>
                                    {currentProductPreviewInfo.info.status ?
                                        <div className='info-block__status'>
                                            <i className="fas fa-bars"></i>
                                            <div>В наличии</div>
                                        </div>
                                        :
                                        <div className='info-block__status not-available'>
                                            <i className="fas fa-bars"></i>
                                            Товар с выбранным набором характеристик недоступен для покупки
                                        </div>
                                    }
                                    <ProductPricePreview />
                                    <ProductPreinfoForCard />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div onClick={this.props.closeProductPreInfoModal} className="product-pre-info__shadow-wrapper"></div>
                </div>
            </>
        )
    }
}

export default connect(State, Actions)(ProductPreInfo)