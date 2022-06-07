import classNames from 'classnames/bind';
import styles from './AdminUsers.module.scss';

const cx = classNames.bind(styles);

function AdminUsers() {
    return (
        <>
            {/* // <!--Begin details account input--> */}
            <div className={cx('details__account')}>
                <form className={cx('input-list')}>
                    <label htmlFor="" className={cx('input-label')}>
                        Tên nhân viên
                    </label>
                    <input className={cx('input-item')} type="text" placeholder="Tên nhân viên" />
                    <label htmlFor="" className={cx('input-label')}>
                        Giới tính
                    </label>
                    <input className={cx('input-item')} type="text" placeholder="Giới tính" />
                    <label htmlFor="" className={cx('input-label')}>
                        CMND/CCCD
                    </label>
                    <input className={cx('input-item')} type="number" placeholder="CCCD" />
                    <label htmlFor="" className={cx('input-label')}>
                        Email
                    </label>
                    <input className={cx('input-item')} type="email" placeholder="Email" />
                    <label htmlFor="" className={cx('input-label')}>
                        Số điện thoại
                    </label>
                    <input className={cx('input-item')} type="tel" placeholder="Số điện thoại" />
                    <label htmlFor="" className={cx('input-label')}>
                        Ngày sinh
                    </label>
                    <input className={cx('input-item')} type="date" placeholder="Ngày sinh" />
                </form>
                <div className={cx('input-user-create')}>
                    <label htmlFor="" className={cx('input-label')}>
                        Tên tài khoản
                    </label>
                    <input className={cx('input-item', 'user-input')} type="text" placeholder="Tên tài khoản" />
                    <label htmlFor="" className={cx('input-label')}>
                        Mật khẩu
                    </label>
                    <input className={cx('input-item', 'user-input')} type="password" placeholder="Mật khẩu" />
                </div>
            </div>
            <button className={cx('save-btn')}>Save</button>
            {/* <!--End details account input-->} */}
        </>
    );
}

export default AdminUsers;
