import PageWrapper from "@/components/Layouts/PageWrapper";
import Layout from "@/components/Layouts/Layout";
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