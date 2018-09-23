webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ServiceData__ = __webpack_require__(130);




__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(/\/login\/login/, 'post', __WEBPACK_IMPORTED_MODULE_1__login__["a" /* default */].login);
__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock(/\/servicedata/, 'get', __WEBPACK_IMPORTED_MODULE_2__ServiceData__["a" /* default */].list);

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_user__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(133);





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
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/***/ (function(module, exports) {

module.exports = {"HELLO":"Hello_de"}

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = {"THEME":"Theme","NOT_FOUND":"Not Found","HELLO":"Hello","routes":{"Hello":{"desc":"welcome"},"Home":{"desc":"home"},"Login":{"desc":"login"},"example_layout":{"desc":"example-layout"},"example_table":{"desc":"example-table"},"example_form":{"desc":"example-form"},"example_dialog":{"desc":"example-dialog"},"example_pie":{"desc":"echarts-pie"},"example_map":{"desc":"echarts-map"},"example_bar":{"desc":"echarts-bar"},"example_line":{"desc":"echarts-line"}}}

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = {"HELLO":"Hello_fr"}

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = {"HELLO":"Hello_ja"}

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = {"HELLO":"Hello_ru"}

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = {"lang":"zh-CN","pages":{"login":{"title":"系统登录","placeholderUsername":"用户名","placeholderPassword":"密码","errorUsername":"请输入用户名","errorPassword":"请输入密码","btnText":"登录","validate":"不合法"}},"routes":{},"components":{}}

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_i18n__ = __webpack_require__(163);


const config = __webpack_require__(128);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_i18n__["a" /* default */]);

const locale = config.locale || "zh-CN";
const languages = config.languages || ['zh-CN', 'cn'];
const messages = {};
languages.map(lang => {
    messages[lang] = Object.assign(__webpack_require__(178)(`./${lang}`), __webpack_require__(145)(`./${lang}`).default);
});
const $i18n = new __WEBPACK_IMPORTED_MODULE_1_vue_i18n__["a" /* default */]({
    locale,
    fallbackLocale: 'en',
    messages
});
window.$i18n = $i18n;

/* harmony default export */ __webpack_exports__["a"] = ($i18n);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_js__ = __webpack_require__(132);




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

const router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  scrollBehavior: () => ({ y: 0 }),
  routes: __WEBPACK_IMPORTED_MODULE_2__router_js__["a" /* constantRouterMap */]
});

/* harmony default export */ __webpack_exports__["a"] = (router);
//register global progress
// const whiteList = ['/login','/authredirect','/reset','/sendpwd'];
// router.beforeEach((to,from ,next)=>{
//   NProgress.start();//开启progress
//   next();
// });

