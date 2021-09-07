import CategoryPageProducts from "../../../components/categoryPageProducts"


const PechiDlyaKazanov = () => {

    const pageData = {
        title: 'Печи и очаги для казанов',
        type: ['Печи для казанов'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Печи для казанов', path: '/', active: true },
        ],
        categorySideBarSliderFilters: [
        ],
        categorySideBarFilters: [
            {
                title: "ПОДХОДИТ ДЛЯ КАЗАНОВ:",
                select: [
                    { title: '8 л', active: false },
                    { title: '10 л', active: false },
                    { title: '12 л', active: false },
                    { title: '16 л', active: false },
                    { title: '18 л', active: false },
                    { title: '22 л', active: false },
                ]
            },
            {
                title: "ДИАМЕТР ПЕЧИ:",
                select: [
                    { title: '28 см', active: false },
                    { title: '33 см', active: false },
                    { title: '36 см', active: false },
                    { title: '39 см', active: false },
                    { title: '40 см', active: false },
                    { title: '47 см', active: false },
                    { title: '48 см', active: false },
                    { title: '49 см', active: false },
                ]
            },
            {
                title: "ПЕЧЬ С ТРУБОЙ:",
                select: [
                    { title: 'да', active: false },
                    { title: 'нет', active: false },
                ]
            },
            {
                title: "ЗОЛЬНИК:",
                select: [
                    { title: 'есть', active: false },
                    { title: 'нет', active: false },
                ]
            },
            {
                title: "ЗАСЛОНКА:",
                select: [
                    { title: 'есть', active: false },
                    { title: 'нет', active: false },
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
export default PechiDlyaKazanov