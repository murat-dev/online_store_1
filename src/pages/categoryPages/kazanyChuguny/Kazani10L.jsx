import CategoryPageProducts from "../../../components/categoryPageProducts"


const Kazani10L = () => {

    const pageData = {
        title: 'Казаны 10 литров',
        type: [ 'Казаны чугунные 10 л'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Казаны чугунные', path: '/category/kazany-chugunnye/', active: false },
            { title: 'на 10 литров', path: '/', active: true },
        ],
        categorySideBarSliderFilters: [
            // {
            //     title: 'ЦЕНА:',
            //     min: { title: 'руб.', value: 2590 },
            //     max: { title: 'руб.', value: 5800 }
            // },
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
export default Kazani10L