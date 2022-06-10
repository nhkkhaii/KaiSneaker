import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';
import { useCookies } from 'react-cookie';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={data.onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
