import './cart.scss'
import Navigation from '../../components/core/navigation'
import ProductPreviewCart from '../../components/productPreview/productPreviewCart'
import Actions from '../../redux/actions'
import State from '../../redux/state'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductPrewiew from '../../components/productPreview/productPreview'
import dataBase from '../../assets/dataBase'

const Cart = ({ myCart, totalPriceInCart }) => {
    const [showCouponInput, setShowCouponInput] = useState(false)
    const [recomendedArray, setRecomendedArray] = useState([])
    const history = useHistory()
    const pageData = {
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Корзина', path: '/', active: true },
        ],
        recomendedProduct: {
            kazani: [[15478, 15478, 15478, 15478, 15478], [15478, 15478, 15478, 15478], [15478, 15478, 15478]],
            mangali: [[11235, 15478, 15478, 15478, 15478], [11235, 15478, 15478, 15478], [ 11235, 15478]],
            pechiDlyaKazanov: [[13265, 15478, 15478, 15478, 15478], [13265, 15478]]
        }
    }

    const getRecomendedByCode = async () => {
        let lastIndex = myCart.length - 1
        let arr = []
        if (myCart[lastIndex].type[0] === "Мангалы и аксессуары") {
            let randomNum = Math.floor(Math.random() * pageData.recomendedProduct.mangali.length)
            for (let j = 0; j < pageData.recomendedProduct.mangali[randomNum].length; j++) {
                let product = dataBase.filter(item => item.code === pageData.recomendedProduct.mangali[randomNum][j])[0]
                arr.push(product)

            }
            setRecomendedArray(arr)
        }
        if (myCart[lastIndex].type[0] === "Печи для казанов") {
            let randomNum = Math.floor(Math.random() * pageData.recomendedProduct.pechiDlyaKazanov.length)
            for (let j = 0; j < pageData.recomendedProduct.pechiDlyaKazanov[randomNum].length; j++) {
                let product = dataBase.filter(item => item.code === pageData.recomendedProduct.pechiDlyaKazanov[randomNum][j])[0]
                arr.push(product)

            }
            setRecomendedArray(arr)
        }
        if (myCart[lastIndex].type[0] === "Казаны чугунные") {
            let randomNum = Math.floor(Math.random() * pageData.recomendedProduct.kazani.length)
            for (let j = 0; j < pageData.recomendedProduct.kazani[randomNum].length; j++) {
                let product = dataBase.filter(item => item.code === pageData.recomendedProduct.kazani[randomNum][j])[0]
                arr.push(product)

            }
            setRecomendedArray(arr)
        }

    }

    useEffect(()=>{
        if(myCart.length) getRecomendedByCode()
    }, [myCart.length])
    return (
        <div className="cart">
            <Navigation navigation={pageData.navigation} />
            <h3 onClick={getRecomendedByCode} className="cart__title">Корзина </h3>
            {myCart.length ?
                myCart.map((item, i) => (
                    <ProductPreviewCart key={i} indexProduct={i} product={{ ...item }} />
                )) :
                <div>
                    <p>Ваша корзина пуста.</p>
                    <p>Акции и специальные предложения товаров на главной странице помогут Вам определиться с выбором!</p>
                    <p onClick={() => history.push('/')} className="cart__backToShop">Вернуться в магазин</p>
                </div>
            }

            {myCart.length ?
                <>
                    <div className='cart__coupon-block'>
                        {!showCouponInput ?
                            <div onClick={() => setShowCouponInput(!showCouponInput)} className="coupon-block__coupon-title">У меня есть купон</div>
                            :
                            <div className="coupon-block__coupon-input">
                                <div>Код купона:</div>
                                <div>
                                    <input type="text" placeholder='Введите код' />
                                    <button>Применить</button>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="cart__bottom">
                        <div className="cart-bottom__top">
                            <div className="discount">Скидка: 0 руб.</div>
                            <div className="total-price">Итого: {totalPriceInCart()} руб.</div>
                        </div>
                        <div className="cart-bottom__bottom">
                            <button onClick={()=>history.push('/checkout')}>Оформление заказа</button>
                        </div>
                    </div>
                    <div className="cart__recomended-title">
                        <h5>Рекомендуем! Покупатели, которые приобрели {myCart[myCart.length-1].title} , также купили:</h5>
                    </div>

                    <div className="cart__recomended">
                        {recomendedArray.map((item, i)=>(
                            <ProductPrewiew key={i} product={item}/>
                        ))}
                    </div>

                </>
                : null
            }
        </div>
    )
}



export default connect(State, Actions)(Cart)