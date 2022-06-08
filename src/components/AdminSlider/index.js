import { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './AdminSlider.module.scss';
import { initStateSlide, slideReducer } from '~/reducers/slideReducers';
import {
    setIMG1,
    setIMG2,
    setIMG3,
    setIMG4,
    deleteImg1,
    deleteImg2,
    deleteImg3,
    deleteImg4,
    addSlide,
} from '~/actions/slideActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AdminSlider() {
    const [stateSlide, dispatchSlide] = useReducer(slideReducer, initStateSlide);
    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        axios.get(`http://26.17.209.162/api/image/get`).then((res) => {
            setSliderData(res.data);
            dispatchSlide(addSlide(res.data));
        });
    }, []);

    // Convert input sang base 64
    const uploadImage = async (e, callback) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        dispatchSlide(callback(base64));
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleSubmitSlide({
            stateSlide,
        });
    };

    const handleSubmitSlide = (data) => {
        axios
            .post('http://26.17.209.162/api/image/post', {
                type: 'update',
                data: stateSlide,
            })
            .then((response) => {
                console.log(response);
            });
    };

    const checkChangeSlide = () => {
        if (JSON.stringify(sliderData[0]) === JSON.stringify(stateSlide)) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <h2 className={cx('heading')}>Chỉnh sữa Slider</h2>
                </div>
                <div className={cx('wrapper_img')}>
                    <form className={cx('inner_img')} onSubmit={handleSubmit}>
                        <div className={cx('upload_box')}>
                            <div className={cx('file_upload')}>
                                <input
                                    type="file"
                                    className={cx('upload')}
                                    disabled={stateSlide.IMAGESHOES1}
                                    onChange={(e) => uploadImage(e, setIMG1)}
                                />
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className={cx(stateSlide.IMAGESHOES1 ? 'fadeout' : '')}
                                ></FontAwesomeIcon>
                                <div className={cx('img_box', stateSlide.IMAGESHOES1 != '' ? 'fadein' : '')}>
                                    <img alt="" className={cx('img')} src={stateSlide.IMAGESHOES1} />
                                    <div className={cx('delete_box', stateSlide.IMAGESHOES1 != '' ? 'active' : '')}>
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            className={cx('btn_delete')}
                                            onClick={(e) => dispatchSlide(deleteImg1())}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('file_upload')}>
                                <input
                                    type="file"
                                    className={cx('upload')}
                                    disabled={stateSlide.IMAGESHOES2}
                                    onChange={(e) => uploadImage(e, setIMG2)}
                                />
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className={cx(stateSlide.IMAGESHOES2 ? 'fadeout' : '')}
                                ></FontAwesomeIcon>
                                <div className={cx('img_box', stateSlide.IMAGESHOES2 != '' ? 'fadein' : '')}>
                                    <img alt="" className={cx('img')} src={stateSlide.IMAGESHOES2} />
                                    <div className={cx('delete_box', stateSlide.IMAGESHOES2 != '' ? 'active' : '')}>
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            className={cx('btn_delete')}
                                            onClick={(e) => dispatchSlide(deleteImg2())}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('upload_box')}>
                            <div className={cx('file_upload')}>
                                <input
                                    type="file"
                                    className={cx('upload')}
                                    disabled={stateSlide.IMAGESHOES3}
                                    onChange={(e) => uploadImage(e, setIMG3)}
                                />
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className={cx(stateSlide.IMAGESHOES3 ? 'fadeout' : '')}
                                ></FontAwesomeIcon>
                                <div className={cx('img_box', stateSlide.IMAGESHOES3 != '' ? 'fadein' : '')}>
                                    <img alt="" className={cx('img')} src={stateSlide.IMAGESHOES3} />
                                    <div className={cx('delete_box', stateSlide.IMAGESHOES3 != '' ? 'active' : '')}>
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            className={cx('btn_delete')}
                                            onClick={(e) => dispatchSlide(deleteImg3())}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('file_upload')}>
                                <input
                                    type="file"
                                    className={cx('upload')}
                                    disabled={stateSlide.IMAGESHOES4}
                                    onChange={(e) => uploadImage(e, setIMG4)}
                                />
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className={cx(stateSlide.IMAGESHOES4 ? 'fadeout' : '')}
                                ></FontAwesomeIcon>
                                <div className={cx('img_box', stateSlide.IMAGESHOES4 != '' ? 'fadein' : '')}>
                                    <img alt="" className={cx('img')} src={stateSlide.IMAGESHOES4} />
                                    <div className={cx('delete_box', stateSlide.IMAGESHOES4 != '' ? 'active' : '')}>
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            className={cx('btn_delete')}
                                            onClick={(e) => dispatchSlide(deleteImg4())}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className={cx('btn_update')} disabled={checkChangeSlide()}>
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AdminSlider;
