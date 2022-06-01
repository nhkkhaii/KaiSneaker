import classNames from 'classnames/bind';
import styles from './AddressItem.module.scss';

const cx = classNames.bind(styles);

function AddressItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('name')}>Hoàng Khải</div>
                <div className={cx('address')}>193/68 Khóm Tân Quới, Mỹ Quý, Long Xuyên Long Xuyên, An Giang 90110</div>
                <div className={cx('action')}>
                    <button className={cx('update_btn')}>Sữa</button>
                    <button className={cx('delete_btn')}>Xóa</button>
                </div>
            </div>
        </div>
    );
}

export default AddressItem;
