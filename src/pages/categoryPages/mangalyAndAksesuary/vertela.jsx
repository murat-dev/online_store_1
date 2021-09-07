import CategoryPageProducts from "../../../components/categoryPageProducts"


const Vertela = () => {

    const pageData = {
        title:'Вертела',
        type: ['Вертела'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Мангалы и аксессуары', path: '/category/mangali/', active: false },
            { title: 'Аксессуары для мангалов', path: '/category/mangali/aksessuari/', active: false },
            { title: 'Вертела', path: '/category/mangali/aksessuari/vertela/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 1990 },
                max: { title: 'руб.', value: 2390 }
            },
        ],
        categorySideBarFilters: [
        ]

    }

    return (
        <div>
            <CategoryPageProducts pageData={pageData}/>
        </div>
    )
}
export default Vertela