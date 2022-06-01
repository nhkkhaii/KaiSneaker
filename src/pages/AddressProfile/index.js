import classNames from 'classnames/bind';
import styles from './AddressProfile.module.scss';
import AddressItem from '~/components/AddressItem';

const cx = classNames.bind(styles);

function AddressProfile() {
    return (
        <>
            <h2 className={cx('title')}>Địa chỉ giao hàng</h2>
            <AddressItem />
            <AddressItem />

            <div className={cx('action')}>
                <button className={cx('add_btn')}>Thêm địa chỉ</button>
            </div>
        </>
    );
}

export default AddressProfile;
