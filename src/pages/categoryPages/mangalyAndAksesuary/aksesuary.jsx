import CategoryPageProducts from "../../../components/categoryPageProducts"
import '../style.scss'

const Aksesuary = () => {

    const pageData = {
        title: 'Аксессуары для мангалов',
        type: ['Аксессуары для мангалов'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Мангалы и аксессуары', path: '/category/mangali/', active: false },
            { title: 'Аксессуары для мангалов', path: '/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 250 },
                max: { title: 'руб.', value: 4800 }
            },
        ],
        categorySideBarFilters: [
        ],
        
    }

    return (
        <div>
            <CategoryPageProducts pageData={pageData} />
        </div>
    )
}


export default Aksesuary