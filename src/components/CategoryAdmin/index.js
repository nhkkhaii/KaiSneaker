import classNames from 'classnames/bind';
import styles from './CategoryAdmin.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';

const cx = classNames.bind(styles);

function AdminUser() {
    const [statusModal, setStatusModal] = useState(false);
    const headerRef = useRef();

    // Begin : Tickets
    const showBuyTickets = () => {
        // add class open vào hàm open đã viết bên CSS
        setStatusModal(true);
    };
    // ẩn
    const hideBuyTickets = () => {
        // remove class open vào hàm open đã viết bên CSS
        setStatusModal(false);
    };
    // End : Tickets

    return (
        <>
            {/* <!-- Begin adminCategoriesTable --> */}
            <div className={cx('category-header')}>
                <h2 className={cx('category-heading')}>Thêm tài khoản</h2>
                <button className={cx('category-create-btn')} onClick={showBuyTickets}>
                    Thêm mới
                </button>
            </div>
            <table className={cx('details-table')}>
                <thead className={cx('details-thead')}>
                    <tr className={cx('details-title-list')}>
                        <td className={cx('details-title-item')}>ID danh mục</td>
                        <td className={cx('details-title-item')}>Tên Danh mục</td>
                        <td className={cx('details-title-item')}>Mô tả</td>
                    </tr>
                </thead>
                {/* <!-- Begin Item 1 --> */}
                <tbody className={cx('details-tbody')}>
                    <tr className={cx('details-content-list')}>
                        <td className={cx('details-content-item')}>1</td>
                        <td className={cx('details-content-item')}>MSI</td>
                        <td className={cx('details-content-item', 'details-content-item--maxwith')}>
                            <span>Msi là thương ưu tín số 1 Việt Nam. có logo con rồng đỏ. ăn đứt mấy thằng Acer</span>
                        </td>
                        <td className={cx('details-content-item')}>
                            <button className={cx('details-content-item-btn')}>Sửa</button>
                        </td>
                        <td className={cx('details-content-item')}>
                            <button className={cx('details-content-item-btn')}>Xóa</button>
                        </td>
                    </tr>
                </tbody>
                {/* <!-- End Item 1 -->
                        <!-- Begin Item 2 --> */}
                <tbody className={cx('details-tbody')}>
                    <tr className={cx('details-content-list')}>
                        <td className={cx('details-content-item')}>2</td>
                        <td className={cx('details-content-item')}>ASUS</td>
                        <td className={cx('details-content-item', 'details-content-item--maxwith')}>
                            <span>cũng đc</span>
                        </td>
                        <td className={cx('details-content-item')}>
                            <button className={cx('details-content-item-btn')}>Sửa</button>
                        </td>
                        <td className={cx('details-content-item')}>
                            <button className={cx('details-content-item-btn')}>Xóa</button>
                        </td>
                    </tr>
                </tbody>
                {/* <!-- End Item 2 --> */}
                {/* <!-- Begin Item 3--> */}
                <tbody className={cx('details-tbody')}>
                    <tr className={cx('details-content-list')}>
                        <td className={cx('details-content-item')}>3</td>
                        <td className={cx('details-content-item')}>ACER</td>
                        <td className={cx('details-content-item', 'details-content-item--maxwith')}>
                            <span>TUOILOL</span>
                        </td>
                        <td className={cx('details-content-item')}>
                            <button className={cx('details-content-item-btn')}>Sửa</button>
                        </td>
                        <td className={cx('details-content-item')}>
                            <button className={cx('details-content-item-btn')}>Xóa</button>
                        </td>
                    </tr>
                </tbody>
                {/* <!-- End Item 3 --> */}
                {/* <!-- End adminCategoriesTable --> */}
            </table>
            {/* <!--Begin Modal --> */}
            <div
                className={cx('modal', statusModal ? 'open' : '')}
                // lắng nge ra ngoài ; khi click vào khoảng không của modal
                // (ở ngoài cái ticket) sẽ ĐÓNG ticket lại
                // modal.addEventListener('click', hideBuyTickets);
                onClick={hideBuyTickets}
            >
                <div
                    className={cx('modal-papes')}
                    // ngừng việc nỗi bọt lại;  sẽ không đóng modal container lại nửa (tới đó nó bị công an chặn lại)
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className={cx('modal-header')}>
                        <h2 className={cx('modal__heading')}>Thêm danh mục</h2>
                        <FontAwesomeIcon
                            className={cx('modal-header-icon--close')}
                            // nge hành vi click vào button close
                            onClick={hideBuyTickets}
                            icon={faXmark}
                        />
                    </div>
                    <div className={cx('category-list')}>
                        <label htmlFor="" className={cx('input-label')}>
                            Tên danh mục
                        </label>
                        <input className={cx('input-item')} type="text" placeholder="Tên danh mục" />
                        <label htmlFor="" className={cx('input-label')}>
                            Mô tả danh mục
                        </label>
                        <textarea className={cx('input-item-description')} cols="54" rows="10"></textarea>
                    </div>
                    <button className={cx('btn')}>Save</button>
                </div>
            </div>
            {/* <!--End Modal --> */}
        </>
    );
}

export default AdminUser;
