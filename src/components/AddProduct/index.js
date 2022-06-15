import classNames from 'classnames/bind';
import styles from './AddProduct.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faChevronDown, faChevronUp, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useReducer, useEffect } from 'react';
import axios from 'axios';
import config from '~/config';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { initState, productDetailsReducer } from '~/reducers/productReducers';
import { setID, setName, setPrice, setDescription, setImg, deleteImg, setBrand } from '~/actions/productActions';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AddProduct() {
    const [state, dispatch] = useReducer(productDetailsReducer, initState);
    const [brandData, setBrandData] = useState([]);
    const [brandName, setBrandName] = useState('');
    let location = useLocation();
    let navigate = useNavigate();

    console.log(state);
    useEffect(() => {
        try {
            if (location.state) {
                if (location.state.data) {
                    dispatch(setID(location.state.data.SHOESID));
                    dispatch(setDescription(location.state.data.SHOESDESCRIPTION));
                    dispatch(setPrice(location.state.data.SHOESPRICE));
                    dispatch(setName(location.state.data.SHOESNAME));
                    dispatch(setBrand(location.state.data.IDBRAND));
                    setBrandName(location.state.data.BRANDNAME);
                    axios
                        .post('http://26.17.209.162/api/image/post', {
                            type: 'get',
                            data: { IMAGEID: location.state.data.IMAGEID },
                        })
                        .then((res) => {
                            var array = Object.keys(res.data[0])
                                .filter((key) => key !== 'IMAGEID')
                                .map(function (key) {
                                    return res.data[0][key];
                                });

                            if (array[0] != '') {
                                dispatch(setImg(array[0]));
                            }
                            if (array[1] != '') {
                                dispatch(setImg(array[1]));
                            }
                            if (array[2] != '') {
                                dispatch(setImg(array[2]));
                            }

                            if (array[3] != '') {
                                dispatch(setImg(array[3]));
                            }
                        });
                }
            }
            axios.post('http://26.17.209.162/api/brand/get').then((res) => {
                setBrandData(res.data);
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleSubmitUpdate = async (e) => {
        e.preventDefault();
        await handleSubmitUpdateProduct({
            state,
        });
    };

    const handleSubmitUpdateProduct = (data) => {
        try {
            axios
                .post('http://26.17.209.162/api/shoes/post', {
                    type: 'update',
                    data: state,
                })
                .then((res) => {
                    console.log(res.data);
                    if (res.data == 1) {
                        alert('Cập nhật sản phẩm thành công !!!');
                        navigate('/admin/shoes');
                    } else if (res.data == -1) {
                        alert('Cập nhật sản phẩm thất bại !!!');
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleCreateProduct({
            state,
        });
    };

    const handleCreateProduct = (data) => {
        try {
            axios
                .post('http://26.17.209.162/api/shoes/post', {
                    type: 'create',
                    data: state,
                })
                .then((res) => {
                    if (res.data == 1) {
                        alert('Thêm sản phẩm thành công !!!');
                        navigate('/admin/shoes');
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };

    // Convert input sang base 64
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        dispatch(setImg(base64));
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
                    <h2 className={cx('heading')}>Thêm sản phẩm</h2>
                    <Button
                        rightIcon={<FontAwesomeIcon icon={faXmark} />}
                        to={config.routes.adminProduct}
                        className={cx('close-btn')}
                    >
                        Hủy
                    </Button>
                </div>
                <form className={cx('product')} onSubmit={location.state ? handleSubmitUpdate : handleSubmit}>
                    <div className={cx('group')}>
                        <div className={cx('info')}>
                            <label htmlFor="idproduct" className={cx('info-heading')}>
                                Mã sản phẩm
                            </label>
                            <input
                                disabled={location.state ? true : false}
                                className={cx('info-txt')}
                                id="idproduct"
                                type="text"
                                required
                                value={location.state ? state.SHOESID : null}
                                placeholder="Mã sản phẩm"
                                onChange={(e) => dispatch(setID(e.target.value))}
                            />
                        </div>
                        <div className={cx('info')}>
                            <label htmlFor="name" className={cx('info-heading')}>
                                Tên sản phẩm
                            </label>
                            <input
                                className={cx('info-txt')}
                                type="text"
                                id="name"
                                required
                                value={location.state ? state.SHOESNAME : null}
                                placeholder="Tên sản phẩm"
                                onChange={(e) => dispatch(setName(e.target.value))}
                            />
                        </div>
                    </div>
                    <div className={cx('group')}>
                        <div className={cx('info')}>
                            <label htmlFor="price" className={cx('info-heading')}>
                                Giá tiền
                            </label>
                            <input
                                className={cx('info-txt')}
                                type="text"
                                id="price"
                                required
                                value={location.state ? state.SHOESPRICE : null}
                                placeholder="Giá tiền"
                                onChange={(e) => dispatch(setPrice(e.target.value))}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                            />
                        </div>
                        <div className={cx('select-box')}>
                            <input type="checkbox" className={cx('select_view')} />
                            <div className={cx('select-button')}>
                                <div className={cx('selected-value')}>
                                    <span>
                                        {location.state
                                            ? brandName
                                            : brandData != 0
                                            ? 'Chọn thương hiệu'
                                            : 'Chưa có thương hiệu'}
                                    </span>
                                </div>
                                <div className={cx('chevrons')}>
                                    <FontAwesomeIcon className={cx('action-show')} icon={faChevronUp} />
                                    <FontAwesomeIcon className={cx('action-show')} icon={faChevronDown} />
                                </div>
                            </div>
                            <div className={cx('options')}>
                                {brandData != 0 ? (
                                    brandData.map((brand) => {
                                        return (
                                            <div className={cx('option')} key={brand.IDBRAND}>
                                                <input
                                                    className={cx('s-c', 'top')}
                                                    type="radio"
                                                    name="brand"
                                                    value={brand.IDBRAND}
                                                    required
                                                    onChange={(e) => dispatch(setBrand(e.target.value))}
                                                />
                                                <input
                                                    className={cx('s-c', 'bottom')}
                                                    type="radio"
                                                    required
                                                    name="brand"
                                                    value={brand.IDBRAND}
                                                    onChange={(e) => dispatch(setBrand(e.target.value))}
                                                />
                                                <Image
                                                    src={brand.IMAGEBRAND != null ? brand.IMAGEBRAND : ''}
                                                    className={cx('logo_brand')}
                                                ></Image>
                                                <span className={cx('item_label')}>{brand.BRANDNAME}</span>
                                                <span className={cx('opt-val')}>{brand.BRANDNAME}</span>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <></>
                                )}
                                <div className={cx('option-bg')}></div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('description')}>
                        <div className={cx('description_item')}>
                            <h2 className={cx('item_heading')}>Mô tả sản phẩm</h2>
                            <CKEditor
                                className={cx('item_content')}
                                editor={ClassicEditor}
                                data={location.state ? location.state.data.SHOESDESCRIPTION : ''}
                                onChange={(e, editor) => {
                                    const data = editor.getData();
                                    dispatch(setDescription(data));
                                }}
                            />
                        </div>
                    </div>

                    <div className={cx('product_img')}>
                        <div className={cx('img_item')}>
                            <div className={cx('file_upload')}>
                                <input
                                    className={cx('upload')}
                                    type="file"
                                    disabled={state.SHOESIMG[0]}
                                    onChange={(e) => uploadImage(e)}
                                />
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className={cx(state.SHOESIMG[0] ? 'fadeout' : '')}
                                ></FontAwesomeIcon>
                                <div className={cx('img_box', state.SHOESIMG[0] ? 'fadein' : '')}>
                                    <img
                                        alt=""
                                        className={cx('img')}
                                        src={state.SHOESIMG[0] ? state.SHOESIMG[0] : ''}
                                    />
                                    <div className={cx('delete_box', state.SHOESIMG[0] ? 'active' : '')}>
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            className={cx('btn_delete')}
                                            onClick={(e) => dispatch(deleteImg(state.SHOESIMG[0]))}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('img_item')}>
                            <div className={cx('file_upload')}>
                                <input
                                    className={cx('upload')}
                                    type="file"
                                    disabled={state.SHOESIMG[1]}
                                    onChange={(e) => uploadImage(e)}
                                />
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className={cx(state.SHOESIMG[1] ? 'fadeout' : '')}
                                ></FontAwesomeIcon>
                                <div className={cx('img_box', state.SHOESIMG[1] ? 'fadein' : '')}>
                                    <img
                                        alt=""
                                        className={cx('img')}
                                        src={state.SHOESIMG[1] ? state.SHOESIMG[1] : ''}
                                    />
                                    <div className={cx('delete_box', state.SHOESIMG[1] ? 'active' : '')}>
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            className={cx('btn_delete')}
                                            onClick={(e) => dispatch(deleteImg(state.SHOESIMG[1]))}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('img_item')}>
                            <div className={cx('file_upload')}>
                                <input
                                    className={cx('upload')}
                                    type="file"
                                    disabled={state.SHOESIMG[2]}
                                    onChange={(e) => uploadImage(e)}
                                />
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className={cx(state.SHOESIMG[2] ? 'fadeout' : '')}
                                ></FontAwesomeIcon>
                                <div className={cx('img_box', state.SHOESIMG[2] ? 'fadein' : '')}>
                                    <img
                                        alt=""
                                        className={cx('img')}
                                        src={state.SHOESIMG[2] ? state.SHOESIMG[2] : ''}
                                    />
                                    <div className={cx('delete_box', state.SHOESIMG[2] ? 'active' : '')}>
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            className={cx('btn_delete')}
                                            onClick={(e) => dispatch(deleteImg(state.SHOESIMG[2]))}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('img_item')}>
                            <div className={cx('file_upload')}>
                                <input
                                    className={cx('upload')}
                                    type="file"
                                    disabled={state.SHOESIMG[3]}
                                    onChange={(e) => uploadImage(e)}
                                />
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className={cx(state.SHOESIMG[3] ? 'fadeout' : '')}
                                ></FontAwesomeIcon>
                                <div className={cx('img_box', state.SHOESIMG[3] ? 'fadein' : '')}>
                                    <img
                                        alt=""
                                        className={cx('img')}
                                        src={state.SHOESIMG[3] ? state.SHOESIMG[3] : ''}
                                    />
                                    <div className={cx('delete_box', state.SHOESIMG[3] ? 'active' : '')}>
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            className={cx('btn_delete')}
                                            onClick={(e) => dispatch(deleteImg(state.SHOESIMG[3]))}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={cx('btn_add')}>Save</button>
                </form>
            </div>
        </>
    );
}

export default AddProduct;
