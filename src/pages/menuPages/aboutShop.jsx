
import SideBar from '../../components/core/sideBar'
import './style.scss'

const AboutShop = () => {
    return (
        <div className='about-shop menu-block'>
            <SideBar />
            <div className='page-content'>
                <strong>Спасибо, что заглянули на эту страницу </strong>
                <p>
                    Интернет магазин «Мангалик.ру» работает в сфере производства и продажи мангалова, а так же печей, казанов и других
                    товаров для дачи. Мы работаем с 2013 года и за это время успели добиться успехов, благодаря заботе о наших покупателях,
                    большому ассортименту на любой вкус и кошелек, удобной и быстрой доставке по всей России.
            </p>
                <strong>5 причин обратиться за покупкой в Интернет-магазин «Мангалик.ру»</strong>
                <p>
                    <strong>1. Экономите время и силы. </strong>
                    Вам не нужно ехать в магазин, стоять в пробках и в очередях. Заказывайте на сайте, и мы привезем вашу покупку прямо вам домой или на дачу.
                </p>
                <p>
                    <strong>2. Честные цены </strong>
                    без лишних "накруток". Мы продаем продукцию по ценам производителя.
                </p>
                <p>
                    <strong>3. Круглосуточный заказ.</strong>
                    Заказывать на сайте вы можете круглосуточно. Оператор перезвонит вам в рабочее время.
                </p>
                <p>
                    <strong>4. Никакой предоплаты.</strong>
                    Оплата товара при получении и визуальном осмотре.(по Москве и МО)
                </p>
                <p>
                    <strong>5. Доставка по всей России. </strong>
                    При 100% оплате заказа, мы осуществим доставку в любой регион России.
                </p>
                <p>
                Если у вас возникли пожелания, предложения, замечания, претензии, жалобы напишите нам <strong style={{fontStyle:'italic'}}>mangalik.ru@yandex.ru</strong> и мы обязательно ответим!
                </p>
            </div>
        </div>
    )
}

export default AboutShop