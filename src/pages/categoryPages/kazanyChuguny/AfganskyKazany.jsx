import CategoryPageProducts from "../../../components/categoryPageProducts"


const AfganskyKazany = () => {

    const pageData = {
        title: 'Афганские казаны',
        type: ['Афганские казаны'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Казаны чугунные', path: '/category/kazany-chugunnye/?', active: false },
            { title: 'Афганские казаны', path: '/', active: true },
        ],
        categorySideBarSliderFilters: [
            {
                title: 'ЦЕНА:',
                min: { title: 'руб.', value: 4200 },
                max: { title: 'руб.', value: 5500 }
            },
        ],
        categorySideBarFilters:[
                
        ]
    
    }

    return (
        <div>
            <CategoryPageProducts pageData={pageData} />
        </div>
    )
}
export default AfganskyKazany