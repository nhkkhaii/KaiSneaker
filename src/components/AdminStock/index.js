import classNames from 'classnames/bind';
import styles from './AdminStock.module.scss';
import Button from '~/components/Button';

import ItemStock from '~/components/ItemStock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useReducer, useEffect } from 'react';

import { initStateStock, stockReducer } from '~/reducers/stockReducers';
import { setSHOESID, setIDSIZE, setQUANTITYSTOCK } from '~/actions/stockActions';
import axios from 'axios';

const cx = classNames.bind(styles);
function AdminStock() {
    const [stateStock, dispatchStock] = useReducer(stockReducer, initStateStock);
    const [statusModal, setStatusModal] = useState(false);
    const [sizeData, setSizeData] = useState([]);
    const [productData, setProductData] = useState([]);
    const [stockData, setStockData] = useState([]);

    useEffect(() => {
        getCourses();

        axios.get('http://26.17.209.162/api/size/get').then((res) => setSizeData(res.data));

        axios.get('http://26.17.209.162/api/shoes/get').then((res) => setProductData(res.data));
    }, []);
    const getCourses = async () => {
        try {
            await axios
                .get('http://26.17.209.162/api/stock/get')
                .then(async (res) => setStockData(res.data))
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.error(error);
        }
    };

    const showBuyTickets = () => {
        setStatusModal(true);
    };
    const hideBuyTickets = () => {
        setStatusModal(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleSubmitStock({
            stateStock,
        });
    };

    const handleSubmitStock = (data) => {
        try {
            axios
                .post('http://26.17.209.162/api/stock/post', {
                    type: 'create',
                    data: stateStock,
                })
                .then((res) => {
                    if (res.data == 1) {
                        alert('Thêm sản phẩm vào kho thành công!!!');
                        getCourses();
                        setStatusModal(false);
                    } else if (res.data == -1) {
                        alert('Thêm sản phẩm vào kho thất bại!!!');
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            {/* <!-- Begin adminStock --> */}
            <div className={cx('stock-header')}>
                <h2 className={cx('stock-heading')}>Thêm kho</h2>
                <Button onClick={showBuyTickets} className={cx('stock-create-btn')}>
                    Thêm mới
                </Button>
            </div>
            {/* <!-- End adminStock --> */}

            {stockData != 0 ? (
                <table className={cx('details-table')}>
                    <thead className={cx('details-thead')}>
                        <tr className={cx('details-title-list')}>
                            <td className={cx('details-title-item')}>ID hình ảnh</td>
                            <td className={cx('details-title-item')}>Tên sản phẩm</td>
                            <td className={cx('details-title-item')}>Size</td>
                            <td className={cx('details-title-item')}>Số lượng</td>
                        </tr>
                    </thead>
                    {stockData.map((stock, index) => {
                        return (
                            <ItemStock
                                key={index}
                                IDSIZE={stock.IDSIZE}
                                SHOESID={stock.SHOESID}
                                SIZEEUR={stock.SIZEEUR}
                                QUANTITYINSTOCK={stock.QUANTITYINSTOCK}
                                SHOESNAME={stock.SHOESNAME}
                                IMAGESHOES1={stock.IMAGESHOES1}
                                productData={productData}
                                sizeData={sizeData}
                            />
                        );
                    })}
                </table>
            ) : (
                <h2>Không có dữ liệu</h2>
            )}
            {/* Begin modal */}
            <div className={cx('modal', statusModal ? 'open' : '')} onClick={hideBuyTickets}>
                <div
                    className={cx('modal-detail')}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className={cx('modal-header')}>
                        <h2 className={cx('modal-heading')}>Thêm kho</h2>
                        <FontAwesomeIcon className={cx('modal--close')} icon={faXmark} onClick={hideBuyTickets} />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className={cx('stock-list')}>
                            <div className={cx('info')}>
                                <label htmlFor="" className={cx('input-label', 'mt-10')}>
                                    Tên sản phẩm
                                </label>
                                <select
                                    className={cx('stock-select')}
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
            {/* End modal */}
        </>
    );
}

export default AdminStock;
