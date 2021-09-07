import './footer.scss'
import footerImg1 from '../../assets/image/footer1.png'
import footerImg2 from '../../assets/image/footer2.png'
import footerImg3 from '../../assets/image/footer3.png'
import { useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation()
   
    return (

        <div className="footer">
            {location.pathname === '/' ? <h1>Интернет-магазин мангалов</h1> : ""}
            <div className="footer__shadow">
                <div className="footer__container">
                    <div className="footer__body">
                        <div className="footer__bodyBlock">
                            <h5>КОНТАКТЫ</h5>
                            <div className="footer__adress">
                                <i className="fa fa-map-marker"></i>
                                <span>г. Москва, ул. Дорожная, д.1, строение 3Б</span>
                            </div>
                            <div className="footer__phone">
                                <i className="fa fa-phone"></i>
                                <span><a href="tel:+74999387030"> +7 (495) 507-02-41</a></span>
                                <div>Пн—Вс 9:00—21:00</div>
                            </div>
                            <div className="footer__email">
                                <i className="fa fa-envelope-o"></i>
                                <span><a href="mailto:mangalik.ru@yandex.ru"> mangalik.ru@yandex.ru</a></span>
                            </div>
                        </div>

                        <div className="footer__bodyBlock">
                            <h5>РАЗДЕЛЫ</h5>
                            <ul>
                                <li><span></span><span>Мангалы и аксессуары</span></li>
                                <li><span></span><span>Грили Барбекю</span></li>
                                <li><span></span><span>Казаны чугунные</span></li>
                                <li><span></span><span>Казан + печь (комплекты)</span></li>
                                <li><span></span><span>Печи для сжигания мусора</span></li>
                                <li><span></span><span>Смокеры</span></li>
                                <li><span></span><span>Коптильни</span></li>
                                <li><span></span><span>Узбегская посуда</span></li>
                                <li><span></span><span>Чугунные сковороды</span></li>
                            </ul>
                        </div>

                        <div className="footer__bodyBlock">
                            <h5>СОЦСЕТИ</h5>
                            <i className="fa fa-vk"></i>
                            <div className="footer__socialTitle">
                                Мы получаем и обрабатываем персональные данные посетителей нашего сайта в соответствии с 
                                <span> официальной политикой.</span>
                                Если вы не даете согласия на обработку своих 
                                персональных данных,вам необходимо покинуть наш сайт.
                            </div>
                        </div>

                        <div className="footer__bodyBlock">
                            <h5>ОПЛАТА</h5>
                            <div className='footer__imgs-payment'>
                                <img src={footerImg1} alt="" />
                                <img src={footerImg2} alt="" />
                                <img src={footerImg3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        2013 - 2021 Мангалик.ру – мангалы, печи, котлы и прочее для отдыха и дачи. При использовании материалов с сайта обязательно указание прямой ссылки на источник.
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer