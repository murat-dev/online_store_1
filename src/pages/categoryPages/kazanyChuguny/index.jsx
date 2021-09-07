import CategoryPageProducts from "../../../components/categoryPageProducts"


const KazanyChuguny = () => {

    const pageData = {
        title: 'Чугунные казаны',
        type: ['Казаны чугунные'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Казаны чугунные', path: '/category/kazany-chugunnye/?', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 2990 },
                max: { title: 'руб.', value: 9990 }
            },
        ],
        categorySideBarFilters: [
            {
                title: "ОБЪЁМ КАЗАНА:",
                select: [
                    { title: '5 л', active: false },
                    { title: '6 л', active: false },
                    { title: '8 л', active: false },
                    { title: '10 л', active: false },
                    { title: '12 л', active: false },
                    { title: '15 л', active: false },
                    { title: '16 л', active: false },
                    { title: '22 л', active: false },
                ]
            },
            {
                title: "ПРОИЗВОДИТЕЛЬ КАЗАНА:",
                select: [
                    { title: 'Узбекистан', active: false },
                    { title: 'Ситон', active: false },
                    { title: 'Балезино', active: false },
                ]
            },
            {
                title: "КРЫШКА КАЗАНА:",
                select: [
                    { title: 'алюминиевая', active: false },
                    { title: 'чугунная', active: false },
                    { title: 'без крышки', active: false },
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
export default KazanyChuguny