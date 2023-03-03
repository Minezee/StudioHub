import Container from "@/components/layouts/Container";
import { Search, MainFeature, Slider, Trending, BigDeals, Information } from "../components/home";
import Layout from "@/components/layouts/Layout";
import { GiGuitarBassHead } from "react-icons/gi"
import { MdEventNote } from "react-icons/md"
import { HiHome } from "react-icons/hi"

const feature = [
    {
        name: "Studio", 
        icon: HiHome,
    },
    {
        name: "Rent", 
        icon: GiGuitarBassHead,
    },
    {
        name: "Event", 
        icon: MdEventNote,
    },
]

const HomePage = () => {
    return (
        <Layout>
            <Slider />
            <Container>
                <MainFeature feature={feature}/>
                <Search feature={feature}/>
                <Trending />
                <Information />
                <BigDeals />
            </Container>
        </Layout>
    )
}

export default HomePage