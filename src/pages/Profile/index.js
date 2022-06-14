import { useReducer, useEffect, useState } from 'react';
import { initStateUser, userReducer } from '~/reducers/userReducers';
import {
    setIDAccount,
    setFullName,
    setGender,
    setEmail,
    setNumberPhone,
    setDateOfBirth,
    setCCCD,
    setPassword,
    setAvatar,
    deleteAvatar,
} from '~/actions/userActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
    const [cookies, setCookies] = useCookies(['name']);
    const [stateUser, dispatchUser] = useReducer(userReducer, initStateUser);
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        if (cookies.name) {
            dispatchUser(setIDAccount(cookies.name.ID));
            axios
                .post('http://26.17.209.162/api/account/post', {
                    type: 'get',
                    data: { IDACCOUNT: cookies.name.ID },
                })
                .then((res) => {
                    console.log(res.data);
                    dispatchUser(setFullName(res.data[0].FULLNAME));
                    dispatchUser(setGender(res.data[0].GENDER));
                    dispatchUser(setCCCD(res.data[0].CCCD));
                    dispatchUser(setEmail(res.data[0].EMAIL));
                    dispatchUser(setNumberPhone(res.data[0].NUMBERPHONE));
                    dispatchUser(setDateOfBirth(res.data[0].DATEOFBIRTH));
                    setPassword(res.data[0].PASSWORD);
                    dispatchUser(setAvatar(res.data[0].IMAGEUSER));
                });
        } else {
            navigate('/login');
        }
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post('http://26.17.209.162/api/account/post', {
                type: 'update',
                data: stateUser,
            })
            .then((res) => {
                if (res.data === 1) {
                    window.location.reload();
                }
            });
    };

    // Convert input sang base 64
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        dispatchUser(setAvatar(base64));
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
    console.log(stateUser);

    return (
        <>
            <h2 className={cx('title')}>Thông tin tài khoản</h2>
            <form className={cx('profile')} onSubmit={handleSubmit}>
                <div className={cx('product_img')}>
                    <div className={cx('img_item')}>
                        <div className={cx('file_upload')}>
                            <input
                                className={cx('upload')}
                                type="file"
                                disabled={stateUser.IMAGEUSER}
                                onChange={(e) => uploadImage(e)}
                            />
                            <FontAwesomeIcon
                                icon={faArrowUp}
                                className={cx(stateUser.IMAGEUSER ? 'fadeout' : '')}
                            ></FontAwesomeIcon>
                            <div className={cx('img_box', stateUser.IMAGEUSER ? 'fadein' : '')}>
                                <img
                                    alt={stateUser.FULLNAME ? stateUser.FULLNAME : ''}
                                    className={cx('img')}
                                    src={stateUser.IMAGEUSER ? stateUser.IMAGEUSER : ''}
                                />
                                <div className={cx('delete_box', stateUser.IMAGEUSER ? 'active' : '')}>
                                    <FontAwesomeIcon
                                        icon={faXmark}
                                        className={cx('btn_delete')}
                                        onClick={(e) => dispatchUser(deleteAvatar(stateUser.IMAGEUSER))}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('info')}>
                    <input
                        type="text"
                        className={cx('info_txt')}
                        id="full-name"
                        required
                        value={stateUser.FULLNAME ? stateUser.FULLNAME : null}
                        onChange={(e) => dispatchUser(setFullName(e.target.value))}
                    />
                    <label htmlFor="full-name" className={cx('info_label')}>
                        Họ và Tên
                    </label>
                </div>
                <div className={cx('info')}>
                    <input
                        type="email"
                        className={cx('info_txt')}
                        id="user_email"
                        required
                        value={stateUser.EMAIL ? stateUser.EMAIL : null}
                        onChange={(e) => dispatchUser(setEmail(e.target.value))}
                    />
                    <label htmlFor="user_email" className={cx('info_label')}>
                        Email
                    </label>
                </div>
                <div className={cx('info')}>
                    <input
                        type="password"
                        className={cx('info_txt')}
                        id="user_password"
                        value={password}
                        autoComplete="off"
                        onChange={(e) => e.target.value}
                    />
                    <label htmlFor="user_password" className={cx('info_label')}>
                        Mật khẩu
                    </label>
                </div>
                <div className={cx('info')}>
                    <input
                        type="text"
                        className={cx('info_txt')}
                        id="gender"
                        maxLength="5"
                        value={stateUser.GENDER ? stateUser.GENDER : null}
                        onChange={(e) => dispatchUser(setGender(e.target.value))}
                        placeholder={'Nam hoặc Nữ'}
                    />
                    <label htmlFor="gender" className={cx('info_label')}>
                        Giới tính
                    </label>
                </div>
                <div className={cx('info')}>
                    <input
                        type="text"
                        className={cx('info_txt')}
                        id="phone-number"
                        required
                        maxLength="10"
                        value={stateUser.NUMBERPHONE ? stateUser.NUMBERPHONE : null}
                        onChange={(e) => dispatchUser(setNumberPhone(e.target.value))}
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                    />
                    <label htmlFor="phone-number" className={cx('info_label')}>
                        Số điện thoại
                    </label>
                </div>
                <div className={cx('info')}>
                    {/* cmt = chứng minh thư */}
                    <input
                        type="text"
                        className={cx('info_txt')}
                        id="user_cmt"
                        required
                        maxLength="12"
                        value={stateUser.CCCD ? stateUser.CCCD : null}
                        onChange={(e) => dispatchUser(setCCCD(e.target.value))}
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                    />
                    <label htmlFor="user_cmt" className={cx('info_label')}>
                        CCCD/CMND
                    </label>
                </div>
                <div className={cx('info')}>
                    <input
                        type="date"
                        className={cx('info_txt')}
                        id="user_date"
                        required
                        value={stateUser.DATEOFBIRTH ? stateUser.DATEOFBIRTH : null}
                        onChange={(e) => dispatchUser(setDateOfBirth(e.target.value))}
                    />
                    <label htmlFor="user_date" className={cx('info_label')}>
                        Ngày sinh
                    </label>
                </div>
                <button className={cx('update_btn')} type="update">
                    Cập nhật
                </button>
            </form>
        </>
    );
}

export default Profile;
