import Sidebar from '~/layouts/components/Sidebar';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import classNames from 'classnames/bind';
import styles from './DefaultWithSidebar.module.scss';

const cx = classNames.bind(styles);

function DefaultWithSidebar({ children }) {
    return (
        <>
            <Header />
            <div className={cx('container', 'grid', 'wide')}>
                <Sidebar>{children}</Sidebar>
            </div>
            <Footer />
        </>
    );
}

export default DefaultWithSidebar;
