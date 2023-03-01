import Container from "../components/layouts/Container";
import Slider from "../components/Home/Slider";
import Layout from "../components/layouts/Layout";

const HomePage = () => {
    return (
        <Layout>
            <Slider />
            <Container>
                <div className="h-screen flex items-center justify-center gap-[6.25rem]">
                    <div className="bg-yellow-500 w-[314px] h-[328px]">
                    </div>
                    <div className="bg-yellow-500 w-[314px] h-[328px]">
                    </div>
                    <div className="bg-yellow-500 w-[314px] h-[328px]">
                    </div>
                </div>
                asd
            </Container>
        </Layout>
    )
}

export default HomePage