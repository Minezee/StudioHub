import Layout from "@/components/layout/Layout"
import PageWrapper from "@/components/layout/PageWrapper"
import { ResultHeader, CommentSection, Ratings } from "@/components/global"
import DetailRent from "@/containers/RentInformation/DetailRent"

const RentInformation = () => {
    return (
        <Layout>
            <PageWrapper>
                <ResultHeader />
                <DetailRent />
                <Ratings />
                <CommentSection />
            </PageWrapper>
        </Layout>
    )
}

export default RentInformation