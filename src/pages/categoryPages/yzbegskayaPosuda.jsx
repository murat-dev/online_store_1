import CategoryPageProducts from "../../components/categoryPageProducts"


const YzbegskayaPosuda = () => {

    const pageData = {
        title:'Узбекская посуда',
        type: ['Узбекская посуда'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Узбекская посуда', path: '/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 1000 },
                max: { title: 'руб.', value: 1400 }
            },
        ],
        categorySideBarFilters: [
        ]

    }

    return (
        <div>
            <CategoryPageProducts pageData={pageData}/>
        </div>
    )
}
export default YzbegskayaPosuda