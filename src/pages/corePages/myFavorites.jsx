import './style.scss'
import Navigation from '../../components/core/navigation'
import clearList from '../../assets/image/clearList.png'
import ProductPreview from '../../components/productPreview/productPreview'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'


const MyFavorites = ({ myFavorites, setMyFavorites }) => {

    const pageData = {
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Избранное', path: '/', active: true },
        ],
    }

    const clearMyFavorites = () =>{
        localStorage.setItem('myFavorites', JSON.stringify([]))
        setMyFavorites([])
    }
    return (
        <div className='myFavorites'>
            <Navigation navigation={pageData.navigation} />
            {!myFavorites.length ?
                <>
                    <h3>Избранное ({myFavorites.length})</h3>
                    <p>Не найдено ни одного товара.</p>
                </>
                :
                <>
                    <div className="myFavorites__top">
                        <h3>Избранное ({myFavorites.length})</h3>
                        <div className="top__clear">
                            <img src={clearList} alt="load" />
                            <span onClick={clearMyFavorites}>Очистить список</span>
                        </div>
                    </div>

                    <div className="myFavorites__content">
                        {myFavorites.map((item, i) => (
                            <ProductPreview product={item} key={item.code} forMyFavorites={true} />
                        ))}
                    </div>
                </>
            }
        </div>
    )
}

export default connect(State, Actions)(MyFavorites)