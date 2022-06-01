import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faShare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Products({ id, name, username, price, featured }) {
    return (
        <div className={cx('card', featured ? 'featured' : '')}>
            <div className={cx('icon')}>
                <FontAwesomeIcon icon={faCartShopping} className={cx('icon-bag')} />
                <FontAwesomeIcon icon={faShare} className={cx('icon-share')} />
            </div>
            <Link to={`/product/${username}`} state={{ data: username }}>
                <div className={cx('product')}>
                    <Image
                        src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png"
                        alt="mouse corsair"
                        className={cx('product-img')}
                    />
                </div>
            </Link>
            <div className={cx('content')}>
                <h3 className={cx('name')}>{name}</h3>
                <p className={cx('price')}>{price}đ</p>
                <Link to={`/product/${username}`} state={{ data: username }} className={cx('buy')}>
                    Mua Ngay
                </Link>
            </div>
        </div>
    );
}

export default Products;
