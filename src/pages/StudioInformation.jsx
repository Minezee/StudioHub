import { ResultHeader } from "@/components/global"
import PageWrapper from "@/components/layout/PageWrapper"
import Layout from "@/components/layout/Layout"
import Detail from "@/containers/StudioInformation/Detail"
import Facility from "@/containers/StudioInformation/Facility"
import OrderContainer from "@/containers/StudioInformation/OrderContainer"
import Ratings from "@/components/global/Ratings"
import Comment from "@/containers/StudioInformation/Comment"

const StudioInformation = () => {
    return (
        <Layout>
        <PageWrapper>
            <ResultHeader />
            <Detail />
            <Facility />
            <OrderContainer />
            <Ratings />
            <Comment />
        </PageWrapper>
    </Layout>
    )
}

export default StudioInformation