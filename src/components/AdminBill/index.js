import classNames from 'classnames/bind';
import styles from './AdminBill.module.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';

import config from '~/config';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function AdminBill() {
    const [billData, setBillData] = useState([]);

    useEffect(() => {
        getCourses();
    }, []);

    const getCourses = async () => {
        try {
            await axios
                .get('http://26.17.209.162/api/bill/get')
                .then(async (res) => setBillData(res.data))
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
            <div className={cx('account-header')}>
                <h2 className={cx('account-heading')}>Hóa đơn sản phẩm</h2>
            </div>

            {billData != 0 ? (
                <table className={cx('details-table')}>
                    <thead className={cx('details-thead')}>
                        <tr className={cx('details-title-list')}>
                            <td className={cx('details-title-item')}>ID hóa đơn</td>
                            <td className={cx('details-title-item')}>Tên khách hàng</td>
                            <td className={cx('details-title-item')}>Ngày lập</td>
                            <td className={cx('details-title-item')}>Thành tiền</td>
                            <td className={cx('details-title-item')}>Trạng thái</td>
                        </tr>
                    </thead>
                    {billData.map((bill, index) => {
                        console.log(bill);
                        return (
                            <tbody className={cx('details-tbody')} key={bill.IDBILL}>
                                <tr className={cx('details-content-list')}>
                                    <td className={cx('details-content-item')}>{bill.IDBILL}</td>
                                    <td className={cx('details-content-item')}>Khải Khùng</td>
                                    <td className={cx('details-content-item')}>{bill.CREATEDBILLDATE}</td>
                                    <td className={cx('details-content-item')}>
                                        <NumberFormat
                                            value={bill.TOTAL}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            suffix={'đ'}
                                        />
                                    </td>
                                    <td className={cx('details-content-item')}>
                                        <select className={cx('details-content-select')}>
                                            <option value="0">Trang thái</option>
                                            <option value="1">Đang giao hàng</option>
                                            <option value="2">Trả về</option>
                                            <option value="3">Thành công</option>
                                        </select>
                                    </td>
                                    <td className={cx('details-content-item')}>
                                        <Button
                                            to={`${config.routes.adminBill}/${bill.IDBILL}`}
                                            state={{ data: { IDBILL: bill.IDBILL, TOTAL: bill.TOTAL } }}
                                            className={cx('details-content-item-btn')}
                                        >
                                            Xem
                                        </Button>
                                    </td>
                                    <td className={cx('details-content-item')}>
                                        <Button className={cx('details-content-item-btn')}>Cập nhật</Button>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            ) : (
                <h2>Không có hóa đơn</h2>
            )}
        </>
    );
}

export default AdminBill;
