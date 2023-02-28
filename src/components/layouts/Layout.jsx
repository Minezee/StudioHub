import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;