import CategoryPageProducts from "../../components/categoryPageProducts"


const PechiDlyaSjiganiyaMusora = () => {

    const pageData = {
        title:'Печи для сжигания мусора',
        type: ['Печи для сжигания мусора'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Печи для сжигания мусора', path: '/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 18050 },
                max: { title: 'руб.', value: 21690 }
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
export default PechiDlyaSjiganiyaMusora