import CategoryPageProducts from "../../components/categoryPageProducts"


const Koptilny = () => {

    const pageData = {
        title:'Коптильни',
        type: ['Коптильни'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Коптильни', path: '/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 8990 },
                max: { title: 'руб.', value: 11990 }
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
export default Koptilny