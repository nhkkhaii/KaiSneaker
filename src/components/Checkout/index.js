import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';
import AddressItem from '~/components/AddressItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useReducer, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { initStateAddress, addressReducer } from '~/reducers/addressReducers';
import { setIDAccount, setInfoPhone, setInfoName, setAddress } from '~/actions/addressActions';
import { setIDUser, setSHOPPINGINFOID, setTotal } from '~/actions/orderActions';
import { initStateOrder, orderReducer } from '~/reducers/orderReducers';
import { useLocation } from 'react-router-dom';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

function Checkout() {
    const [statusModal, setStatusModal] = useState(false);
    const [stateAddress, dispatchAddress] = useReducer(addressReducer, initStateAddress);
    const [stateOrder, dispatchOrder] = useReducer(orderReducer, initStateOrder);
    const [addressData, setAddressData] = useState([]);
    const [shoppingCartData, setShoppingCartData] = useState([]);
    let location = useLocation();

    const [cookies, setCookie] = useCookies(['name']);
    let navigate = useNavigate();

    useEffect(() => {
        if (cookies.name) {
            dispatchAddress(setIDAccount(cookies.name.ID));
            dispatchOrder(setIDUser(cookies.name.ID));
            dispatchOrder(setTotal(location.state.data.delivery + location.state.data.money));

            axios
                .post('http://26.17.209.162/api/shoppingcart/post', {
                    type: 'get',
                    data: { IDACCOUNT: cookies.name.ID },
                })
                .then((res) => {
                    setShoppingCartData(res.data);
                });
            getCourses();
        } else {
            navigate('/login');
        }
    }, []);

    const handleChange = (event) => {
        alert(event.target);
    };

    const addOrder = async () => {
        await axios
            .post('http://26.17.209.162/api/bill/post', {
                type: 'create',
                data: stateOrder,
            })
            .then((res) => {
                console.log(res);
            });
    };

    const getCourses = async () => {
        await axios
            .post('http://26.17.209.162/api/shippinginfo/post', {
                type: 'get',
                data: { IDACCOUNT: cookies.name.ID },
            })
            .then((res) => {
                setAddressData(res.data);
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post('http://26.17.209.162/api/shippinginfo/post', {
                type: 'create',
                data: stateAddress,
            })
            .then((response) => {
                if (response.data == 1) {
                    setStatusModal(false);
                    getCourses();
                }
            });
    };
    console.log(stateOrder);

    const showBuyTickets = () => {
        setStatusModal(true);
    };
    const hideBuyTickets = () => {
        setStatusModal(false);
    };

    return (
        <>
            <div className={cx('grid wide')}>
                <div className={cx('wrapper', 'row')}>
                    <div className={cx('wrap', 'col', 'l-7')}>
                        <div className={cx('inner')}>
                            <h2 className={cx('heading')}>Địa chỉ giao hàng</h2>
                            <div className={cx('address')}>
                                {addressData != 0 ? (
                                    addressData.map((address) => {
                                        return (
                                            <div className={cx('item')} key={address.SHOPPINGINFOID}>
                                                <input
                                                    type="radio"
                                                    name="address"
                                                    className={cx('rdo-address')}
                                                    value={address.SHOPPINGINFOID ? address.SHOPPINGINFOID : null}
                                                    id={address.SHOPPINGINFOID}
                                                    checked={stateOrder.SHOPPINGINFOID === address.SHOPPINGINFOID}
                                                    onChange={(e) => dispatchOrder(setSHOPPINGINFOID(e.target.value))}
                                                ></input>
                                                <label htmlFor={address.SHOPPINGINFOID} className={cx('address_item')}>
                                                    <AddressItem
                                                        SHOPPINGINFOID={address.SHOPPINGINFOID}
                                                        SHOPPINGINFONAME={address.SHOPPINGINFONAME}
                                                        IDACCOUNT={address.IDACCOUNT}
                                                        SHOPPINGINFOPHONE={address.SHOPPINGINFOPHONE}
                                                        ADDRESS={address.ADDRESS}
                                                    />
                                                </label>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <></>
                                )}
                                <div className={cx('actions')}>
                                    <button
                                        className={cx('btn_ctn')}
                                        disabled={stateOrder.SHOPPINGINFOID == '' ? true : false}
                                        onClick={addOrder}
                                    >
                                        Tiếp tục
                                    </button>
                                    <button className={cx('btn_add')} onClick={showBuyTickets}>
                                        Thêm địa chỉ
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('payment')}>
                            <h2 className={cx('payment_title')}>Phương thức thanh toán</h2>
                            <div className={cx('payment_container')}>
                                <div className={cx('payment-item')}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="Tiền mặt"
                                        className={cx('payment_input')}
                                        id="acc1"
                                    />
                                    <label for="acc1" className={cx('payment-item_title')}>
                                        <i className={cx('fa fa-map-marker')}></i> My name?
                                    </label>
                                    <div className={cx('payment_content')}>Hi, You can call me Dandi.</div>
                                </div>
                                <div className={cx('payment-item')}>
                                    <input type="radio" name="payment" value="PayPal" id="acc2" />
                                    <label for="acc2">
                                        <i className={cx('fa fa-heart')}></i> What am I interesting for?
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'l-4', 'order')}>
                        <h2 className={cx('order_title')}>Sơ lược hóa đơn</h2>
                        <div className={cx('order_info')}>
                            <div className={cx('order_info-item')}>
                                <p className={cx('order_content')}>Thành tiền</p>
                                <p className={cx('order_content')}>
                                    <NumberFormat
                                        value={location.state.data.money}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        suffix={'đ'}
                                    />
                                </p>
                            </div>
                            <div className={cx('order_info-item')}>
                                <p className={cx('order_content')}>Vận chuyển</p>
                                <p className={cx('order_content')}>
                                    <NumberFormat
                                        value={location.state.data.delivery}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        suffix={'đ'}
                                    />
                                </p>
                            </div>
                        </div>
                        <div className={cx('order_total')}>
                            <div className={cx('order_info-item')}>
                                <p className={cx('order_content')}>Tổng tiền</p>
                                <p className={cx('order_content')}>
                                    <NumberFormat
                                        value={location.state.data.delivery + location.state.data.money}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        suffix={'đ'}
                                    />
                                </p>
                            </div>
                        </div>
                        <div className={cx('product_checkout')}>
                            {shoppingCartData != 0 ? (
                                shoppingCartData.map((product, index) => {
                                    return (
                                        <div className={cx('product_item')}>
                                            <img
                                                src={product.IMAGESHOES1}
                                                alt={product.SHOESNAME}
                                                className={cx('product_img')}
                                            />
                                            <div className={cx('product_content-box')}>
                                                <p className={cx('product_content')}>{product.SHOESNAME}</p>
                                                <p className={cx('product_content')}>
                                                    <span>Số lượng : </span>
                                                    {product.QUANTITY}
                                                </p>
                                                <p className={cx('product_content')}>
                                                    <span>Size : {product.SIZEEUR}</span>
                                                </p>
                                                <p className={cx('product_content')}>
                                                    <span>Thành tiền :</span>
                                                    <NumberFormat
                                                        value={product.SHOESPRICE * product.QUANTITY}
                                                        displayType={'text'}
                                                        thousandSeparator={true}
                                                        suffix={'đ'}
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <h2>Không có sản phẩm</h2>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Begin modal */}
            <div className={cx('modal', statusModal ? 'open' : '')} onClick={hideBuyTickets}>
                <div
                    className={cx('modal-detail')}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className={cx('modal-header')}>
                        <h2 className={cx('modal-heading')}>Thêm địa chỉ</h2>
                        <FontAwesomeIcon className={cx('modal--close')} icon={faXmark} onClick={hideBuyTickets} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className={cx('stock-list')}>
                            <div className={cx('info')}>
                                <label htmlFor="" className={cx('input-label')}>
                                    Tên người nhận
                                </label>
                                <input
                                    className={cx('input-item')}
                                    type="text"
                                    placeholder="Tên người nhận"
                                    onChange={(e) => dispatchAddress(setInfoName(e.target.value))}
                                />
                            </div>
                            <div className={cx('info')}>
                                <label htmlFor="" className={cx('input-label')}>
                                    Địa chỉ
                                </label>
                                <input
                                    className={cx('input-item')}
                                    type="text"
                                    placeholder="Địa chỉ"
                                    onChange={(e) => dispatchAddress(setAddress(e.target.value))}
                                />
                            </div>
                            <div className={cx('info')}>
                                <label htmlFor="" className={cx('input-label')}>
                                    Số điện thoại
                                </label>
                                <input
                                    className={cx('input-item')}
                                    type="text"
                                    placeholder="Số điện thoại"
                                    onChange={(e) => dispatchAddress(setInfoPhone(e.target.value))}
                                />
                            </div>
                        </div>
                        <button className={cx('btn')}>Save</button>
                    </form>
                </div>
            </div>
            {/* End modal */}
        </>
    );
}

export default Checkout;
