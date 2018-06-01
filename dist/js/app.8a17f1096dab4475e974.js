webpackJsonp([1],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'APP'
});

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hello',
  data: function () {
    return { coins: [] };
  },
  mounted: function () {
    self = this;
    setInterval(function () {
      self.findAll();
    }, 20000);
  },
  methods: {
    findAll: function () {
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/coins').then(res => {
        debugger;
        this.coins = eval('(' + res.data + ')');
      }).catch(error => console.log(error));
    }
  }
});

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = login;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_fetch__ = __webpack_require__(131);


function login(username, password) {
	const data = {
		username, password
	};
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_fetch__["a" /* default */])({
		url: '/login/login',
		method: 'post',
		data: data
	});
}

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

/**
 * Create by zhaoyezi
 */
module.exports = {
  'locale': 'zh-CN', //local language
  'languages': ['en', 'zh-CN'] //packaged languages
};

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mock__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_element_ui_lib_theme_default_index_css__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_element_ui_lib_theme_default_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_element_ui_lib_theme_default_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_index_scss__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__styles_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_store_errLog__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_store_errLog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_store_errLog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mock_index_js__ = __webpack_require__(9);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue';
// import App from './App';
// import router from './router';
// import store from './store';
// import ElmentIU from 'element-ui';
// import 'element-ui/lib/theme-default/index.css';
// import 'styles/index.scss'; // 全局自定义的css样式
// import './mock/index.js'; // 该项目所有请求使用mockjs模拟
// import errLog from 'store/errLog'; // error log组件









 // 全局自定义的css样式
 // error log组件
 // 该项目所有请求使用mockjs模拟


__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_element_ui___default.a);
//初始化APP
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */], //需要严格参照router的构造配置http://router.vuejs.org/zh-cn/api/options.html
  store: __WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */],
  i18n: __WEBPACK_IMPORTED_MODULE_2__i18n__["a" /* default */],
  render: h => h(__WEBPACK_IMPORTED_MODULE_1__App___default.a)
}).$mount('#app');

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const list = [{
    id: 1,
    value: 'one app win'
}, {
    id: 2,
    value: 'one app mac'
}, {
    id: 3,
    value: 'one app webtalk'
}, {
    id: 4,
    value: 'one app screenshare'
}, {
    id: 5,
    value: 'one app office driver win'
}, {
    id: 6,
    value: 'one app office driver mac'
}, {
    id: 7,
    value: 'web service'
}];
/* harmony default export */ __webpack_exports__["a"] = ({
    list: config => {
        console.log(list);
        return list;
    }
});

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const userMap = {
  admin: {
    role: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '超级管理员小潘',
    uid: '001'
  },
  editor: {
    role: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '普通编辑小张',
    uid: '002'

  },
  developer: {
    role: ['develop'],
    token: 'develop',
    introduction: '我是开发',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '工程师小王',
    uid: '003'
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  login: config => {
    console.log("login");
    const { username } = JSON.parse(config.body);
    return userMap[username];
  }
});

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_login___ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_login____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_login___);

const constantRouterMap = [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_0__views_login___ }];
/* harmony export (immutable) */ __webpack_exports__["a"] = constantRouterMap;


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const getters = {
  //   sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  uid: state => state.user.uid,
  email: state => state.user.email,
  introduction: state => state.user.introduction,
  auth_type: state => state.user.auth_type,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting
  //   permission_routers: state => state.permission.routers,
  //   addRouters: state => state.permission.addRouters
};
/* harmony default export */ __webpack_exports__["a"] = (getters);

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_login__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_cookie__);


