import PageWrapper from "@/components/Layouts/PageWrapper";
import { Search, MainFeature, Slider, Trending, BigDeals, Information } from "@/containers/Home";
import Layout from "@/components/Layouts/Layout";
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
            <PageWrapper>
                <MainFeature feature={feature}/>
                <Search feature={feature}/>
                <Trending />
                <Information />
                <BigDeals />
            </PageWrapper>
        </Layout>
    )
}

export default HomePage