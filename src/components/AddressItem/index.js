import { useState, useReducer, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { initStateAddress, addressReducer } from '~/reducers/addressReducers';
import { setIDAccount, setInfoPhone, setInfoName, setAddress, setIDInfo } from '~/actions/addressActions';

import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './AddressItem.module.scss';

const cx = classNames.bind(styles);

function AddressItem({ SHOPPINGINFOID, IDACCOUNT, SHOPPINGINFONAME, SHOPPINGINFOPHONE, ADDRESS, nonUpdate }) {
    const [statusModal, setStatusModal] = useState(false);
    const [stateAddress, dispatchAddress] = useReducer(addressReducer, initStateAddress);
    useEffect(() => {
        try {
            dispatchAddress(setIDAccount(IDACCOUNT));
            dispatchAddress(setIDInfo(SHOPPINGINFOID));
            dispatchAddress(setInfoName(SHOPPINGINFONAME));
            dispatchAddress(setInfoPhone(SHOPPINGINFOPHONE));
            dispatchAddress(setAddress(ADDRESS));
        } catch (error) {
            console.log(error);
        }
    }, []);

    const showBuyTickets = () => {
        setStatusModal(true);
    };
    const hideBuyTickets = () => {
        setStatusModal(false);
    };

    const handleSubmitUpdate = async (e) => {
        e.preventDefault();
        await updateAddress({
            stateAddress,
        });
    };
    const updateAddress = async (e) => {
        try {
            await axios
                .post('http://26.17.209.162/api/shippinginfo/post', {
                    type: 'update',
                    data: stateAddress,
                })
                .then((res) => {
                    if (res.data == 1) {
                        alert('Cập nhật địa chỉ thành công');
                        window.location.reload();
                    } else if (res.data == -1) {
                        alert('Cập nhật địa chỉ thất bại');
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };

    const deleteAddress = async () => {
        try {
            if (window.confirm('Bạn có chắc chắn muốn xóa địa chỉ này ? ')) {
                await axios
                    .post('http://26.17.209.162/api/shippinginfo/post', {
                        type: 'delete',
                        data: { IDACCOUNT: IDACCOUNT, SHOPPINGINFOID: SHOPPINGINFOID },
                    })
                    .then((res) => {
                        if (res.data == 1) {
                            alert('Xóa địa chỉ thành công');
                            window.location.reload();
                        } else if (res.data == -1) {
                            alert('Xóa địa chỉ thất bại');
                        }
                    });
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('name')}>{SHOPPINGINFONAME}</div>
                <div className={cx('address')}>{ADDRESS}</div>
                <div className={cx('phone')}>{SHOPPINGINFOPHONE}</div>

                <div className={cx('action')}>
                    {nonUpdate ? (
                        <></>
                    ) : (
                        <Button className={cx('update_btn')} onClick={showBuyTickets}>
                            Cập nhật
                        </Button>
                    )}
                    <Button className={cx('delete_btn')} onClick={deleteAddress}>
                        Xóa
                    </Button>
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

                    <form onSubmit={handleSubmitUpdate}>
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
