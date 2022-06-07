import classNames from 'classnames/bind';
import styles from './DefaultAdmin.module.scss';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '~/config';

import {
    faBars,
    faBoxOpen,
    faDashboard,
    faFileInvoice,
    faFileInvoiceDollar,
    faHome,
    faSearch,
    faSignOut,
    faSliders,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { faBarChart, faComment } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function SidebarAdmin({ children }) {
    const [statusMenu, setStatusMenu] = useState(false);
    const handleToggleMenu = () => {
        setStatusMenu(!statusMenu);
    };

    return (
        <>
            <div className={cx('navigation', 'col', 'l-3', statusMenu ? 'active' : '')}>
                <ul className={cx('nav-list')}>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.home} className={cx('nav-item-link')}>
                            <span className={cx('nav-icon')}>
                                <FontAwesomeIcon icon={faHome} />
                            </span>
                            <span className={cx('nav-title')}>MORRI</span>
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.admin} className={cx('nav-item-link')}>
                            <span className={cx('nav-icon')}>
                                <FontAwesomeIcon icon={faDashboard} />
                            </span>
                            <span className={cx('nav-title')}>Dashboard</span>
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.adminUsers} className={cx('nav-item-link')}>
                            <span className={cx('nav-icon')}>
                                <FontAwesomeIcon icon={faUsers} />
                            </span>
                            <span className={cx('nav-title')}>Tài khoản</span>
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.adminCategory} className={cx('nav-item-link')}>
                            <span className={cx('nav-icon')}>
                                <FontAwesomeIcon icon={faBarChart} />
                            </span>
                            <span className={cx('nav-title')}>Danh mục</span>
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.adminProduct} className={cx('nav-item-link')}>
                            <span className={cx('nav-icon')}>
                                <FontAwesomeIcon icon={faBoxOpen} />
                            </span>
                            <span className={cx('nav-title')}>Sản phẩm</span>
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.adminBill} className={cx('nav-item-link')}>
                            <span className={cx('nav-icon')}>
                                <FontAwesomeIcon icon={faFileInvoiceDollar} />
                            </span>
                            <span className={cx('nav-title')}>Hóa đơn</span>
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.adminSlider} className={cx('nav-item-link')}>
                            <span className={cx('nav-icon')}>
                                <FontAwesomeIcon icon={faSliders} />
                            </span>
                            <span className={cx('nav-title')}>Slider</span>
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to="#" className={cx('nav-item-link')}>
                            <span className={cx('nav-icon')}>
                                <FontAwesomeIcon icon={faFileInvoice} />
                            </span>
                            <span className={cx('nav-title')}>Thống kê</span>
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to="#" className={cx('nav-item-link')}>
                            <span className={cx('nav-icon')}>
                                <FontAwesomeIcon icon={faComment} />
                            </span>
                            <span className={cx('nav-title')}>Chat</span>
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to="#" className={cx('nav-item-link')}>
                            <span className={cx('nav-icon')}>
                                <FontAwesomeIcon icon={faSignOut} />
                            </span>
                            <span className={cx('nav-title')}>Đăng xuất</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={cx('content', 'col', 'l-9', statusMenu ? 'active' : '')}>
                {/* <!-- Begin product, search, userImg -->
                    <!-- icon product --> */}
                <div className={cx('topbar')}>
                    <div className={cx('toggle')} onClick={handleToggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    {/* <!-- search --> */}
                    <div className={cx('search')}>
                        <label htmlFor="" className={cx('search-label')}>
                            <input className={cx('search-input')} type="text" placeholder="Search..." />
                            <FontAwesomeIcon icon={faSearch} className={cx('search-icon')} />
                        </label>
                    </div>
                    {/* <!-- user --> */}
                    <div className={cx('user')}>
                        <Image className={cx('user-img')} src="" alt="" />
                    </div>
                </div>
                {/* <!-- End product, search, userImg --> */}
                {children}
            </div>
        </>
    );
}

export default SidebarAdmin;
