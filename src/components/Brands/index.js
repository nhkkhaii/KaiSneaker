import classNames from 'classnames/bind';
import styles from './Brands.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const brands = [
    {
        id: '1',
        title: 'Nike',
        image: images.nike,
    },
    {
        id: '2',
        title: 'Adidas',
        image: images.adidas,
    },
    {
        id: '3',
        title: 'MLB',
        image: images.mlb,
    },
];
function Brands() {
    return (
        <div className={cx('brand', 'row')}>
            <div className={cx('col', 'l-12', 'brand_item')}>
                {brands.map((brand) => (
                    <Image src={brand.image} alt={brand.title} key={brand.id} className={cx('brand_item-logo')} />
                ))}
                {brands.map((brand) => (
                    <Image src={brand.image} alt={brand.title} key={brand.id} className={cx('brand_item-logo')} />
                ))}
            </div>
        </div>
    );
}

export default Brands;
