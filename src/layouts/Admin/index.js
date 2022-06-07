import SidebarAdmin from '~/layouts/components/DefaultAdmin';
import classNames from 'classnames/bind';
import styles from './Admin.module.scss';

const cx = classNames.bind(styles);

function Admin({ children }) {
    return (
        <div className={cx('container')}>
            <div className={cx('grid')}>
                <div className={cx('row')}>
                    <SidebarAdmin>{children}</SidebarAdmin>
                </div>
            </div>
        </div>
    );
}

export default Admin;
