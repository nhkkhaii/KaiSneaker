import classNames from 'classnames/bind';
import styles from './UpdateBrand.module.scss';
import { useLocation } from 'react-router-dom';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useState, useReducer, useEffect } from 'react';
import config from '~/config';
import { useNavigate } from 'react-router-dom';
import { initStateBrand, detailBrandReducer } from '~/reducers/brandReducers';
import { setBrandName, setDesBrand, addBrand, setImgBrand, deleteImgBrand } from '~/actions/brandActions';

const cx = classNames.bind(styles);

function UpdateBrand({}) {
    let location = useLocation();
    let navigate = useNavigate();

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
        try {
            axios
                .post('http://26.17.209.162/api/brand/post', {
                    type: 'update',
                    data: stateBrand,
                })
                .then((res) => {
                    // console.log(res.data);
                    if (res.data == 1) {
                        alert('Cập nhật thương hiệu thành công!!');
                        navigate('/admin/category');
                    } else if (res.data == -1) {
                        alert('Cập nhật thương hiệu thất bại!!');
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };

    // check coi có thay đổi dữ liệu không
    const checkChangeDataBrand = () => {
        if (JSON.stringify(brandData[0]) === JSON.stringify(stateBrand)) {
            return true;
        } else {
            return false;
        }
    };

    // Convert input sang base 64
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        dispatchBrand(setImgBrand(base64));
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <h2 className={cx('heading')}>Cập nhật thương hiệu</h2>
                    <Button
                        to={config.routes.adminCategory}
                        rightIcon={<FontAwesomeIcon icon={faXmark} />}
                        className={cx('btn_cancel')}
                    >
                        Hủy
                    </Button>
                </div>

                <div className={cx('update_form')}>
                    <form className={cx('category-list')} onSubmit={handleSubmit}>
                        <div className={cx('product_img')}>
                            <div className={cx('img_item')}>
                                <div className={cx('file_upload')}>
                                    <input
                                        className={cx('upload')}
                                        type="file"
                                        disabled={stateBrand.IMAGEBRAND}
                                        onChange={(e) => uploadImage(e)}
                                    />
                                    <FontAwesomeIcon
                                        icon={faArrowUp}
                                        className={cx(stateBrand.IMAGEBRAND ? 'fadeout' : '')}
                                    ></FontAwesomeIcon>
                                    <div className={cx('img_box', stateBrand.IMAGEBRAND ? 'fadein' : '')}>
                                        <img
                                            alt={stateBrand.BRANDNAME ? stateBrand.BRANDNAME : ''}
                                            className={cx('img')}
                                            src={stateBrand.IMAGEBRAND ? stateBrand.IMAGEBRAND : ''}
                                        />
                                        <div className={cx('delete_box', stateBrand.IMAGEBRAND ? 'active' : '')}>
                                            <FontAwesomeIcon
                                                icon={faXmark}
                                                className={cx('btn_delete')}
                                                onClick={(e) => dispatchBrand(deleteImgBrand(stateBrand.IMAGEBRAND))}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

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
