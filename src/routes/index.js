// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Nike from '~/pages/Nike';
import Adidas from '~/pages/Adidas';
import MLB from '~/pages/MLB';
import DefaultWithSidebar from '~/layouts/DefaultWithSidebar';
import Login from '~/layouts/Login';
import SignIn from '~/components/SignIn';
import Profile from '~/pages/Profile';
import AddressProfile from '~/pages/AddressProfile';

import Register from '~/pages/Register';
import DetailProduct from '~/components/DetailProduct';
import Shopping from '~/components/Shopping';
import DefaultProfile from '~/layouts/DefaultProfile';
import Checkout from '~/components/Checkout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/nike', component: Nike, layout: DefaultWithSidebar },
    { path: '/adidas', component: Adidas, layout: DefaultWithSidebar },
    { path: '/mlb', component: MLB, layout: DefaultWithSidebar },
    { path: '/login', component: SignIn, layout: Login },
    { path: '/register', component: Register, layout: Login },
    { path: '/@:nickname', component: Profile, layout: DefaultProfile },
    { path: '/@:nickname/address-shipping', component: AddressProfile, layout: DefaultProfile },

    { path: '/product/:name', component: DetailProduct },
    { path: '/nhkkhaii/shopping', component: Shopping },
    { path: '/@nhkkhaii/checkout', component: Checkout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
