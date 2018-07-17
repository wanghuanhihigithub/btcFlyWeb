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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs__ = __webpack_require__(164);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(180);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_i18n__ = __webpack_require__(166);


const config = __webpack_require__(128);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_i18n__["a" /* default */]);

const locale = config.locale || "zh-CN";
const languages = config.languages || ['zh-CN', 'cn'];
const messages = {};
languages.map(lang => {
    messages[lang] = Object.assign(__webpack_require__(181)(`./${lang}`), __webpack_require__(145)(`./${lang}`).default);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(178);
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
  __webpack_require__(175),
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
    return { form: { price: 0, minPrice: 40000, maxPrice: 50000 }, coins: [], huobiCoins: [], fcoins: [], coinEx: [], titleCoin: 1 };
  },
  mounted: function () {},
  methods: {
    start: function () {
      this.getCoinsVs();
      this.getHuobiCoinsVs();
      this.getFCoinsVs();
      this.getCoinEx();
      this.getOkenUsdtEth();
      self = this;
      this.interval = setInterval(function () {
        self.getCoinsVs();
      }, 1000 * 2);
      this.huobiInterval = setInterval(function () {
        self.getHuobiCoinsVs();
      }, 500);
      this.fcoinInterval = setInterval(function () {
        self.getFCoinsVs();
      }, 2000);
      this.coinExInterval = setInterval(function () {
        self.getCoinEx();
      }, 2000);
      setInterval(function () {
        self.getOkenUsdtEth();
      }, 500);
    },
    getCoinsVs: function () {
      self = this;
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/coinsVs').then(res => {
        console.log("oken返回数据", res);
        var last = res.data.ticker.last;
        var calc = (self.form.price * last).toFixed(2);
        if (self.titleCoin == 1) {
          document.title = res.data.createdTime.split(" ")[1].substring(3, 8) + "  " + calc.split(".")[0] + "  " + self.form.price;
          self.ring(calc);
        }
        self.coins = [{ now: res.data.createdTime, calc: calc, last: last, name: "oken" }];
      }).catch(error => console.log(error));
    },
    getHuobiCoinsVs: function () {
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/huobiCoinsVs').then(res => {
        var data = eval('(' + res.data + ')');
        console.log("火币网返回数据", res);
        var calc = (self.form.price * data.close).toFixed(2);
        if (self.titleCoin == 2) {
          document.title = data.createdTime.split(" ")[1].substring(3, 8) + "  " + calc.split(".")[0] + "  " + self.form.price;
          self.ring(calc);
        }
        self.huobiCoins = [{ now: data.createdTime, calc: calc, last: data.close, name: "火币" }];
      }).catch(error => console.log(error));
    },
    getFCoinsVs: function () {
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/fcoinVs').then(res => {
        var last = res.data.data.ticker[0];
        var calc = (self.form.price * last).toFixed(2);
        if (self.titleCoin == 3) {
          document.title = res.data.createdTime.split(" ")[1].substring(3, 8) + "  " + calc.split(".")[0] + "  " + self.form.price;
          self.ring(calc);
        }
        self.fcoins = [{ now: res.data.createdTime, calc: calc, last: last, name: "fcoin" }];
      }).catch(error => console.log(error));
    },
    getCoinEx: function () {
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/coinEx').then(res => {
        var last = res.data.data.ticker.last;
        var calc = (self.form.price * last).toFixed(2);
        if (self.titleCoin == 4) {
          document.title = res.data.createdTime.split(" ")[1].substring(3, 8) + "  " + calc.split(".")[0] + "  " + self.form.price;
          self.ring(calc);
        }
        self.coinEx = [{ now: res.data.createdTime, calc: calc, last: last, name: "coinEx" }];
      }).catch(error => console.log(error));
    },
    end: function () {
      clearInterval(this.interval);
      clearInterval(this.huobiInterval);
      clearInterval(this.fcoinInterval);
      clearInterval(this.coinExInterval);
    },
    ring: function (price) {
      if (price > this.form.maxPrice | price < this.form.minPrice) {
        document.getElementById("dogAudio").play();
      }
    },
    goNew: function () {
      this.$router.push({ path: '/new' });
    },
    getOkenUsdtEth: function () {
      self = this;
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/okenUsdtEth').then(res => {
        console.log("oken返回数据", res);
        var data = eval('(' + res.data + ')');
        var last = data.last;
        var calc = (self.form.price * last).toFixed(2);
        var date = new Date(data.timestamp);
        var now = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        self.okenUsdtEth = [{ now: now, calc: calc, last: last, name: "oken" }];
      }).catch(error => console.log(error));
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hello',
  data: function () {
    return { coins: [] };
  },
  mounted: function () {
    debugger;
    self = this;
    this.findAll();
    setInterval(function () {
      self.findAll();
    }, 40000);
  },
  methods: {
    findAll: function () {
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/coins').then(res => {
        var coins = eval('(' + res.data + ')');
        var playVedio = false;
        if (coins.length > 3) {
          for (var i = 0; i < 3; i++) {
            var coin = coins[i];
            if (coin.fromToProfit > 0 || coin.toFromProfit > 0) {
              playVedio = true;
            }
          }
        }
        if (playVedio) {
          debugger;
          document.getElementById("dogAudio").play();
        }
        this.coins = coins;
      }).catch(error => console.log(error));
    },
    goBack: function () {
      this.$router.push({ path: '/' });
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'search',
  data: function () {
    return { coins: [], createdTimeBegin: '', createdTimeEnd: '', pageSize: 10, currentPage: 1, itemCount: 0 };
  },
  methods: {
    search: function () {
      var params = { createdTimeStart: this.createdTimeBegin, createdTimeEnd: this.createdTimeEnd, page: this.currentPage };
      var self = this;
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/coins/params', { params: params }).then(res => {
        console.log(res);
        self.coins = res.data.coins;
        self.currentPage = res.data.page.page_index;
        self.itemCount = res.data.page.item_count;
      }).catch(error => console.log(error));
    },
    handleSizeChange: function (size) {
      this.pagesize = size;
      this.search();
    },
    handleCurrentChange: function (currentPage) {
      debugger;
      this.currentPage = currentPage;
      this.search();
    },
    goBack: function () {
      this.$router.push({ path: '/' });
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'setting',
  data: function () {
    return {
      form: {
        enableSms: false,
        smsSendInterval: 30,
        smsReceiver: ''
      }
    };
  },
  mounted: function () {
    this.findSetting();
  },
  methods: {
    findSetting: function () {
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/setting/1').then(res => {
        res.data.enableSms = !!res.data.enableSms;
        this.form = res.data;
      }).catch(error => console.log(error));
    },
    onSubmit: function () {
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/setting/1', this.form).then(res => {
        debugger;
      }).catch(error => console.log(error));
    },
    goBack: function () {
      this.$router.push({ path: '/' });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_nav___ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_nav____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_nav___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_search__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_setting__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_setting___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_setting__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_oken__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_oken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_oken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_new__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_new___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_new__);






