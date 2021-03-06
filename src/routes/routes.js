import config from '~/config';

//Layout
import { HeaderOnly } from '~/layouts';

import Following from '~/Pages/Following';
import Home from '~/Pages/Home';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
import Live from '~/Pages/Live';

const publicRouters = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRouters = [];

export { publicRouters, privateRouters };
