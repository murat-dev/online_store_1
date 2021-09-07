import './style.scss'
import Navigation from '../../components/core/navigation'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import { useState } from 'react'
import clearList from '../../assets/image/clearList.png'
import { useHistory } from 'react-router-dom'

const MyCompare = ({ setMyCompare, myCompare, myCompareTitles }) => {
    const [contentToggle, setContentToggle] = useState(1)
    const history = useHistory()

    const toggleContent = (num) => {
        if (num === 1) setContentToggle(1)
        if (num === 2) setContentToggle(2)
    }

    const charactericticTitle = (title, index) => {
        let neededTitleInfo = '—'
        for (let i = 0; i < myCompare[index].characteristics.length; i++) {
            if (myCompare[index].characteristics[i].title === title) {
                neededTitleInfo = myCompare[index].characteristics[i].info
            }
        }
        return neededTitleInfo

    }

    const deleteCompareProduct = (index) => {
        const storage = JSON.parse(localStorage.getItem('myCompare'))
        const filteredCompare = storage.filter(item => item.code !== myCompare[index].code)
        localStorage.setItem('myCompare', JSON.stringify(filteredCompare))
        setMyCompare(filteredCompare)
    }

    const pageData = {
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Сравнить товары', path: '/', active: true },
        ],
    }

    const clearMyCompare = () => {
        localStorage.setItem('myCompare', JSON.stringify([]))
        setMyCompare([])
    }

    return (
        <div className='myCompare'>
            <Navigation navigation={pageData.navigation} />
            <div className="myCompare__top">
                <h3>Сравнить товары ({myCompare.length})</h3>
                {myCompare.length ?
                    <div className="top__clear">
                        <img src={clearList} alt="load" />
                        <span onClick={clearMyCompare}>Очистить список</span>
                    </div>
                    : null
                }
            </div>
            {myCompare.length ?
                <div className="myCompare__content">
                    <div className="line">
                        <div className="line-block">
                            <ul className='toggle'>
                                <li onClick={() => toggleContent(1)}><span className={contentToggle === 1 ? 'active' : ''}>Все характеристики</span></li>
                                <li onClick={() => toggleContent(2)}><span className={contentToggle === 2 ? 'active' : ''}>Различные</span></li>
                            </ul>
                        </div>
                        {myCompare.map((item, i) => (
                            <div key={i} className="line-block">
                                <div className='block-line__block-img'>
                                    <img src={item.image[0]} alt="" />
                                </div>
                                <div className='block-line__rating'>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span>(0)</span>
                                </div>
                                <div onClick={()=>history.push(item.url)} className="block-line__title">
                                    {item.title}
                                </div>
                                <div className="block-line__remove">
                                    <div><i className="fas fa-times"></i></div>
                                    <div onClick={() => deleteCompareProduct(i)}>Удалить из списка</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {myCompareTitles.map((itemTitle, indexTitle) => (
                        <div key={indexTitle} className="line">
                            <div className="line-block">
                                <b>{itemTitle}</b>
                            </div>
                            {myCompare.map((item, i) => (
                                <div key={i} className="line-block">
                                    <span>{charactericticTitle(itemTitle, i)}</span>
                                </div>
                            ))}
                        </div>
                    ))}

                    <div className="line">
                        <div className="line-block">
                        </div>
                        {myCompare.map((item, i) => (
                            <div key={i} className="line-block">
                                {item.price.oldPrice && <div className="old-price">{item.price.oldPrice} руб.</div>}
                                <div className="new-price">{item.price.newPrice} руб</div>
                            </div>
                        ))}
                    </div>
                </div>
                : 
                <div>Список товаров для сравнения пуст.</div>
            }
        </div >
    )
}

export default connect(State, Actions)(MyCompare)

