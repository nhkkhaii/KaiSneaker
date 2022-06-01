import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SignIn() {
    const [isContainerActive, setIsContainerActive] = useState(false);
    const signUpButton = () => {
        setIsContainerActive(true);
    };
    const signInButton = () => {
        setIsContainerActive(false);
    };

    return (
        <div className={cx('login')}>
            {/* <!-- Begin Trigger --> */}
            <Link to="/" className={cx('logo')} data-target="#login" data-toggle="modal">
                <img src={images.logo} alt="" className={cx('logo_img')} />
            </Link>
            <div className={cx('wrapper', `${isContainerActive ? 'right-panel-active' : ''}`)}>
                <div className={cx('inner', 'sign_up')}>
                    <form action="#" className={cx('morri-container')}>
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
                        <input type="text" placeholder="Name" className={cx('morri_input')} />
                        <input type="email" placeholder="Email" className={cx('morri_input')} />
                        <input type="password" placeholder="Password" className={cx('morri_input')} />
                        <button className={cx('btn')}>Đăng kí</button>
                    </form>
                </div>
                <div className={cx('inner', 'sign_in')}>
                    <form action="#" className={cx('morri-container')}>
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
                        <input type="email" placeholder="Email" className={cx('morri_input')} />
                        <input type="password" placeholder="Password" className={cx('morri_input')} />
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
