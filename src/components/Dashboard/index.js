import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEye, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Dashboard() {
    return (
        <>
            <div className={cx('card__box')}>
                <div className={cx('card')}>
                    <div>
                        <div className={cx('card-numbers')}>2,000</div>
                        <div className={cx('card-name')}>Daily View</div>
                    </div>
                    <div className={cx('card-icon')}>
                        <FontAwesomeIcon icon={faEye} />
                    </div>
                </div>

                <div className={cx('card')}>
                    <div>
                        <div className={cx('card-numbers')}>80</div>
                        <div className={cx('card-name')}>Sales</div>
                    </div>
                    <div className={cx('card-icon')}>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                </div>

                <div className={cx('card')}>
                    <div>
                        <div className={cx('card-numbers')}>2,000</div>
                        <div className={cx('card-name')}>Commnets</div>
                    </div>
                    <div className={cx('card-icon')}>
                        <FontAwesomeIcon icon={faComment} />
                    </div>
                </div>

                <div className={cx('card')}>
                    <div>
                        <div className={cx('card-numbers')}>2,000</div>
                        <div className={cx('card-name')}>Enrning</div>
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
                    <table className={cx('details-table')}>
                        <thead className={cx('details-table-thead')}>
                            <tr className={cx('details-table-thead-list')}>
                                <td>Tên</td>
                                <td>Giá</td>
                                <td>Thanh toán</td>
                                <td>Trạng thái</td>
                            </tr>
                        </thead>
                        <tbody className={cx('details-table-tbody')}>
                            <tr>
                                <td>Laptop</td>
                                <td>20.000.000</td>
                                <td>Tiền mặt</td>
                                <td>
                                    <span className={cx('status', 'delivered')}>Đã giao hàng</span>
                                </td>
                            </tr>
                        </tbody>

                        <tbody className={cx('details-table-tbody')}>
                            <tr>
                                <td>Laptop</td>
                                <td>20.000.000</td>
                                <td>Tiền mặt</td>
                                <td>
                                    <span className={cx('status', 'pending')}>Chưa giải quyết</span>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className={cx('details-table-tbody')}>
                            <tr>
                                <td>Laptop</td>
                                <td>20.000.000</td>
                                <td>Tiền mặt</td>
                                <td>
                                    <span className={cx('status', 'return')}>Trả về</span>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className={cx('details-table-tbody')}>
                            <tr>
                                <td>Laptop</td>
                                <td>20.000.000</td>
                                <td>Tiền mặt</td>
                                <td>
                                    <span className={cx('status', 'ingrogress')}>Đang giải quyết</span>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className={cx('details-table-tbody')}>
                            <tr>
                                <td>Laptop</td>
                                <td>20.000.000</td>
                                <td>Tiền mặt</td>
                                <td>
                                    <span className={cx('status', 'delivered')}>Đã giao hàng</span>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className={cx('details-table-tbody')}>
                            <tr>
                                <td>Laptop</td>
                                <td>20.000.000</td>
                                <td>Tiền mặt</td>
                                <td>
                                    <span className={cx('status', 'delivered')}>Đã giao hàng</span>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className={cx('details-table-tbody')}>
                            <tr>
                                <td>Laptop</td>
                                <td>20.000.000</td>
                                <td>Tiền mặt</td>
                                <td>
                                    <span className={cx('status', 'delivered')}>Đã giao hàng</span>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className={cx('details-table-tbody')}>
                            <tr>
                                <td>Laptop</td>
                                <td>20.000.000</td>
                                <td>Tiền mặt</td>
                                <td>
                                    <span className={cx('status', 'delivered')}>Đã giao hàng</span>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className={cx('details-table-tbody')}>
                            <tr>
                                <td>Laptop</td>
                                <td>20.000.000</td>
                                <td>Tiền mặt</td>
                                <td>
                                    <span className={cx('status', 'delivered')}>Đã giao hàng</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* <!-- End order details list -->*/}
                {/* <!-- Begin New Customers--> */}
                <div className={cx('recent__customers')}>
                    <div className={cx('details-header')}>
                        <h2 className={cx('details-header-heading')}>Khách hàng gần đây</h2>
                    </div>
                    <table className={cx('recent__customers-table')}>
                        <tr>
                            <td width="60px">
                                <div className={cx('customers-img')}>
                                    <Image src="" alt="" />
                                </div>
                            </td>
                            <td>
                                <h4>
                                    Khôi nè
                                    <br />
                                    <span>Việt Nam</span>
                                </h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className={cx('customers-img')}>
                                    <Image src="" alt="" />
                                </div>
                            </td>
                            <td>
                                <h4>
                                    Khôi nè
                                    <br />
                                    <span>Việt Nam</span>
                                </h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className={cx('customers-img')}>
                                    <Image src="" alt="" />
                                </div>
                            </td>
                            <td>
                                <h4>
                                    Khôi nè
                                    <br />
                                    <span>Việt Nam</span>
                                </h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className={cx('customers-img')}>
                                    <Image src="" alt="" />
                                </div>
                            </td>
                            <td>
                                <h4>
                                    Khôi nè
                                    <br />
                                    <span>Việt Nam</span>
                                </h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className={cx('customers-img')}>
                                    <Image src="" alt="" />
                                </div>
                            </td>
                            <td>
                                <h4>
                                    Khôi nè
                                    <br />
                                    <span>Việt Nam</span>
                                </h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className={cx('customers-img')}>
                                    <Image src="" alt="" />
                                </div>
                            </td>
                            <td>
                                <h4>
                                    Khôi nè
                                    <br />
                                    <span>Việt Nam</span>
                                </h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className={cx('customers-img')}>
                                    <Image src="" alt="" />
                                </div>
                            </td>
                            <td>
                                <h4>
                                    Khôi nè
                                    <br />
                                    <span>Việt Nam</span>
                                </h4>
                            </td>
                        </tr>
                    </table>
                </div>
                {/* <!-- End New Customers--> */}
            </div>
        </>
    );
}

export default Dashboard;
