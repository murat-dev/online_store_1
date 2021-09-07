const pechiDlyaKazanov = [
    // 10485
    {
        code: 10485,
        title: `Печь "КУЛИНАР-470" для казанов 22 литра`,
        characteristics: [
            { title: 'Габаритные размеры (Д х Ш х В)', info: '200 × 110 × 235 см' },
            { title: 'Размер жаровни Д х Ш', info: '100 × 35 см ' },
            { title: 'Глубина жаровни', info: '17 см ' },
            { title: 'Кол-во прорезей для шампуров', info: '13 ' },
            { title: 'Печь для казана', info: 'есть' },
            { title: 'Место для дров', info: 'есть' },
            { title: 'Столик', info: 'есть' },
        ],
        recomendedProductCode: [11235, 13265, 10000, 66680],
        accessoriesProductCode: [11235, 10000],
        type: [ 'Печи для казанов'],
        url: "/13/",
        price: {
            oldPrice: null,
            newPrice: 20300
        },
        count: 1,
        image: [
            "https://mangalik.ru/wa-data/public/shop/products/17/12/1217/images/4214/4214.400.jpg",
        ],
        info: {
            status: true,
            bestDeals: false,
            bestSellers: false,
            plusPresent: false
        },
        categoryFilters: [
            { title: 'ПОДХОДИТ ДЛЯ КАЗАНОВ:', select: ['22 л'] },
            { title: 'ДИАМЕТР ПЕЧИ:', select: ['47 см'] },
            { title: 'ПЕЧЬ С ТРУБОЙ:', select: ['да'] },
            { title: 'ЗОЛЬНИК:', select: ['есть'] },
            { title: 'ЗАСЛОНКА:', select: ['есть'] }
        ],
        categorySliderFilter: [
            { title: 'ЦЕНА:', select: 20300 },
        ],
        notAvailable: [
        ],
        select: [

            {
                type: "long",
                title: "",
                titleChoiceActive: "",
                choice: [
                    {
                        title: "жаровня 3 мм",
                        articul: "10670",
                        price: {
                            title: "47 160",
                            newPrice: 0,
                            oldPrice: 0
                        },
                        active: true
                    },
                    {
                        title: "жаровня 5 мм",
                        articul: "66673",
                        price: {
                            title: "51 160 ",
                            newPrice: 4000,
                            oldPrice: 5000
                        },
                        active: false
                    },
                    {
                        title: "жаровня 5 мм с зольниками",
                        articul: "66674",
                        price: {
                            title: "55 260",
                            newPrice: 8100,
                            oldPrice: 9000
                        },
                        active: false
                    }
                ]
            }
        ],
        add: [
            {
                title: "Решетки гриль из нержавейки (+3 500 руб.)",
                price: 3500,
                active: false
            },
            {
                title: "Разгрузка и установка на участке (+2 000 руб.)",
                price: 2500,
                active: false
            },
            {
                title: "Разгрузка и установка на участке (+2 000 руб.)",
                price: 2500,
                active: false
            },
            {
                title: "Разгрузка и установка на участке (+2 000 руб.)",
                price: 2500,
                active: false
            }
        ]
    },

]

export default pechiDlyaKazanov