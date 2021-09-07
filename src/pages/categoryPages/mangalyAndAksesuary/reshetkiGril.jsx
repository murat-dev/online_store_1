import CategoryPageProducts from "../../../components/categoryPageProducts"


const ReshetkiGril = () => {

    const pageData = {
        title:'Решетки гриль',
        type: ['Решетки гриль'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Мангалы и аксессуары', path: '/category/mangali/', active: false },
            { title: 'Аксессуары для мангалов', path: '/category/mangali/aksessuari/', active: false },
            { title: 'Решетки гриль', path: '/category/mangali/aksessuari/reshetki-gril/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 990 },
                max: { title: 'руб.', value: 7000 }
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
export default ReshetkiGril