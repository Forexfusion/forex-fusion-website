exports.id = 117;
exports.ids = [117];
exports.modules = {

/***/ 9774:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6362))

/***/ }),

/***/ 6362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Navbar({ onHomeClick }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "w-full bg-[#0b0f19] text-white py-4 px-6 flex justify-between items-center fixed top-0 z-50 shadow-lg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center space-x-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/",
                    className: "flex items-center space-x-2",
                    onClick: onHomeClick,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: "/logo.png",
                            alt: "Forex Fusion Logo",
                            width: 40,
                            height: 40,
                            priority: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-2xl font-bold text-white",
                            children: "Forex Fusion"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "flex space-x-6 text-base font-medium",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/",
                            className: "hover:text-yellow-400 transition",
                            onClick: onHomeClick,
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/services",
                            className: "hover:text-yellow-400 transition",
                            children: "Services"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/pricing",
                            className: "hover:text-yellow-400 transition",
                            children: "Pricing"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/payment",
                            className: "hover:text-yellow-400 transition",
                            children: "Payment"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/about",
                            className: "hover:text-yellow-400 transition",
                            children: "About"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/contact",
                            className: "hover:text-yellow-400 transition",
                            children: "Contact"
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(4490);
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/Navbar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\LENOVO\Downloads\forex-fusion-website\src\components\Navbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navbar = (__default__);
;// CONCATENATED MODULE: ./src/app/layout.tsx




const metadata = {
    title: "Forex Fusion",
    description: "Smart Trading for Every Trader"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: `${(target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className} bg-[#0B1120] text-white`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pt-20",
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                    className: "bg-[#0B1120] text-gray-300 py-12 px-6",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-white text-2xl font-bold mb-4",
                                                children: "Forex Fusion"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "mb-3",
                                                children: "Empowering traders with precision tools, strategic insights, and real-time AI signals."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "text-sm text-gray-500",
                                                children: [
                                                    "\xa9 ",
                                                    new Date().getFullYear(),
                                                    " Forex Fusion. All rights reserved."
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "text-white text-lg font-semibold mb-2",
                                                children: "Policies"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "space-y-1 text-gray-400 text-sm",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "/terms",
                                                            className: "hover:underline",
                                                            children: "Terms and Conditions"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "/disclaimer",
                                                            className: "hover:underline",
                                                            children: "Disclaimer"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "/privacy",
                                                            className: "hover:underline",
                                                            children: "Privacy Policy"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "/refund",
                                                            className: "hover:underline",
                                                            children: "Refund Policy"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "/forex-benefits",
                                                            className: "hover:underline",
                                                            children: "Benefits of Forex"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "/comex-benefits",
                                                            className: "hover:underline",
                                                            children: "Benefits of Comex"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "/FAQ",
                                                            className: "hover:underline",
                                                            children: "FAQ"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "md:text-right space-y-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "md:text-right text-xl font-bold text-white",
                                        children: "Reach out to us at:"
                                    }),
                                    [
                                        {
                                            icon: "/location.png",
                                            alt: "Location",
                                            content: "Forexfusion, Office 203, Floor 02, Al Zubara Tower, Salam Street, Abu Dhabi, UAE"
                                        },
                                        {
                                            icon: "/office.png",
                                            alt: "Office",
                                            content: "Virtual office (Flexi-desk)"
                                        },
                                        {
                                            icon: "/license.png",
                                            alt: "License",
                                            content: "License: Management consultancy / IT / Trading platform"
                                        },
                                        {
                                            icon: "/business.png",
                                            alt: "Business",
                                            content: "Forex education, strategy tools, signal advisory, AI trading tools"
                                        },
                                        {
                                            icon: "/email.png",
                                            alt: "Email",
                                            content: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "mailto:businesssolutions@forexfusion.in",
                                                className: "hover:underline",
                                                children: "businesssolutions@forexfusion.in"
                                            })
                                        },
                                        {
                                            icon: "/whatsapp.png",
                                            alt: "WhatsApp",
                                            content: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://wa.me/9730998637",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "hover:underline",
                                                children: "Chat on WhatsApp"
                                            })
                                        }
                                    ].map(({ icon, alt, content }, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex md:justify-end items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: icon,
                                                    alt: alt,
                                                    className: "w-5 h-5 pt-[2px]"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "max-w-md",
                                                    children: content
                                                })
                                            ]
                                        }, idx))
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;