import Sidebar from '~/components/Layouts/components/Sidebar';
import Header from '~/components/Layouts/components/Header';
import Footer from '~/components/Layouts/DefaultLayout/Footer';

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
