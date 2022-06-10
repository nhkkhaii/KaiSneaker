import classNames from 'classnames/bind';
import styles from './AdminBill.module.scss';

import Button from '~/components/Button';
const cx = classNames.bind(styles);

function AdminBill() {
    return (
        <>
            {/* <!-- Begin adminProductTable --> */}
            <div className={cx('account-header')}>
                <h2 className={cx('account-heading')}>Hóa đơn sản phẩm</h2>
            </div>
            <table className={cx('details-table')}>
                <thead className={cx('details-thead')}>
                    <tr className={cx('details-title-list')}>
                        <td className={cx('details-title-item')}>ID hóa đơn</td>
                        <td className={cx('details-title-item')}>Tên khách hàng</td>
                        <td className={cx('details-title-item')}>Tên nhân viên</td>
                        <td className={cx('details-title-item')}>Ngày lập</td>
                        <td className={cx('details-title-item')}>Thành tiền</td>
                        <td className={cx('details-title-item')}>Trạng thái</td>
                    </tr>
                </thead>
                {/* <!-- item 1 --> */}
                <tbody className={cx('details-tbody')}>
                    <tr className={cx('details-content-list')}>
                        <td className={cx('details-content-item')}>1NOJ2KKNK5</td>
                        <td className={cx('details-content-item')}>Khải Khùng</td>
                        <td className={cx('details-content-item')}>Hoàng Khôi</td>
                        <td className={cx('details-content-item')}>07/06/2022</td>
                        <td className={cx('details-content-item')}>20.000.000</td>
                        <td className={cx('details-content-item')}>
                            <select className={cx('details-content-select')}>
                                <option value="0">Trang thái</option>
                                <option value="1">Đang giao hàng</option>
                                <option value="2">Trả về</option>
                                <option value="3">Thành công</option>
                            </select>
                        </td>
                        <td className={cx('details-content-item')}>
                            <Button to={`/admin/bill/idbill`} className={cx('details-content-item-btn')}>
                                Xem
                            </Button>
                        </td>
                        <td className={cx('details-content-item')}>
                            <Button className={cx('details-content-item-btn')}>Cập nhật</Button>
                        </td>
                    </tr>
                </tbody>
                {/* <!-- item 2 --> */}
                <tbody className={cx('details-tbody')}>
                    <tr className={cx('details-content-list')}>
                        <td className={cx('details-content-item')}>22OJSSSS2NK5</td>
                        <td className={cx('details-content-item')}>Khải Lõ</td>
                        <td className={cx('details-content-item')}>Hoàng Khôi</td>
                        <td className={cx('details-content-item')}>07/06/2022</td>
                        <td className={cx('details-content-item')}>21.000.000</td>
                        <td className={cx('details-content-item')}>
                            <select className={cx('details-content-select')}>
                                <option value="0">Trang thái</option>
                                <option value="1">Đang giao hàng</option>
                                <option value="2">Trả về</option>
                                <option value="3">Thành công</option>
                            </select>
                        </td>
                        <td className={cx('details-content-item')}>
                            <Button to={`/admin/bill/idbill`} className={cx('details-content-item-btn')}>
                                Xem
                            </Button>
                        </td>
                        <td className={cx('details-content-item')}>
                            <Button className={cx('details-content-item-btn')}>Cập nhật</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <!-- End adminProductTable --> */}
        </>
    );
}

export default AdminBill;
