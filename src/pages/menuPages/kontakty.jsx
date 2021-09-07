import SideBar from '../../components/core/sideBar'
import './style.scss'

const Kontakty = () => {
    return (
        <div className='kontakty menu-block'>
            <SideBar />
            <div className="page-content">
                <strong><u>Контактная информация</u></strong>
                <p>Телефон для связи: <a style={{ fontSize: '18px', color: '#0063be' }} href="tel:+74955070241">+7 (495) 507-02-41</a></p>
                <ul>
                    <li>Звонки принимаются ежедневно с 9.00 - 21.00 по Московскому времени</li>
                    <li>Оформление заказа на сайте: Круглосуточно</li>
                </ul>

                <p>Электронная почта: <a style={{ fontWeight: '700', fontSize: '16px', color: '#0063be' }} href="mailto:mangalik.ru@yandex.ru">mangalik.ru@yandex.ru</a></p>
                <p>Адрес: Москва, ул. Дорожная, дом 1, строение 3Б (координаты GPS: 55.626421, 37.624992)</p>
                <p>Метро: Южная, 1,1 км.</p>
                <hr />
                <strong><u>Юридическая информация</u></strong>
                <p>Индивидуальный предприниматель Ширяев Роман Юрьевич</p>
                <ul>
                    <li><strong>ОГРН:</strong> 309774625401249</li>
                    <li><strong>ИНН:</strong> 772351721256</li>
                    <li><strong>Юридический адрес:</strong> 109388 г. Москва, Россия ул. Полбина, дом 9</li>
                    <li><strong>Наименование банка:</strong>  ПАО СБЕРБАНК</li>
                    <li><strong>Расчетный счет:</strong>  40802810038000117697</li>
                    <li><strong>Коррсчет:</strong> 30101810400000000225</li>
                    <li><strong>БИК:</strong> 044525225</li>
                </ul>
                <hr />
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad1622d42a42fe1f6d00bfd7acd3ab71b29245b43f4598e3056326724ccdefddd&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
            </div>
        </div>
    )
}

export default Kontakty