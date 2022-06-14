import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

function ProductItem({ BRANDNAME, IMAGESHOES1, SHOESNAME, SHOESPRICE, SHOESID, SHOESDESCRIPTION, imgProducts }) {
    return (
        <Link
            to={`/sneaker/${SHOESID}`}
            state={{
                data: {
                    SHOESID: SHOESID,
                    SHOESNAME: SHOESNAME,
                    SHOESDESCRIPTION: SHOESDESCRIPTION,
                    BRANDNAME: BRANDNAME,
                    SHOESPRICE: SHOESPRICE,
                    IMAGE: imgProducts,
                },
            }}
            className={cx('wrapper')}
        >
            <Image className={cx('avatar')} src={IMAGESHOES1} alt={SHOESNAME} />
            <div className={cx('info')}>
                <div className={cx('box_name')}>
                    <h4 className={cx('name')}>
                        <span>{SHOESNAME} </span>
                    </h4>
                    <span className={cx('brandname')}>{BRANDNAME}</span>
                </div>
                <div className={cx('box_price')}>
                    <span className={cx('price')}>
                        <NumberFormat value={SHOESPRICE} displayType={'text'} thousandSeparator={true} suffix={'đ'} />
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default ProductItem;
