import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import SidebarProfile from '~/layouts/components/SidebarProfile';
import styles from './ProfileAccount.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ProfileAccount({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <h2 className={cx('title', 'col', 'l-12')}>Thông tin cá nhân</h2>
                        <SidebarProfile />
                        <div className="col l-8">{children}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProfileAccount;
