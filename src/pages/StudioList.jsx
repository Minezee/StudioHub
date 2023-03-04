import Pagewrapper from "@/components/Layouts/PageWrapper"
import Layout from "@/components/Layouts/Layout";
import SearchResult from "@/containers/ResultList/SearchResult";

const StudioList = () => {

  return (
    <Layout>
      <Pagewrapper>
        <SearchResult />
      </Pagewrapper>
    </Layout>
  )
}

export default StudioList