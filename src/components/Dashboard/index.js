import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked, faCartShopping, faEye, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Image from '~/components/Image';
import NumberFormat from 'react-number-format';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const cx = classNames.bind(styles);

function Dashboard() {
    const [cookies, setCookie] = useCookies(['name']);
    const [billData, setBillData] = useState([]);
    const [stockData, setStockData] = useState([]);

    let money = 0;
    let quantitystock = 0;
    useEffect(() => {
        if (cookies.name) {
            axios.get('http://26.17.209.162/api/bill/get').then((res) => {
                setBillData(res.data);
            });
            axios.get('http://26.17.209.162/api/stock/get').then((res) => {
                setStockData(res.data);
            });
        }
    }, []);

    if (billData) {
        billData.forEach((data) => {
            money = money + data.TOTAL * 1;
        });
    }

    if (stockData) {
        stockData.forEach((data) => {
            quantitystock = quantitystock + data.QUANTITYINSTOCK * 1;
        });
    }

    return (
        <>
            <div className={cx('card__box')}>
                <div className={cx('card')}>
                    <div>
                        <div className={cx('card-numbers')}>{billData ? billData.length : '0'}</div>
                        <div className={cx('card-name')}>Số hóa đơn</div>
                    </div>
                    <div className={cx('card-icon')}>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                </div>

                <div className={cx('card')}>
                    <div>
                        <div className={cx('card-numbers')}>{stockData ? quantitystock : '0'}</div>
                        <div className={cx('card-name')}>Số sản phẩm có trong kho</div>
                    </div>
                    <div className={cx('card-icon')}>
                        <FontAwesomeIcon icon={faBoxesStacked} />
                    </div>
                </div>

                <div className={cx('card')}>
                    <div>
                        <div className={cx('card-numbers')}>
                            <NumberFormat value={money} displayType={'text'} thousandSeparator={true} suffix={'đ'} />
                        </div>
                        <div className={cx('card-name')}>Doanh thu</div>
                    </div>
                    <div className={cx('card-icon')}>
                        <FontAwesomeIcon icon={faMoneyCheckDollar} />
                    </div>
                </div>
            </div>
            {/* <!-- End report --> */}
            <div className={cx('details')}>
                {/* <!-- Begin order details list --> */}
                <div className={cx('details-orders')}>
                    <div className={cx('details-header')}>
                        <h2 className={cx('details-header-heading')}>Đơn hàng gần đây</h2>
                        <Button className={cx('details-header-btn')}>View All</Button>
                    </div>
                    {billData != 0 ? (
                        <table className={cx('details-table')}>
                            <thead className={cx('details-table-thead')}>
                                <tr className={cx('details-table-thead-list')}>
                                    <td>Tên</td>
                                    <td>Giá</td>
                                    <td>Thanh toán</td>
                                    <td>Trạng thái</td>
                                </tr>
                            </thead>
                            {billData
                                .sort((a, b) => b - a)
                                .map((bill) => {
                                    return (
                                        <tbody className={cx('details-table-tbody')} key={bill.IDBILL}>
                                            <tr>
                                                <td>{bill.FULLNAME}</td>
                                                <td>
                                                    <NumberFormat
                                                        value={bill.TOTAL}
                                                        displayType={'text'}
                                                        thousandSeparator={true}
                                                        suffix={'đ'}
                                                    />
                                                </td>
                                                <td>Tiền mặt</td>
                                                <td>
                                                    <span
                                                        className={cx(
                                                            'status',
                                                            bill.STATUSBILL === 'Chờ duyệt'
                                                                ? 'pending'
                                                                : bill.STATUSBILL === 'Trả về'
                                                                ? 'return'
                                                                : bill.STATUSBILL === 'Đang giao hàng'
                                                                ? 'ingrogress'
                                                                : 'delivered',
                                                        )}
                                                    >
                                                        {bill.STATUSBILL}
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    );
                                })}
                        </table>
                    ) : (
                        <h2> không có đơn hàng</h2>
                    )}
                </div>
                {/* <!-- End order details list -->*/}
                {/* <!-- Begin New Customers--> */}
                <div className={cx('recent__customers')}>
                    <div className={cx('details-header')}>
                        <h2 className={cx('details-header-heading')}>Khách hàng gần đây</h2>
                    </div>

                    {billData != 0 ? (
                        <table className={cx('recent__customers-table')}>
                            {billData
                                .sort((a, b) => b - a)
                                .map((bill) => {
                                    return (
                                        <tbody key={bill.IDBILL}>
                                            <tr>
                                                <td width="60px">
                                                    <div className={cx('customers-img')}>
                                                        <Image src={bill.IMAGEUSER} alt={bill.FULLNAME} />
                                                    </div>
                                                </td>
                                                <td>
                                                    <h4>
                                                        {bill.FULLNAME}
                                                        <br />
                                                        <span> {bill.GENDER}</span>
                                                    </h4>
                                                </td>
                                            </tr>
                                        </tbody>
                                    );
                                })}
                        </table>
                    ) : (
                        <h2> Chứa có khách hàng</h2>
                    )}
                </div>
                {/* <!-- End New Customers--> */}
            </div>
        </>
    );
}

export default Dashboard;
