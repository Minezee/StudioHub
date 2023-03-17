import PageWrapper from "@/components/layout/PageWrapper";
import Layout from "@/components/layout/Layout";
import SearchResult from "@/containers/ResultList/SearchResult";
import { useQuery } from "react-query";
import axiosInstance from "@/helpers/api";

const StudioList = () => {

  return (
    <Layout>
      <PageWrapper>
        <SearchResult result="studio" />
      </PageWrapper>
    </Layout>
  )
}

export default StudioList