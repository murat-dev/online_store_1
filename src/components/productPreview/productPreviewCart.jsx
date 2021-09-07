import React, { useEffect, useState } from 'react'
import InputCart from '../core/inputCart'
import './product.scss'
import deleteItemCart from '../../assets/image/deleteItemCart.png'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import {useHistory} from 'react-router-dom'

const ProductPreviewCart = ({ product, indexProduct, getDataFromCart }) => {
    const [showProductAdd, setShowProductAdd] = useState(false)
    const history = useHistory()
    const changeAdditionl = (indexAdd) => {
        const storage = JSON.parse(localStorage.getItem('myCart'))
        storage[indexProduct].add[indexAdd].active = !storage[indexProduct].add[indexAdd].active
        localStorage.setItem('myCart', JSON.stringify(storage))
        getDataFromCart()
    }

    const price = ()=>{
        let sumAdd = 0
        for(let i = 0; i < product.add.length; i++){
            if(product.add[i].active){
                sumAdd += product.add[i].price
            }
        }
        return (product.price.newPrice + sumAdd) * product.count
    }

    const addTitle = () =>{
        let addTitles = []
        for(let i = 0; i < product.select.length; i++){
            for(let j = 0; j < product.select[i].choice.length; j++){
                 if(product.select[i].choice[j].active && product.select[i].type === 'long'){
                    addTitles.push(getSelectTitle(product.select[i].choice[j].title , null))
                 }
                 if(product.select[i].choice[j].active && product.select[i].type === 'short'){
                    addTitles.push(getSelectTitle(product.select[i].title , product.select[i].choice[j].title))
                 }
            }
        }
        
        if(addTitles.length) return `(${addTitles.join(' ')})`
    }

    const getSelectTitle = (selectTitle, value) =>{
        switch(selectTitle){
            case 'толщина металла печи:' : return `толщина стали ${value}`
            case 'Выберите сталь жаровни мангала:' : return `сталь жаровни ${value}`
            case 'Выберите тип жаровни мангала:' : return `${value}`
            default: return selectTitle
        }
    }

    const deleteProductFromCard = () =>{
        const storage = JSON.parse(localStorage.getItem('myCart'))
        storage.splice(indexProduct, 1)
        localStorage.setItem('myCart', JSON.stringify(storage))
        getDataFromCart()
    }

    return (
        <div className="product-preview-cart">
            <div className="img-block">
                <img src={product?.image[0]} alt="load.." />
            </div>
            <div className="center-block">
                <div onClick={()=>history.push(product.url)} className="center-block__title">{product.title}</div>
                <div className="center-block__add-title">{addTitle()}</div>

                {product?.add.length ?
                    <div className="center-block__add">
                        {!showProductAdd ?
                            <div onClick={setShowProductAdd.bind(this, !showProductAdd)} className='additional'>Дополнительный сервис</div>
                            :
                            <div>
                                {product?.add.map((item, i) => (
                                    <label key={i}  >
                                        <input onChange={changeAdditionl.bind(this, i)} checked={item.active} type="checkbox" />
                                        {' ' + item.title}
                                    </label>
                                ))}
                            </div>
                        }
                    </div>
                    : <div></div>
                }
            </div>
            <div className="price-input-block">
                <div className="price-input-block__price">{price().toLocaleString('ru')} руб.</div>
                <InputCart forCart={true} productIndex={indexProduct}/>
            </div>

            <div className="price-input-block__icon-close">
                <img onClick={deleteProductFromCard} src={deleteItemCart} alt="load.." />
            </div>
        </div>
    )
}

export default connect(State, Actions)(ProductPreviewCart)