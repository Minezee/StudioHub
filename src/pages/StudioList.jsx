import Container from "@/components/layouts/Container"
import Layout from "@/components/layouts/Layout";
import { ResultHeader, Filter, CardList } from "../components/studiolist";

const StudioList = () => {

  return (
    <Layout>
      <Container>
        <ResultHeader />
        <div className="flex">
          <Filter />
          <CardList />
        </div>
      </Container>
    </Layout>
  )
}

export default StudioList