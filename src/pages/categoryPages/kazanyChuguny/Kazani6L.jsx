import CategoryPageProducts from "../../../components/categoryPageProducts"


const Kazani6L = () => {

    const pageData = {
        title: 'Казаны 6 литров',
        type: ['Казаны чугунные 6 л'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Казаны чугунные', path: '/category/kazany-chugunnye/', active: false },
            { title: 'на 6 литров', path: '/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 2190 },
                max: { title: 'руб.', value: 3490 }
            },
        ],
        categorySideBarFilters: [
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
export default Kazani6L