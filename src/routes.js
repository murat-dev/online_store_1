import { Redirect, Route, Switch } from "react-router-dom"
import AboutShop from "./pages/menuPages/aboutShop.jsx"
import Login from "./pages/auth/login"
import Signup from "./pages/auth/signup"
import Dostavka from "./pages/menuPages/dostavka"
import Kontakty from "./pages/menuPages/kontakty"
import Main from "./pages/corePages/main"

import Product_15478 from "./pages/mainPageProducts/mangalsAndAccessories/15478"
import Product_11235 from './pages/mainPageProducts/mangalsAndAccessories/11235'
import Product_10000 from './pages/mainPageProducts/mangalsAndAccessories/10000'
import Product_66680 from './pages/mainPageProducts/mangalsAndAccessories/66680'
import Product_2223355 from './pages/mainPageProducts/mangalsAndAccessories/2223355'
import Product_16559 from './pages/mainPageProducts/mangalsAndAccessories/16559'
import Product_66614 from './pages/mainPageProducts/mangalsAndAccessories/66614'
import Product_10921 from './pages/mainPageProducts/mangalsAndAccessories/10921'
import Product_13265 from './pages/mainPageProducts/mangalsAndAccessories/13265'
import Product_10749 from './pages/mainPageProducts/mangalsAndAccessories/10749'

import Product_10152 from './pages/mainPageProducts/mangalsAndAccessories/10152'

import MangalyAndAksesuary from "./pages/categoryPages/mangalyAndAksesuary"
import MangalySKrishey from "./pages/categoryPages/mangalyAndAksesuary/mangalySKrishey"


import Samovyvoz from "./pages/menuPages/samovyvoz"
import Confidentiality from "./pages/menuPages/Confidentiality.jsx"
import MangalyBezrishi from "./pages/categoryPages/mangalyAndAksesuary/mangalyBezKrishi"
import PechiDlyaKazanov from "./pages/categoryPages/pechiDlyaKazanov"
import Cart from "./pages/cart/cart.jsx"
import MyViewed from "./pages/corePages/myViews.jsx"
import MyCompare from "./pages/corePages/myCompare.jsx"
import MyFavorites from "./pages/corePages/myFavorites.jsx"
import Checkout from "./pages/corePages/checkout.jsx"
import Search from "./pages/corePages/search.jsx"
import MangalySPechkoiPodKazan from "./pages/categoryPages/mangalyAndAksesuary/mangalySPechkoiPodKazan.jsx"
import MangalyIzStali5mm from "./pages/categoryPages/mangalyAndAksesuary/mangalyIzStali5mm.jsx"
import MangalySKrishkoi from "./pages/categoryPages/mangalyAndAksesuary/mangalySKrishkoi.jsx"
import StacionarnyMangaly from "./pages/categoryPages/mangalyAndAksesuary/stacionarnyMangaly.jsx"
import MangalyNaKolesah from "./pages/categoryPages/mangalyAndAksesuary/mangalyNaKolesah.jsx"
import MangalySKazanom from "./pages/categoryPages/mangalyAndAksesuary/mangalySKazanom.jsx"
import MangalyDlyaDachi from "./pages/categoryPages/mangalyAndAksesuary/mangalyDlyaDachi.jsx"
import GarovniKMangalam from "./pages/categoryPages/mangalyAndAksesuary/garovniKMangalam.jsx"
import Vertela from "./pages/categoryPages/mangalyAndAksesuary/vertela.jsx"
import Aksesuary from "./pages/categoryPages/mangalyAndAksesuary/aksesuary.jsx"
import Shampuri from "./pages/categoryPages/mangalyAndAksesuary/shampuri.jsx"
import PodstavkiDlyaKazana from "./pages/categoryPages/mangalyAndAksesuary/podstavkiDlyaKazana.jsx"
import ReshetkiGril from "./pages/categoryPages/mangalyAndAksesuary/reshetkiGril.jsx"
import GriliBarbeku from "./pages/categoryPages/griliBarbeku.jsx"

import KazanyChuguny from "./pages/categoryPages/kazanyChuguny/index.jsx"
import Kazani6L from "./pages/categoryPages/kazanyChuguny/Kazani6L.jsx"
import Kazani8L from "./pages/categoryPages/kazanyChuguny/Kazani8L.jsx"
import Kazani10L from "./pages/categoryPages/kazanyChuguny/Kazani10L.jsx"
import Kazani12L from "./pages/categoryPages/kazanyChuguny/Kazani12L.jsx"
import Kazani16L from "./pages/categoryPages/kazanyChuguny/Kazani16L.jsx"
import Kazani22L from "./pages/categoryPages/kazanyChuguny/Kazani22L.jsx"
import AfganskyKazany from "./pages/categoryPages/kazanyChuguny/AfganskyKazany.jsx"
import YzbegsckyKazany from "./pages/categoryPages/kazanyChuguny/YzbegsckyKazany.jsx"
import KazanPlusPech from "./pages/categoryPages/kazanPlusPech/index.jsx"
import PechiDlyaSjiganiyaMusora from "./pages/categoryPages/pechiDlyaSjiganiyaMusora.jsx"
import Smokery from "./pages/categoryPages/smokery.jsx"
import Koptilny from "./pages/categoryPages/koptilny.jsx"
import YzbegskayaPosuda from "./pages/categoryPages/yzbegskayaPosuda.jsx"
import ChugunySkovorodki from "./pages/categoryPages/chugunySkovorodki.jsx"





