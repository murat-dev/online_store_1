import CategoryPageProducts from "../../../components/categoryPageProducts"


const MangalySKrishey = () => {

    const pageData = {
        title:'Мангалы с крышей',
        type: ['Мангалы с крышей'],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Мангалы и аксессуары', path: '/category/mangali/', active: false },
            { title: 'Мангалы с крышей', path: '/category/mangali/s-krishey/', active: true },
        ],
        categorySideBarFilters: [
            {
                title: "ВЫБЕРИТЕ ТОЛЩИНУ МЕТАЛЛА ЖАРОВНИ:",
                select: [
                    { title: '3 мм', active: false },
                    { title: '4 мм', active: false },
                ]
            },
            {
                title: "ПЕЧКА ДЛЯ КАЗАНА:",
                select: [
                    { title: 'есть', active: false },
                    { title: 'нет', active: false },
                ]
            },
            {
                title: "РЕШЕТКА-ГРИЛЬ В КОМПЛЕКТЕ:",
                select: [
                    { title: 'есть', active: false },
                    { title: 'нет', active: false },
                ]
            },
        ]

    }

    return (
        <div>
            <CategoryPageProducts pageData={pageData}/>
        </div>
    )
}
export default MangalySKrishey