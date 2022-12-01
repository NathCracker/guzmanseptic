exports.id = 249;
exports.ids = [249];
exports.modules = {

/***/ 6527:
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
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__);





gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default()));
const about = ()=>{
    const title = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const description = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const location = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const el = title.current;
        const el2 = description.current;
        const el3 = map.current;
        const el4 = location.current;
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.utils.toArray(".offer").forEach((offers)=>{
            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.fromTo(offers, {
                x: -100,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: offers,
                    delay: gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default().isInViewport(offers) ? 1 : 0
                }
            });
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.fromTo(el, {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: el
            }
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.fromTo(el2, {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            delay: 0.5,
            opacity: 1,
            scrollTrigger: {
                trigger: el2
            }
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.fromTo(el3, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            delay: 0.5,
            opacity: 1,
            scrollTrigger: {
                trigger: el3
            }
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.fromTo(el4, {
            opacity: 0
        }, {
            opacity: 1,
            scrollTrigger: {
                trigger: el4
            }
        });
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " bg-gradient-to-br from-gray-100 to-white font-custom flex justify-around snap-y snap-mandatory max-sm:flex-col max-md: flex-wrap",
        id: "about",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center flex flex-col items-center snap-start max-sm:mb-10 gap-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        ref: title,
                        className: "text-3xl py-5 font-lobster",
                        children: "About us"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row justify-between items-center gap-16",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "offer",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/images/ico/house.png",
                                        alt: "Residential",
                                        className: "max-h-28"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Residential"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "offer",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/images/ico/skyline.png",
                                        alt: "Commercial",
                                        className: "max-h-28"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "",
                                        children: "Commercial"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: description,
                        className: "max-w-lg text-justify max-sm:w-11/12 max-md:w-full ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "my-2",
                            children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint soluta, laboriosam voluptatibus eligendi quaerat explicabo modi repellat animi pariatur sapiente quod doloremque, fugiat in ex? Amet eos, in dolor quisquam blanditiis incidunt veritatis reiciendis iusto doloribus consequuntur, unde, quaerat necessitatibus voluptatum! Dolor eos quas, quos quaerat illum neque sint."
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: map,
                className: " flex flex-col justify-center max-sm:text-center max-w-[600px] max-h-[600px] max-sm:w-full max-md:w-full max-lg:w-[600px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                        className: "lg:hidden py-2 max-sm:w-full",
                        width: "600",
                        height: "400",
                        id: "gmap_canvas",
                        src: "https://maps.google.com/maps?q=%2017914%20E%20Hardy%20Rd,%20North%20Houston,%20TX,%20United%20States,%20Texas&t=k&z=15&ie=UTF8&iwloc=&output=embed",
                        frameborder: "0",
                        scrolling: "no",
                        marginheight: "0",
                        marginwidth: "0"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row text-center justify-center items-center my-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoLocationSharp, {
                                className: "text-2xl -translate-y-2 max-sm:-translate-y-6"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xl max-sm:pb-10 max-sm:text-xl ",
                                children: " 17914 E Hardy Rd, Houston, TX 77073, USA"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                        className: "max-sm:hidden max-md:hidden max-lg:hidden py-2 max-sm:w-full",
                        width: "600",
                        height: "400",
                        id: "gmap_canvas",
                        src: "https://maps.google.com/maps?q=%2017914%20E%20Hardy%20Rd,%20North%20Houston,%20TX,%20United%20States,%20Texas&t=k&z=15&ie=UTF8&iwloc=&output=embed",
                        frameborder: "0",
                        scrolling: "no",
                        marginheight: "0",
                        marginwidth: "0"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);


/***/ }),

/***/ 5417:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7163);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emailjs_browser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4965);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);
react_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








gsap__WEBPACK_IMPORTED_MODULE_5___default().registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6___default()));
const contacts = ()=>{
    //Scroll animation
    const contacts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const el = contacts.current;
        gsap__WEBPACK_IMPORTED_MODULE_5___default().fromTo(el, {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: el
            }
        });
    }, []);
    //input validation
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [phoneNumber, setphoneNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    //emailJS
    const form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const sendEmail = (e)=>{
        const success = ()=>react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("Message sent!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        const failed = ()=>react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error("Error please try again.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        const requirements = ()=>react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error("Please fill up the required fields!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        const requirementsInvalid = (where)=>react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error("Invalid " + where + ". Please try again!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        e.preventDefault();
        if (name.length == 0 && email.length == 0 && phoneNumber.length == 0 && message.length == 0) {
            requirements();
        } else if (name.length == 0) {
            requirementsInvalid("name");
        } else if (email.length == 0) {
            requirementsInvalid("email address");
        } else if (phoneNumber.length == 0) {
            requirementsInvalid("phone number");
        } else if (message.length == 0) {
            requirementsInvalid("message");
        } else if (address.length == 0) {
            requirementsInvalid("address");
        } else {
            _emailjs_browser__WEBPACK_IMPORTED_MODULE_2___default().sendForm("service_h53hsbv", "template_2wsgejr", form.current, "55VfGu7c3pQDEh_no").then((result)=>{
                console.log(result.text);
                success();
            }, (error)=>{
                console.log(error.text);
                failed();
            });
        }
    };
    //<a href="https://www.flaticon.com/free-icons/customer-service" title="customer service icons">Customer service icons created by Freepik - Flaticon</a>
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: contacts,
        className: " bg-white pt-10 pb-5 mt-10 font-custom",
        id: "contacts",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex justify-center items-center mx-3 mb-6 max-sm:flex-col lg:flex-row max-md: flex-col",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-5 text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-black text-5xl max-sm:text-center font-lobster",
                            children: "Connect with us"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-black max-sm:text-center",
                            children: "Feel free to contact us using this form or by calling our hotline."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "offer flex justify-center items-center flex-col gap-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/ico/call-center.png",
                                    alt: "Commercial",
                                    className: "max-h-28"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-center items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsFillTelephoneFill, {
                                            className: "text-4xl max-sm:text-lg"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "px-2 max-sm:text-lg text-3xl",
                                            children: "+1 281-642-2355"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "max-sm:pb-10",
                                    children: "Our customer service is open for 24 hours."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "font-lobster text-3xl lg:hidden pb-5",
                                    children: "Contact Form"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    ref: form,
                    onSubmit: sendEmail,
                    action: "",
                    className: " flex justify-center items-center flex-col gap-5 px-4 my-auto w-[50%] max-w-full mx-auto max-sm:w-full max-md:w-full max-lg:w-full",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-1 flex-col justify-start w-full max-sm:w-full max-md:w-full max-lg:w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "name",
                                    className: " text-black",
                                    children: "Name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    onChange: (e)=>setName(e.target.value),
                                    className: "border border-slate-900 w-full rounded-sm focus:outline-none focus:border-teal-500 py-1",
                                    name: "from_name",
                                    type: "text"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-1 flex-col justify-start w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "email",
                                    className: "text-black",
                                    children: "Email"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    onChange: (e)=>setEmail(e.target.value),
                                    name: "from_email",
                                    className: "border border-slate-900 w-full rounded-sm focus:outline-none focus:border-teal-500 py-1",
                                    type: "email",
                                    id: "email"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-1 flex-col justify-start w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "phone",
                                    className: "text-black",
                                    children: "Phone Number"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    onChange: (e)=>setphoneNumber(e.target.value),
                                    name: "from_phone",
                                    className: "border border-slate-900 w-full rounded-sm focus:outline-none focus:border-teal-500 py-1",
                                    type: "number",
                                    min: "11111111111",
                                    max: "99999999999",
                                    id: "phone"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-1 flex-col justify-start w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "address",
                                    className: "text-black",
                                    children: "Address"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    onChange: (e)=>setAddress(e.target.value),
                                    name: "from_address",
                                    className: "border border-slate-900 w-full rounded-sm focus:outline-none focus:border-teal-500 py-1",
                                    type: "text",
                                    id: "address"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-1 flex-col justify-start w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "address",
                                    className: "text-black",
                                    children: "Service"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    name: "from_select",
                                    id: "select",
                                    className: "border border-slate-900 w-full rounded-sm focus:outline-none focus:border-teal-500 py-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "Cleaning and Pumping",
                                            children: "Septic Cleaning and Pumping"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "Installation",
                                            children: "Septic Tank Installation"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "Control Panels",
                                            children: "Septic Control Panel"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "Grease Traps",
                                            children: "Grease Traps"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "High Pressure Jetting",
                                            children: "High Pressure Jetting"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "Septic Tank Repair",
                                            children: "Septic Tank Repair"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-1 flex-col justify-start w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "message",
                                    className: "text-black",
                                    children: "Message"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    onChange: (e)=>setMessage(e.target.value),
                                    rows: "4",
                                    className: "appearance-none border border-slate-900 block rounded-sm w-full focus:outline focus:border min-h-[150px] max-h-[300px] focus:border-teal-500 resize-y",
                                    cols: "4",
                                    type: "text",
                                    name: "message",
                                    id: "message"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "submit",
                            value: "Send",
                            className: "w-full text-white bg-slate-800 px-4 py-2 cursor-pointer rounded-sm transition-all hover:scale-105 duration-300 hover:shadow-md"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contacts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ })

};
;