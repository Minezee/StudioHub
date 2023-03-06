import PageWrapper from "@/components/layout/PageWrapper";
import Layout from "@/components/layout/Layout";
import SearchResult from "@/containers/ResultList/SearchResult";

const EventList = () => {
    return (
        <Layout>
            <PageWrapper>
                <SearchResult result="event"/>
            </PageWrapper>
        </Layout>
    )
}

export default EventList