const user = {
    state: {
        user: '',
        status: '',
        email: '',
        code: '',
        uid: undefined,
        auth_type: '',
        token: __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.get('Admin-Token'),
        name: '',
        avatar: '',
        introduction: '',
        roles: [],
        setting: {
            articlePlatform: []
        }
    },
    mutations: {
        SET_AUTH_TYPE: (state, type) => {
            state.auth_type = type;
        },
        SET_CODE: (state, code) => {
            state.code = code;
        },
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_UID: (state, uid) => {
            state.uid = uid;
        },
        SET_USERNAME: (state, USERNAME) => {
            state.USERNAME = USERNAME;
        },
        SET_INTRODUCTION: (state, introduction) => {
            state.introduction = introduction;
        },
        SET_SETTING: (state, setting) => {
            state.setting = setting;
        },
        SET_STATUS: (state, status) => {
            state.status = status;
        },
        SET_NAME: (state, name) => {
            state.name = name;
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        },
        LOGIN_SUCCESS: () => {
            console.log('login success');
        },
        LOGOUT_USER: state => {
            state.user = '';
        }
    },
    actions: {
        login({ commit }, userInfo) {
            const username = userInfo.username.trim();
            return new Promise((resolve, reject) => {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_login__["a" /* login */])(username, userInfo.password).then(response => {
                    let data = response.data;
                    __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.set('Admin-Token', data.token);
                    commit('SET_TOKEN', data.token);
                    commit('SET_NAME', data.name);
                    resolve();
                }).catch(error => {
                    reject(error);
                });
            });
        }

    }
};
/* harmony default export */ __webpack_exports__["a"] = (user);

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(8);




const SERVICE = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    baseURL: "https://api-prod",
    timeout: 5000
});

SERVICE.interceptors.request.use(config => {
    // if(store.getters.token){
    //     config.headers("X-Token") =store.getters.token;
    // }
    return config;
}, error => {
    Promise.reject(error);
});

SERVICE.interceptors.response.use(response => {
    const CODE = response.data.status;
    switch (CODE) {
        case 400:
            break;
        case 403:
            //logout
            break;
        default:
            return response;
    }
}, error => {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_element_ui__["Message"])({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    });
    return Promise.reject(error);
});

/* harmony default export */ __webpack_exports__["a"] = (SERVICE);

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af-ZA": 27,
	"./af-ZA.js": 27,
	"./bg": 28,
	"./bg.js": 28,
	"./ca": 29,
	"./ca.js": 29,
	"./cz": 30,
	"./cz.js": 30,
	"./da": 31,
	"./da.js": 31,
	"./de": 32,
	"./de.js": 32,
	"./ee": 33,
	"./ee.js": 33,
	"./el": 34,
	"./el.js": 34,
	"./en": 35,
	"./en.js": 35,
	"./es": 36,
	"./es.js": 36,
	"./fa": 37,
	"./fa.js": 37,
	"./fi": 38,
	"./fi.js": 38,
	"./fr": 39,
	"./fr.js": 39,
	"./id": 40,
	"./id.js": 40,
	"./it": 41,
	"./it.js": 41,
	"./ja": 42,
	"./ja.js": 42,
	"./ko": 43,
	"./ko.js": 43,
	"./lv": 44,
	"./lv.js": 44,
	"./nb-NO": 45,
	"./nb-NO.js": 45,
	"./nl": 46,
	"./nl.js": 46,
	"./pl": 47,
	"./pl.js": 47,
	"./pt": 49,
	"./pt-br": 48,
	"./pt-br.js": 48,
	"./pt.js": 49,
	"./ru-RU": 50,
	"./ru-RU.js": 50,
	"./sk": 51,
	"./sk.js": 51,
	"./sl": 52,
	"./sl.js": 52,
	"./sv-SE": 53,
	"./sv-SE.js": 53,
	"./ta": 54,
	"./ta.js": 54,
	"./th": 55,
	"./th.js": 55,
	"./tk": 56,
	"./tk.js": 56,
	"./tr-TR": 57,
	"./tr-TR.js": 57,
	"./ua": 58,
	"./ua.js": 58,
	"./vi": 59,
	"./vi.js": 59,
	"./zh-CN": 14,
	"./zh-CN.js": 14,
	"./zh-TW": 60,
	"./zh-TW.js": 60
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 141;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(152)
}
var Component = __webpack_require__(68)(
  /* script */
  __webpack_require__(122),
  /* template */
  __webpack_require__(161),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-035f3076",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "padding": "20px"
    },
    attrs: {
      "id": "app"
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.coins
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "fromType",
      "label": "fromType",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "toType",
      "label": "toType",
      "width": "90"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "fromMinSalePrice",
      "label": "fromMinSalePrice",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "fromMaxBuyPrice",
      "label": "fromMaxBuyPrice",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "toMinSalePrice",
      "label": "toMinSalePrice",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "toMaxBuyPrice",
      "label": "toMaxBuyPrice",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "lastVs",
      "label": "lastVs",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "fromToProfit",
      "label": "fromToProfit",
      "width": "180"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "toFromProfit",
      "label": "toFromProfit",
      "width": "180"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "createdTime",
      "label": "createdTime",
      "width": "180"
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./de": 70,
	"./de.json": 70,
	"./en": 71,
	"./en.json": 71,
	"./fr": 72,
	"./fr.json": 72,
	"./ja": 73,
	"./ja.json": 73,
	"./ru-RU": 74,
	"./ru-RU.json": 74,
	"./zh-CN": 75,
	"./zh-CN.json": 75
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 166;

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

module.exports = {"HELLO":"Hello_de"}

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

module.exports = {"THEME":"Theme","NOT_FOUND":"Not Found","HELLO":"Hello","routes":{"Hello":{"desc":"welcome"},"Home":{"desc":"home"},"Login":{"desc":"login"},"example_layout":{"desc":"example-layout"},"example_table":{"desc":"example-table"},"example_form":{"desc":"example-form"},"example_dialog":{"desc":"example-dialog"},"example_pie":{"desc":"echarts-pie"},"example_map":{"desc":"echarts-map"},"example_bar":{"desc":"echarts-bar"},"example_line":{"desc":"echarts-line"}}}

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

module.exports = {"HELLO":"Hello_fr"}

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

module.exports = {"HELLO":"Hello_ja"}

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

module.exports = {"HELLO":"Hello_ru"}

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

module.exports = {"lang":"zh-CN","pages":{"login":{"title":"系统登录","placeholderUsername":"用户名","placeholderPassword":"密码","errorUsername":"请输入用户名","errorPassword":"请输入密码","btnText":"登录","validate":"不合法"}},"routes":{},"components":{}}

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_i18n__ = __webpack_require__(159);


const config = __webpack_require__(124);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_i18n__["a" /* default */]);

