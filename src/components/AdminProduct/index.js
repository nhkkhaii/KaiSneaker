import classNames from 'classnames/bind';
import styles from './AdminProduct.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AdminProduct() {
    return (
        <>
            {/* <!-- Begin adminProductTable --> */}
            <div className={cx('account-header')}>
                <h2 className={cx('account-heading')}>Thêm sản phẩm</h2>
                <Button to={`/admin/product/new-item`} className={cx('account-create-btn')}>
                    Thêm mới
                </Button>
            </div>
            <table className={cx('details-table')}>
                <thead className={cx('details-thead')}>
                    <tr className={cx('details-title-list')}>
                        <td className={cx('details-title-item')}>ID sản phẩm</td>
                        <td className={cx('details-title-item')}>ID Ảnh</td>
                        <td className={cx('details-title-item')}>Tên sản phẩm</td>
                        <td className={cx('details-title-item')}>Số lượng</td>
                        <td className={cx('details-title-item')}>Giá</td>
                    </tr>
                </thead>
                {/* <!-- item 1 --> */}
                <tbody className={cx('details-tbody')}>
                    <tr className={cx('details-content-list')}>
                        <td className={cx('details-content-item')}>1</td>
                        <td className={cx('details-content-item')}>1</td>
                        <td className={cx('details-content-item')}>GF63</td>
                        <td className={cx('details-content-item')}>10</td>
                        <td className={cx('details-content-item')}>20.000.000</td>

                        <td className={cx('details-content-item')}>
                            <button className={cx('details-content-item-btn')}>Sửa</button>
                        </td>
                        <td className={cx('details-content-item')}>
                            <button className={cx('details-content-item-btn')}>Xóa</button>
                        </td>
                    </tr>
                </tbody>
                {/* <!-- item 2 --> */}
                <tbody className={cx('details-tbody')}>
                    <tr className={cx('details-content-list')}>
                        <td className={cx('details-content-item')}>2</td>
                        <td className={cx('details-content-item')}>2</td>
                        <td className={cx('details-content-item')}>GF73</td>
                        <td className={cx('details-content-item')}>10</td>
                        <td className={cx('details-content-item')}>21.000.000</td>

                        <td className={cx('details-content-item')}>
                            <button className={cx('details-content-item-btn')}>Sửa</button>
                        </td>
                        <td className={cx('details-content-item')}>
                            <button className={cx('details-content-item-btn')}>Xóa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <!-- End adminProductTable --> */}
        </>
    );
}

export default AdminProduct;