/***/ }),
/* 78 */
/***/ (function(module, exports) {



/***/ }),
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(121),
  /* template */
  __webpack_require__(172),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */
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
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(5);
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
    name: 'setting',
    data: function () {
        return {
            form: { nickName: "", desc: "" },
            amountChanges: [],
            btcBuy: "",
            btcSell: "",
            usdtBuy: "",
            usdtSell: "",
            ethBuy: "",
            ethSell: "",
            isRunning: false,
            admin: false
        };
    },
    mounted: function () {
        var url = document.URL;
        if (url.indexOf("?") > -1) {
            this.admin = true;
            this.form.nickName = "★全网第一诚信";
        }
    },
    methods: {
        onStart: function () {
            self = this;
            if (this.isRunning) {
                alert("已经开始执行，不能再开始");
                return;
            }
            this.isRunning = true;
            this.interval = setInterval(function () {
                __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get("/virtual/oken").then(res => {
                    if (!res.data.btc && !res.data.usdt && !res.data.eth) {
                        alert("服务器异常,请联系管理员");
                        return;
                    }
                    self.initData();
                    var okenChanges = [];
                    if (self.admin) {
                        if (self.handlerData(res.data.btc.data.buy, "btcBuy", "btc", "买入", okenChanges) | self.handlerData(res.data.btc.data.sell, "btcSell", "btc", "卖出", okenChanges) | self.handlerData(res.data.usdt.data.buy, "usdtBuy", "usdt", "买入", okenChanges) | self.handlerData(res.data.usdt.data.sell, "usdtSell", "usdt", "卖出", okenChanges) | self.handlerData(res.data.eth.data.buy, "ethBuy", "eth", "买入", okenChanges) | self.handlerData(res.data.eth.data.sell, "ethSell", "eth", "卖出", okenChanges)) {
                            document.getElementById("orderAudio").play();
                            clearInterval(self.interval);
                        }
                    } else {
                        if (self.handlerData(res.data.usdt.data.buy, "usdtBuy", "usdt", "买入", okenChanges) | self.handlerData(res.data.usdt.data.sell, "usdtSell", "usdt", "卖出", okenChanges)) {
                            document.getElementById("orderAudio").play();
                            clearInterval(self.interval);
                        }
                    }

                    self.amountChanges = okenChanges;
                }).catch(error => console.log(error));
            }, 3000);
        },
        initData: function () {
            this.form.desc = "";
            this.amountChanges = [];
        },
        //处理数据 dataList币种列表 oldCoinValue旧币值 coinType币种类型, type买入还是卖出
        handlerData: function (dataList, oldCoinValue, coinType, type, okenChanges) {
            var personCoinFind = false; //是否找到此人的当前币种
            var change = false; //当前币种是否发生变化
            for (var i = 0; i < dataList.length; i++) {
                var data = dataList[i];
                if (data.creator.nickName == this.form.nickName) {
                    personCoinFind = true;
                    if (!this[oldCoinValue]) {
                        this[oldCoinValue] = data.availableAmount;
                    }
                    if (this[oldCoinValue] != data.availableAmount) {
                        change = true;
                        self.form.desc += coinType + type + this[oldCoinValue] + "--->" + data.availableAmount;
                    }
                    okenChanges.push({ name: coinType, type: type, oldAmount: this[oldCoinValue],
                        nowAmount: data.availableAmount, createdDate: this.convertTimestampToString(data["createdDate"]) });
                    oldCoinValue = data.availableAmount;
                }
            }

            if (this[oldCoinValue] && !personCoinFind) {
                change = true;
                self.form.desc += coinType + type + this[oldCoinValue] + "--->" + 0;
                okenChanges.push({ name: coinType, type: type, oldAmount: this[oldCoinValue], nowAmount: 0 });
                this[oldCoinValue] = "";
            }
            return change;
        },
        onStop: function () {
            document.getElementById("orderAudio").pause();
            this.isRunning = false;
            this.onStart();
        },
        onStopListening: function () {
            this.isRunning = false;
            document.getElementById("orderAudio").pause();
            clearInterval(this.interval);
        },
        convertTimestampToString: function (timestamp) {
            var date = new Date(timestamp);
            var year = date.getFullYear();
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
            var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
            return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
        }
    }

});

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(5);
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
                return {
                        form: { price: 45000, commission: 0 },
                        isRunning: false,
                        ubitBtc: []
                };
        },
        mounted: function () {},
        methods: {
                start: function () {
                        if (this.isRunning) {
                                alert("已经开始执行，不能再开始");
                                return;
                        }
                        this.isRunning = true;
                        this.getUitBtc();
                        self = this;
                        this.ubitBtcInterval = setInterval(function () {
                                self.getUitBtc();
                        }, 1000);
                },
                end: function () {
                        clearInterval(this.ubitBtcInterval);
                        this.isRunning = false;
                        alert("已停止");
                },
                getUitBtc: function () {
                        self = this;
                        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/virtual/upbit').then(res => {
                                if (res.status == 200 && res.data) {
                                        var chinaPrice = parseInt(self.form.price) + parseInt(self.form.commission);
                                        var koreaPrice = res.data["trade_price"];
                                        var parities = (koreaPrice / chinaPrice).toFixed(2);
                                        var date = new Date(res.data["trade_timestamp"]);
                                        var year = date.getFullYear();
                                        var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                                        var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                                        var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                                        var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                                        var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
                                        date = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
                                        self.ubitBtc = [];
                                        self.ubitBtc.push({ name: "upbit", createDate: date, chinaPrice: self.form.price - 150,
                                                koreaPrice: koreaPrice, parities: (koreaPrice / (chinaPrice - 150)).toFixed(2) });
                                        self.ubitBtc.push({ name: "upbit", createDate: date, chinaPrice: self.form.price - 100,
                                                koreaPrice: koreaPrice, parities: (koreaPrice / (chinaPrice - 100)).toFixed(2) });
                                        self.ubitBtc.push({ name: "upbit", createDate: date, chinaPrice: self.form.price - 50,
                                                koreaPrice: koreaPrice, parities: (koreaPrice / (chinaPrice - 50)).toFixed(2) });
                                        document.title = self.form.price + " " + parities;
                                        self.ubitBtc.push({ name: "upbit", createDate: date, chinaPrice: self.form.price,
                                                koreaPrice: koreaPrice, parities: parities });
                                        self.ubitBtc.push({ name: "upbit", createDate: date, chinaPrice: parseInt(self.form.price) + 50,
                                                koreaPrice: koreaPrice, parities: (koreaPrice / (chinaPrice + 50)).toFixed(2) });
                                        self.ubitBtc.push({ name: "upbit", createDate: date, chinaPrice: parseInt(self.form.price) + 100,
                                                koreaPrice: koreaPrice, parities: (koreaPrice / (chinaPrice + 100)).toFixed(2) });
                                        self.ubitBtc.push({ name: "upbit", createDate: date, chinaPrice: parseInt(self.form.price) + 150,
                                                koreaPrice: koreaPrice, parities: (koreaPrice / (chinaPrice + 150)).toFixed(2) });
                                }
                        }).catch(error => console.log(error));
                },
                rowStyle: function (row, index) {
                        if (index == 3) {
                                return { "background-color": "pink" };
                        }
                }

        }
});

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(5);
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
        return {
            form: { price: 0, minPrice: 40000, maxPrice: 50000 },
            titleCoin: 1,
            okenBtcCoin: [],
            okenEthCoin: [],
            isRunning: false,
            huoBiBtcCoin: [],
            huoBiEthCoin: [],
            fcoinBtcCoin: [],
            fcoinEthCoin: [],
            coinExBtcCoin: [],
            coinExEthCoin: []
        };
    },
    mounted: function () {},
    methods: {
        start: function () {
            if (this.isRunning) {
                alert("已经开始执行，不能再开始");
                return;
            }
            this.isRunning = true;
            this.getOken("usdt", "btc");
            this.getOken("usdt", "eth");
            this.getHuoBi("usdt", "btc");
            this.getHuoBi("usdt", "eth");
            this.getFcoin("usdt", "btc");
            this.getFcoin("usdt", "eth");
            this.getCoinEx("usdt", "btc");
            this.getCoinEx("usdt", "eth");
            this.okenUsdtBtcInterval = setInterval(function () {
                self.getOken("usdt", "btc");
            }, 1000);
            this.okenUsdtEthInterval = setInterval(function () {
                self.getOken("usdt", "eth");
            }, 1000);
            this.huoBiUsdtBtcInterval = setInterval(function () {
                self.getHuoBi("usdt", "btc");
            }, 1000);
            this.huoBiUsdtEthInterval = setInterval(function () {
                self.getHuoBi("usdt", "eth");
            }, 1000);
            this.fcoinUsdtBtcInterval = setInterval(function () {
                self.getFcoin("usdt", "btc");
            }, 1000);
            this.fcoinUsdtEthInterval = setInterval(function () {
                self.getFcoin("usdt", "eth");
            }, 1000);
            this.coinExUsdtBtcInterval = setInterval(function () {
                self.getCoinEx("usdt", "btc");
            }, 2000);
            this.coinExUsdtEthInterval = setInterval(function () {
                self.getCoinEx("usdt", "eth");
            }, 2000);
        },
        end: function () {
            clearInterval(this.okenUsdtBtcInterval);
            clearInterval(this.okenUsdtEthInterval);
            clearInterval(this.huoBiUsdtBtcInterval);
            clearInterval(this.huoBiUsdtEthInterval);
            clearInterval(this.fcoinUsdtBtcInterval);
            clearInterval(this.fcoinUsdtEthInterval);
            clearInterval(this.coinExUsdtBtcInterval);
            clearInterval(this.coinExUsdtEthInterval);
            this.isRunning = false;
        },
        getOken: function (fromType, toType) {
            self = this;
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/oken?fromType=' + fromType + "&toType=" + toType).then(res => {
                //返回的String类型 因此需要转换
                var data = eval('(' + res.data + ')');
                console.log("oken网" + fromType + "-" + toType + ":", data);
                var last = data.last;
                var calc = (self.form.price * last).toFixed(2);
                var date = new Date(data.timestamp);
                var year = date.getFullYear();
                var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
                var now = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
                if (self.titleCoin == 1 && "btc" == toType) {
                    document.title = minute + ":" + second + "  " + calc.split(".")[0] + "  " + self.form.price;
                    self.ring(calc);
                }
                if ("btc" == toType) {
                    self.okenBtcCoin = [{ name: "oken", now: now, calc: calc, last: last }];
                }
                if ("eth" == toType) {
                    self.okenEthCoin = [{ name: "oken", now: now, calc: calc, last: last }];
                }
            }).catch(error => console.log(error));
        },
        getHuoBi: function (fromType, toType) {
            self = this;
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/huoBi?fromType=' + fromType + "&toType=" + toType).then(res => {
                var data = eval('(' + res.data + ')');
                console.log("huoBi " + fromType + "-" + toType + ":", data);
                var calc = (self.form.price * data.close).toFixed(2);
                if (self.titleCoin == 2 && "btc" == toType) {
                    document.title = data.createdTime.split(" ")[1].substring(3, 8) + "  " + calc.split(".")[0] + "  " + self.form.price;
                    self.ring(calc);
                }
                if ("btc" == toType) {
                    self.huoBiBtcCoin = [{ name: "huoBi", now: data.createdTime, calc: calc, last: data.close }];
                }
                if ("eth" == toType) {
                    self.huoBiEthCoin = [{ name: "huoBi", now: data.createdTime, calc: calc, last: data.close }];
                }
            }).catch(error => console.log(error));
        },
        getFcoin: function (fromType, toType) {
            self = this;
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/fcoin?fromType=' + fromType + "&toType=" + toType).then(res => {
                var data = eval('(' + res.data + ')');
                console.log("fcoin " + fromType + "-" + toType + ":", data);
                var calc = (self.form.price * data[0]).toFixed(2);
                if (self.titleCoin == 3 && "btc" == toType) {
                    document.title = data[data.length - 1].split(" ")[1].substring(3, 8) + "  " + calc.split(".")[0] + "  " + self.form.price;
                    self.ring(calc);
                }
                if ("btc" == toType) {
                    self.fcoinBtcCoin = [{ name: "fcoin", now: data[data.length - 1], calc: calc, last: data[0] }];
                }
                if ("eth" == toType) {
                    self.fcoinEthCoin = [{ name: "fcoin", now: data[data.length - 1], calc: calc, last: data[0] }];
                }
            }).catch(error => console.log(error));
        },
        ring: function (price) {
            if (price > this.form.maxPrice | price < this.form.minPrice) {
                document.getElementById("dogAudio").play();
            }
        },
        getCoinEx: function (fromType, toType) {
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/coinEx?fromType=' + fromType + "&toType=" + toType).then(res => {
                var last = res.data.data.ticker.last;
                var calc = (self.form.price * last).toFixed(2);
                if (self.titleCoin == 4 && "btc" == toType) {
                    document.title = res.data.createdTime.split(" ")[1].substring(3, 8) + "  " + calc.split(".")[0] + "  " + self.form.price;
                    self.ring(calc);
                }
                if ("btc" == toType) {
                    self.coinExBtcCoin = [{ name: "coinEx", now: res.data.createdTime, calc: calc, last: last }];
                }
                if ("eth" == toType) {
                    self.coinExEthCoin = [{ name: "coinEx", now: res.data.createdTime, calc: calc, last: last }];
                }
            }).catch(error => console.log(error));
        }
    }
});

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(5);
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
        return {
            form: { price: 0, minPrice: 40000, maxPrice: 80000 },
            titleCoin: 1,
            okenBtcCoin: [],
            okenEthCoin: [],
            isRunning: false,
            huoBiBtcCoin: [],
            huoBiEthCoin: [],
            fcoinBtcCoin: [],
            fcoinEthCoin: [],
            coinExBtcCoin: [],
            coinExEthCoin: []
        };
    },
    mounted: function () {},
    methods: {
        start: function () {
            if (this.isRunning) {
                alert("已经开始执行，不能再开始");
                return;
            }
            this.isRunning = true;
            this.getOken("usdt", "btc");
            this.getOken("usdt", "eth");
            this.getHuoBi("usdt", "btc");
            this.getHuoBi("usdt", "eth");
            this.getFcoin("usdt", "btc");
            this.getFcoin("usdt", "eth");
            this.getCoinEx("usdt", "btc");
            this.getCoinEx("usdt", "eth");
            this.okenUsdtBtcInterval = setInterval(function () {
                self.getOken("usdt", "btc");
            }, 1000);
            this.okenUsdtEthInterval = setInterval(function () {
                self.getOken("usdt", "eth");
            }, 1000);
            this.huoBiUsdtBtcInterval = setInterval(function () {
                self.getHuoBi("usdt", "btc");
            }, 1000);
            this.huoBiUsdtEthInterval = setInterval(function () {
                self.getHuoBi("usdt", "eth");
            }, 1000);
            this.fcoinUsdtBtcInterval = setInterval(function () {
                self.getFcoin("usdt", "btc");
            }, 1000);
            this.fcoinUsdtEthInterval = setInterval(function () {
                self.getFcoin("usdt", "eth");
            }, 1000);
            this.coinExUsdtBtcInterval = setInterval(function () {
                self.getCoinEx("usdt", "btc");
            }, 2000);
            this.coinExUsdtEthInterval = setInterval(function () {
                self.getCoinEx("usdt", "eth");
            }, 2000);
        },
        end: function () {
            clearInterval(this.okenUsdtBtcInterval);
            clearInterval(this.okenUsdtEthInterval);
            clearInterval(this.huoBiUsdtBtcInterval);
            clearInterval(this.huoBiUsdtEthInterval);
            clearInterval(this.fcoinUsdtBtcInterval);
            clearInterval(this.fcoinUsdtEthInterval);
            clearInterval(this.coinExUsdtBtcInterval);
            clearInterval(this.coinExUsdtEthInterval);
            this.isRunning = false;
        },
        getOken: function (fromType, toType) {
            self = this;
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/oken?fromType=' + fromType + "&toType=" + toType).then(res => {
                //返回的String类型 因此需要转换
                var data = eval('(' + res.data + ')');
                console.log("oken网" + fromType + "-" + toType + ":", data);
                var last = data.last;
                var calc = (self.form.price * last).toFixed(2);
                var date = new Date(data.timestamp);
                var year = date.getFullYear();
                var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
                var now = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
                if (self.titleCoin == 1 && "btc" == toType) {
                    document.title = minute + ":" + second + "  " + calc.split(".")[0] + "  " + self.form.price;
                    self.ring(calc);
                }
                if ("btc" == toType) {
                    self.okenBtcCoin = [{ name: "oken", now: now, calc: calc, last: last }];
                }
                if ("eth" == toType) {
                    self.okenEthCoin = [{ name: "oken", now: now, calc: calc, last: last }];
                }
            }).catch(error => console.log(error));
        },
        getHuoBi: function (fromType, toType) {
            self = this;
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/huoBi?fromType=' + fromType + "&toType=" + toType).then(res => {
                var data = eval('(' + res.data + ')');
                console.log("huoBi " + fromType + "-" + toType + ":", data);
                var calc = (self.form.price * data.close).toFixed(2);
                if (self.titleCoin == 2 && "btc" == toType) {
                    document.title = data.createdTime.split(" ")[1].substring(3, 8) + "  " + calc.split(".")[0] + "  " + self.form.price;
                    self.ring(calc);
                }
                if ("btc" == toType) {
                    self.huoBiBtcCoin = [{ name: "huoBi", now: data.createdTime, calc: calc, last: data.close }];
                }
                if ("eth" == toType) {
                    self.huoBiEthCoin = [{ name: "huoBi", now: data.createdTime, calc: calc, last: data.close }];
                }
            }).catch(error => console.log(error));
        },
        getFcoin: function (fromType, toType) {
            self = this;
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/fcoin?fromType=' + fromType + "&toType=" + toType).then(res => {
                var data = eval('(' + res.data + ')');
                console.log("fcoin " + fromType + "-" + toType + ":", data);
                var calc = (self.form.price * data[0]).toFixed(2);
                if (self.titleCoin == 3 && "btc" == toType) {
                    document.title = data[data.length - 1].split(" ")[1].substring(3, 8) + "  " + calc.split(".")[0] + "  " + self.form.price;
                    self.ring(calc);
                }
                if ("btc" == toType) {
                    self.fcoinBtcCoin = [{ name: "fcoin", now: data[data.length - 1], calc: calc, last: data[0] }];
                }
                if ("eth" == toType) {
                    self.fcoinEthCoin = [{ name: "fcoin", now: data[data.length - 1], calc: calc, last: data[0] }];
                }
            }).catch(error => console.log(error));
        },
        ring: function (price) {
            if (price > this.form.maxPrice | price < this.form.minPrice) {
                document.getElementById("dogAudio").play();
            }
        },
        getCoinEx: function (fromType, toType) {
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/coinEx?fromType=' + fromType + "&toType=" + toType).then(res => {
                var data = eval('(' + res.data + ')');
                console.log(data);
                var last = data.data.ticker.last;
                var calc = (self.form.price * last).toFixed(2);
                var date = new Date(data.data.date);
                var year = date.getFullYear();
                var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
                var now = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
                if (self.titleCoin == 4 && "btc" == toType) {
                    document.title = second + ":" + second + "  " + calc.split(".")[0] + "  " + self.form.price;
                    self.ring(calc);
                }
                if ("btc" == toType) {
                    self.coinExBtcCoin = [{ name: "coinEx", now: now, calc: calc, last: last }];
                }
                if ("eth" == toType) {
                    self.coinExEthCoin = [{ name: "coinEx", now: now, calc: calc, last: last }];
                }
            }).catch(error => console.log(error));
        },
        goAlarm: function () {
            this.$router.push({ "path": "/alarm" });
        }
    }
});

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(5);
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
    name: 'setting',
    data: function () {
        return {
            form: { nickName: "★全网第一诚信", desc: "" },
            amountChanges: [],
            btcBuy: "",
            btcSell: "",
            usdtBuy: "",
            usdtSell: "",
            isRunning: false
        };
    },
    mounted: function () {},
    methods: {
        onStart: function () {
            self = this;
            if (this.isRunning) {
                alert("已经开始执行，不能再开始");
                return;
            }
            this.isRunning = true;
            this.interval = setInterval(function () {
                __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get("/virtual/oken").then(res => {
                    debugger;
                    if (!res.data.btc && !res.data.usdt) {
                        alert("服务器异常");
                    }
                    var btcBuy = res.data.btc.data.buy;
                    var btcSell = res.data.btc.data.sell;
                    var usdtBuy = res.data.usdt.data.buy;
                    var usdtSell = res.data.usdt.data.sell;
                    var okenChanges = [];
                    var change = false;

                    if (new Date().getTime() - new Date(btcBuy[0]["createdDate"]) > 1000 * 30 + 8 * 60 * 60 * 1000) {
                        alert("定时获取oken网数据异常");
                        self.form.desc = "定时获取oken网买入卖出数据异常，请联系管理员";
                        clearInterval(self.interval);
                        return;
                    } else {
                        self.form.desc = "";
                    }

                    var btcBuyFind = false;
                    for (var i = 0; i < btcBuy.length; i++) {
                        var data = btcBuy[i];
                        if (data.creator.nickName == self.form.nickName) {
                            btcBuyFind = true;
                            if (!self.btcBuy) {
                                self.btcBuy = data.availableAmount;
                            }
                            if (self.btcBuy != data.availableAmount) {
                                change = true;
                                self.form.desc += "当前用户的btc买入发生变化,从" + self.btcBuy + "变为" + data.availableAmount + "==";
                                console.log("当前用户的btc买入发生变化,从" + self.btcBuy + "变为" + data.availableAmount);
                            }
                            okenChanges.push({ name: "btc", type: "买入", oldAmount: self.btcBuy, nowAmount: data.availableAmount });
                            self.btcBuy = data.availableAmount;
                        }
                    }
                    if (self.btcBuy && !btcBuyFind) {
                        change = true;
                        self.form.desc += "当前用户的btc买入发生变化,从" + self.btcBuy + "变为0==";
                        console.log("当前用户的btc买入发生变化,从" + self.btcBuy + "变为0");
                        okenChanges.push({ name: "btc", type: "买入", oldAmount: self.btcBuy, nowAmount: 0 });
                        self.btcBuy = "";
                    }

                    var btcSellFind = false;
                    for (var i = 0; i < btcSell.length; i++) {
                        var data = btcSell[i];
                        if (data.creator.nickName == self.form.nickName) {
                            btcSellFind = true;
                            if (!self.btcSell) {
                                self.btcSell = data.availableAmount;
                            }
                            if (self.btcSell != data.availableAmount) {
                                change = true;
                                self.form.desc += "当前用户的btc卖出发生变化,从" + self.btcSell + "变为" + data.availableAmount + "===";
                                console.log("当前用户的btc卖出发生变化,从" + self.btcSell + "变为" + data.availableAmount);
                            }
                            okenChanges.push({ name: "btc", type: "卖出", oldAmount: self.btcSell, nowAmount: data.availableAmount });
                            self.btcSell = data.availableAmount;
                        }
                    }
                    if (self.btcSell && !btcSellFind) {
                        change = true;
                        self.form.desc += "当前用户的btc卖出发生变化,从" + self.btcSell + "变为0==";
                        console.log("当前用户的btc卖出发生变化,从" + self.btcSell + "变为0");
                        okenChanges.push({ name: "btc", type: "卖出", oldAmount: self.btcSell, nowAmount: 0 });
                        self.btcSell = "";
                    }

                    var usdtBuyFind = false;
                    for (var i = 0; i < usdtBuy.length; i++) {
                        var data = usdtBuy[i];
                        if (data.creator.nickName == self.form.nickName) {
                            usdtBuyFind = true;
                            if (!self.usdtBuy) {
                                self.usdtBuy = data.availableAmount;
                            }
                            if (self.usdtBuy != data.availableAmount) {
                                change = true;
                                self.form.desc += "当前用户的usdt买入发生变化,从" + self.usdtBuy + "变为" + data.availableAmount + "====";
                                console.log("当前用户的usdt买入发生变化,从" + self.usdtBuy + "变为" + data.availableAmount);
                            }
                            okenChanges.push({ name: "usdt", type: "买入", oldAmount: self.usdtBuy, nowAmount: data.availableAmount });
                            self.usdtBuy = data.availableAmount;
                        }
                    }
                    if (self.usdtBuy && !usdtBuyFind) {
                        change = true;
                        self.form.desc += "当前用户的usdt买入发生变化,从" + self.usdtBuy + "变为0==";
                        console.log("当前用户的usdt买入发生变化,从" + self.usdtBuy + "变为0");
                        okenChanges.push({ name: "usdt", type: "买入", oldAmount: self.usdtBuy, nowAmount: 0 });
                        self.usdtBuy = "";
                    }

                    var usdtSellFind = false;
                    for (var i = 0; i < usdtSell.length; i++) {
                        var data = usdtSell[i];
                        if (data.creator.nickName == self.form.nickName) {
                            usdtSellFind = true;
                            if (!self.usdtSell) {
                                self.usdtSell = data.availableAmount;
                            }
                            if (self.usdtSell != data.availableAmount) {
                                change = true;
                                self.form.desc += "当前用户的usdt卖出发生变化,从" + self.usdtSell + "变为" + data.availableAmount;
                                console.log("当前用户的usdt卖出发生变化,从" + self.usdtSell + "变为" + data.availableAmount);
                            }
                            okenChanges.push({ name: "usdt", type: "卖出", oldAmount: self.usdtSell, nowAmount: data.availableAmount });
                            self.usdtSell = data.availableAmount;
                        }
                    }

                    if (self.usdtSell && !usdtSellFind) {
                        change = true;
                        self.form.desc += "当前用户的usdt卖出发生变化,从" + self.usdtSell + "变为0==";
                        console.log("当前用户的usdt卖出发生变化,从" + self.usdtSell + "变为0");
                        okenChanges.push({ name: "usdt", type: "卖出", oldAmount: self.usdtSell, nowAmount: 0 });
                        self.usdtSell = "";
                    }
                    if (change) {
                        document.getElementById("orderAudio").play();
                        clearInterval(self.interval);
                    } else {
                        self.form.desc = "";
                    }
                    self.amountChanges = okenChanges;
                }).catch(error => console.log(error));
            }, 3000);
        },
        onStop: function () {
            document.getElementById("orderAudio").pause();
            this.isRunning = false;
            this.onStart();
        },
        onStopListening: function () {
            this.isRunning = false;
            document.getElementById("orderAudio").pause();
            clearInterval(this.interval);
        }
    }

});

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = login;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_fetch__ = __webpack_require__(135);


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
/* 128 */
/***/ (function(module, exports) {

/**
 * Create by zhaoyezi
 */
module.exports = {
  'locale': 'zh-CN', //local language
  'languages': ['en', 'zh-CN'] //packaged languages
};

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mock__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_element_ui_lib_theme_default_index_css__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_element_ui_lib_theme_default_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_element_ui_lib_theme_default_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_index_scss__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__styles_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_store_errLog__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_store_errLog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_store_errLog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mock_index_js__ = __webpack_require__(10);
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
/* 130 */
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
/* 131 */
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
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_new__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_new___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_new__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_mobile__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_mobile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_mobile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_alarm__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_alarm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_alarm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_korea__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_korea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_korea__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_test__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_test___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_test__);






const constantRouterMap = [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_0__views_new__ }, { path: '/mobile', component: __WEBPACK_IMPORTED_MODULE_1__views_mobile__ }, { path: '/alarm', component: __WEBPACK_IMPORTED_MODULE_2__views_alarm__ }, { path: '/korea', component: __WEBPACK_IMPORTED_MODULE_3__views_korea__ }, { path: '/test', component: __WEBPACK_IMPORTED_MODULE_4__views_test__ }];
/* harmony export (immutable) */ __webpack_exports__["a"] = constantRouterMap;


