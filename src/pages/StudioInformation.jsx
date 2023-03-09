import { ResultHeader, CommentSection, Ratings } from "@/components/global"
import PageWrapper from "@/components/layout/PageWrapper"
import Layout from "@/components/layout/Layout"
import DetailStudio from "@/containers/StudioInformation/DetailStudio"
import Facility from "@/containers/StudioInformation/Facility"
import OrderContainer from "@/containers/StudioInformation/OrderContainer"
import { useRef } from "react"

const StudioInformation = () => {
    const orderSection = useRef(null);

    return (
        <Layout>
            <PageWrapper>
                <ResultHeader />
                <DetailStudio orderSection={orderSection}/>
                <Facility />
                <OrderContainer orderSection={orderSection}/>
                <Ratings />
                <CommentSection />
            </PageWrapper>
        </Layout>
    )
}

export default StudioInformation