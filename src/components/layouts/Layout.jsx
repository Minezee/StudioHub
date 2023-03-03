import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="bg-background pb-20">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;