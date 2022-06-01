import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar';
import { faBagShopping, faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Search from '../Search';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faSignIn} />,
        title: 'Đăng nhập',
        to: '/login',
    },
];

function Header() {
    const currentUser = true;
    const id = 'nhkkhaii';
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Thông tin tài khoản',
            to: '/@nhkkhaii',
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <Link to="/">
                <Image src={images.logo} className={cx('logo')} />
            </Link>
            <Navbar />
            <div className={cx('actions')}>
                <Search />
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 50]} content="Giỏ hàng" placement="bottom">
                            <Link to={`/${id}/shopping`} className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faBagShopping} />
                                <span className={cx('badge')}>12</span>
                            </Link>
                        </Tippy>
                    </>
                ) : (
                    <></>
                )}
                <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                    {currentUser ? (
                        <Image
                            className={cx('user-avatar')}
                            src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                            alt="Nguyen Van A"
                        />
                    ) : (
                        <button className={cx('account-btn')}>
                            <FontAwesomeIcon icon={faUser} />
                        </button>
                    )}
                </Menu>
            </div>
        </header>
    );
}

export default Header;
