import CategoryPageProducts from "../../components/categoryPageProducts"


const ChugunySkovorodki = () => {

    const pageData = {
        title:'Чугунные сковороды',
        type: ['Чугунные сковороды'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Чугунные сковороды', path: '/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 1190 },
                max: { title: 'руб.', value: 2590 }
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
export default ChugunySkovorodki