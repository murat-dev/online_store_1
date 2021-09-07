import './style.scss'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import { connect } from 'react-redux'

const InputCountCart = ({ productForChangeCount, setProductForChangeCount, productIndex, addClassInput, forCart,
    getDataFromCart, myCart }) => {

    const setProductCount = e => {
        if (!/^\d+$/.test(e.target.value)) return
        if (e.target.value === '') return

        if (productIndex !== undefined && !forCart) {
            let clone = JSON.parse(JSON.stringify(productForChangeCount))
            clone[productIndex].count = e.target.value
            setProductForChangeCount(clone)
        }
        else if (forCart) {
            const storage = JSON.parse(localStorage.getItem('myCart'))
            storage[productIndex].count = e.target.value
            localStorage.setItem('myCart', JSON.stringify(storage))
            getDataFromCart()
        }
        else {
            let clone = JSON.parse(JSON.stringify(productForChangeCount))
            clone.count = e.target.value
            setProductForChangeCount(clone)
        }
    }

    const setOneProductCount = (value) => {
        let clone = JSON.parse(JSON.stringify(productForChangeCount))
        if (clone.count <= 1 && value === -1) return
        let num = Number(clone.count) + value
        clone.count = num
        setProductForChangeCount(clone)
    }

    const setArrayProductCount = (value) => {
        let clone = JSON.parse(JSON.stringify(productForChangeCount))
        if (clone[productIndex].count <= 1 && value === -1) return
        let num = Number(clone[productIndex].count) + value
        clone[productIndex].count = num
        setProductForChangeCount(clone)
    }

    const setCartProductCount = (value) => {
        const storage = JSON.parse(localStorage.getItem('myCart'))
        if (storage[productIndex].count <= 1 && value === -1) return
        let num = Number(storage[productIndex].count) + value
        storage[productIndex].count = num
        localStorage.setItem('myCart', JSON.stringify(storage))
        getDataFromCart()
    }

    const setProductsCountPlusMinus = (value) => {

        if (productIndex !== undefined && !forCart) {
            setArrayProductCount(value)
        }
        else if (forCart) {
            setCartProductCount(value)
        }
        else {
            setOneProductCount(value)
        }
    }

    const countValue = () => {
        if (productIndex !== undefined && !forCart) return productForChangeCount[productIndex]?.count
        else if (forCart) return myCart[productIndex]?.count
        else return productForChangeCount?.count
    }

    return (
        <div className="input-cart">
            <input className={"for-cart__count " + (addClassInput ? addClassInput : '')}
                // value={productIndex !== undefined && !forCart ? productForChangeCount[productIndex].count :productForChangeCount?.count}
                value={countValue()}
                onChange={setProductCount} type="text" />
            <div className='for-cart-count__icons'>
                <div className='for-cart-count__icon top-icon' onClick={setProductsCountPlusMinus.bind(this, 1)}><i className="material-icons up"> arrow_drop_up </i></div>
                <div className='for-cart-count__icon bottom-icon' onClick={setProductsCountPlusMinus.bind(this, -1)}><i className="material-icons down"> arrow_drop_down </i></div>
            </div>
        </div>
    )
}

export default connect(State, Actions)(InputCountCart)