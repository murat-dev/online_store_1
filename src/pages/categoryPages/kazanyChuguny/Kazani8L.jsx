import CategoryPageProducts from "../../../components/categoryPageProducts"


const Kazani8L = () => {

    const pageData = {
        title: 'Казаны 8 литров',
        type: ['Казаны чугунные 8 л'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Казаны чугунные', path: '/category/kazany-chugunnye/', active: false },
            { title: 'на 8 литров', path: '/', active: true },
        ],
        categorySideBarSliderFilters: [
            
        ],
        categorySideBarFilters: [
           
        ]

    }

    return (
        <div>
            <CategoryPageProducts pageData={pageData} />
        </div>
    )
}
export default Kazani8L