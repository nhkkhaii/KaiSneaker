import classNames from 'classnames/bind';
import styles from './AddProduct.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useReducer } from 'react';
import axios from 'axios';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { initState, productDetailsReducer } from '~/reducers/productReducers';
import { setID, setName, setPrice, setDescription, setImg, deleteImg } from '~/actions/productActions';

const cx = classNames.bind(styles);

function AddProduct() {
    const [state, dispatch] = useReducer(productDetailsReducer, initState);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await handleSubmitLogin({
            state,
        });
    };

    const handleSubmitLogin = (data) => {
        axios
            .post('http://localhost/api/khachhang/post', {
                type: 'create',
                data: state,
            })
            .then((response) => {
                console.log(response);
            });
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
    console.log(state);
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <h2 className={cx('heading')}>Thêm sản phẩm</h2>
                    <Button
                        rightIcon={<FontAwesomeIcon icon={faXmark} />}
                        to={'/admin/product'}
                        className={cx('close-btn')}
                    >
                        Hủy
                    </Button>
                </div>
                <form className={cx('product')} onSubmit={handleSubmit}>
                    <div className={cx('group')}>
                        <div className={cx('info')}>
                            <label htmlFor="idproduct" className={cx('info-heading')}>
                                Mã sản phẩm
                            </label>
                            <input
                                className={cx('info-txt')}
                                id="idproduct"
                                type="text"
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
                                placeholder="Giá tiền"
                                onChange={(e) => dispatch(setPrice(e.target.value))}
                            />
                        </div>
                        <div className={cx('info')}>
                            <label htmlFor="quantity" className={cx('info-heading')}>
                                Số lượng
                            </label>
                            <input className={cx('info-txt')} type="number" id="quantity" placeholder="Số lượng" />
                        </div>
                    </div>

                    <div className={cx('description')}>
                        <div className={cx('description_item')}>
                            <h2 className={cx('item_heading')}>Mô tả sản phẩm</h2>
                            <CKEditor
                                className={cx('item_content')}
                                editor={ClassicEditor}
                                data=""
                                onChange={(e, editor) => {
                                    const data = editor.getData();
                                    dispatch(setDescription(data));
                                }}
                            />
                        </div>

                        <div className={cx('description_item')}>
                            <h2 className={cx('item_heading')}>Thông số kỹ thuật</h2>
                            <CKEditor
                                className={cx('item_content')}
                                editor={ClassicEditor}
                                data=""
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    console.log({ event, editor, data });
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
                                    disabled={state.img[0]}
                                    onChange={(e) => uploadImage(e)}
                                />
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className={cx(state.img[0] ? 'fadeout' : '')}
                                ></FontAwesomeIcon>
                                <div className={cx('img_box', state.img[0] ? 'fadein' : '')}>
                                    <img alt="" className={cx('img')} src={state.img[0] ? state.img[0] : ''} />
                                    <div className={cx('delete_box', state.img[0] ? 'active' : '')}>
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            className={cx('btn_delete')}
                                            onClick={(e) => dispatch(deleteImg(state.img[0]))}
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
                                    disabled={state.img[1]}
                                    onChange={(e) => uploadImage(e)}
                                />
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className={cx(state.img[1] ? 'fadeout' : '')}
                                ></FontAwesomeIcon>
                                <div className={cx('img_box', state.img[1] ? 'fadein' : '')}>
                                    <img alt="" className={cx('img')} src={state.img[1] ? state.img[1] : ''} />
                                    <div className={cx('delete_box', state.img[1] ? 'active' : '')}>
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            className={cx('btn_delete')}
                                            onClick={(e) => dispatch(deleteImg(state.img[1]))}
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
                                    disabled={state.img[2]}
                                    onChange={(e) => uploadImage(e)}
                                />
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className={cx(state.img[2] ? 'fadeout' : '')}
                                ></FontAwesomeIcon>
                                <div className={cx('img_box', state.img[2] ? 'fadein' : '')}>
                                    <img alt="" className={cx('img')} src={state.img[2] ? state.img[2] : ''} />
                                    <div className={cx('delete_box', state.img[2] ? 'active' : '')}>
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            className={cx('btn_delete')}
                                            onClick={(e) => dispatch(deleteImg(state.img[2]))}
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
                                    disabled={state.img[3]}
                                    onChange={(e) => uploadImage(e)}
                                />
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className={cx(state.img[3] ? 'fadeout' : '')}
                                ></FontAwesomeIcon>
                                <div className={cx('img_box', state.img[3] ? 'fadein' : '')}>
                                    <img alt="" className={cx('img')} src={state.img[3] ? state.img[3] : ''} />
                                    <div className={cx('delete_box', state.img[3] ? 'active' : '')}>
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            className={cx('btn_delete')}
                                            onClick={(e) => dispatch(deleteImg(state.img[3]))}
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
