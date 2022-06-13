import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import NumberFormat from 'react-number-format';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faShare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { initStateShoppingCart, shoppingCartReducer } from '~/reducers/shoppingCartReducers';
import { setIDSize, setShoesID, setIDAccount } from '~/actions/shoppingCartActions';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Products({ featured, id, name, price, imgID, description, brand }) {
    const [imgProducts, setImgProducts] = useState([]);
    const [stateCart, dispatchCart] = useReducer(shoppingCartReducer, initStateShoppingCart);
    const [cookies, setCookies] = useCookies(['name']);
    let navigate = useNavigate();

    useEffect(() => {
        if (cookies.name) {
            dispatchCart(setIDAccount(cookies.name.ID));
        }
        dispatchCart(setShoesID(id));
        axios
            .post('http://26.17.209.162/api/stock/post', {
                type: 'getsize',
                data: { SHOESID: id },
            })
            .then((res) => dispatchCart(setIDSize(res.data[0].IDSIZE)));

        axios
            .post('http://26.17.209.162/api/image/post', {
                type: 'get',
                data: { IMAGEID: imgID },
            })
            .then(async (res) => setImgProducts(res.data[0]));
    }, []);

    return (
        <div className={cx('card', featured ? 'featured' : '')}>
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
                <p className={cx('price')}>
                    <span>Giá : </span>
                    <NumberFormat value={price} displayType={'text'} thousandSeparator={true} suffix={'đ'} />
                </p>
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
