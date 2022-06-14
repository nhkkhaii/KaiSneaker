import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import images from '~/assets/images';
import { useState, useReducer } from 'react';

import axios from 'axios';
// Cookie
import { useCookies } from 'react-cookie';

// Login
import { initStateLogin, loginReducer } from '~/reducers/loginReducers';
import { setNameLogin, setPasswordLogin } from '~/actions/loginActions';

// Register
import { initStateRegister, registerReducer } from '~/reducers/registerReducers';
import { setNameRegister, setPasswordRegister, setRePasswordRegister } from '~/actions/registerActions';

const cx = classNames.bind(styles);

function SignIn() {
    const [isContainerActive, setIsContainerActive] = useState(false);
    // State Đăng nhập
    const [stateLogin, dispatchLogin] = useReducer(loginReducer, initStateLogin);
    // State Đăng ký
    const [stateRegister, dispatchRegister] = useReducer(registerReducer, initStateRegister);
    const [cookies, setCookie] = useCookies(['name']);
    let navigate = useNavigate();

    // console.log(cookies);
    const signUpButton = () => {
        setIsContainerActive(true);
    };
    const signInButton = () => {
        setIsContainerActive(false);
    };

    // Login
    const handleSubmitLG = async (e) => {
        e.preventDefault();

        await handleSubmitLogin({
            stateLogin,
        });
    };
    const handleSubmitLogin = (data) => {
        try {
            axios
                .post('http://26.17.209.162/api/account/signin', {
                    data: stateLogin,
                })
                .then((response) => {
                    alert('Đăng nhập thành công');
                    setCookie('name', { ID: response.data.id, STATUS: response.data.status }, { path: '/' });
                    navigate('/');
                });
        } catch (error) {
            console.log(error);
        }
    };

    // Đăng ký
    const handleSubmitRG = async (e) => {
        e.preventDefault();
        if (stateRegister.REPASSWORD === stateRegister.PASSWORD) {
            console.log(stateRegister);
            await handleSubmitRegister({
                stateRegister,
            });
        } else {
            alert('Nhập lại mật khẩu không trùng khớp');
        }
    };

    const handleSubmitRegister = (data) => {
        try {
            axios
                .post('http://26.17.209.162/api/account/signup', {
                    data: stateRegister,
                })
                .then((res) => {
                    if (res.data == 1) {
                        alert('Đăng ký thành công');
                    } else if (res.data == -1) {
                        alert('Tài khoản đã tồn tại');
                    } else {
                        alert('Đăng ký thất bại');
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={cx('login')}>
            {/* <!-- Begin Trigger --> */}
            <Link to="/" className={cx('logo')} data-target="#login" data-toggle="modal">
                <img src={images.logo} alt="" className={cx('logo_img')} />
            </Link>
            <div className={cx('wrapper', `${isContainerActive ? 'right-panel-active' : ''}`)}>
                <div className={cx('inner', 'sign_up')}>
                    <form action="#" className={cx('morri-container')} onSubmit={handleSubmitRG}>
                        <h1 className={cx('heading')}>Tạo tài khoản</h1>
                        <div className={cx('social')}>
                            <Link to="" className={cx('social_item')}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                            <Link to="" className={cx('social_item')}>
                                <FontAwesomeIcon icon={faGoogle} />
                            </Link>
                        </div>
                        <span className={cx('subcontent')}>hoặc sử dụng email của bạn để đăng ký</span>
                        <input
                            type="text"
                            placeholder="Tên tài khoản"
                            className={cx('morri_input')}
                            onChange={(e) => dispatchRegister(setNameRegister(e.target.value))}
                        />
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            className={cx('morri_input')}
                            onChange={(e) => dispatchRegister(setPasswordRegister(e.target.value))}
                        />
                        <input
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                            className={cx('morri_input')}
                            onChange={(e) => dispatchRegister(setRePasswordRegister(e.target.value))}
                        />
                        <button className={cx('btn')}>Đăng kí</button>
                    </form>
                </div>
                <div className={cx('inner', 'sign_in')}>
                    <form className={cx('morri-container')} onSubmit={handleSubmitLG}>
                        <h1 className={cx('heading')}>Đăng nhập</h1>
                        <div className={cx('social')}>
                            <Link to="" className={cx('social_item')}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                            <Link to="" className={cx('social_item')}>
                                <FontAwesomeIcon icon={faGoogle} />
                            </Link>
                        </div>
                        <span className={cx('subcontent')}>hoặc sử dụng tài khoản của bạn</span>
                        <input
                            type="text"
                            placeholder="Email"
                            className={cx('morri_input')}
                            onChange={(e) => dispatchLogin(setNameLogin(e.target.value))}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className={cx('morri_input')}
                            onChange={(e) => dispatchLogin(setPasswordLogin(e.target.value))}
                        />
                        <Link to="/langquen" className={cx('forgot')}>
                            Quên mật khẩu?
                        </Link>
                        <button className={cx('btn')}>Đăng nhập</button>
                    </form>
                </div>
                <div className={cx('overlay-container')}>
                    <div className={cx('overlay')}>
                        <div className={cx('overlay-panel', 'overlay-left')}>
                            <h1 className={cx('heading')}>Chào mừng trở lại!</h1>
                            <p className={cx('overlay-content')}>
                                Để giữ kết nối với chúng tôi, vui lòng đăng nhập bằng thông tin cá nhân của bạn
                            </p>
                            <button className={cx('btn', 'ghost')} onClick={signInButton} id="signIn">
                                Đăng nhập
                            </button>
                        </div>
                        <div className={cx('overlay-panel', 'overlay-right')}>
                            <h1 className={cx('heading')}>Chào bạn!</h1>
                            <p className={cx('overlay-content')}>
                                Nhập thông tin cá nhân của bạn và bắt đầu hành trình với chúng tôi
                            </p>
                            <button className={cx('btn', 'ghost')} onClick={signUpButton} id="signUp">
                                Đăng kí
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Trigger --> */}
        </div>
    );
}

export default SignIn;
