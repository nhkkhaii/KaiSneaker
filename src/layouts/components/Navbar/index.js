import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function Navbar() {
    const [navData, setNavData] = useState([]);

    useEffect(() => {
        axios.get('http://26.17.209.162/api/brand/get').then((res) => {
            setNavData(res.data);
        });
    }, []);

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
            {navData != 0 ? (
                navData.map((nav) => {
                    return (
                        <li className={cx('navbar-item')} key={nav.IDBRAND}>
                            <Link className={cx('navbar-link')} to={`/${nav.BRANDNAME.toLowerCase()}`}>
                                {nav.BRANDNAME}
                            </Link>
                        </li>
                    );
                })
            ) : (
                <></>
            )}
        </ul>
    );
}

export default Navbar;
