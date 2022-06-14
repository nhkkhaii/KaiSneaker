import classNames from 'classnames/bind';
import styles from './Brands.module.scss';
import Image from '~/components/Image';
import { useState, useEffect } from 'react';
import axios from 'axios';
const cx = classNames.bind(styles);

function Brands() {
    const [brandData, setBrandData] = useState([]);
    useEffect(() => {
        try {
            axios.get('http://26.17.209.162/api/brand/get').then((res) => setBrandData(res.data));
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className={cx('brand', 'row')}>
            <div className={cx('col', 'l-12', 'brand_item')}>
                {brandData != 0 ? (
                    brandData.map((brand) => (
                        <Image
                            src={brand.IMAGEBRAND}
                            alt={brand.BRANDNAME}
                            key={brand.IDBRAND}
                            className={cx('brand_item-logo')}
                        />
                    ))
                ) : (
                    <></>
                )}
                {brandData != 0 ? (
                    brandData.map((brand) => (
                        <Image
                            src={brand.IMAGEBRAND}
                            alt={brand.BRANDNAME}
                            key={brand.IDBRAND}
                            className={cx('brand_item-logo')}
                        />
                    ))
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default Brands;
