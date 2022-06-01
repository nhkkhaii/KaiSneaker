import styles from './Slider.module.scss';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import images from '~/assets/images';
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
