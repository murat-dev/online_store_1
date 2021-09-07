import CategoryPageProducts from "../../../components/categoryPageProducts"


const MangalyBezrishi = () => {

    const pageData = {
        title:'Мангалы без крыши',
        type: ['Мангалы без крыши'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Мангалы и аксессуары', path: '/category/mangali/', active: false },
            { title: 'Мангалы без крыши', path: '/category/mangali/1/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 5890 },
                max: { title: 'руб.', value: 44990 }
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
export default MangalyBezrishi