/***/ }),
/* 133 */
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
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_login__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie__ = __webpack_require__(160);
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
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(20);




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
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af-ZA": 28,
	"./af-ZA.js": 28,
	"./bg": 29,
	"./bg.js": 29,
	"./ca": 30,
	"./ca.js": 30,
	"./cz": 31,
	"./cz.js": 31,
	"./da": 32,
	"./da.js": 32,
	"./de": 33,
	"./de.js": 33,
	"./ee": 34,
	"./ee.js": 34,
	"./el": 35,
	"./el.js": 35,
	"./en": 36,
	"./en.js": 36,
	"./es": 37,
	"./es.js": 37,
	"./fa": 38,
	"./fa.js": 38,
	"./fi": 39,
	"./fi.js": 39,
	"./fr": 40,
	"./fr.js": 40,
	"./id": 41,
	"./id.js": 41,
	"./it": 42,
	"./it.js": 42,
	"./ja": 43,
	"./ja.js": 43,
	"./ko": 44,
	"./ko.js": 44,
	"./lv": 45,
	"./lv.js": 45,
	"./nb-NO": 46,
	"./nb-NO.js": 46,
	"./nl": 47,
	"./nl.js": 47,
	"./pl": 48,
	"./pl.js": 48,
	"./pt": 50,
	"./pt-br": 49,
	"./pt-br.js": 49,
	"./pt.js": 50,
	"./ru-RU": 51,
	"./ru-RU.js": 51,
	"./sk": 52,
	"./sk.js": 52,
	"./sl": 53,
	"./sl.js": 53,
	"./sv-SE": 54,
	"./sv-SE.js": 54,
	"./ta": 55,
	"./ta.js": 55,
	"./th": 56,
	"./th.js": 56,
	"./tk": 57,
	"./tk.js": 57,
	"./tr-TR": 58,
	"./tr-TR.js": 58,
	"./ua": 59,
	"./ua.js": 59,
	"./vi": 60,
	"./vi.js": 60,
	"./zh-CN": 15,
	"./zh-CN.js": 15,
	"./zh-TW": 61,
	"./zh-TW.js": 61
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
webpackContext.id = 145;

