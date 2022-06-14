import classNames from 'classnames/bind';
import styles from './ItemStock.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useState, useReducer, useEffect } from 'react';
import Image from '~/components/Image';
import { initStateStock, stockReducer } from '~/reducers/stockReducers';
import { setSHOESID, setIDSIZE, setQUANTITYSTOCK } from '~/actions/stockActions';

const cx = classNames.bind(styles);

function ItemStock({ SHOESID, IDSIZE, SIZEEUR, SHOESNAME, IMAGESHOES1, QUANTITYINSTOCK, sizeData, productData }) {
    const [statusModal, setStatusModal] = useState(false);
    const [stateStock, dispatchStock] = useReducer(stockReducer, initStateStock);

    useEffect(() => {
        dispatchStock(setSHOESID(SHOESID));
        dispatchStock(setIDSIZE(IDSIZE));
        dispatchStock(setQUANTITYSTOCK(QUANTITYINSTOCK));
    }, []);

    const showBuyTickets = () => {
        setStatusModal(true);
    };
    const hideBuyTickets = () => {
        setStatusModal(false);
    };

    const deleteProduct = async () => {
        try {
            if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm khỏi kho không?')) {
                await axios
                    .post('http://26.17.209.162/api/stock/post', {
                        type: 'delete',
                        data: { SHOESID: SHOESID, IDSIZE: IDSIZE },
                    })
                    .then((res) => {
                        if (res.data == 1) {
                            alert('Xóa sản phẩm khỏi kho thành công');
                            window.location.reload();
                        } else if (res.data == -1) {
                            alert('Xóa sản phẩm khỏi kho thất bại');
                        }
                    });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const updateProduct = async (e) => {
        try {
            e.preventDefault();
            await axios
                .post('http://26.17.209.162/api/stock/post', {
                    type: 'update',
                    data: stateStock,
                })
                .then((res) => {
                    if (res.data == 1) {
                        alert('Cập nhật sản phẩm kho thành công');
                        window.location.reload();
                    } else if (res.data == -1) {
                        alert('Cập nhật sản phẩm kho thất bại');
                    }
                });
        } catch (error) {
            console.log(error);
        }
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

                    <form onSubmit={updateProduct}>
                        <div className={cx('stock-list')}>
                            <div className={cx('info')}>
                                <label htmlFor="" className={cx('input-label', 'mt-10')}>
                                    Tên sản phẩm
                                </label>
                                <select
                                    className={cx('stock-select')}
                                    value={stateStock.SHOESID}
                                    onChange={(e) => dispatchStock(setSHOESID(e.target.value))}
                                >
                                    {productData != 0 ? (
                                        productData.map((product) => {
                                            return (
                                                <option key={product.SHOESID} value={product.SHOESID}>
                                                    {product.SHOESNAME}
                                                </option>
                                            );
                                        })
                                    ) : (
                                        <></>
                                    )}
                                </select>
                            </div>

                            <div className={cx('info')}>
                                <label htmlFor="" className={cx('input-label', 'mt-10')}>
                                    Chọn Size
                                </label>
                                <select
                                    className={cx('stock-select')}
                                    value={stateStock.IDSIZE}
                                    onChange={(e) => dispatchStock(setIDSIZE(e.target.value))}
                                >
                                    {sizeData != 0 ? (
                                        sizeData.map((size) => {
                                            return (
                                                <option key={size.IDSIZE} value={size.IDSIZE}>
                                                    {size.SIZEEUR}
                                                </option>
                                            );
                                        })
                                    ) : (
                                        <></>
                                    )}
                                </select>
                            </div>

                            <div className={cx('info')}>
                                <label htmlFor="" className={cx('input-label')}>
                                    Số lượng
                                </label>
                                <input
                                    className={cx('input-item')}
                                    type="text"
                                    value={stateStock.QUANTITYINSTOCK ? stateStock.QUANTITYINSTOCK : null}
                                    placeholder="Số lượng"
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                    onChange={(e) => dispatchStock(setQUANTITYSTOCK(e.target.value))}
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
