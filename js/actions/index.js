// index.js

import * as home from './home';
import * as ablum from './ablum';
import * as merchant from './merchant';
import * as ablumDetail from './ablumDetail';
import * as merchantDetail from './merchantDetail';

export default {
	...home,
	...ablum,
	...merchant,
	...ablumDetail,
	...merchantDetail,
};