/***/ }),
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 157 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(122),
  /* template */
  __webpack_require__(174),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(123),
  /* template */
  __webpack_require__(170),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(156)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(124),
  /* template */
  __webpack_require__(169),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1c45a4dc",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(157)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(171),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3f86357c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(126),
  /* template */
  __webpack_require__(173),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 169 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.form,
      "label-width": "100px"
    }
  }, [_c('el-form-item', {
    staticStyle: {
      "float": "left"
    },
    attrs: {
      "label": "乘数",
      "label-width": "40px"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "60px"
    },
    model: {
      value: (_vm.form.price),
      callback: function($$v) {
        _vm.form.price = $$v
      },
      expression: "form.price"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "float": "left",
      "margin-left": "5px"
    },
    attrs: {
      "label": "报警最小阈值"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "100px"
    },
    model: {
      value: (_vm.form.minPrice),
      callback: function($$v) {
        _vm.form.minPrice = $$v
      },
      expression: "form.minPrice"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "float": "left"
    },
    attrs: {
      "label": "报警最大阈值"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "60px"
    },
    model: {
      value: (_vm.form.maxPrice),
      callback: function($$v) {
        _vm.form.maxPrice = $$v
      },
      expression: "form.maxPrice"
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.start
    }
  }, [_vm._v("开始")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": _vm.end
    }
  }, [_vm._v("结束")])], 1)], 1), _vm._v(" "), _c('el-radio-group', {
    model: {
      value: (_vm.titleCoin),
      callback: function($$v) {
        _vm.titleCoin = $$v
      },
      expression: "titleCoin"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("oken")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("火币")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": 3
    }
  }, [_vm._v("fcoin")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": 4
    }
  }, [_vm._v("coinEx")])], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "20px"
    }
  }), _vm._v(" "), _c('div', [_c('el-table', {
    attrs: {
      "data": _vm.okenBtcCoin
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "平台"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "now",
      "label": "时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "calc",
      "label": "btc¥"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "last",
      "label": "btc$"
    }
  })], 1), _vm._v(" "), _c('el-table', {
    attrs: {
      "data": _vm.okenEthCoin
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "平台"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "now",
      "label": "时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "calc",
      "label": "eth¥"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "last",
      "label": "eth$"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  }, [_c('el-table', {
    attrs: {
      "data": _vm.huoBiBtcCoin
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "平台"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "now",
      "label": "时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "calc",
      "label": "btc¥"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "last",
      "label": "btc$"
    }
  })], 1), _vm._v(" "), _c('el-table', {
    attrs: {
      "data": _vm.huoBiEthCoin
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "平台"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "now",
      "label": "时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "calc",
      "label": "eth¥"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "last",
      "label": "eth$"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  }, [_c('el-table', {
    attrs: {
      "data": _vm.fcoinBtcCoin
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "平台"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "now",
      "label": "时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "calc",
      "label": "btc¥"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "last",
      "label": "btc$"
    }
  })], 1), _vm._v(" "), _c('el-table', {
    attrs: {
      "data": _vm.fcoinEthCoin
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "平台"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "now",
      "label": "时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "calc",
      "label": "eth¥"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "last",
      "label": "eth$"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  }, [_c('el-table', {
    attrs: {
      "data": _vm.coinExBtcCoin
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "平台"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "now",
      "label": "时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "calc",
      "label": "btc¥"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "last",
      "label": "btc$"
    }
  })], 1), _vm._v(" "), _c('el-table', {
    attrs: {
      "data": _vm.coinExEthCoin
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "平台"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "now",
      "label": "时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "calc",
      "label": "eth¥"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "last",
      "label": "eth$"
    }
  })], 1)], 1), _vm._v(" "), _c('audio', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "src": "./dog.wav",
      "controls": "controls",
      "id": "dogAudio"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "padding": "20px"
    }
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.form,
      "label-width": "180px"
    }
  }, [_c('el-form-item', {
    staticStyle: {
      "float": "left"
    },
    attrs: {
      "label": "人民币价格"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "140px"
    },
    model: {
      value: (_vm.form.price),
      callback: function($$v) {
        _vm.form.price = $$v
      },
      expression: "form.price"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "float": "left"
    },
    attrs: {
      "label": "手续费"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "140px"
    },
    model: {
      value: (_vm.form.commission),
      callback: function($$v) {
        _vm.form.commission = $$v
      },
      expression: "form.commission"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "float": "left"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.start
    }
  }, [_vm._v("开始")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": _vm.end
    }
  }, [_vm._v("结束")])], 1)], 1), _vm._v(" "), _c('el-table', {
    attrs: {
      "data": _vm.ubitBtc,
      "row-style": _vm.rowStyle
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "平台"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "createDate",
      "label": "时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "chinaPrice",
      "label": "btc人民币"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "koreaPrice",
      "label": "btc韩元"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "parities",
      "label": "汇率"
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.form,
      "label-width": "180px"
    }
  }, [_c('el-form-item', {
    staticStyle: {
      "float": "left"
    },
    attrs: {
      "label": "乘数"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "100px"
    },
    model: {
      value: (_vm.form.price),
      callback: function($$v) {
        _vm.form.price = $$v
      },
      expression: "form.price"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "float": "left"
    },
    attrs: {
      "label": "报警最小阈值"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "180px"
    },
    model: {
      value: (_vm.form.minPrice),
      callback: function($$v) {
        _vm.form.minPrice = $$v
      },
      expression: "form.minPrice"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "float": "left"
    },
    attrs: {
      "label": "报警最大阈值"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "180px"
    },
    model: {
      value: (_vm.form.maxPrice),
      callback: function($$v) {
        _vm.form.maxPrice = $$v
      },
      expression: "form.maxPrice"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "float": "right"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.start
    }
  }, [_vm._v("开始")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": _vm.end
    }
  }, [_vm._v("结束")])], 1)], 1), _vm._v(" "), _c('el-radio-group', {
    staticStyle: {
      "margin-left": "140px"
    },
    model: {
      value: (_vm.titleCoin),
      callback: function($$v) {
        _vm.titleCoin = $$v
      },
      expression: "titleCoin"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("oken")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("火币")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": 3
    }
  }, [_vm._v("fcoin")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": 4
    }
  }, [_vm._v("coinEx")])], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "20px"
    }
  }), _vm._v(" "), _c('div', [_c('el-table', {
    staticStyle: {
      "width": "56%",
      "float": "left"
    },
    attrs: {
      "data": _vm.okenBtcCoin
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "平台"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "now",
      "label": "时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "calc",
      "label": "btc人民币"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "last",
      "label": "btc美元"
    }
  })], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "42%"
    },
    attrs: {
      "data": _vm.okenEthCoin
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "now",
      "label": "时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "calc",
      "label": "eth人民币"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "last",
      "label": "eth美元"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "56%",
      "float": "left"
    },
    attrs: {
      "data": _vm.huoBiBtcCoin,
      "show-header": false
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "平台"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "now",
      "label": "时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "calc",
      "label": "btc人民币"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "last",
      "label": "btc美元"
    }
  })], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "42%"
    },
    attrs: {
      "data": _vm.huoBiEthCoin,
      "show-header": false
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "now",
      "label": "时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "calc",
      "label": "eth人民币"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "last",
      "label": "eth美元"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "56%",
      "float": "left"
    },
    attrs: {
      "data": _vm.fcoinBtcCoin,
      "show-header": false
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "平台"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "now",
      "label": "时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "calc",
      "label": "btc人民币"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "last",
      "label": "btc美元"
    }
  })], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "42%"
    },
    attrs: {
      "data": _vm.fcoinEthCoin,
      "show-header": false
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "now",
      "label": "时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "calc",
      "label": "eth人民币"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "last",
      "label": "eth美元"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "56%",
      "float": "left"
    },
    attrs: {
      "data": _vm.coinExBtcCoin,
      "show-header": false
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "平台"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "now",
      "label": "时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "calc",
      "label": "btc人民币"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "last",
      "label": "btc美元"
    }
  })], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "42%"
    },
    attrs: {
      "data": _vm.coinExEthCoin,
      "show-header": false
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "now",
      "label": "时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "calc",
      "label": "eth人民币"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "last",
      "label": "eth美元"
    }
  })], 1)], 1), _vm._v(" "), _c('audio', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "src": "/dog.wav",
      "controls": "controls",
      "id": "dogAudio"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "padding": "20px"
    }
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.form,
      "label-width": "180px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "监控对象"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "140px"
    },
    model: {
      value: (_vm.form.nickName),
      callback: function($$v) {
        _vm.form.nickName = $$v
      },
      expression: "form.nickName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.onStart
    }
  }, [_vm._v("开始监控")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.onStop
    }
  }, [_vm._v("停止播放")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.onStopListening
    }
  }, [_vm._v("停止监控")])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "监控结果"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "1000px"
    },
    model: {
      value: (_vm.form.desc),
      callback: function($$v) {
        _vm.form.desc = $$v
      },
      expression: "form.desc"
    }
  })], 1)], 1), _vm._v(" "), _c('el-table', {
    attrs: {
      "data": _vm.amountChanges,
      "row-style": _vm.rowStyle
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "币种"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "type",
      "label": "类型"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "oldAmount",
      "label": "原数量"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "nowAmount",
      "label": "现数量"
    }
  })], 1), _vm._v(" "), _c('audio', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "src": "/order.wav",
      "controls": "controls",
      "id": "orderAudio",
      "loop": "loop"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "padding": "20px"
    }
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.form,
      "label-width": "180px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "监控对象"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "140px"
    },
    model: {
      value: (_vm.form.nickName),
      callback: function($$v) {
        _vm.form.nickName = $$v
      },
      expression: "form.nickName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.onStart
    }
  }, [_vm._v("开始监控")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.onStop
    }
  }, [_vm._v("停止播放")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.onStopListening
    }
  }, [_vm._v("停止监控")])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "监控结果"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "1000px"
    },
    attrs: {
      "disabled": true
    },
    model: {
      value: (_vm.form.desc),
      callback: function($$v) {
        _vm.form.desc = $$v
      },
      expression: "form.desc"
    }
  })], 1)], 1), _vm._v(" "), _c('el-table', {
    attrs: {
      "data": _vm.amountChanges,
      "row-style": _vm.rowStyle
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "币种"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "createdDate",
      "label": "挂单时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "type",
      "label": "类型"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "oldAmount",
      "label": "原数量"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "nowAmount",
      "label": "现数量"
    }
  })], 1), _vm._v(" "), _c('audio', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "src": "/order.wav",
      "controls": "controls",
      "id": "orderAudio",
      "loop": "loop"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */
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
webpackContext.id = 178;

/***/ })
],[129]);
//# sourceMappingURL=app.3a0a55ab0a09655d5962.js.map