const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/'> <Main /> </Route>
                <Route path='/o_magazine'> <AboutShop /> </Route>
                <Route path='/dostavka'> <Dostavka /> </Route>
                <Route path='/samovyvoz'> <Samovyvoz /> </Route>
                <Route path='/kontakty'> <Kontakty /> </Route>
                <Route path='/politika-konfidencialnosti'> <Confidentiality /> </Route>
                <Route path='/login'> <Login /> </Route>
                <Route path='/signup'> <Signup /> </Route>
                <Route path='/cart'> <Cart /> </Route>
                <Route path='/viewed'> <MyViewed /> </Route>
                <Route path='/compare'> <MyCompare /> </Route>
                <Route path='/favorites'> <MyFavorites /> </Route>
                <Route path='/checkout'> <Checkout /> </Route>
                <Route path='/search'> <Search /> </Route>

                {/* Категории */}
                <Route exact path='/category/mangali/'> <MangalyAndAksesuary /> </Route>
                <Route path='/category/mangali/s-krishey/'> <MangalySKrishey /> </Route>
                <Route path='/category/mangali/1/'> <MangalyBezrishi /> </Route>
                <Route path='/category/mangali/s-pechkoy-pod-kazan/'> <MangalySPechkoiPodKazan /> </Route>
                <Route path='/category/mangali/iz-stali-5-mm/'>  <MangalyIzStali5mm /> </Route>
                <Route path='/category/mangali/s-kryshkoy/'>  <MangalySKrishkoi /> </Route>
                <Route path='/category/mangali/stacionarnye/'>  <StacionarnyMangaly /> </Route>
                <Route path='/category/mangali/na-kolesah/'>  <MangalyNaKolesah /> </Route>
                <Route path='/category/mangali/mangaly-dlya-dachi/'>  <MangalyDlyaDachi /> </Route>
                <Route path='/category/mangali/s-kazanom/'>  <MangalySKazanom /> </Route>
                <Route path='/category/mangali/zharovni-k-mangalu/'>  <GarovniKMangalam /> </Route>
                <Route exact path='/category/mangali/aksessuari/'> <Aksesuary /> </Route>
                <Route path='/category/mangali/aksessuari/vertela/'> <Vertela /> </Route>
                <Route path='/category/mangali/aksessuari/shampury/'> <Shampuri /> </Route>
                <Route path='/category/mangali/aksessuari/podstavka-kazana-na-mangal/'> <PodstavkiDlyaKazana /> </Route>
                <Route path='/category/mangali/aksessuari/reshetki-gril/'> <ReshetkiGril /> </Route>

                <Route path='/category/grili/'> <GriliBarbeku /> </Route>

                <Route exact path='/category/kazany-chugunnye/'><KazanyChuguny /> </Route>
                <Route path='/category/kazany-chugunnye/3-5-litra/'><Kazani6L /> </Route>
                <Route path='/category/kazany-chugunnye/na-8-litrov/'><Kazani8L /> </Route>
                <Route path='/category/kazany-chugunnye/na-10-litrov/'><Kazani10L /> </Route>
                <Route path='/category/kazany-chugunnye/na-12-litrov/'><Kazani12L /> </Route>
                <Route path='/category/kazany-chugunnye/na-16-litrov/'><Kazani16L /> </Route>
                <Route path='/category/kazany-chugunnye/na-22-litra/'><Kazani22L /> </Route>
                <Route path='/category/kazany-chugunnye/afganskie/'><AfganskyKazany /></Route>
                <Route path='/category/kazany-chugunnye/uzbekskie/'><YzbegsckyKazany /> </Route>


                <Route path='/category/pechi-pod-kazan/'> <PechiDlyaKazanov /> </Route>

                <Route path='/category/komplekty-kazan-pech/'> <KazanPlusPech /> </Route>
                <Route path='/category/pechi-dlya-szhiganiya-musora/'> <PechiDlyaSjiganiyaMusora /> </Route>
                <Route path='/category/smokery/'> <Smokery /> </Route>
                <Route path='/category/koptil/'> <Koptilny /> </Route>
                <Route path='/category/uzbekskaya-posuda/'> <YzbegskayaPosuda /> </Route>
                <Route path='/category/chugunnye-skovorody/'> <ChugunySkovorodki /> </Route>

                {/* Продукты Мангалы и Акссесуары */}
                <Route path='/mangal_sm27p-2-grill-barbecu-stal-5mm'> <Product_15478 /> </Route>
                <Route path='/mangal_17-1'> <Product_11235 /> </Route>
                <Route path='/pech-gril-iskandyer-inklayn-eyr-s-chugunnoy-reshetkoy-gril/'> <Product_10000 /> </Route>
                <Route path='/smoker-sm40/'> <Product_66680 /> </Route>
                <Route path='/mangal-vityaz-shef-povar/'> <Product_16559 /> </Route>
                <Route path='/mangal_sm26p-2-grill-barbecu-stal-5mm/'> <Product_66614 /> </Route>
                <Route path='/mangal-besedka-s-lavochkoy/'> <Product_2223355 /> </Route>
                <Route path='/mangal_17/'> <Product_10921 /> </Route>
                <Route path='/37/'> <Product_13265 /> </Route>
                <Route path='/pech-mangal-iskander-komfort-air-s-kryshkoj-gril-i-chugunnoj-reshetkoj/'> <Product_10749 /> </Route>

                <Route path='/kryshka-barbekyu-600-350/'> <Product_10152 /> </Route>



                {/* <Redirect to='/'></Redirect> */}
            </Switch>
        </>
    )
}

export default Routes