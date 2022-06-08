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

const fadeImages = [
    {
        url: images.Slide1,
        caption: 'First Slide',
    },
    {
        url: images.Slide2,
        caption: 'First Slide',
    },
    {
        url: images.Slide3,
        caption: 'First Slide',
    },
    {
        url: images.Slide4,
        caption: 'First Slide',
    },
];
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
    console.log(slideData);
    // Object.keys(myObject).map(function(key, index) {
    //     myObject[key] *= 2;
    //   });
    return (
        <div className={cx('slide-container')}>
            <Fade>
                {fadeImages.map((fadeImage, index) => (
                    <div className="each-fade" key={index}>
                        <div className={cx('image-container')}>
                            <Image className={cx('fill')} src={fadeImage.url} alt={fadeImage.caption} />
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    );
}
export default Slider;
