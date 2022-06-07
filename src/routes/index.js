import config from '~/config';

// Layout
import ProfileAccount from '~/layouts/ProfileAccount';
import DefaultWithSidebar from '~/layouts/DefaultWithSidebar';
import Login from '~/layouts/Login';
import Admin from '~/layouts/Admin';

// Pages
import Home from '~/pages/Home';
import Nike from '~/pages/Nike';
import Adidas from '~/pages/Adidas';
import MLB from '~/pages/MLB';
import SignIn from '~/components/SignIn';
import Profile from '~/pages/Profile';
import AddressProfile from '~/pages/AddressProfile';
import DetailProduct from '~/components/DetailProduct';
import Shopping from '~/components/Shopping';
import Checkout from '~/components/Checkout';

// routes Admin
import Dashboard from '~/components/Dashboard';
import CategoryAdmin from '~/components/CategoryAdmin';
import AdminUsers from '~/components/AdminUsers';
import AdminProduct from '~/components/AdminProduct';
import AddProduct from '~/components/AddProduct';
import AdminBill from '~/components/AdminBill';
import AdminSlider from '~/components/AdminSlider';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.nike, component: Nike, layout: DefaultWithSidebar },
    { path: config.routes.adidas, component: Adidas, layout: DefaultWithSidebar },
    { path: config.routes.mlb, component: MLB, layout: DefaultWithSidebar },
    { path: config.routes.login, component: SignIn, layout: Login },
    // Profile
    { path: config.routes.profile, component: Profile, layout: ProfileAccount },
    { path: config.routes.addressProfile, component: AddressProfile, layout: ProfileAccount },
    { path: config.routes.shoppingCart, component: Shopping },
    { path: config.routes.checkout, component: Checkout },
    // Product
    { path: config.routes.product, component: DetailProduct },
    // Admin
    { path: config.routes.admin, component: Dashboard, layout: Admin },
    { path: config.routes.adminCategory, component: CategoryAdmin, layout: Admin },
    { path: config.routes.adminUsers, component: AdminUsers, layout: Admin },
    { path: config.routes.adminProduct, component: AdminProduct, layout: Admin },
    { path: config.routes.adminAddProduct, component: AddProduct, layout: Admin },
    { path: config.routes.adminBill, component: AdminBill, layout: Admin },
    { path: config.routes.adminSlider, component: AdminSlider, layout: Admin },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
