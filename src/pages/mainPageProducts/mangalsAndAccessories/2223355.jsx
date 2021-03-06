import MainProduct from "../../../components/mainPageProduct"
import '../mainPageProducts.scss'
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'
import State from '../../../redux/state'
import Actions from '../../../redux/actions'

const Product_2223355 = () => {

    const productData = {
        code: 2223355,
        panelList: [
            { title: 'ОПИСАНИЕ', content: description },
            { title: 'ОТЗЫВЫ', content: reviews },
        ],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Мангалы и аксессуары', path: '/category/mangali/', active: false },
            { title: 'Мангалы с крышей', path: '/category/mangali/s-krishey/', active: false },
            { title: 'Мангал-Беседка с печью под казан и лавочкой', path: '/', active: true },
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
            <div className="redBold">Крышка на печь в подарок!</div>
            <p><strong>Мангал-Беседка с лавочкой, </strong>крышей и печкой для казана - многофункциональный и практичный барбекю комплекс 2в1, сочетающий в себе классический мангал и печь для казана. Имеет строгий вид и минимум вензелей и всяких завитушек. Уютно впишется в ландшафт любой дачи или загородного дома</p>
            <p><strong>Габаритные размеры в собранном состоянии:</strong></p>
            <ul>
                <li>Длина по фасаду: 200 см</li>
                <li>Ширина (глубина): 180 см</li>
                <li>Высота: 229 см</li>
            </ul>
            <p>Конструкция изготовлена из квадратной трубы, сечением 40*40 мм, крыша из листового металла толщиной 1 мм. Вся металлическая часть покрыта термостойкой матовой эмалью CERTA (выдерживает до 1000 градусов)</p>
            <p>В мангальном комплексе имеются удобные столы для комфортной работы повара, полки для хранения кухонного инвентаря, а также удобная лавочка. </p>
            <p><strong>Жаровня мангала</strong></p>
            <p>Вы можете выбрать один из двух типов жаровни</p>
            <ol>
                <li>Обычная - с отверстиями для поддува на передней и задней стенке. Рабочие размеры жаровни 60*35 см, глубина 17 см, сверху 8 прорезей для шампуров.</li>
                <li>С ящиком-зольником. Здесь нет отверстий для поддува как на классической жаровне, но есть колосник (перфорированное дно) и выдвижной ящик (зольник). В него попадает мелкая зола после прогорания углей, также открывая/закрывая ящик можно регулировать приток воздуха для поддува. Рабочий размер жаровни 60* 35 см, глубина 15 см</li>
            </ol>
        <p>Толщина металла жаровни 3 или 5 мм на выбор</p>
        <p><strong>Печь для казана</strong></p>
        <p>Печь для казана изготовлена с учетом всех замечаний наших покупателей и большого опыта приготовления различных блюд в казане.</p>
        <p>Здесь есть:</p>
        <ol>
            <li>Труба с "грибком" – труба обеспечит хорошую тягу, а грибок защитит от попадания осадков в печь.</li>
            <li>Заслонка (шибер) - находится в отводе под трубу, перекрывает тягу, когда необходимо поддержание минимального горения.</li>
            <li>Колосник – находится внутри печи, нужен для подачи кислорода, в камеру горения, а также для отвода золы.</li>
            <li>Зольник – очень важный элемент, необходим для регулировки тяги и интенсивности горения. Так же необходим для сбора золы. Обратите внимание, что некоторые производители делают этот элемент в виде дверцы-поддувала, что существенно сужает функциональность. Как минимум, чтобы удалить золу придётся переворачивать печь</li>
        </ol>
        <ul>
            <li>Габариты печи ДxШxВ: 37x37x44 см</li>
            <li>Диаметр отверстия под казан: 36 см</li>
            <li>Толщина металла печи: 3 или 5 мм (можно выбрать)</li>
            <li>Длина дымохода 2 метра</li>
            <li>Высота дымохода от пола 2,6 метра</li>
            <li>Колосник из стального квадратного прутка 10*10 мм</li>
            <li>Печь покрыта термостойкой матовой эмалью CERTA, выдерживает до +1000 градусов</li>
        </ul>
        <p><strong>Комплектация</strong></p>
        <ul>
            <li>Основание под жаровню со столом (центральная часть)</li>
            <li>Основание под печь со столом</li>
            <li>Лавочка</li>
            <li>Стойки </li>
            <li>Крыша (2 дуги, 3 листа, 18 саморезов)</li>
            <li>Жаровня</li>
            <li>Печь для казана (колосник, зольник, труба, грибок)</li>
        </ul>

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

export default connect(State, Actions)(Product_2223355)