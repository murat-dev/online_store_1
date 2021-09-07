import SideBar from '../../components/core/sideBar'
import './style.scss'

const Samovyvoz = () =>{
    return(
        <div className='samovyvoz menu-block'>
            <SideBar/>
            <div className="page-content">
            <h4>Самовывоз</h4>
            <ul>
                <li><strong>Адрес склада:</strong> Москва, ул. Дорожная, дом 1, строение 3Б (Варшавское шоссе)</li>
                <ul>
                    <li><strong>Время работы:</strong> Ежедневно с 10 до 16 (в другое время по договорённости)</li>
                </ul>
            </ul>
            <p>На складе необходимо назвать номер заказа, после оплаты наш кладовщик поможет Вам с погрузкой в машину</p>
            </div>
        </div>
    )
}

export default Samovyvoz