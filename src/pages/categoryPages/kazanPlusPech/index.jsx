import CategoryPageProducts from "../../../components/categoryPageProducts"


const KazanPlusPech = () => {

    const pageData = {
        title: 'Казаны чугунные с печкой',
        type: ['Казан + печь (комплекты)'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Казан + печь (комплекты)', path: '/', active: true },
        ],
        categorySideBarSliderFilters: [
        ],
        categorySideBarFilters: [
            {
                title: "ОБЪЁМ КАЗАНА:",
                select: [
                    { title: '8 л', active: false },
                    { title: '10 л', active: false },
                    { title: '12 л', active: false },
                    { title: '16 л', active: false },
                    { title: '18 л', active: false },
                    { title: '22 л', active: false },
                ]
            },
            {
                title: "КРЫШКА КАЗАНА:",
                select: [
                    { title: 'алюминиевая', active: false },
                    { title: 'чугунная', active: false },
                ]
            },
            {
                title: "ТОЛЩИНА СТЕНОК КАЗАНА:",
                select: [
                    { title: '4 мм', active: false },
                    { title: '5 мм', active: false },
                    { title: '8 мм', active: false },
                ]
            },
            {
                title: "ПРОИЗВОДИТЕЛЬ КАЗАНА:",
                select: [
                    { title: ' Узбекистан', active: false },
                    { title: 'Ситон', active: false },
                    { title: ' Балезино', active: false },
                ]
            },
            {
                title: "ПЕЧЬ С ТРУБОЙ:",
                select: [
                    { title: 'да', active: false },
                    { title: 'нет', active: false },
                ]
            },
            {
                title: "ЗАСЛОНКА:",
                select: [
                    { title: 'есть', active: false },
                    { title: 'нет', active: false },
                ]
            },
            {
                title: "ЗОЛЬНИК:",
                select: [
                    { title: 'есть', active: false },
                    { title: 'нет', active: false },
                ]
            },
        ]

    }

    return (
        <div>
            <CategoryPageProducts pageData={pageData} />
        </div>
    )
}
export default KazanPlusPech