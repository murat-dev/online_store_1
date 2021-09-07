import CategoryPageProducts from "../../../components/categoryPageProducts"


const StacionarnyMangaly = () => {

    const pageData = {
        title:'Стационарные мангалы',
        type: ['Стационарные мангалы'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Мангалы и аксессуары', path: '/category/mangali/', active: false },
            { title: 'Стационарные мангалы', path: '/category/mangali/stacionarnye/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 14085 },
                max: { title: 'руб.', value: 63140 }
            },
        ],
        categorySideBarFilters: [
            {
                title: "ВЫБЕРИТЕ ТИП ЖАРОВНИ:",
                select: [
                    { title: 'обычная', active: false },
                    { title: 'с зольниками', active: false },
                ]
            },
            {
                title: "КРЫША-НАВЕС НАД МАНГАЛОМ:",
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
export default StacionarnyMangaly