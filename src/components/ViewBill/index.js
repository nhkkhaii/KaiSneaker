import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ViewBill.module.scss';

import { useEffect, useState } from 'react';
import config from '~/config';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

function ViewBill() {
    const [infoBillData, setInfoBillData] = useState([]);
    let location = useLocation();

    useEffect(() => {
        getCourses();
    }, []);
    console.log(location.state.data);

    const getCourses = async () => {
        try {
            await axios
                .post('http://26.17.209.162/api/detailbill/post', {
                    type: 'get',
                    data: { IDBILL: location.state.data.IDBILL },
                })
                .then(async (res) => setInfoBillData(res.data))
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            {/* <!-- Begin adminProductTable --> */}
            <div className={cx('bill-header')}>
                <h2 className={cx('bill-heading')}>Mã hóa đơn: {location.state.data.IDBILL}</h2>
                <h2 className={cx('bill-heading')}>
                    <span>Tổng hóa đơn : </span>
                    <NumberFormat
                        value={location.state.data.TOTAL}
                        displayType={'text'}
                        thousandSeparator={true}
                        suffix={'đ'}
                    />
                </h2>
            </div>
            {infoBillData != 0 ? (
                <table className={cx('details-table')}>
                    <thead className={cx('details-thead')}>
                        <tr className={cx('details-title-list')}>
                            <td className={cx('details-title-item')}>ID sản phẩm</td>
                            <td className={cx('details-title-item')}>Hình ảnh</td>
                            <td className={cx('details-title-item')}>Tên sản phẩm</td>
                            <td className={cx('details-title-item')}>SL sản phẩm</td>
                            <td className={cx('details-title-item')}>Thành tiền</td>
                        </tr>
                    </thead>
                    {infoBillData.map((product, index) => {
                        return (
                            <tbody className={cx('details-tbody')}>
                                <tr className={cx('details-content-list')}>
                                    <td className={cx('details-content-item')}>{product.SHOESID}</td>
                                    <td className={cx('details-content-item')}>
                                        <img src={product.IMAGESHOES1} className={cx('product-img')} />
                                    </td>
                                    <td className={cx('details-content-item')}>{product.SHOESNAME}</td>
                                    <td className={cx('details-content-item')}>{product.QUANTITYINBILL}</td>
                                    <td className={cx('details-content-item')}>
                                        <NumberFormat
                                            value={product.QUANTITYINBILL * product.SHOESPRICE}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            suffix={'đ'}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            ) : (
                <h2>Bill không có sản phẩm</h2>
            )}

            <Button
                to={config.routes.adminBill}
                className={cx('btn_back')}
                leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}
            >
                Trở về
            </Button>
            {/* <!-- End adminProductTable --> */}
        </>
    );
}

export default ViewBill;
