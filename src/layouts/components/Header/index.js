import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import { faBagShopping, faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Search from '../Search';
import Image from '~/components/Image';

import Menu from '~/components/Popper/Menu';
import axios from 'axios';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faSignIn} />,
        title: 'Đăng nhập',
        to: '/login',
    },
];

function Header() {
    const [cookies, setCookie, removeCookie] = useCookies(['name']);
    const [countShopping, setCountShopping] = useState(0);
    let navigate = useNavigate();
    const removeCK = () => {
        removeCookie('name');
        window.location.reload();
    };

    useEffect(() => {
        if (cookies.name) {
            axios
                .post('http://26.17.209.162/api/shoppingcart/post', {
                    type: 'get',
                    data: { IDACCOUNT: cookies.name.ID },
                })
                .then((res) => {
                    console.log(res.data);
                    setCountShopping(res.data.length);
                });
        }
    }, []);

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Thông tin tài khoản',
            to: cookies.name ? `/@${cookies.name.ID}` : '',
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            separate: true,
            to: '/',
            onClick: removeCK,
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
                {cookies.name ? (
                    <>
                        <Tippy delay={[0, 50]} content="Giỏ hàng" placement="bottom">
                            <Link
                                to={cookies.name ? `/@${cookies.name.ID}/shopping-cart` : ''}
                                className={cx('action-btn')}
                            >
                                <FontAwesomeIcon icon={faBagShopping} />
                                <span className={cx('badge')}>{countShopping}</span>
                            </Link>
                        </Tippy>
                    </>
                ) : (
                    <></>
                )}
                <Menu items={cookies.name ? userMenu : MENU_ITEMS}>
                    {cookies.name ? (
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
