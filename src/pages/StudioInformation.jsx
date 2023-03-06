import { ResultHeader } from "@/components/global"
import PageWrapper from "@/components/layout/PageWrapper"
import Layout from "@/components/layout/Layout"
import Detail from "@/containers/StudioInformation/Detail"
import Facility from "@/containers/StudioInformation/Facility"

const StudioInformation = () => {
    return (
        <Layout>
        <PageWrapper>
            <ResultHeader />
            <Detail />
            <Facility />
        </PageWrapper>
    </Layout>
    )
}

export default StudioInformation