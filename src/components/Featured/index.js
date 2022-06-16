import Products from '~/components/Products';
import styles from './Featured.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function Featured() {
    const [countProduct, setCountProduct] = useState([]);

    useEffect(() => {
        try {
            axios.post('http://26.17.209.162/api/shoes/hotproduct').then((res) => setCountProduct(res.data));
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className={cx('row', 'features')}>
            <h1 className={cx('features_heading', 'col', 'l-12')}>Sản phẩm nổi bật</h1>
            <div className={cx('row', 'item', 'l-12', 'col')}>
                {countProduct ? (
                    countProduct
                        .sort((a, b) => b.TOTAL - a.TOTAL)
                        .map((product, index) => {
                            if (index < 4) {
                                return (
                                    <div key={product.SHOESID} className={cx('col', 'l-3')}>
                                        <Products
                                            id={product.SHOESID}
                                            name={product.SHOESNAME}
                                            price={product.SHOESPRICE}
                                            imgID={product.IMAGEID}
                                            description={product.SHOESDESCRIPTION}
                                            brand={product.BRANDNAME}
                                            featured
                                        />
                                    </div>
                                );
                            }
                        })
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default Featured;
