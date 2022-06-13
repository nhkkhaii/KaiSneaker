import classNames from 'classnames/bind';
import styles from './ItemStock.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useState, useReducer, useEffect } from 'react';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function ItemStock({ SHOESID, IDSIZE, SIZEEUR, SHOESNAME, IMAGESHOES1, QUANTITYINSTOCK }) {
    const [statusModal, setStatusModal] = useState(false);
    const showBuyTickets = () => {
        setStatusModal(true);
    };
    const hideBuyTickets = () => {
        setStatusModal(false);
    };

    const deleteProduct = async () => {
        await axios
            .post('http://26.17.209.162/api/stock/post', {
                type: 'delete',
                data: { SHOESID: SHOESID, IDSIZE: IDSIZE },
            })
            .then((res) => {
                if (res.data != 0 && res.data != -1) {
                    window.location.reload();
                }
            });
    };

    return (
        <>
            {/* <!-- item 1 --> */}
            <tbody className={cx('details-tbody')}>
                <tr className={cx('details-content-list')}>
                    <td className={cx('details-content-item')}>
                        <Image className={cx('stock-img')} src={IMAGESHOES1} />
                    </td>
                    <td className={cx('details-content-item')}>{SHOESNAME}</td>
                    <td className={cx('details-content-item')}>{SIZEEUR}</td>
                    <td className={cx('details-content-item')}>{QUANTITYINSTOCK}</td>
                    <td className={cx('details-content-item')}>
                        <button className={cx('details-content-item-btn')} onClick={showBuyTickets}>
                            Sửa
                        </button>
                    </td>
                    <td className={cx('details-content-item')}>
                        <button className={cx('details-content-item-btn')} onClick={deleteProduct}>
                            Xóa
                        </button>
                    </td>
                </tr>
            </tbody>

            <div className={cx('modal', statusModal ? 'open' : '')} onClick={hideBuyTickets}>
                <div
                    className={cx('modal-detail')}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className={cx('modal-header')}>
                        <h2 className={cx('modal-heading')}>Cập nhật kho</h2>
                        <FontAwesomeIcon className={cx('modal--close')} icon={faXmark} onClick={hideBuyTickets} />
                    </div>

                    <form>
                        <div className={cx('stock-list')}>
                            <div className={cx('info')}>
                                <label htmlFor="" className={cx('input-label', 'mt-10')}>
                                    Tên sản phẩm
                                </label>
                                <select className={cx('stock-select')}>
                                    <option value="0">Tên sản phẩm</option>
                                    <option value="1">MSI</option>
                                    <option value="2">ASUS</option>
                                </select>
                            </div>

                            <div className={cx('info')}>
                                <label htmlFor="" className={cx('input-label', 'mt-10')}>
                                    Chọn Size
                                </label>
                                <select className={cx('stock-select')}>
                                    <option value="0">Chọn Size</option>
                                    <option value="1">44.5</option>
                                    <option value="2">50</option>
                                </select>
                            </div>

                            <div className={cx('info')}>
                                <label htmlFor="" className={cx('input-label')}>
                                    Số lượng
                                </label>
                                <input
                                    className={cx('input-item')}
                                    type="text"
                                    placeholder="Số lượng"
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <button className={cx('btn')}>Save</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ItemStock;
