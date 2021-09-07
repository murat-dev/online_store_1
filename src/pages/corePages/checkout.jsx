
import './style.scss'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import checkoutIcon from '../../assets/image/checkout.png'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import emailjs from 'emailjs-com';
import loading from '../../assets/image/loading.gif'

const Checkout = ({ myCart, setMyCart }) => {
    const history = useHistory()
    const [inputsValue, setInputsValue] = useState({
        name: '',
        phone: '',
        email: '',
        errorName: false,
        errorPhone: false,
    })
    const [cartInfoforEmail, setCartInfoforEmail] = useState([])
    const [emailSended, setEmailSended] = useState(false)

    const onChangeInputs = (name, e) => {
        const cloneInputsValue = { ...inputsValue }
        if (name === 'name') cloneInputsValue.name = e.target.value
        if (name === 'phone') cloneInputsValue.phone = e.target.value
        if (name === 'email') cloneInputsValue.email = e.target.value
        setInputsValue(cloneInputsValue)
    }

    const prepareSendEmail = (e) => {
        e.preventDefault()
        const cloneInputsValue = { ...inputsValue }
        if (!inputsValue.name) cloneInputsValue.errorName = true
        else cloneInputsValue.errorName = false

        if (!inputsValue.phone) cloneInputsValue.errorPhone = true
        else cloneInputsValue.errorPhone = false
        setInputsValue(cloneInputsValue)
        if (!inputsValue.name || !inputsValue.phone) return
        setEmailSended('Отправляется')
        sendEmail(e.target)
    }

    const sendEmail = (values) => {
        emailjs.sendForm(
            'service_wushd05',
            'template_1bm2umd',
            values,
            'user_tCnEYQqsaCmq3axrvxcBu'
        ).then(res => {
            setEmailSended('Отправлен')
            setMyCart([])
            localStorage.setItem('myCart', JSON.stringify([]))
        }).catch(err => console.log(err))
    }

    const addEmailInfo = () => {
        const cloneCartInfoforEmail = []
        for (let i = 0; i < myCart.length; i++) {
            cloneCartInfoforEmail.push(`${i + 1}) Название:${myCart[i].title} Код: ${myCart[i].code} Количество:${myCart[i].count}`)
        }
        setCartInfoforEmail(cloneCartInfoforEmail)
    }

    useEffect(() => {
        addEmailInfo()
    }, [myCart])
    return (
        <div className='checkout'>
            <h3>Оформление заказа</h3>
            {emailSended !== 'Отправлен' ?
                <div className="checkout__content">
                    <form className="checkout__form" onSubmit={prepareSendEmail}>
                        <div className="checkout__form-content">
                            <div className="checkout__title-icon">
                                <img src={checkoutIcon} alt="" />
                                <div className="title"> Контактная информация</div>
                            </div>
                            <div className="checkout-form__inputs">

                                <div className={"checkout-form__input-wrapper " + (inputsValue.errorName && "error")}>
                                    <label htmlFor="">Имя <span>*</span></label>
                                    <div>
                                        <input onChange={onChangeInputs.bind(this, 'name')} value={inputsValue.name} type="text" name='name' />
                                        <em>Нужно заполнить</em>
                                    </div>
                                </div>

                                <div className={"checkout-form__input-wrapper " + (inputsValue.errorPhone && "error")}>
                                    <label htmlFor="">Телефон <span>*</span></label>
                                    <div>
                                        <input onChange={onChangeInputs.bind(this, 'phone')} value={inputsValue.phone} type="text" name='phone' />
                                        <em>Это обязательное поле</em>
                                    </div>
                                </div>

                                <div className="checkout-form__input-wrapper">
                                    <label htmlFor=""> Email </label>
                                    <input type="text" name='email' />
                                </div>
                                <textarea onChange={() => { }} style={{ display: 'none' }} type="text" name='cartlist' value={cartInfoforEmail.join(' ')} />
                                {inputsValue.errorName || inputsValue.errorPhone ?
                                    <p className="error-text">Не заполнены обязательные поля контактной информации. Пожалуйста, вернитесь на шаг ввода контактной информации, чтобы оформить заказ.</p>
                                    : ''
                                }
                                <div className='checkout-form__btn-wrapper'>
                                    <div className='checkout-form__btn'>
                                        {emailSended === 'Отправляется' && <img src={loading} alt="" />}
                                        <input type="submit" value="Оформить заказ" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="checkout__side-bar">
                        <h3>Ваш заказ</h3>
                        {myCart.map((item, i) => (
                            <div key={i} className="side-bar__item">
                                <div className="side-bar__image">
                                    <img src={item.image[0]} alt="" />
                                </div>
                                <div className="side-bar__right">
                                    <div className="side-bar__title" onClick={() => history.push(item.url)}>{item.title}</div>
                                    <div className="side-bar__count">{item.count} шт.</div>
                                    <div className="side-bar__price">
                                        {item.price.oldPrice && <div className="side-bar__old-price">{item.price.oldPrice} руб.</div>}
                                        <div className="side-bar__new-price">{item.price.newPrice} руб.</div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button className="side-bar__btn" onClick={() => history.push('/cart')}>Изменить</button>
                    </div>
                </div>
                :
                <SuccessSendEmail />
            }
        </div>
    )
}

const SuccessSendEmail = () => {
    const history = useHistory()
    return (
        <div className='successSendEmail'>
            <h3>Спасибо!</h3>
            <p>Ваш заказ успешно оформлен. Мы свяжемся с вами в ближайшее время.
                <br></br> Номер вашего заказа <strong>#2552.</strong></p>
            <div className='back'>← <span onClick={() => history.push('/')}>Вернуться в магазин</span></div>
        </div>
    )
}


export default connect(State, Actions)(Checkout)