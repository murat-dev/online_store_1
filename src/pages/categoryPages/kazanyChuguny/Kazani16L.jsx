import CategoryPageProducts from "../../../components/categoryPageProducts"


const Kazani10L = () => {

    const pageData = {
        title: 'Казаны 16 литров',
        type: ['Казаны чугунные 16 л'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Казаны чугунные', path: '/category/kazany-chugunnye/', active: false },
            { title: 'на 16 литров', path: '/', active: true },
        ],
        categorySideBarSliderFilters: [
            
        ],
        categorySideBarFilters: [
            {
                title: "ПРОИЗВОДИТЕЛЬ КАЗАНА:",
                select: [
                    { title: 'Узбекистан', active: false },
                ]
            },
            {
                title: "КРЫШКА КАЗАНА:",
                select: [
                    { title: 'алюминиевая', active: false },
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