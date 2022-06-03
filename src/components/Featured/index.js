import Products from '~/components/Products';
import styles from './Featured.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import * as httpRequest from '~/utils/httpRequest';
import * as searchServices from '~/services/searchServices';

const cx = classNames.bind(styles);

function Featured() {
    const [countProduct, setCountProduct] = useState([]);
    const [dataApi, setdataApi] = useState([]);

    const products = [
        { id: 1, count: 4 },
        { id: 2, count: 7 },
        { id: 3, count: 1 },
        { id: 4, count: 5 },
        { id: 5, count: 2 },
        { id: 6, count: 9 },
        { id: 7, count: 10, username: 'air-jordan-1-black-white' },
        { id: 8, count: 8 },
    ];
    // useEffect(() => {
    //     // const fetchApi = async () => {
    //     //     const result = await searchServices.search();
    //     //     setdataApi(result);
    //     // };
    //     // fetch('http://26.215.178.30/DACS/api/theloai')
    //     //     .then((res) => res.json())
    //     //     .then((result) => {
    //     //         console.log(result);
    //     //         setdataApi(result);
    //     //     });
    //     // fetchApi();
    // }, []);
    return (
        <div className={cx('row', 'features')}>
            <h1 className={cx('features_heading', 'l-12')}>Sản phẩm nổi bật</h1>
            <div className="row">
                {products
                    .sort((a, b) => b.count - a.count)
                    .map((product, index) => {
                        if (index < 4) {
                            return (
                                <div key={product.id} className="col l-3">
                                    <Products id={product.id} username={product.username} featured />
                                </div>
                            );
                        }
                    })}
            </div>
        </div>
    );
}

export default Featured;
