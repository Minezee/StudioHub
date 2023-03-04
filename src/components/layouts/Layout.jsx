import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";

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