import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import { useHistory } from 'react-router-dom'


const SearchModal = ({ currentSearchProducts, setCurrentSearchProducts, setSearchValue, searchValue, hideSearchModal }) => {
    const history = useHistory()

    const filteredSearchPreview = (arr) =>{
        const cloneArr = JSON.parse(JSON.stringify(arr))
        return cloneArr.splice(0, 5)
    }
    const linkToAllSearch = () =>{
        history.push(`/search/?query=${searchValue}`)
        setCurrentSearchProducts([])
    }

    return (
        <div className="searchModal">
            {filteredSearchPreview(currentSearchProducts).map((item, i) => (
                <SearchModalPreview key={i}
                    product={item}
                    setSearchValue={setSearchValue}
                    setCurrentSearchProducts={setCurrentSearchProducts}
                    hideSearchModal={hideSearchModal} />
            ))}

            <div className="searchModal__bottom">
                <div onClick={linkToAllSearch}>Показать всё ({currentSearchProducts.length})</div>
                <div onClick={hideSearchModal}>Убрать поиск</div>
            </div>
        </div>
    )
}

const SearchModalPreview = ({ product, hideSearchModal }) => {
    const history = useHistory()

    const linkTitle = () => {
        history.push(product.url)
        hideSearchModal()
    }

    return (
        <div className="searchModal__preview">
            <div className="searchModal__previewImage">
                <img src={product.image[0]} alt="" />
            </div>
            <div className="searchModal__previewInfo">
                <div className='previewInfo__title' onClick={linkTitle}>{product.title}</div>
                <div className="previewInfo__price">
                    {product.price.oldPrice &&
                        <div className="previewInfo__priceOld">{product.price.oldPrice} руб.</div>
                    }
                    <div className="previewInfo__priceNew">{product.price.newPrice} руб.</div>
                </div>
            </div>
        </div>
    )
}

export default connect(State, Actions)(SearchModal)