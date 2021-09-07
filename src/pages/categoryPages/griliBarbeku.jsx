import CategoryPageProducts from "../../components/categoryPageProducts"


const GriliBarbeku = () => {

    const pageData = {
        title:'Грили и Барбекю',
        type: ['Грили барбекю'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Грили барбекю', path: '/category/grili/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 11990 },
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
export default GriliBarbeku