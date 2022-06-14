import classNames from 'classnames/bind';
import styles from './AdminProduct.module.scss';
import Button from '~/components/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function AdminProduct() {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        getCourses();
    }, []);

    const getCourses = async () => {
        try {
            await axios
                .get('http://26.17.209.162/api/shoes/get')
                .then(async (res) => setProductData(res.data))
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteProduct = (data) => {
        try {
            if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
                axios
                    .post('http://26.17.209.162/api/shoes/post', {
                        type: 'delete',
                        data: { SHOESID: data },
                    })
                    .then((res) => {
                        if (res.data == 1) {
                            alert('Xóa sản phẩm thành công!!!');
                            getCourses();
                        } else if (res.data == -1) {
                            alert('Xóa sản phẩm thất bại!!!');
                        }
                    });
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            {/* <!-- Begin adminProductTable --> */}
            <div className={cx('account-header')}>
                <h2 className={cx('account-heading')}>Thêm sản phẩm</h2>
                <Button to={`/admin/shoes/new-item`} className={cx('account-create-btn')}>
                    Thêm mới
                </Button>
            </div>

            {productData != 0 ? (
                <table className={cx('details-table')}>
                    <thead className={cx('details-thead')}>
                        <tr className={cx('details-title-list')}>
                            <td className={cx('details-title-item')}>ID sản phẩm</td>
                            <td className={cx('details-title-item')}>ID Ảnh</td>
                            <td className={cx('details-title-item')}>ID Brand</td>
                            <td className={cx('details-title-item')}>Tên sản phẩm</td>
                            <td className={cx('details-title-item')}>Giá</td>
                            <td className={cx('details-title-item')}>Mô tả</td>
                        </tr>
                    </thead>
                    {productData.map((product, index) => {
                        return (
                            <tbody className={cx('details-tbody')} key={product.SHOESID}>
                                <tr className={cx('details-content-list')}>
                                    <td className={cx('details-content-item')}>{product.SHOESID}</td>
                                    <td className={cx('details-content-item')}>{product.IMAGEID}</td>
                                    <td className={cx('details-content-item')}>{product.IDBRAND}</td>
                                    <td className={cx('details-content-item', 'justify_item')}>{product.SHOESNAME}</td>
                                    <td className={cx('details-content-item')}>{product.SHOESPRICE}</td>
                                    <td className={cx('details-content-item', 'justify_item')}>
                                        {product.SHOESDESCRIPTION}
                                    </td>

                                    <td className={cx('details-content-item')}>
                                        <Button
                                            to={`/admin/shoes/${product.SHOESID}`}
                                            state={{ data: product }}
                                            className={cx('details-content-item-btn')}
                                        >
                                            Sửa
                                        </Button>
                                    </td>
                                    <td className={cx('details-content-item')}>
                                        <Button
                                            className={cx('details-content-item-btn')}
                                            onClick={(e) => handleDeleteProduct(product.SHOESID)}
                                        >
                                            Xóa
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            ) : (
                <h2> Không có dữ liệu</h2>
            )}

            {/* <!-- End adminProductTable --> */}
        </>
    );
}

export default AdminProduct;
