import CategoryPageProducts from "../../../components/categoryPageProducts"


const PodstavkiDlyaKazana = () => {

    const pageData = {
        title:'Подставки для казана',
        type: ['Подставки для казана'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Мангалы и аксессуары', path: '/category/mangali/', active: false },
            { title: 'Аксессуары для мангалов', path: '/category/mangali/aksessuari/', active: false },
            { title: 'Подставки для казана', path: '/category/mangali/aksessuari/podstavka-kazana-na-mangal/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 690 },
                max: { title: 'руб.', value: 8950 }
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
export default PodstavkiDlyaKazana