const locale = config.locale || "zh-CN";
const languages = config.languages || ['zh-CN', 'cn'];
const messages = {};
languages.map(lang => {
    messages[lang] = Object.assign(__webpack_require__(166)(`./${lang}`), __webpack_require__(141)(`./${lang}`).default);
});
const $i18n = new __WEBPACK_IMPORTED_MODULE_1_vue_i18n__["a" /* default */]({
    locale,
    fallbackLocale: 'en',
    messages
});
window.$i18n = $i18n;

/* harmony default export */ __webpack_exports__["a"] = ($i18n);

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_js__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nprogress__);






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

const router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  scrollBehavior: () => ({ y: 0 }),
  routes: __WEBPACK_IMPORTED_MODULE_3__router_js__["a" /* constantRouterMap */]
});

/* harmony default export */ __webpack_exports__["a"] = (router);
//register global progress
// const whiteList = ['/login','/authredirect','/reset','/sendpwd'];
// router.beforeEach((to,from ,next)=>{
//   NProgress.start();//开启progress
//   next();
// });

/***/ }),

/***/ 78:
/***/ (function(module, exports) {



/***/ }),

/***/ 79:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_user__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(129);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);
// const store = new Vuex.Store({
//     // modules:{
//         user,
//     // },
//     getters
// });


const store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  modules: {
    user: __WEBPACK_IMPORTED_MODULE_2__modules_user__["a" /* default */]
  },
  getters: __WEBPACK_IMPORTED_MODULE_3__getters__["a" /* default */]
});
// store.dispatch('login',{username:"yezi",password:"yezi"});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(68)(
  /* script */
  __webpack_require__(121),
  /* template */
  __webpack_require__(162),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ServiceData__ = __webpack_require__(126);




__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(/\/login\/login/, 'post', __WEBPACK_IMPORTED_MODULE_1__login__["a" /* default */].login);
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(/\/servicedata/, 'get', __WEBPACK_IMPORTED_MODULE_2__ServiceData__["a" /* default */].list);

/***/ })

},[125]);
//# sourceMappingURL=app.8a17f1096dab4475e974.js.map