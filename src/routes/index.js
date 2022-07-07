import routesConfig from '~/config/routes';
//Layout
import { HeaderOnly } from '~/components/Layout';

import Following from '~/Pages/Following';
import Home from '~/Pages/Home';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';

const publicRouters = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

const privateRouters = [];

export { publicRouters, privateRouters };
