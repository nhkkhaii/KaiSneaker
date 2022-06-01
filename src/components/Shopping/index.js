import Image from '~/components/Image';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Shopping.module.scss';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);
function Shipping() {
    return (
        <div className={cx('grid', 'wide')}>
            <div className={cx('row', 'bag')}>
                <div className={cx('col', 'l-8', 'detail')}>
                    <h2 className={cx('detail_heading')}>Giỏ hàng</h2>
                    <div className={cx('row', 'item')}>
                        <div className={cx('col', 'l-3', 'item_box')}>
                            <img
                                className={cx('item_img')}
                                src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png"
                                alt="Nike-item"
                            />
                        </div>
                        <div className={cx('col', 'l-9', 'info')}>
                            <div className={cx('row')}>
                                <div className={cx('col', 'l-8')}>
                                    <p className={cx('item_name')}>Air Jordan 1 High Retro Mocha</p>
                                    <div className={cx('brand')}>Nike</div>
                                    <div className={cx('options')}>
                                        <div className={cx('size')}>
                                            <label className={cx('size_heading')}>Size</label>
                                            <select className={cx('size_option')}>
                                                <option value="1">41</option>
                                                <option value="2" selected>
                                                    42
                                                </option>
                                                <option value="3">43</option>
                                                <option value="4">44.5</option>
                                            </select>
                                        </div>
                                        <div className={cx('quantity')}>
                                            <label className={cx('quantity_heading')}>Số lượng</label>
                                            <select className={cx('quantity_option')}>
                                                <option value="1">41</option>
                                                <option value="2">42</option>
                                                <option value="3">43</option>
                                                <option value="4">44.5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('col', 'l-4')}>
                                    <p className={cx('item_money')}>2.000.000đ</p>
                                </div>
                            </div>
                            <div className={cx('action')}>
                                <FontAwesomeIcon icon={faTrashAlt} className={cx('remove')} />
                            </div>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className={cx('row', 'item')}>
                        <div className={cx('col', 'l-3', 'item_box')}>
                            <img
                                className={cx('item_img')}
                                src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png"
                                alt="Nike-item"
                            />
                        </div>

                        <div className={cx('col', 'l-9', 'info')}>
                            <div className={cx('row')}>
                                <div className={cx('col', 'l-8')}>
                                    <p className={cx('item_name')}>Air Jordan 1 High Retro Mocha</p>
                                    <div className={cx('brand')}>Nike</div>
                                    <div className={cx('options')}>
                                        <div className={cx('size')}>
                                            <label className={cx('size_heading')}>Size</label>
                                            <select className={cx('size_option')}>
                                                <option value="1">41</option>
                                                <option value="2" selected>
                                                    42
                                                </option>
                                                <option value="3">43</option>
                                                <option value="4">44.5</option>
                                            </select>
                                        </div>
                                        <div className={cx('quantity')}>
                                            <label className={cx('quantity_heading')}>Số lượng</label>
                                            <select className={cx('quantity_option')}>
                                                <option value="1">41</option>
                                                <option value="2">42</option>
                                                <option value="3">43</option>
                                                <option value="4">44.5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('col', 'l-4')}>
                                    <p className={cx('item_money')}>2.000.000đ</p>
                                </div>
                            </div>
                            <div className={cx('action')}>
                                <FontAwesomeIcon icon={faTrashAlt} className={cx('remove')} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('col', 'l-4', 'summary')}>
                    <h2 className={cx('summary-heading')}>Sơ lược</h2>
                    <div className={cx('subtotal', 'row')}>
                        <p className={cx('subtotal-title', 'col', 'l-8')}>Giá tiền</p>
                        <p className={cx('subtotal-money', 'col', 'l-4')}>2.000.000đ</p>
                    </div>
                    <div className={cx('shipping', 'row')}>
                        <p className={cx('shipping-title', 'col', 'l-8')}>Giao hàng ước tính</p>
                        <div className={cx('shipping-money', 'col', 'l-4')}>2.000.000đ</div>
                    </div>
                    <div className={cx('total', 'row')}>
                        <p className={cx('total-title', 'col', 'l-8')}>Tổng tiền</p>
                        <div className={cx('total-money', 'col', 'l-4')}>4.000.000đ</div>
                    </div>

                    <Button to="/@nhkkhaii/checkout" className={cx('checkout')}>
                        Thanh toán
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Shipping;
