import dayjs from "dayjs"

const date = dayjs().format('DD-MM=YYYY');

export const navMenu = [
    {
        name: "Home",
        direct: "/",
    },
    {
        name: "Studio",
        direct: `/studio?&province=jawa%20timur&city=malang&date=${date}`,
    },
    {
        name: "Rent",
        direct: `/rent?&province=jawa%20timur&city=malang&date=${date}`
    },
    {
        name: "Event",
        direct: `/event?&province=jawa%20timur&city=malang&date=${date}`
    },
]