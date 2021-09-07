import CategoryPageProducts from "../../../components/categoryPageProducts"


const Shampuri = () => {

    const pageData = {
        title:'Шампуры',
        type: ['Шампуры'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Мангалы и аксессуары', path: '/category/mangali/', active: false },
            { title: 'Аксессуары для мангалов', path: '/category/mangali/aksessuari/', active: false },
            { title: 'Шампуры', path: '/category/mangali/aksessuari/shampury/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 250 },
                max: { title: 'руб.', value: 2470 }
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
export default Shampuri