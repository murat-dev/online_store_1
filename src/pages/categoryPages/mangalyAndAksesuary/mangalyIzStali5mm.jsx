import CategoryPageProducts from "../../../components/categoryPageProducts"


const mangalyIzStali5mm = () => {

    const pageData = {
        title:'Мангалы из стали 5 мм',
        type: ['Мангалы из стали 5 мм'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Мангалы и аксессуары', path: '/category/mangali/', active: false },
            { title: 'Мангалы из стали 5 мм', path: '/category/mangali/iz-stali-5-mm/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 37990 },
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
export default mangalyIzStali5mm