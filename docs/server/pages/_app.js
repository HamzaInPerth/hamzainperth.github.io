"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/Common/NavBar.tsx

// import { BeakerIcon } from '@heroicons/react/solid'


class NavBar extends (external_react_default()).Component {
    constructor(props){
        super(props);
        this.state = {
            active: false
        };
        this.toggleMenu = (active)=>{
            this.setState({
                active
            });
        };
    }
    componentDidMount() {
        console.log('mounted');
    }
    // componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState, this.state)
    // }
    render() {
        // const { darkMode } = this.props
        const { active  } = this.state;
        let darkMode = false;
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: ` h-sceeen relative  border-r ${darkMode ? 'bg-black text-white' : 'text-black'}`,
            style: {
                zIndex: '100'
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "fixed md:sticky z-50 bg-white md:m-0 m-2 rounded-full md:border-0 border-2 border-black",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "md:hidden block p-2",
                        onClick: ()=>this.toggleMenu(!active)
                        ,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            className: "w-6 h-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    className: `transition-all ease-in-out  ${active ? 'opacity-0 pointer-events-none scale-150' : 'opacity-100 scale-100'}`,
                                    fillRule: "evenodd",
                                    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",
                                    clipRule: "evenodd"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    className: `transition-all ease-in-out ${active ? 'opacity-100 scale-100' : 'opacity-0 pointer-events-none scale-150'}`,
                                    fillRule: "evenodd",
                                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                    clipRule: "evenodd"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `wrap-menu-items ${active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto'}`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                onClick: ()=>this.toggleMenu(false)
                                ,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Home"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                onClick: ()=>this.toggleMenu(false)
                                ,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/works",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Works"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        }));
    }
}
/* harmony default export */ const Common_NavBar = (NavBar);

;// CONCATENATED MODULE: ./pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    const router = (0,router_namespaceObject.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-custom-white w-full",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-full pb-10 mx-auto grid grid-cols-1 md:grid-cols-12 tracking-widest",
            style: {
                maxWidth: "1480px"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "xl:col-span-2 md:col-span-3",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Common_NavBar, {
                        "dark-mode": false
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "xl:col-span-10 md:col-span-9",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    }, router.asPath)
                })
            ]
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,664], () => (__webpack_exec__(835)));
module.exports = __webpack_exports__;

})();