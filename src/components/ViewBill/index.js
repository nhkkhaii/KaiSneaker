import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ViewBill.module.scss';

import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ViewBill() {
    return (
        <>
            {/* <!-- Begin adminProductTable --> */}
            <div className={cx('bill-header')}>
                <h2 className={cx('bill-heading')}>Mã hóa đơn: 1NOJ2KKNK5</h2>
                <h2 className={cx('bill-heading')}>Tổng hóa đơn: 63.000.000</h2>
            </div>
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
                {/* <!-- item 1 --> */}
                <tbody className={cx('details-tbody')}>
                    <tr className={cx('details-content-list')}>
                        <td className={cx('details-content-item')}>MSI123</td>
                        <td className={cx('details-content-item')}>
                            <img
                                src="https://image-us.24h.com.vn/upload/4-2021/images/2021-12-28/anh-3-1640659954-103-width650height867.jpg"
                                className={cx('product-img')}
                            />
                        </td>
                        <td className={cx('details-content-item')}>MSI GF63</td>
                        <td className={cx('details-content-item')}>1</td>
                        <td className={cx('details-content-item')}>20.000.000</td>
                    </tr>
                </tbody>
                {/* <!-- item 2 --> */}
                <tbody className={cx('details-tbody')}>
                    <tr className={cx('details-content-list')}>
                        <td className={cx('details-content-item')}>ASUS123</td>
                        <td className={cx('details-content-item')}>
                            <img
                                src="https://image-us.24h.com.vn/upload/4-2021/images/2021-12-28/anh-3-1640659954-103-width650height867.jpg"
                                className={cx('product-img')}
                            />
                        </td>
                        <td className={cx('details-content-item')}>ASUS Nitro 5</td>
                        <td className={cx('details-content-item')}>2</td>
                        <td className={cx('details-content-item')}>21.000.000</td>
                    </tr>
                </tbody>
            </table>
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
