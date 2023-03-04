import PageWrapper from "@/components/layout/PageWrapper";
import Layout from "@/components/layout/Layout";
import SearchResult from "@/containers/ResultList/SearchResult";

const StudioList = () => {

  return (
    <Layout>
      <PageWrapper>
        <SearchResult />
      </PageWrapper>
    </Layout>
  )
}

export default StudioList