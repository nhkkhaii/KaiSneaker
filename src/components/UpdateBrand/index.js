import classNames from 'classnames/bind';
import styles from './UpdateBrand.module.scss';
import { useLocation } from 'react-router-dom';
import Button from '~/components/Button';

import axios from 'axios';
import { useState, useReducer, useEffect } from 'react';
import config from '~/config';

import { initStateBrand, detailBrandReducer } from '~/reducers/brandReducers';
import { setBrandName, setDesBrand, addBrand } from '~/actions/brandActions';

const cx = classNames.bind(styles);

function UpdateBrand({}) {
    let location = useLocation();

    const [stateBrand, dispatchBrand] = useReducer(detailBrandReducer, initStateBrand);
    const [brandData, setBrandData] = useState([location.state.data]);

    useEffect(() => {
        dispatchBrand(addBrand(location.state.data));
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleSubmitUpdateBrand({
            stateBrand,
        });
    };

    const handleSubmitUpdateBrand = (data) => {
        axios
            .post('http://26.17.209.162/api/brand/post', {
                type: 'update',
                data: stateBrand,
            })
            .then((response) => {
                console.log(response);
            });
    };

    // check coi có thay đổi dữ liệu không
    const checkChangeDataBrand = () => {
        if (JSON.stringify(brandData[0]) === JSON.stringify(stateBrand)) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <h2 className={cx('heading')}>Cập nhật thương hiệu</h2>
                    <Button to={config.routes.adminCategory} className={cx('btn_cancel')}>
                        Hủy
                    </Button>
                </div>

                <div className={cx('update_form')}>
                    <form className={cx('category-list')} onSubmit={handleSubmit}>
                        <div className={cx('category_box')}>
                            <div className={cx('category-item')}>
                                <label htmlFor="" className={cx('input-label')}>
                                    Tên danh mục
                                </label>
                                <input
                                    className={cx('input-item')}
                                    type="text"
                                    value={stateBrand.BRANDNAME}
                                    placeholder="Tên danh mục"
                                    onChange={(e) => dispatchBrand(setBrandName(e.target.value))}
                                />
                            </div>
                            <div className={cx('category-item')}>
                                <label htmlFor="" className={cx('input-label')}>
                                    Mô tả danh mục
                                </label>
                                <textarea
                                    className={cx('input-item-description')}
                                    cols="54"
                                    value={stateBrand.DESCRIPTIONBRAND}
                                    rows="10"
                                    onChange={(e) => dispatchBrand(setDesBrand(e.target.value))}
                                ></textarea>
                            </div>
                        </div>
                        <button className={cx('btn_update')} disabled={checkChangeDataBrand()}>
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UpdateBrand;
