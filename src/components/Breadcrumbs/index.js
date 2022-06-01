import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const userNamesById = { 1: 'John' };

const DynamicUserBreadcrumb = ({ match }) => <span>{userNamesById[match.params.userId]}</span>;

const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;

// define custom breadcrumbs for certain routes.
// breadcumbs can be components or strings.
const routes = [
    { path: '/users/:userId', breadcrumb: DynamicUserBreadcrumb },
    { path: '/example', breadcrumb: 'Custom Example' },
    { path: '/custom-props', breadcrumb: CustomPropsBreadcrumb, props: { someProp: 'Hi' } },
];

// map & render your breadcrumb components however you want.
function Breadcrumbs() {
    const breadcrumbs = useBreadcrumbs(routes);

    return (
        <div className={cx('col', 'l-12', 'wrapper')}>
            {breadcrumbs.map(({ match, breadcrumb }) => (
                <span key={match.pathname} className={cx('inner')}>
                    <Link to={match.pathname}>{breadcrumb}</Link>
                </span>
            ))}
        </div>
    );
}

export default Breadcrumbs;
