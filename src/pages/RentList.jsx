import PageWrapper from "@/components/layout/PageWrapper";
import Layout from "@/components/layout/Layout";
import SearchResult from "@/containers/ResultList/SearchResult";

const RentList = () => {
    return (
        <Layout>
            <PageWrapper>
                <SearchResult result="rent"/>
            </PageWrapper>
        </Layout>
    )
}

export default RentList