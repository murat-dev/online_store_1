import CategoryPageProducts from "../../components/categoryPageProducts"


const Smokery = () => {

    const pageData = {
        title:'Смокеры',
        type: ['Смокеры'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Смокеры', path: '/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 27990 },
                max: { title: 'руб.', value: 63140 }
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
export default Smokery