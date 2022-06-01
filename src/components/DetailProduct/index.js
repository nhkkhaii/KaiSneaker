import Breadcrumbs from '~/components/Breadcrumbs';
import { useLocation } from 'react-router-dom';
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './DetailProduct.module.scss';

const cx = classNames.bind(styles);

const fadeImages = [
    {
        url: 'https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png',
        caption: 'First Slide',
    },
    {
        url: 'https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png',
        caption: 'First Slide',
    },
    {
        url: 'https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png',

        caption: 'First Slide',
    },
    {
        url: 'https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png',

        caption: 'First Slide',
    },
];

function DetailProduct({ ...props }) {
    let location = useLocation();
    console.log(location);
    return (
        <div className="grid wide">
            <div className="row">
                <Breadcrumbs />
                <div className={cx('slide-container', 'col', 'l-5')}>
                    <Fade>
                        {fadeImages.map((fadeImage, index) => (
                            <div className="each-fade" key={index}>
                                <div className={cx('image-container')}>
                                    <Image className={cx('image')} src={fadeImage.url} alt={fadeImage.caption} />
                                </div>
                            </div>
                        ))}
                    </Fade>
                </div>
                <div className={cx('col', 'l-7', 'info')}>
                    <h2 className={cx('info-heading')}>{location.state.data}</h2>
                    <p className={cx('info-money')}>2.000.000đ</p>
                    <input type="number" className={cx('info-quantity')} />

                    <div className={cx('info-btn')}>
                        <button className={cx('info-btn-bag')}>Thêm vào giỏ hàng</button>
                        <button className={cx('info-btn-buy')}>Mua ngay</button>
                    </div>
                </div>
            </div>
            <div className={cx('row', 'description')}>
                <div className={cx('col', 'l-8', 'describe')}>
                    <h2 className={cx('describe_heading')}>Mô tả sản phẩm</h2>
                    <div className={cx('describe_content')}>
                        <h3 className={cx('describe_content-name')}>Nike Air Jordan 1 Retro High x Off-White</h3>
                        <div className={cx('describe_content-summary')}>
                            <h3 className={cx('describe_content-summary-heading')}>Sơ lược sản phẩm</h3>
                            <p className={cx('describe_content-summary-content')}>
                                Lenovo là một trong những hãng điện tử sản xuất máy tính mang thương hieuj toàn cầu nổi
                                tiếng Lenovo là một trong những hãng điện tử sản xuất máy tính mang thương hieuj toàn
                                cầu nổi tiếng Lenovo là một trong những hãng điện tử sản xuất máy tính mang thương hieuj
                                toàn cầu nổi tiếng Lenovo là một trong những hãng điện tử sản xuất máy tính mang thương
                                hieuj toàn cầu nổi tiếng Lenovo là một trong những hãng điện tử sản xuất máy tính mang
                                thương hieuj toàn cầu nổi tiếng Lenovo là một trong những hãng điện tử sản xuất máy tính
                                mang thương hieuj toàn cầu nổi tiếng Lenovo là một trong những hãng điện tử sản xuất máy
                                tính mang thương hieuj toàn cầu nổi tiếng Lenovo là một trong những hãng điện tử sản
                                xuất máy tính mang thương hieuj toàn cầu nổi tiếng
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx('col', 'l-4', 'detailed_informations')}>
                    <h2 className={cx('detailed_informations-heading')}>Thông tin chi tiết</h2>
                    <div className={cx('row', 'details')}>
                        <div className={cx('col', 'l-4', 'details_name')}>
                            <p className={cx('details_name-product')}>Thương hiệu</p>
                            <p className={cx('details_name-product')}>Thương hiệu</p>
                            <p className={cx('details_name-product')}>Thương hiệu</p>
                        </div>
                        <div className={cx('col', 'l-8', 'details_info')}>
                            <p className={cx('details_info-product')}>Lenovo</p>
                            <p className={cx('details_info-product')}>Lenovo</p>
                            <p className={cx('details_info-product')}>Lenovo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailProduct;
