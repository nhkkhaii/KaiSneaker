import styles from './Slider.module.scss';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import images from '~/assets/images';
import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Slider() {
    const [slideData, setSlideData] = useState([]);

    useEffect(() => {
        axios
            .post('http://26.17.209.162/api/image/post', {
                type: 'get',
                data: { IMAGEID: '1' },
            })
            .then((response) => {
                setSlideData(response.data[0]);
            });
    }, []);

    return (
        <div className={cx('slide-container')}>
            <Fade>
                {Object.keys(slideData)
                    .filter((key) => key !== 'IMAGEID')
                    .map((key, index) => {
                        return (
                            slideData[key] !== '' && (
                                <div className="each-fade" key={index}>
                                    <div className={cx('image-container')}>
                                        <Image className={cx('fill')} src={slideData[key]} alt={''} />
                                    </div>
                                </div>
                            )
                        );
                    })}
            </Fade>
        </div>
    );
}
export default Slider;
