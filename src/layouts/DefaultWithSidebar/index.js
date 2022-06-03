import Sidebar from '~/layouts/components/Sidebar';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

function DefaultWithSidebar({ children }) {
    return (
        <>
            <Header />
            <div className="container grid wide">
                <Sidebar>{children}</Sidebar>
            </div>
            <Footer />
        </>
    );
}

export default DefaultWithSidebar;
