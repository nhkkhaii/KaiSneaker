import Image from '~/components/Image';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Shopping.module.scss';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);
function Shipping() {
    const [cookies, setCookie] = useCookies(['name']);
    const [shoppingCart, setShoppingCart] = useState([]);
    let money = 0;
    const delivery = 30000;
    let navigate = useNavigate();
    useEffect(() => {
        if (cookies.name) {
            axios
                .post('http://26.17.209.162/api/shoppingcart/post', {
                    type: 'get',
                    data: { IDACCOUNT: cookies.name.ID },
                })
                .then((res) => {
                    setShoppingCart(res.data);
                });
        } else {
            navigate('/login');
        }
    }, []);

    const countMoney = (e) => {
        money += e;
    };

    return (
        <div className={cx('grid', 'wide')}>
            <div className={cx('row', 'bag')}>
                <div className={cx('col', 'l-8', 'detail')}>
                    <h2 className={cx('detail_heading')}>Giỏ hàng</h2>
                    {shoppingCart != 0 ? (
                        shoppingCart.map((product, index) => {
                            const count = product.SHOESPRICE * product.QUANTITY;
                            countMoney(count);
                            return (
                                <div className={cx('row', 'item')} key={index}>
                                    <div className={cx('col', 'l-3', 'item_box')}>
                                        <img
                                            className={cx('item_img')}
                                            src={product.IMAGESHOES1}
                                            alt={product.SHOESNAME}
                                        />
                                    </div>
                                    <div className={cx('col', 'l-9', 'info')}>
                                        <div className={cx('row')}>
                                            <div className={cx('col', 'l-8')}>
                                                <p className={cx('item_name')}>{product.SHOESNAME}</p>
                                                <div className={cx('brand')}>{product.BRANDNAME}</div>
                                                <div className={cx('options')}>
                                                    <div className={cx('size')}>
                                                        <label className={cx('size_heading')}>Size</label>
                                                        <p className={cx('size_option')}>{product.SIZEEUR}</p>
                                                    </div>
                                                    <div className={cx('info_quantity')}>
                                                        <span className={cx('minus')}>-</span>
                                                        <span className={cx('num')}>
                                                            {Number(product.QUANTITY) < 10
                                                                ? '0' + product.QUANTITY
                                                                : Number(product.QUANTITY)}
                                                        </span>
                                                        <span
                                                            className={cx('plus')}
                                                            onClick={(e) => {
                                                                product.QUANTITY = Number(product.QUANTITY) + 1;
                                                            }}
                                                        >
                                                            +
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('col', 'l-4')}>
                                                <p className={cx('item_money')}>
                                                    <span>Giá : </span>
                                                    <NumberFormat
                                                        value={product.SHOESPRICE * product.QUANTITY}
                                                        displayType={'text'}
                                                        thousandSeparator={true}
                                                        suffix={'đ'}
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                        <div className={cx('action')}>
                                            <FontAwesomeIcon icon={faTrashAlt} className={cx('remove')} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <h2>Không có sản phẩm</h2>
                    )}
                </div>
                <div className={cx('col', 'l-4', 'summary')}>
                    <h2 className={cx('summary-heading')}>Sơ lược</h2>
                    <div className={cx('subtotal', 'row')}>
                        <p className={cx('subtotal-title', 'col', 'l-8')}>Giá tiền</p>
                        <p className={cx('subtotal-money', 'col', 'l-4')}>
                            {' '}
                            <NumberFormat value={money} displayType={'text'} thousandSeparator={true} suffix={'đ'} />
                        </p>
                    </div>
                    <div className={cx('shipping', 'row')}>
                        <p className={cx('shipping-title', 'col', 'l-8')}>Vận chuyển</p>
                        <div className={cx('shipping-money', 'col', 'l-4')}>
                            <NumberFormat value={delivery} displayType={'text'} thousandSeparator={true} suffix={'đ'} />
                        </div>
                    </div>
                    <div className={cx('total', 'row')}>
                        <p className={cx('total-title', 'col', 'l-8')}>Tổng tiền</p>
                        <div className={cx('total-money', 'col', 'l-4')}>
                            <NumberFormat
                                value={delivery + money}
                                displayType={'text'}
                                thousandSeparator={true}
                                suffix={'đ'}
                            />
                        </div>
                    </div>

                    <Button
                        to={`/@${cookies.name.ID}/checkout`}
                        disabled={shoppingCart > 0 ? true : false}
                        state={{ data: { money: money, delivery: delivery } }}
                        className={cx('checkout')}
                    >
                        Thanh toán
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Shipping;
