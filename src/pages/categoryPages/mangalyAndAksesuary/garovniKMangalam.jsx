import CategoryPageProducts from "../../../components/categoryPageProducts"


const GarovniKMangalam = () => {

    const pageData = {
        title:'Жаровни к мангалам',
        type: ['Жаровни к мангалам'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Мангалы и аксессуары', path: '/category/mangali/', active: false },
            { title: 'Жаровни к мангалам', path: '/category/mangali/zharovni-k-mangalu/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 9334 },
                max: { title: 'руб.', value: 16945 }
            },
        ],
        categorySideBarFilters: [
            {
                title: "ВЫБЕРИТЕ ТОЛЩИНУ МЕТАЛЛА ЖАРОВНИ:",
                select: [
                    { title: '3 мм', active: false },
                    { title: '5 мм', active: false },
                ]
            },
        ]

    }

    return (
        <div>
            <CategoryPageProducts pageData={pageData}/>
        </div>
    )
}
export default GarovniKMangalam