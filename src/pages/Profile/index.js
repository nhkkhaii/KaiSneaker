import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <>
            <h2 className={cx('title')}>Thông tin tài khoản</h2>
            <form className={cx('profile')}>
                <div className={cx('info')}>
                    <input type="text" className={cx('info_txt')} id="full-name" required />
                    <label htmlFor="full-name" className={cx('info_label')}>
                        Họ và Tên
                    </label>
                </div>
                <div className={cx('info')}>
                    <input type="email" className={cx('info_txt')} id="user_email" required />
                    <label htmlFor="user_email" className={cx('info_label')}>
                        Email
                    </label>
                </div>
                <div className={cx('info')}>
                    <input type="password" className={cx('info_txt')} id="user_password" required autoComplete="off" />
                    <label htmlFor="user_password" className={cx('info_label')}>
                        Mật khẩu
                    </label>
                </div>
                <div className={cx('gender')}>
                    <h2 className={cx('gender_heading')}>Giới tính</h2>
                    <input id="switch" type="checkbox" hidden className={cx('gender_check')} />
                    <label htmlFor="switch" className={cx('switch')}>
                        <h1 className={cx('female')}>✝</h1>
                        <h1 className={cx('male')}>➜</h1>
                    </label>
                </div>
                <div className={cx('info')}>
                    <input type="text" className={cx('info_txt')} id="phone-number" required />
                    <label htmlFor="phone-number" className={cx('info_label')}>
                        Số điện thoại
                    </label>
                </div>
                <div className={cx('info')}>
                    {/* cmt = chứng minh thư */}
                    <input type="text" className={cx('info_txt')} id="user_cmt" required />
                    <label htmlFor="user_cmt" className={cx('info_label')}>
                        CCCD/CMND
                    </label>
                </div>
                <div className={cx('info')}>
                    <input type="date" className={cx('info_txt')} id="user_date" value="2018-07-22" required />
                    <label htmlFor="user_date" className={cx('info_label')}>
                        Ngày sinh
                    </label>
                </div>
                <button className={cx('update_btn')} type="update">
                    Cập nhật
                </button>
            </form>
        </>
    );
}

export default Profile;
