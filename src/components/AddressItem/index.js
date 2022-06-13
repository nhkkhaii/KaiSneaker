import { useState, useReducer, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { initStateAddress, addressReducer } from '~/reducers/addressReducers';
import { setIDAccount, setInfoPhone, setInfoName, setAddress } from '~/actions/addressActions';

import classNames from 'classnames/bind';
import styles from './AddressItem.module.scss';

const cx = classNames.bind(styles);

function AddressItem({ SHOPPINGINFOID, IDACCOUNT, SHOPPINGINFONAME, SHOPPINGINFOPHONE, ADDRESS }) {
    const [statusModal, setStatusModal] = useState(false);
    const [stateAddress, dispatchAddress] = useReducer(addressReducer, initStateAddress);
    useEffect(() => {
        dispatchAddress(setIDAccount(IDACCOUNT));
        dispatchAddress(setInfoName(SHOPPINGINFONAME));
        dispatchAddress(setInfoPhone(SHOPPINGINFOPHONE));
        dispatchAddress(setAddress(ADDRESS));
    }, []);

    const showBuyTickets = () => {
        setStatusModal(true);
    };
    const hideBuyTickets = () => {
        setStatusModal(false);
    };

    const deleteAddress = async () => {
        await axios
            .post('http://26.17.209.162/api/shippinginfo/post', {
                type: 'delete',
                data: { IDACCOUNT: IDACCOUNT, SHOPPINGINFOID: SHOPPINGINFOID },
            })
            .then((res) => {
                if ((res.data != 0) & (res.data != -1)) {
                    alert('Xóa địa chỉ thành công');
                    window.location.reload();
                }
            });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('name')}>{SHOPPINGINFONAME}</div>
                <div className={cx('address')}>{ADDRESS}</div>
                <div className={cx('phone')}>{SHOPPINGINFOPHONE}</div>

                <div className={cx('action')}>
                    <button className={cx('update_btn')} onClick={showBuyTickets}>
                        Cập nhật
                    </button>
                    <button className={cx('delete_btn')} onClick={deleteAddress}>
                        Xóa
                    </button>
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
                        <h2 className={cx('modal-heading')}>Cập nhật địa chỉ</h2>
                        <FontAwesomeIcon className={cx('modal--close')} icon={faXmark} onClick={hideBuyTickets} />
                    </div>

                    <form>
                        <div className={cx('stock-list')}>
                            <div className={cx('info')}>
                                <label htmlFor="" className={cx('input-label')}>
                                    Tên người nhận
                                </label>
                                <input
                                    className={cx('input-item')}
                                    type="text"
                                    value={stateAddress.SHOPPINGINFONAME ? stateAddress.SHOPPINGINFONAME : null}
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
                                    value={stateAddress.ADDRESS ? stateAddress.ADDRESS : null}
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
                                    value={stateAddress.SHOPPINGINFOPHONE ? stateAddress.SHOPPINGINFOPHONE : null}
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
        </div>
    );
}

export default AddressItem;
