import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Navbar() {
    return (
        <ul className={cx('navbar')}>
            <li className={cx('navbar-item')}>
                <Link className={cx('navbar-link')} to="/">
                    Trang chủ
                </Link>
            </li>
            <li className={cx('navbar-item')}>
                <Link className={cx('navbar-link')} to="/sneaker">
                    Sneaker
                </Link>
            </li>
            <li className={cx('navbar-item')}>
                <Link className={cx('navbar-link')} to="/nike">
                    Nike
                </Link>
                <ul className={cx('subnav')}>
                    <li className={cx('subnav-item')}>
                        <Link className={cx('subnav-link')} to="/jordans">
                            Jordan
                        </Link>
                    </li>
                    <li className={cx('subnav-item')}>
                        <Link className={cx('subnav-link')} to="/air-force-1">
                            Air Force
                        </Link>
                    </li>
                    <li className={cx('subnav-item')}>
                        <Link className={cx('subnav-link')} to="/blazer">
                            Blazer
                        </Link>
                    </li>
                    <li className={cx('subnav-item')}>
                        <Link className={cx('subnav-link')} to="/dunk">
                            Dunk
                        </Link>
                    </li>
                </ul>
            </li>
            <li className={cx('navbar-item')}>
                <Link className={cx('navbar-link')} to="/adidas">
                    Adidas
                </Link>
            </li>
            <li className={cx('navbar-item')}>
                <Link className={cx('navbar-link')} to="/mlb">
                    MLB
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;
