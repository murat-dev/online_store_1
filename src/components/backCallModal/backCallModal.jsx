import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import './backCallModal.scss'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import emailjs from 'emailjs-com';

const BackCallModal = ({ showBackCallModal, setShowBackCallModal }) => {
    const history = useHistory()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [text, setText] = useState('')
    const [checkConfidentiality, setCheckConfidentiality] = useState(false)
    const [selectFrom, setSelectFrom] = useState('Отдел сервиса')
    const [showSelectFrom, setShowSelectFrom] = useState(false)
    const [showSelectCallMeFrom, setShowSelectCallmeFrom] = useState(false)
    const [selectCallMeFrom, setSelectCallmeFrom] = useState('08:00')
    const [showSelectCallMeTo, setShowSelectCallmeTo] = useState(false)
    const [selectCallMeTo, setSelectCallmeTo] = useState('12:00')
    const [titleCallMe, setTitleCallMe] = useState('Позвоните мне сегодня')
    const [inputsError, setInputsError] = useState({
        name: false,
        phone: false,
        text: false,
        checkConfidentiality: false
    })
    const [emailSended, setEmailSended] = useState(false)
    const modalSelector = document.querySelector('.back-call-modal')

    const [callMeFromArr, setCallMeFromArr] = useState([
        { title: '08:00', hour: 8 },
        { title: '09:00', hour: 9 },
        { title: '10:00', hour: 10 },
        { title: '11:00', hour: 11 },
        { title: '12:00', hour: 12 },
        { title: '13:00', hour: 13 },
        { title: '14:00', hour: 14 },
        { title: '15:00', hour: 15 },
        { title: '16:00', hour: 16 },
        { title: '17:00', hour: 17 },
        { title: '18:00', hour: 18 }
    ])
    const [callMeToArr, setCallMeToArr] = useState([
        { title: '09:00', hour: 9 },
        { title: '10:00', hour: 10 },
        { title: '11:00', hour: 11 },
        { title: '12:00', hour: 12 },
        { title: '13:00', hour: 13 },
        { title: '14:00', hour: 14 },
        { title: '15:00', hour: 15 },
        { title: '16:00', hour: 16 },
        { title: '17:00', hour: 17 },
        { title: '18:00', hour: 18 },
        { title: '19:00', hour: 19 }
    ])
    const getCurrentHours = () => {
        const date = new Date()
        const hour = date.getHours()
        const cloneCallMeToArr = JSON.parse(JSON.stringify(callMeToArr))
        const cloneCallMeFromArr = JSON.parse(JSON.stringify(callMeFromArr))

        if (hour < 19 && hour >= 0) {
            setCallMeToArr(cloneCallMeToArr.filter(item => item.hour > hour))
            setCallMeFromArr(cloneCallMeFromArr.filter(item => item.hour >= hour))
            setSelectCallmeTo(cloneCallMeToArr.filter(item => item.hour > hour)[0].title)
            setSelectCallmeFrom(cloneCallMeFromArr.filter(item => item.hour >= hour)[0].title)
        } else {
            setTitleCallMe('Позвоните мне завтра')
        }
    }
    const onFocusInputs = (element, inputName) => {
        const elem = document.querySelector(element)
        elem.style.display = 'none'
        let cloneInputsError = { ...inputsError }
        if (inputName === 'name' && inputsError.name) cloneInputsError.name = false
        if (inputName === 'phone' && inputsError.phone) cloneInputsError.phone = false
        if (inputName === 'text' && inputsError.text) cloneInputsError.text = false
        setInputsError(cloneInputsError)
    }
    const onBlurInputs = (element, value) => {
        if (value) return
        const elem = document.querySelector(element)
        elem.style.display = 'block'
    }
    const handleCheck = () => {
        setCheckConfidentiality(!checkConfidentiality)
        if (inputsError.checkConfidentiality) {
            let cloneInputsError = { ...inputsError }
            cloneInputsError.checkConfidentiality = false
            setInputsError(cloneInputsError)
        }
    }
    const closeAllModal = () => {
        if (showSelectFrom) setShowSelectFrom(false)
        if (showSelectCallMeTo) setShowSelectCallmeTo(false)
        if (showSelectCallMeFrom) setShowSelectCallmeFrom(false)
    }
    const linkToConfidentialityPage = () => {
        modalSelector.style.transition = 'all 0s'
        history.push('/politika-konfidencialnosti')
        setShowBackCallModal(false)
    }
    const closeModalWithTransition = () => {
        modalSelector.style.transition = 'all 0.4s'
        setShowBackCallModal(false)
        setTimeout(() => setEmailSended(false), 400)
    }
    const hundleSubmit = (event) => {
        event.preventDefault();
        setEmailSended(false)
        let cloneInputsError = { ...inputsError }
        if (!name) cloneInputsError.name = true
        if (!phone) cloneInputsError.phone = true
        if (!text) cloneInputsError.text = true
        if (!checkConfidentiality) cloneInputsError.checkConfidentiality = true
        setInputsError(cloneInputsError)
        if (!name || !phone || !text || !checkConfidentiality) return

        setEmailSended('отправляется')
        sendEmail(event.target)
    }

    const transformationPhoneValue = (e) => {
        let x
        if (e.target.value[0] === '+') {
            x = e.target.value.substr(3).replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        }
        else {
            x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        }

        if (x[2]) x[2] = ') ' + x[2]
        if (x[3]) x[3] = '-' + x[3]
        if (x[4]) x[4] = '-' + x[4]

        e.target.value = x[1] ? '+7(' + x[1] + x[2] + x[3] + x[4] : ''
        setPhone(e.target.value)
    }

    const sendEmail = async (values) => {
        emailjs.sendForm(
            'service_wushd05',
            'template_wjxqpdo',
            values,
            'user_tCnEYQqsaCmq3axrvxcBu'
        ).then(res => {
            setEmailSended('отправлен')
            clearInputs()
        }).catch(err => console.log(err))
    }

    const clearInputs = () => {
        setName('')
        setPhone('')
        setText('')
        setCheckConfidentiality(false)
    }
    useState(() => {
        getCurrentHours()
    }, [])


    return (
        <div onClick={closeAllModal} className={"back-call-modal " + (showBackCallModal ? 'opened' : '')}>
            <div className="back-call-modal__shadow" onClick={closeModalWithTransition}></div>
            {emailSended !== 'отправлен' ?
                <div className="back-call-modal__body">
                    <form autoComplete="on" onSubmit={hundleSubmit}>
                        <i className="fas fa-times back-call-modal__close-icon" onClick={closeModalWithTransition}></i>

                        <div className='title head'>Заказать бесплатный звонок</div>
                        <div className="input-wrapper">
                            <div className={"back-call-modal__inputs-error " + (inputsError.name && "error-active")}>Нужно заполнить</div>
                            <input onChange={e => setName(e.target.value)} autoComplete="on"
                                onFocus={() => onFocusInputs('#back-call-modal__name-label', 'name')}
                                onBlur={() => onBlurInputs('#back-call-modal__name-label', name)} id="input__name" type="text" name="name" />
                            <label className={inputsError.name ? "back-call-modal__error-title" : ""} id='back-call-modal__name-label' htmlFor="input__name">Имя <span> *</span></label>
                        </div>
                        <div className="input-wrapper phone">
                            <div className={"back-call-modal__inputs-error " + (inputsError.phone && "error-active")}>Нужно заполнить</div>
                            <input onChange={transformationPhoneValue} autoComplete="on"
                                onFocus={() => onFocusInputs('#back-call-modal__phone-label', 'phone')}
                                onBlur={() => onBlurInputs('#back-call-modal__phone-label', phone)} id="input__phone"
                                value={phone} type="tel" name="phone" />
                            <label className={inputsError.phone ? "back-call-modal__error-title" : ""} id='back-call-modal__phone-label' htmlFor="input__phone">Телефон<span> *</span></label>
                        </div>
                        <div className="input-wrapper text">
                            <div className={"back-call-modal__inputs-error " + (inputsError.text && "error-active")}>Нужно заполнить</div>
                            <textarea onChange={e => setText(e.target.value)}
                                onFocus={() => onFocusInputs('#back-call-modal__text-label', 'text')}
                                onBlur={() => onBlurInputs('#back-call-modal__text-label', text)} name="text" id="back-call-modal__text-area" ></textarea>
                            <label className={inputsError.text ? "back-call-modal__error-title" : ""} id='back-call-modal__text-label' htmlFor="back-call-modal__text-area"> Сообщение <span> *</span>
                            </label>
                        </div>

                        <div className='title from' >Кому?</div>
                        <div className="back-call-modal__select">
                            <div onClick={() => setShowSelectFrom(!showSelectFrom)} className="select-title">{selectFrom}
                                <i className="fas fa-caret-down"></i>
                            </div>
                            <ul className="select__drop-down from" style={{ display: showSelectFrom ? 'block' : 'none' }}>
                                <li onClick={() => setSelectFrom('Отдел сервиса')}
                                    className={selectFrom === 'Отдел сервиса' ? 'selected' : ''}>Отдел сервиса</li>
                                <li onClick={() => setSelectFrom('Отдел продаж')}
                                    className={selectFrom === 'Отдел продаж' ? 'selected' : ''}>Отдел продаж</li>
                                <li onClick={() => setSelectFrom('Отдел рекламы')}
                                    className={selectFrom === 'Отдел рекламы' ? 'selected' : ''}>Отдел рекламы</li>
                            </ul>
                        </div>

                        <div className='title callme' >{titleCallMe}</div>

                        <div className="inputs-selects">
                            <div className="back-call-modal__select-wrapper">
                                <span>c</span>
                                <div className="back-call-modal__select callMe">
                                    <div onClick={() => setShowSelectCallmeFrom(!showSelectCallMeFrom)} className="select-title">{selectCallMeFrom}
                                        <i className="fas fa-caret-down"></i>
                                    </div>
                                    <ul className="select__drop-down" style={{ display: showSelectCallMeFrom ? 'block' : 'none' }}>
                                        {callMeFromArr.map((item, i) => (
                                            <li key={i} className={selectCallMeFrom === item.title ? 'selected' : ''}
                                                onClick={() => setSelectCallmeFrom(item.title)}>{item.title}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="back-call-modal__select-wrapper">
                                <span>по</span>
                                <div className="back-call-modal__select callMe">
                                    <div onClick={() => setShowSelectCallmeTo(!showSelectCallMeTo)} className="select-title">{selectCallMeTo}
                                        <i className="fas fa-caret-down"></i>
                                    </div>
                                    <ul className="select__drop-down" style={{ display: showSelectCallMeTo ? 'block' : 'none' }}>
                                        {callMeToArr.map((item, i) => (
                                            <li key={i} className={selectCallMeFrom === item.title ? 'selected' : ''}
                                                onClick={() => setSelectCallmeTo(item.title)}>{item.title}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <div className="back-call-modal__confidentiality">
                            <div className={"back-call-modal__inputs-error " + (inputsError.checkConfidentiality && "error-active")}>Нужно заполнить</div>
                            <div className={"confidentiality-check " + (checkConfidentiality && "checked")}
                                onClick={handleCheck}></div>
                            <div className="title confidentiality">
                                <span className={inputsError.checkConfidentiality ? "back-call-modal__error-title" : ""} >Я принимаю</span>
                                <span onClick={linkToConfidentialityPage}> политику конфиденциальности *</span>
                            </div>
                        </div> */}

                        <div className="back-call-modal__confidentiality">
                            <div className={"back-call-modal__inputs-error " + (inputsError.checkConfidentiality && "error-active")}>Нужно заполнить</div>
                            <div className={"confidentiality-check " + (checkConfidentiality && "checked")}
                                onClick={handleCheck}></div>

                            <span className={inputsError.checkConfidentiality ? "back-call-modal__error-title" : ""} >Я принимаю</span>
                        &nbsp;
                            <span className="confidentiality__right-title" onClick={linkToConfidentialityPage}> политику конфиденциальности *</span>
                        </div>

                        <input className={"back-call-modal__submit-btn " + (emailSended === 'отправляется' && 'mail-sent')} type="submit" value="Заказать бесплатный звонок" />
                    </form>
                </div>
                :
                <div className="back-call-modal__callback">
                    <i className="fas fa-times back-call-modal__close-icon" onClick={closeModalWithTransition}></i>
                    <p>Поздравляем!</p>
                    <p>Ваш запрос успешно отправлен</p>
                </div>
            }
        </div>
    )
}

export default connect(State, Actions)(BackCallModal)