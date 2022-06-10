import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <ul className={cx('navbar')}>
            <li className={cx('navbar-item')}>
                <Link className={cx('navbar-link')} to={config.routes.home}>
                    Trang chủ
                </Link>
            </li>
            <li className={cx('navbar-item')}>
                <Link className={cx('navbar-link')} to={config.routes.sneaker}>
                    Sneaker
                </Link>
            </li>
            <li className={cx('navbar-item')}>
                <Link className={cx('navbar-link')} to={config.routes.nike}>
                    Nike
                </Link>
            </li>
            <li className={cx('navbar-item')}>
                <Link className={cx('navbar-link')} to={config.routes.adidas}>
                    Adidas
                </Link>
            </li>
            <li className={cx('navbar-item')}>
                <Link className={cx('navbar-link')} to={config.routes.mlb}>
                    MLB
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;
