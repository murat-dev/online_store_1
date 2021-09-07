import './style.scss'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'

const CompareFavorites = ({ addClass, product, myFavorites, myCompare, setMyFavorites, setMyCompare,
    bottomBarModals, setBottomBarModals }) => {
    const [addedCompare, setAddedCompare] = useState(false)
    const [addedFavorites, setAddedFavorites] = useState(false)

    const addOrDeleteToCompare = () => {
        const storage = JSON.parse(localStorage.getItem('myCompare'))
        if (!addedCompare) {
            for (let i = 0; i < storage.length; i++) {
                if (storage[i].code === product.code) return
            }
            storage.push(product)
            showCompareModal(true)
        }
        else {
            const indexProduct = storage.findIndex(item => item.code === product.code)
            storage.splice(indexProduct, 1)
            showCompareModal()
        }
        localStorage.setItem('myCompare', JSON.stringify(storage))
        getDataFromMyCompare()
    }

    const addOrDeletToFavorites = () => {
        const storage = JSON.parse(localStorage.getItem('myFavorites'))
        if (!addedFavorites) {
            for (let i = 0; i < storage.length; i++) {
                if (storage[i].code === product.code) return
            }
            storage.push(product)
            showFavoriteModal(true)
        }
        else {
            const indexProduct = storage.findIndex(item => item.code === product.code)
            storage.splice(indexProduct, 1)
            showFavoriteModal()
        }

        localStorage.setItem('myFavorites', JSON.stringify(storage))
        getDataFromMyFavorites()
    }

    const showCompareModal = (add) => {
        let cloneBottomBarModal = { ...bottomBarModals }
        if (bottomBarModals.compare.show === 1) cloneBottomBarModal.compare.show = 2
        else cloneBottomBarModal.compare.show = 1
        
        if (add) cloneBottomBarModal.compare.title = 'Добавлен в сравнение'
        else cloneBottomBarModal.compare.title = 'Удалён из сравнения'
        setBottomBarModals(cloneBottomBarModal)
    }

    const showFavoriteModal = (add) => {
        let cloneBottomBarModal = { ...bottomBarModals }
        if (bottomBarModals.favorite.show === 1) cloneBottomBarModal.favorite.show = 2
        else cloneBottomBarModal.favorite.show = 1
        
        if (add) cloneBottomBarModal.favorite.title = 'Добавлен в избранное'
        else cloneBottomBarModal.favorite.title = 'Удалён из избранного'
        setBottomBarModals(cloneBottomBarModal)
    }

    const getActiveCompare = () => {
        let getedCompare = myCompare.filter(item => item.code === product.code)
        if (getedCompare.length) setAddedCompare(true)
        else setAddedCompare(false)
    }

    const getActiveFavorites = () => {
        let getedFavorite = myFavorites.filter(item => item.code === product.code)
        if (getedFavorite.length) setAddedFavorites(true)
        else setAddedFavorites(false)
    }

    const getDataFromMyCompare = () => {
        const storage = JSON.parse(localStorage.getItem('myCompare'))
        setMyCompare(storage)
    }

    const getDataFromMyFavorites = () => {
        const storage = JSON.parse(localStorage.getItem('myFavorites'))
        setMyFavorites(storage)
    }

    useEffect(() => {
        if (product && myCompare) getActiveCompare()
    }, [myCompare, product])

    useEffect(() => {
        if (product && myFavorites) getActiveFavorites()
    }, [myFavorites, product])

    return (
        <div className={"compare-favorites " + addClass}>

            <div onClick={addOrDeletToFavorites} className={"compare-favorites__favorites " + (addedFavorites ? "active" : "")}>
                <i className="far fa-heart"></i>
                <span>избранное</span>
            </div>

            <div onClick={addOrDeleteToCompare} className={"compare-favorites__compare " + (addedCompare ? "active" : "")}>
                <i className="fas fa-sliders-h"></i>
                <span>сравнить</span>
            </div>

        </div>
    )
}

export default connect(State, Actions)(CompareFavorites)