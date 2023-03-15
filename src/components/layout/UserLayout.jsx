import PageWrapper from "./PageWrapper"
import BackNav from "../common/BackNav"

const UserLayout = ({ children }) => {
    return (
        <PageWrapper>
            <BackNav />
            {children}
        </PageWrapper>
    )
}

export default UserLayout