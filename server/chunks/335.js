exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 8437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _imagex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7758);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4965);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__);






gsap__WEBPACK_IMPORTED_MODULE_3___default().registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default()));
const gallery = ()=>{
    const [selectedImage, setselectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_imagex__WEBPACK_IMPORTED_MODULE_2__/* ["default"][0] */ .Z[0]);
    const galleria = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const el = galleria.current;
        gsap__WEBPACK_IMPORTED_MODULE_3___default().fromTo(el, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            delay: 0.2,
            scrollTrigger: {
                trigger: el
            }
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: galleria,
        className: "flex flex-col max-sm:flex-col max-md:flex-col max-sm:hidden max-md:hidden max-lg:hidden mb-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-black text-3xl text-center py-10 font-lobster",
                children: "Gallery"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-center items-center max-h-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "w-8/12 max-sm:w-10/12 max-sm:h-full h-[600px] border-2 border-black",
                        src: selectedImage.url,
                        alt: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-wrap flex-row justify-center items-center ",
                        children: _imagex__WEBPACK_IMPORTED_MODULE_2__/* ["default"].map */ .Z.map((img, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "mt-5 my-1 mx-1 w-[100px] h-[100px] cursor-pointer " + (selectedImage === img ? "scale-110 border-2 border-black" : ""),
                                src: img.url,
                                onClick: ()=>setselectedImage(img),
                                alt: ""
                            }, index))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallery);


/***/ }),

/***/ 7758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    {
        url: "/images/guzmansepticbackground.jpg",
        alt: "Two of our big trucks"
    },
    {
        url: "/images/installation.jpg"
    },
    {
        url: "/images/septictanks.jpg"
    },
    {
        url: "/images/images7.jpg"
    },
    {
        url: "/images/images8.jpg"
    },
    {
        url: "/images/image9.jpg"
    },
    {
        url: "/images/image1.jpg"
    },
    {
        url: "/images/image2.jpg"
    },
    {
        url: "/images/image3.jpg"
    },
    {
        url: "/images/image4.jpg"
    },
    {
        url: "/images/image5.jpg"
    },
    {
        url: "/images/image6.jpg"
    }
]);


/***/ }),

/***/ 3321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4965);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);




gsap__WEBPACK_IMPORTED_MODULE_2___default().registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default()));
const manualservice = ({ Title  })=>{
    const titleAbove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const picLeft = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const description = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const el = titleAbove.current;
        const el1 = picLeft.current;
        const el2 = description.current;
        gsap__WEBPACK_IMPORTED_MODULE_2___default().fromTo(el, {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            delay: 0.3,
            scrollTrigger: {
                trigger: el
            }
        });
        gsap__WEBPACK_IMPORTED_MODULE_2___default().fromTo(el1, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            delay: 0.3,
            scrollTrigger: {
                trigger: el1
            }
        });
        gsap__WEBPACK_IMPORTED_MODULE_2___default().fromTo(el2, {
            x: 100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            delay: 0.3,
            scrollTrigger: {
                trigger: el2
            }
        });
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "font-lobster tracking-widest",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-w-full min-h-screen flex items-center justify-center bg-gradient-to-tl from-black to-gray-500",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full h-full object-cover absolute mix-blend-overlay bg-septic-cleaning bg-fixed bg-cover",
                            alt: "Picture of our trucks"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: " max-sm:text-4xl max-sm:text-center text-5xl text-white",
                            children: Title
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "services",
                className: "font-custom flex flex-row text-center justify-center items-center gap-10 max-sm:flex-col max-md:flex-col max-lg:flex-col",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " flex flex-col w-4/12 items-center justify-start max-sm:w-10/12 max-md:w-10/12 max-lg:w-10/12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                ref: titleAbove,
                                className: " font-lobster font-bold py-5 text-3xl max-sm:text-2xl",
                                children: Title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                ref: picLeft,
                                className: "px-3 max-sm:w-full max-sm:h-full max-md:h-full max-md:w-full max-lg:h-full max-lg:w-full ",
                                src: "/images/images7.jpg",
                                alt: ""
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        ref: description,
                        className: " flex flex-col justify-start items-start w-5/12 max-sm:w-10/12 max-sm: gap-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: " text-justify",
                                children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo consectetur illum odit harum atque maxime incidunt eligendi nisi repudiandae, aliquid unde dicta esse cupiditate at commodi iure perspiciatis repellendus ex."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: " text-justify",
                                children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo consectetur illum odit harum atque maxime incidunt eligendi nisi repudiandae, aliquid unde dicta esse cupiditate at commodi iure perspiciatis repellendus ex."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: " text-justify",
                                children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo consectetur illum odit harum atque maxime incidunt eligendi nisi repudiandae, aliquid unde dicta esse cupiditate at commodi iure perspiciatis repellendus ex."
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (manualservice);


/***/ }),

/***/ 743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slideshow_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3886);
/* harmony import */ var react_slideshow_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slideshow_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slideshow_image_dist_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5383);
/* harmony import */ var react_slideshow_image_dist_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slideshow_image_dist_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_imagex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7758);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4965);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__);







gsap__WEBPACK_IMPORTED_MODULE_5___default().registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6___default()));
const slider = ()=>{
    const slideria = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const el = slideria.current;
        gsap__WEBPACK_IMPORTED_MODULE_5___default().fromTo(el, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            delay: 0.2,
            scrollTrigger: {
                trigger: el
            }
        });
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center lg:hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-center text-3xl py-5",
                children: "GALLERY"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide-container w-11/12",
                ref: slideria,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_slideshow_image__WEBPACK_IMPORTED_MODULE_2__.Slide, {
                    children: _components_imagex__WEBPACK_IMPORTED_MODULE_4__/* ["default"].map */ .Z.map((slideimages, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "each-slide h-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center justify-center bg-cover w-full h-[500px] lg:h-screen",
                                style: {
                                    "backgroundImage": `url(${slideimages.url})`
                                }
                            })
                        }, index))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);


/***/ }),

/***/ 5383:
/***/ (() => {



/***/ })

};
;