const constantRouterMap = [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_0__views_nav___ }, { path: '/search', component: __WEBPACK_IMPORTED_MODULE_1__views_search__ }, { path: '/setting', component: __WEBPACK_IMPORTED_MODULE_2__views_setting__ }, { path: '/oken', component: __WEBPACK_IMPORTED_MODULE_3__views_oken__ }, { path: '/new', component: __WEBPACK_IMPORTED_MODULE_4__views_new__ }];
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie__ = __webpack_require__(163);
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
/* 158 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 159 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 160 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(160)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(122),
  /* template */
  __webpack_require__(177),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-e84a2582",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(157)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(123),
  /* template */
  __webpack_require__(173),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3f86357c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(159)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(124),
  /* template */
  __webpack_require__(176),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7926f882",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(158)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(174),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-45692b3c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(156)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(126),
  /* template */
  __webpack_require__(172),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-11db35ac",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "padding": "20px"
    },
    attrs: {
      "id": "app"
    }
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.form,
      "label-width": "180px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "是否开启短信通知"
    }
  }, [_c('el-switch', {
    attrs: {
      "active-text": "开启",
      "inactive-text": "关闭"
    },
    model: {
      value: (_vm.form.enableSms),
      callback: function($$v) {
        _vm.form.enableSms = $$v
      },
      expression: "form.enableSms"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "发送短信间隔时间(分钟)"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.smsSendInterval),
      callback: function($$v) {
        _vm.form.smsSendInterval = $$v
      },
      expression: "form.smsSendInterval "
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "短信收件人(多个用,分隔)"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.smsReceiver),
      callback: function($$v) {
        _vm.form.smsReceiver = $$v
      },
      expression: "form.smsReceiver"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_vm._v("保存")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v("导航")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 173 */
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
      "src": "./dog.wav",
      "controls": "controls",
      "id": "dogAudio"
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
    },
    attrs: {
      "id": "app"
    }
  }, [_c('el-button', {
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v("导航")]), _vm._v(" "), _c('el-date-picker', {
    attrs: {
      "type": "datetime",
      "placeholder": "开始时间",
      "format": "yyyy-MM-dd HH:mm:ss"
    },
    model: {
      value: (_vm.createdTimeBegin),
      callback: function($$v) {
        _vm.createdTimeBegin = $$v
      },
      expression: "createdTimeBegin"
    }
  }), _vm._v(" "), _c('el-date-picker', {
    attrs: {
      "type": "datetime",
      "placeholder": "结束时间",
      "format": "yyyy-MM-dd HH:mm:ss"
    },
    model: {
      value: (_vm.createdTimeEnd),
      callback: function($$v) {
        _vm.createdTimeEnd = $$v
      },
      expression: "createdTimeEnd"
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "icon": "el-icon-search"
    },
    on: {
      "click": _vm.search
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%",
      "margin-top": "20px"
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
  })], 1), _vm._v(" "), _c('el-pagination', {
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 50, 100],
      "page-size": _vm.pageSize,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.itemCount
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "padding": "20px"
    },
    attrs: {
      "id": "app"
    }
  }, [_c('el-button', {
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v("导航")]), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%",
      "margin-top": "20px"
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
  })], 1), _vm._v(" "), _c('audio', {
    attrs: {
      "src": "./dog.wav",
      "controls": "controls",
      "id": "dogAudio"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.goNew()
      }
    }
  }, [_vm._v("进入新页面")]), _vm._v(" "), _c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.form,
      "label-width": "180px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "乘数"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.price),
      callback: function($$v) {
        _vm.form.price = $$v
      },
      expression: "form.price "
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "报警最小阈值"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.minPrice),
      callback: function($$v) {
        _vm.form.minPrice = $$v
      },
      expression: "form.minPrice "
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "报警最大阈值"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.maxPrice),
      callback: function($$v) {
        _vm.form.maxPrice = $$v
      },
      expression: "form.maxPrice "
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    on: {
      "click": _vm.end
    }
  }, [_vm._v("结束")])], 1)], 1), _vm._v(" "), _c('el-radio-group', {
    staticStyle: {
      "margin-left": "120px"
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
  }), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "50%",
      "float": "left"
    },
    attrs: {
      "data": _vm.coins
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
      "width": "50%"
    },
    attrs: {
      "data": _vm.okenUsdtEth
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
  })], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  }), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "50%"
    },
    attrs: {
      "data": _vm.huobiCoins,
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
      "label": "乘数 * last"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "last",
      "label": "last"
    }
  })], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "50%"
    },
    attrs: {
      "data": _vm.fcoins,
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
      "label": "乘数 * last"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "last",
      "label": "last"
    }
  })], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "50%"
    },
    attrs: {
      "data": _vm.coinEx,
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
      "label": "乘数 * last"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "last",
      "label": "last"
    }
  })], 1), _vm._v(" "), _c('audio', {
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
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */
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
webpackContext.id = 181;

/***/ })
],[129]);
//# sourceMappingURL=app.a2d78833a6b6f3a76155.js.map