import Container from "../components/layouts/Container";
import Slider from "../components/Home/Slider";
import Layout from "../components/layouts/Layout";

import { GiGuitarBassHead } from "react-icons/gi"
import { MdEventNote, MdHomeFilled } from "react-icons/md"

const HomePage = () => {
    return (
        <Layout>
            <Slider />
            <Container>
                <div className="mt-[4.75rem] text-center">
                    <h2 className="text-orange-500 text-5xl font-black">MAIN FEATURE</h2>
                    <p className="text-2xl">Take advantage of our features to get information about the world of music</p>
                </div>
                <div className="mt-[3.25rem] flex items-center justify-center gap-[6.25rem] text-white text-5xl font-black">
                    <div className="bg-yellow-400 w-[19.5rem] h-[20.5rem] flex flex-col items-center justify-center rounded-2xl gap-9">
                        <MdHomeFilled className="h-[9.5rem] w-36"/>
                        Studio
                    </div>
                    <div className="bg-yellow-400 w-[19.5rem] h-[20.5rem] flex flex-col items-center justify-center rounded-2xl gap-9">
                        <GiGuitarBassHead className="h-[9.5rem] w-36"/>
                        Rent
                    </div>
                    <div className="bg-yellow-400 w-[19.5rem] h-[20.5rem] flex flex-col items-center justify-center rounded-2xl gap-9">
                        <MdEventNote className="h-[9.5rem] w-36"/>
                        Event
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default HomePage