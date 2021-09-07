import CategoryPageProducts from "../../../components/categoryPageProducts"


const MangalyNaKolesah = () => {

    const pageData = {
        title:'Мангалы на колесах',
        type: ['Мангалы на колесах'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Мангалы и аксессуары', path: '/category/mangali/', active: false },
            { title: 'Мангалы на колесах', path: '/category/mangali/stacionarnye/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 8145 },
                max: { title: 'руб.', value: 44480 }
            },
            {
                title: 'КОЛ-ВО ПРОРЕЗЕЙ ДЛЯ ШАМПУРОВ:',
                min: { title: '', value: 8 },
                max: { title: '', value: 13 }
            },
        ],
    
        categorySideBarFilters: [
            {
                title: "ТИП:",
                select: [
                    { title: 'гриль 2 в 1', active: false },
                    { title: 'мангал', active: false },
                    { title: 'печь 2 в 1', active: false },
                    { title: 'гриль 3 в 1', active: false },
                ]
            },
            {
                title: "ВЫБЕРИТЕ ТОЛЩИНУ МЕТАЛЛА ЖАРОВНИ:",
                select: [
                    { title: '3 мм', active: false },
                    { title: '5 мм', active: false },
                ]
            },
            {
                title: "СТОЛИК",
                select: [
                    { title: 'есть', active: false },
                    { title: 'нет', active: false },
                ]
            },
            {
                title: "ПЕЧКА ДЛЯ КАЗАНА:",
                select: [
                    { title: 'есть', active: false },
                    { title: 'нет', active: false },
                ]
            },
            {
                title: "РЕШЁТКА ГРИЛЬ В КОМПЛЕКТЕ",
                select: [
                    { title: 'да', active: false },
                    { title: 'нет', active: false },
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
export default MangalyNaKolesah