import Products from '~/components/Products';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './Sneaker.module.scss';
const cx = classNames.bind(styles);

function Sneaker() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [sort, setSort] = useState('');

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()

    const setSortPriceLowToHigh = () => {
        setSort('price_low_to_high');
    };

    const setSortPriceHighToLow = () => {
        setSort('price_high_to_low');
    };

    useEffect(() => {
        axios
            .get('http://26.17.209.162/api/shoes/get')
            .then(async (res) => {
                setItems(res.data);
                setIsLoaded(true);
                setItems(res.data);
            })
            .catch((error) => {
                setIsLoaded(true);
                setError(error);
            });
    }, []);
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <div className={cx('filter')}>
                    <span className={cx('filter-label')}>Sắp xếp theo</span>

                    <div className={cx('select-input')}>
                        <span className={cx('select-input__label')}>Giá</span>
                        <FontAwesomeIcon icon={faAngleDown} className={cx('select-input__icon')} />

                        <ul className={cx('select-input__list')}>
                            <li className={cx('select-input__item')}>
                                <div className={cx('select-input__link')} onClick={setSortPriceLowToHigh}>
                                    Thấp đến cao
                                </div>
                            </li>
                            <li className={cx('select-input__item')}>
                                <div className={cx('select-input__link')} onClick={setSortPriceHighToLow}>
                                    Cao đến thấp
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('row')}>
                    {items ? (
                        sort == 'price_low_to_high' ? (
                            items
                                .sort((a, b) => a.SHOESPRICE - b.SHOESPRICE)
                                .map((item) => (
                                    <div className={cx('col', 'l-3')} key={item.SHOESID}>
                                        <Products
                                            id={item.SHOESID}
                                            name={item.SHOESNAME}
                                            price={item.SHOESPRICE}
                                            imgID={item.IMAGEID}
                                            description={item.SHOESDESCRIPTION}
                                            brand={item.BRANDNAME}
                                        />
                                    </div>
                                ))
                        ) : sort == 'price_high_to_low' ? (
                            items
                                .sort((a, b) => b.SHOESPRICE - a.SHOESPRICE)
                                .map((item) => (
                                    <div className={cx('col', 'l-3')} key={item.SHOESID}>
                                        <Products
                                            id={item.SHOESID}
                                            name={item.SHOESNAME}
                                            price={item.SHOESPRICE}
                                            imgID={item.IMAGEID}
                                            description={item.SHOESDESCRIPTION}
                                            brand={item.BRANDNAME}
                                        />
                                    </div>
                                ))
                        ) : (
                            items.map((item) => (
                                <div className={cx('col', 'l-3')} key={item.SHOESID}>
                                    <Products
                                        id={item.SHOESID}
                                        name={item.SHOESNAME}
                                        price={item.SHOESPRICE}
                                        imgID={item.IMAGEID}
                                        description={item.SHOESDESCRIPTION}
                                        brand={item.BRANDNAME}
                                    />
                                </div>
                            ))
                        )
                    ) : (
                        <></>
                    )}
                </div>
            </>
        );
    }
}

export default Sneaker;
