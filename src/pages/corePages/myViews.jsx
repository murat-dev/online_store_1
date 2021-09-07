import './style.scss'
import Navigation from '../../components/core/navigation'
import clearList from '../../assets/image/clearList.png'
import ProductPreview from '../../components/productPreview/productPreview'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'


const MyViews = ({ myViews, setMyViews }) => {

    const pageData = {
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Просмотренные товары', path: '/', active: true },
        ],
    }
    const clearMyViews = () => {
        localStorage.setItem('myViews', JSON.stringify([]))
        setMyViews([])
    }
    return (
        <div className='myFavorites'>
            <Navigation navigation={pageData.navigation} />
            {!myViews.length ?
                <>
                    <h3>Просмотренные товары ({myViews.length})</h3>
                    <p>Не найдено ни одного товара.</p>
                </>
                :
                <>
                    <div className="myFavorites__top">
                        <h3>Избранное ({myViews.length})</h3>
                        <div className="top__clear">
                            <img src={clearList} alt="load" />
                            <span onClick={clearMyViews}>Очистить список</span>
                        </div>
                    </div>

                    <div className="myFavorites__content">
                        {myViews.map((item, i) => (
                            <ProductPreview product={item} key={i} />
                        ))}
                    </div>
                </>
            }
        </div>
    )
}

export default connect(State, Actions)(MyViews)
