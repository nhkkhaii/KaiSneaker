const routes = {
    home: '/',
    sneaker: '/sneaker',
    nike: '/nike',
    adidas: '/adidas',
    mlb: '/mlb',
    search: '/search',
    login: 'login',
    profile: '/@:nickname',
    addressProfile: '/@:nickname/address-shipping',
    shoppingCart: '/@:nickname/shopping-cart',
    checkout: '/@:nickname/checkout',
    product: '/sneaker/:product',
    admin: '/admin',
    adminUsers: '/admin/users',
    adminCategory: '/admin/category',
    adminProduct: '/admin/product',
    adminAddProduct: '/admin/product/:idproduct',
    adminSlider: '/admin/slider',
    adminBill: '/admin/bill',
};

export default routes;
