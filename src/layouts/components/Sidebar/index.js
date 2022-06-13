import { faAngleDown, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Breadcrumbs from '~/components/Breadcrumbs';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidebar({ children }) {
    const [brandData, setBrandData] = useState([]);
    useEffect(() => {
        axios.post('http://26.17.209.162/api/brand/get').then((res) => {
            setBrandData(res.data);
        });
    }, []);

    return (
        <div className={cx('row', 'app_content')}>
            <Breadcrumbs />
            <div className={cx('col', 'l-3')}>
                <div className={cx('category')}>
                    <h3 className={cx('category__heading')}>Thương hiệu </h3>
                    {brandData != 0 ? (
                        <ul className={cx('category-list')}>
                            <li className={cx('category-item')}>
                                <Link to={`/sneaker`} className={cx('category-item__link')}>
                                    Sneaker
                                </Link>
                            </li>
                            {brandData.map((brand) => {
                                return (
                                    <li className={cx('category-item')} key={brand.IDBRAND}>
                                        <Link to={`/${brand.BRANDNAME}`} className={cx('category-item__link')}>
                                            {brand.BRANDNAME}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <div className={cx('col', 'l-9')}>
                <div className={cx('filter')}>
                    <span className={cx('filter-label')}>Sắp xếp theo</span>
                    <button className={cx('filter-btn', 'btn')}>Phổ biến</button>
                    <button className={cx('filter-btn', 'btn', 'btn-primary')}>Mới nhất</button>
                    <button className={cx('filter-btn', 'btn')}>Bán chạy</button>
                    <div className={cx('select-input')}>
                        <span className={cx('select-input__label')}>Giá</span>
                        <FontAwesomeIcon icon={faAngleDown} className={cx('select-input__icon')} />

                        <ul className={cx('select-input__list')}>
                            <li className={cx('select-input__item')}>
                                <a href="" className={cx('select-input__link')}>
                                    Thấp đến cao{' '}
                                </a>
                            </li>
                            <li className={cx('select-input__item')}>
                                <a href="" className={cx('select-input__link')}>
                                    Cao đến thấp{' '}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={cx('filter__page')}>
                        <span className={cx('filter__page-num')}>
                            <span className={cx('filter__page-current')}>1</span>/14
                        </span>
                        <div className={cx('filter__page-control')}>
                            <a href="" className={cx('filter__page-btn', 'filter__page-btn--disabled ')}>
                                <FontAwesomeIcon
                                    icon={faAngleLeft}
                                    className={cx('filter__page-icon')}
                                ></FontAwesomeIcon>
                            </a>
                            <a href="" className={cx('filter__page-btn')}>
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    className={cx('filter__page-icon')}
                                ></FontAwesomeIcon>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Product */}
                {children}
            </div>
        </div>
    );
}

export default Sidebar;
