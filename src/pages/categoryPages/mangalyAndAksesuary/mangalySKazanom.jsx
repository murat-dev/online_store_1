import CategoryPageProducts from "../../../components/categoryPageProducts"


const MangalySKazanom = () => {

    const pageData = {
        title:'Мангалы с казаном',
        type: ['Мангалы с казаном'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Мангалы и аксессуары', path: '/category/mangali/', active: false },
            { title: 'Мангалы с казаном', path: '/category/mangali/s-kazanom/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 21600 },
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
export default MangalySKazanom