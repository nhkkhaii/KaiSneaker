import Breadcrumbs from '~/components/Breadcrumbs';
import { useLocation } from 'react-router-dom';
import React from 'react';
import { useState, useRef, useEffect, useReducer } from 'react';
import { useCookies } from 'react-cookie';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './DetailProduct.module.scss';
import axios from 'axios';

import { initStateShoppingCart, shoppingCartReducer } from '~/reducers/shoppingCartReducers';
import { setIDAccount, setShoesID, setIDSize, setQuantityUP, setQuantityDown } from '~/actions/shoppingCartActions';

const cx = classNames.bind(styles);

function DetailProduct() {
    const [cookies, setCookie] = useCookies(['name']);
    const [stateShopping, dispatchShopping] = useReducer(shoppingCartReducer, initStateShoppingCart);
    let location = useLocation();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (cookies.name) {
            dispatchShopping(setIDAccount(cookies.name.ID));
        }
        dispatchShopping(setShoesID(location.state.data.SHOESID));
    }, []);

    const quantityUp = () => {
        dispatchShopping(setQuantityUP());
        setQuantity(quantity + 1);
    };

    const quantityDown = () => {
        if (quantity > 1) {
            dispatchShopping(setQuantityDown());
            setQuantity(quantity - 1);
        }
    };
    function createMarkup() {
        return { __html: location.state.data.SHOESDESCRIPTION };
    }

    const handleShoppingCart = () => {};

    return (
        <div className="grid wide">
            <div className="row">
                <Breadcrumbs />
                <div className={cx('slide-container', 'col', 'l-5')}>
                    <Fade>
                        {Object.keys(location.state.data.IMAGE)
                            .filter((key) => key !== 'IMAGEID')
                            .map((key, index) => {
                                return (
                                    location.state.data.IMAGE[key] !== '' && (
                                        <div className="each-fade" key={index}>
                                            <div className={cx('image-container')}>
                                                <Image
                                                    className={cx('fill')}
                                                    src={location.state.data.IMAGE[key]}
                                                    alt={location.state.data.SHOESNAME}
                                                />
                                            </div>
                                        </div>
                                    )
                                );
                            })}
                    </Fade>
                </div>
                <div className={cx('col', 'l-7', 'info')}>
                    <h2 className={cx('info-heading')}>{location.state.data.SHOESNAME}</h2>
                    <p className={cx('brand')}>{location.state.data.BRANDNAME}</p>
                    <p className={cx('info-money')}>Giá : {location.state.data.SHOESPRICE}đ</p>

                    <div className={cx('options')}>
                        <div className={cx('size')}>
                            <label className={cx('size_heading')}>Size</label>
                            <select className={cx('size_option')}>
                                <option value="1">41</option>
                                <option value="2">42</option>
                                <option value="3">43</option>
                                <option value="4">44.5</option>
                            </select>
                        </div>
                        <div className={cx('info_quantity')}>
                            <span className={cx('minus')} onClick={quantityDown}>
                                -
                            </span>
                            <span className={cx('num')}>{quantity < 10 ? '0' + quantity : quantity}</span>
                            <span className={cx('plus')} onClick={quantityUp}>
                                +
                            </span>
                        </div>
                    </div>

                    <div className={cx('info-btn')}>
                        <button className={cx('info-btn-bag')} onClick={handleShoppingCart}>
                            Thêm vào giỏ hàng
                        </button>
                        <button className={cx('info-btn-buy')}>Mua ngay</button>
                    </div>
                </div>
            </div>
            <div className={cx('row', 'description')}>
                <div className={cx('col', 'l-8', 'describe')}>
                    <h2 className={cx('describe_heading')}>Mô tả sản phẩm</h2>
                    <div className={cx('describe_content')}>
                        <h3 className={cx('describe_content-name')}>{location.state.data.SHOESNAME}</h3>
                        <div className={cx('describe_content-summary')}>
                            <h3 className={cx('describe_content-summary-heading')}>Sơ lược sản phẩm</h3>
                            <p
                                className={cx('describe_content-summary-content')}
                                dangerouslySetInnerHTML={createMarkup()}
                            ></p>
                        </div>
                    </div>
                </div>
                <div className={cx('col', 'l-4', 'detailed_informations')}>
                    <h2 className={cx('detailed_informations-heading')}>Thông tin chi tiết</h2>
                    <div className={cx('row', 'details')}>
                        <div className={cx('col', 'l-4', 'details_name')}>
                            <p className={cx('details_name-product')}>Thương hiệu</p>
                            <p className={cx('details_name-product')}>Thương hiệu</p>
                            <p className={cx('details_name-product')}>Thương hiệu</p>
                        </div>
                        <div className={cx('col', 'l-8', 'details_info')}>
                            <p className={cx('details_info-product')}>Lenovo</p>
                            <p className={cx('details_info-product')}>Lenovo</p>
                            <p className={cx('details_info-product')}>Lenovo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailProduct;
