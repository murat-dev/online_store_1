import CategoryPageProducts from "../../../components/categoryPageProducts"


const YzbegsckyKazany = () => {

    const pageData = {
        title: 'Узбекские чугунные казаны (г. Наманган)',
        type: [ 'Узбекские казаны'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Казаны чугунные', path: '/category/kazany-chugunnye/', active: false },
            { title: 'Узбекские (г. Наманган)', path: '/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 2190 },
                max: { title: 'руб.', value: 2990 }
            },
        ],
        categorySideBarFilters: [
            {
                title: "ОБЪЁМ КАЗАНА:",
                select: [
                    { title: '6 л', active: false },
                    { title: '8 л', active: false },
                    { title: '10 л', active: false },
                    { title: '12 л', active: false },
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
export default YzbegsckyKazany