import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapLocation, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('inner', 'row')}>
                    <div className={cx('brand', 'col', 'l-4')}>
                        <img src={images.logo} alt="Morri" className={cx('logo')} />
                        <p className={cx('slogan')}>Cùng nhau lưu giữ những khoảnh khắc</p>
                    </div>
                    <div className={cx('quicklinks', 'col', 'l-4')}>
                        <h2 className={cx('quicklinks-heading')}>Quick Links</h2>
                        <ul className={cx('quicklink')}>
                            <li className={cx('quicklink-item')}>
                                <Link to="/nike">Nike</Link>
                            </li>
                            <li className={cx('quicklink-item')}>
                                <Link to="/adidas">Adidas</Link>
                            </li>
                            <li className={cx('quicklink-item')}>
                                <Link to="/mlb">MLB</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('contacts', 'col', 'l-4')}>
                        <h2 className={cx('contacts-heading')}>Contact</h2>
                        <ul className={cx('contact')}>
                            <li className={cx('contact-item')}>
                                <FontAwesomeIcon icon={faMobile} className={cx('contact-logo')}></FontAwesomeIcon>
                                <p className={cx('contact-content')}>+84 945772109</p>
                            </li>
                            <li className={cx('contact-item')}>
                                <FontAwesomeIcon icon={faEnvelope} className={cx('contact-logo')}></FontAwesomeIcon>
                                <p className={cx('contact-content')}>nhkkhaii@gmail.com</p>
                            </li>
                            <li className={cx('contact-item')}>
                                <FontAwesomeIcon icon={faMapLocation} className={cx('contact-logo')}></FontAwesomeIcon>
                                <p className={cx('contact-content')}>Long Xuyên, An Giang</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('row', 'copyright')}>
                    <div className={cx('col', 'l-6', 'copyright-text')}>
                        Copyright <span>&copy;</span> by Morri. All right reserved
                    </div>
                    <div className={cx('col', 'l-6', 'copyright-link')}>
                        <div className={cx('copyright-contact')}>
                            <a href="https://www.instagram.com/_youngboik/">
                                <FontAwesomeIcon icon={faInstagram} className={cx('copyright-logo')}></FontAwesomeIcon>
                            </a>
                            <a href="https://www.facebook.com/nhk.khai/">
                                <FontAwesomeIcon icon={faFacebook} className={cx('copyright-logo')}></FontAwesomeIcon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
