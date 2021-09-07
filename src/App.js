import React from 'react'
import Footer from './components/footer/footer.jsx'
import Header from './components/header/header.jsx'
import Menu from './components/menu/menu.jsx'
import Routes from './routes.js'
import './App.scss'
import ProductPreInfoModal from './components/productPreInfoModal'
import State from './redux/state'
import Actions from './redux/actions'
import { connect } from 'react-redux'
import dataBase from './assets/dataBase'
import BottomBar from './components/bottomBar/bottomBar.jsx'
import BackCallModal from './components/backCallModal/backCallModal.jsx'
import MenuDropDownMobile from './components/menu/MenuDporDownMobile.jsx'




class App extends React.Component {

  getAllProduct = async () => {
    // await axios.get('/mangals.json').then(res => this.props.setAllProduct(res.data))
    this.props.setAllProduct(dataBase)
  }
  getWindowWidth = () => {
    this.props.setWindowWidth(window.innerWidth)
  }

  componentDidMount = () => {
    this.createAndGetLocalStorage()
    this.getAllProduct()
    window.addEventListener('resize', this.getWindowWidth)
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.myCompare.length !== this.props.myCompare.length) {
      this.addTitlesFromMyCompare()
    }
  }

  addTitlesFromMyCompare = () => {
    let arrTitles = []
    for (let i = 0; i < this.props.myCompare.length; i++) {
      for (let j = 0; j < this.props.myCompare[i].characteristics.length; j++) {
        arrTitles.push(this.props.myCompare[i].characteristics[j].title)
      }
    }
    let uniks = [...new Set(arrTitles)]
    this.props.setMyCompareTitles(uniks)
  }

  createAndGetLocalStorage = () => {
    if (!localStorage.getItem('myCart')) {
      localStorage.setItem('myCart', JSON.stringify([]))
    }

    if (!localStorage.getItem('myFavorites')) {
      localStorage.setItem('myFavorites', JSON.stringify([]))
    }
    else {
      const storage = JSON.parse(localStorage.getItem('myFavorites'))
      this.props.setMyFavorites(storage)
    }

    if (!localStorage.getItem('myCompare')) {
      localStorage.setItem('myCompare', JSON.stringify([]))
    }
    else {
      const storage = JSON.parse(localStorage.getItem('myCompare'))
      this.props.setMyCompare(storage)
    }

    if (!localStorage.getItem('myViews')) {
      localStorage.setItem('myViews', JSON.stringify([]))
    }
    else {
      const storage = JSON.parse(localStorage.getItem('myViews'))
      this.props.setMyViews(storage)
    }
  }

  render() {

    return (
      <div className='app'>
        <div className='container'>
          <Header />
          <Menu />
          <Routes />
          <BottomBar /> 
          {this.props.showPreInfoModal && <ProductPreInfoModal />}
          <BackCallModal />
          <MenuDropDownMobile />
        </div>

        <Footer />
      </div>
    )
  }
}

export default connect(State, Actions)(App)