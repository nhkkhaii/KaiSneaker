import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './ShoppingItem.module.scss';
import NumberFormat from 'react-number-format';
import axios from 'axios';

const cx = classNames.bind(styles);

function ShoppingItem({
    IMAGESHOES1,
    SHOESNAME,
    BRANDNAME,
    SIZEEUR,
    SHOESPRICE,
    QUANTITY,
    IDACCOUNT,
    IDSIZE,
    SHOESID,
    QUANTITYINSTOCK,
}) {
    const deleteItem = async () => {
        try {
            if (window.confirm('Bạn có chắc chắc muốn xóa sản phẩm khỏi giỏ hàng không ?')) {
                await axios
                    .post('http://26.17.209.162/api/shoppingcart/post', {
                        type: 'delete',
                        data: { IDACCOUNT: IDACCOUNT, IDSIZE: IDSIZE, SHOESID: SHOESID },
                    })
                    .then((res) => {
                        if ((res.data != 0) & (res.data != -1)) {
                            alert('Xóa sản phẩm khỏi giỏ hàng thành công');
                            window.location.reload();
                        } else {
                            alert('Xóa sản phẩm khỏi giỏ hàng thất bại');
                        }
                    });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const quantityUp = async () => {
        if (Number(QUANTITY) < Number(QUANTITYINSTOCK)) {
            await axios.post('http://26.17.209.162/api/shoppingcart/post', {
                type: 'update',
                data: { IDACCOUNT: IDACCOUNT, IDSIZE: IDSIZE, SHOESID: SHOESID, QUANTITY: Number(QUANTITY) + 1 },
            });
        }
    };

    const quantityDown = async () => {
        if (Number(QUANTITY) > 1) {
            await axios.post('http://26.17.209.162/api/shoppingcart/post', {
                type: 'update',
                data: { IDACCOUNT: IDACCOUNT, IDSIZE: IDSIZE, SHOESID: SHOESID, QUANTITY: Number(QUANTITY) - 1 },
            });
        }
    };
    return (
        <div className={cx('row', 'item')}>
            <div className={cx('col', 'l-3', 'item_box')}>
                <img className={cx('item_img')} src={IMAGESHOES1} alt={SHOESNAME} />
            </div>
            <div className={cx('col', 'l-9', 'info')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-8')}>
                        <p className={cx('item_name')}>{SHOESNAME}</p>
                        <div className={cx('brand')}>{BRANDNAME}</div>
                        <div className={cx('options')}>
                            <div className={cx('size')}>
                                <label className={cx('size_heading')}>Size</label>
                                <p className={cx('size_option')}>{SIZEEUR}</p>
                            </div>
                            <div className={cx('info_quantity')}>
                                <span className={cx('minus')} onClick={quantityDown}>
                                    -
                                </span>
                                <span className={cx('num')}>
                                    {Number(QUANTITY) < 10 ? '0' + QUANTITY : Number(QUANTITY)}
                                </span>
                                <span className={cx('plus')} onClick={quantityUp}>
                                    +
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'l-4')}>
                        <p className={cx('item_money')}>
                            <span>Giá : </span>
                            <NumberFormat
                                value={SHOESPRICE * QUANTITY}
                                displayType={'text'}
                                thousandSeparator={true}
                                suffix={'đ'}
                            />
                        </p>
                    </div>
                </div>
                <div className={cx('action')}>
                    <FontAwesomeIcon icon={faTrashAlt} className={cx('remove')} onClick={deleteItem} />
                </div>
            </div>
        </div>
    );
}

export default ShoppingItem;
