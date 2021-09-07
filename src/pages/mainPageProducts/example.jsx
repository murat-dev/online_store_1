import MainProduct from "../../../components/mainPageProduct"
import '../mainPageProducts.scss'
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'
import State from '../../../redux/state'
import Actions from '../../../redux/actions'

const Product15478 = () => {

    const productData = {
        title:'Мангал ВИТЯЗЬ с печкой под казан, крышкой-гриль и решеткой (2021)',
        code: 15478,
        panelList: [
            { title: 'ОПИСАНИЕ', content: description },
            { title: 'ХАРАКТЕРИСТИКИ', content: null },
            { title: 'ОТЗЫВЫ', content: reviews },
        ],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Мангалы и аксессуары', path: '/category/mangali/', active: false },
            { title: 'Мангалы с крышей', path: '/category/mangali/s-krishey/', active: false },
            { title: 'Мангал ВИТЯЗЬ с печкой под казан, крышкой-гриль и решеткой (2021)', path: '/', active: true },
        ]
    }

    return (
        <div className='main-page-product'>
            <MainProduct productData={productData} />
        </div >
    )
}

const description = () => {
    return (
        <div className='productPanelInfo'>
         
        </div>
    )
}

const reviews = () => {
    return (
        <div className='productPanelInfo__comments'>
            <div>Оставьте ваш отзыв первым</div>
            <p>Чтобы добавить отзыв, пожалуйста, <NavLink to='/signup'>зарегистрируйтесь</NavLink> или <NavLink to='/login'>войдите</NavLink></p>
        </div>
    )
}

export default connect(State, Actions)(Product15478)