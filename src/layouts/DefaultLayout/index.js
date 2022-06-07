import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import styles from './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={styles.container}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
