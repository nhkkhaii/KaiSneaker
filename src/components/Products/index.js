import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faShare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function Products({ featured, id, name, price, imgID, description, brand }) {
    const [imgProducts, setImgProducts] = useState([]);
    useEffect(() => {
        axios
            .post('http://26.17.209.162/api/image/post', {
                type: 'get',
                data: { IMAGEID: imgID },
            })
            .then(async (res) => setImgProducts(res.data[0]));
    }, []);
    return (
        <div className={cx('card', featured ? 'featured' : '')}>
            <div className={cx('icon')}>
                <FontAwesomeIcon icon={faCartShopping} className={cx('icon-bag')} />
                <FontAwesomeIcon icon={faShare} className={cx('icon-share')} />
            </div>
            <Link
                to={`/sneaker/${id}`}
                state={{
                    data: {
                        SHOESID: id,
                        SHOESNAME: name,
                        SHOESDESCRIPTION: description,
                        BRANDNAME: brand,
                        SHOESPRICE: price,
                        IMAGE: imgProducts,
                    },
                }}
            >
                <div className={cx('product')}>
                    <Image src={imgProducts.IMAGESHOES1} alt={name} className={cx('product-img')} />
                </div>
            </Link>
            <div className={cx('content')}>
                <h3 className={cx('name')}>{name}</h3>
                <p className={cx('price')}>{price}đ</p>
                <Link
                    to={`/sneaker/${id}`}
                    state={{
                        data: {
                            SHOESID: id,
                            SHOESNAME: name,
                            SHOESDESCRIPTION: description,
                            BRANDNAME: brand,
                            SHOESPRICE: price,
                            IMAGE: imgProducts,
                        },
                    }}
                    className={cx('buy')}
                >
                    Mua Ngay
                </Link>
            </div>
        </div>
    );
}

export default Products;
