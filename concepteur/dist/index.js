import "./index.css";
import {jsx as $bdjGp$jsx, jsxs as $bdjGp$jsxs, Fragment as $bdjGp$Fragment} from "react/jsx-runtime";
import $bdjGp$react, {createElement as $bdjGp$createElement, useEffect as $bdjGp$useEffect, useState as $bdjGp$useState, useRef as $bdjGp$useRef, memo as $bdjGp$memo, Suspense as $bdjGp$Suspense} from "react";
import {styled as $bdjGp$styled} from "@mui/material/styles";
import {useRouter as $bdjGp$useRouter, usePathname as $bdjGp$usePathname} from "next/navigation";
import {Box as $bdjGp$Box, Input as $bdjGp$Input} from "@mui/material";
import {signIn as $bdjGp$signIn, getProviders as $bdjGp$getProviders, getSession as $bdjGp$getSession, useSession as $bdjGp$useSession, SessionProvider as $bdjGp$SessionProvider} from "next-auth/react";
import {customAlphabet as $bdjGp$customAlphabet} from "nanoid";
import $bdjGp$slugify from "slugify";
import $bdjGp$qs from "qs";
import {setCookie as $bdjGp$setCookie} from "nookies";
import $bdjGp$nextdynamic from "next/dynamic";
import $bdjGp$reactplayerlazy from "react-player/lazy";
import $bdjGp$nextimage from "next/image";
import $bdjGp$styledcomponents from "styled-components";
import {Slide as $bdjGp$Slide, Fade as $bdjGp$Fade, Zoom as $bdjGp$Zoom} from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import $bdjGp$jscookie from "js-cookie";
import $bdjGp$nextlink from "next/link";
import {config as $bdjGp$config} from "dotenv";
import * as $bdjGp$animatecss from "animate.css";


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequiref7b0"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequiref7b0"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("fhvMe", function(module, exports) {

$parcel$export(module.exports, "default", () => $b20117cb269de20a$export$2e2bcd8739ae039);



var $4AbAj = parcelRequire("4AbAj");

var $71W4S = parcelRequire("71W4S");

var $4A29E = parcelRequire("4A29E");
const $b20117cb269de20a$var$style = {};
const $b20117cb269de20a$var$Section = ({ data: data, bp: bp, rawChildren: rawChildren, jsonData: jsonData, handleDelete: handleDelete, previewId: previewId, handlePaste: handlePaste, handleDrop: handleDrop, path: path, parent: parent, activeStyle: activeStyle, onItemClick: onItemClick, className: className = "", activeItem: activeItem, ...props })=>{
    const element = data;
    const layout = data.children;
    const renderColumn = (el)=>{
        return (0, $4A29E.containerTypes).includes(el.type) ? /*#__PURE__*/ (0, $bdjGp$jsx)($b20117cb269de20a$var$Section, {
            data: el,
            parent: data,
            bp: bp,
            previewId: previewId,
            setParentIsActive: props.setParentIsActive
        }, el.id) : /*#__PURE__*/ (0, $bdjGp$jsx)((0, $71W4S.default), {
            data: el,
            parent: data,
            bp: bp,
            previewId: previewId,
            setParentIsActive: props.setParentIsActive
        }, el.id);
    };
    return /*#__PURE__*/ (0, $bdjGp$createElement)((0, $4AbAj.default), {
        ...props,
        key: element.id,
        parent: parent,
        path: path,
        bp: bp,
        ...element,
        previewId: previewId,
        style: {
            ...$b20117cb269de20a$var$style
        },
        className: className + " base " + element.type + " ",
        element: element,
        onItemClick: onItemClick,
        activeItem: activeItem
    }, rawChildren || layout?.map((column, index)=>{
        return renderColumn(column);
    }));
};
var $b20117cb269de20a$export$2e2bcd8739ae039 = $b20117cb269de20a$var$Section;

});
parcelRegister("4AbAj", function(module, exports) {

$parcel$export(module.exports, "default", () => $356382b63c8d63b4$export$2e2bcd8739ae039);




var $fhvMe = parcelRequire("fhvMe");

var $1sHjs = parcelRequire("1sHjs");

var $5CYvY = parcelRequire("5CYvY");

var $6so0H = parcelRequire("6so0H");

var $fg8oC = parcelRequire("fg8oC");

var $eQFRT = parcelRequire("eQFRT");

var $l7axT = parcelRequire("l7axT");


var $aa6c7 = parcelRequire("aa6c7");

var $kqwRD = parcelRequire("kqwRD");

const $356382b63c8d63b4$var$Div = (0, $bdjGp$styled)((0, $bdjGp$Box))(({ cssstyle: cssstyle, backgroundhover: backgroundhover, customcss: customcss, activestyle: activestyle, hovercss: hovercss, hoverstyle: hoverstyle, type: type })=>`
position: relative;
${cssstyle}
&.activeItem{${activestyle};}

${customcss};
&:hover{
    &>.scrollButton {
        display: block;
    }
    ${hoverstyle};
    ${hovercss};
}
`);
const $356382b63c8d63b4$var$DivRow = (0, $bdjGp$styled)((0, $bdjGp$Box))(({ cssstyle: cssstyle, backgroundhover: backgroundhover, customcss: customcss, activestyle: activestyle, hovercss: hovercss, hoverstyle: hoverstyle, type: type })=>`
${customcss};
&.activeItem{${activestyle};}
${backgroundhover ? `&:hover{transition: 0.1s;${backgroundhover}};` : ""}
`);

const $356382b63c8d63b4$var$Base = ({ children: children, bp: bp, element: element, rawChildren: rawChildren, previewId: previewId, updProps: updProps, type: type, className: className = "", onItemClick: onItemClick, parent: parent, ...props })=>{
    const [open, setOpen] = (0, $bdjGp$react).useState(false);
    const [popup, setPopup] = (0, $bdjGp$react).useState(false);
    const [isActive, setIsActive] = (0, $bdjGp$react).useState(false);
    const [smallMenu, setSmallMenu] = (0, $bdjGp$react).useState();
    const [isHover, setIsHover] = (0, $bdjGp$react).useState(false);
    const [showSmallPopup, setShowSmallPopup] = (0, $bdjGp$react).useState(false);
    const updActive = (val)=>{
        // console.log("checking is active", val, element.id, props.setParentIsActive)
        setIsActive(val);
    // if(props.setParentIsActive) props.setParentIsActive(true)
    };
    const handleHover = async (e)=>{
        // setIsActive(true)
        if (props.handleHover) props.handleHover(e);
        if (element.onHover?.actionType === "close") (0, $1sHjs.default).closePopup();
        else if (element.onHover?.actionType === "reload") location.reload();
        else if (element.onHover?.actionType === "popup") (0, $1sHjs.default).showPopupPreview(element.custom.popup);
        else if (element.onHover?.actionType === "placeHolder") // console.log("showComponent", element.custom.popup)
        (0, $1sHjs.default).showPlaceHolder(element?.custom?.placeHolder, element?.custom?.popup);
        else if (element.onHover?.actionType === "smallMenu") setTimeout(()=>{
            toogleSmallMenu(true, true);
        }, 200);
        else if (element.onClick?.actionType === "leftMenu") (0, $1sHjs.default).toogleLeftMenu();
        else if (element.onClick?.actionType === "rightMenu") (0, $1sHjs.default).toogleRightMenu();
        else if (element.onClick?.actionType === "panier") {
            console.log("tooglePanier");
            (0, $1sHjs.default).tooglePanier();
        }
    };
    const handleHoverLeave = async (e)=>{
        // if (element.onHover?.actionType) {
        //     PopupSingleton.closePopup()
        // } 
        if (element.onHover?.actionType === "smallMenu") setTimeout(()=>{
            toogleSmallMenu(false);
        }, 200);
        else if (element.onClick?.actionType === "leftMenu") (0, $1sHjs.default).toogleLeftMenu();
        else if (element.onClick?.actionType === "rightMenu") (0, $1sHjs.default).toogleRightMenu();
        else if (element.onClick?.actionType === "panier") {
            console.log("tooglePanier");
            (0, $1sHjs.default).tooglePanier();
        }
    };
    const handleOpen = async (e)=>{
        // setIsActive(true)
        if (props.handleOnClick) props.handleOnClick(e);
        if (onItemClick) onItemClick(e);
        else if (element.onClick?.actionType === "close") (0, $1sHjs.default).closePopup();
        else if (element.onClick?.actionType === "reload") location.reload();
        else if (element.onClick?.actionType === "popup") (0, $1sHjs.default).showPopupPreview(element.custom.popup);
        else if (element.onClick?.actionType === "placeHolder") // console.log("showComponent", element.custom.popup)
        (0, $1sHjs.default).showPlaceHolder(element?.custom?.placeHolder, element?.custom?.popup);
        else if (element.onClick?.actionType === "url") window.open(element.custom?.url, "_self");
        else if (element.onClick?.actionType === "smallMenu") {
            toogleSmallMenu();
            setIsHover(false);
        } else if (element.onClick?.actionType === "leftMenu") (0, $1sHjs.default).toogleLeftMenu();
        else if (element.onClick?.actionType === "rightMenu") (0, $1sHjs.default).toogleRightMenu();
        else if (element.onClick?.actionType === "panier") {
            console.log("tooglePanier");
            (0, $1sHjs.default).tooglePanier();
        } else if (element.onClick?.actionType === "page") (0, $1sHjs.default).showPage(element?.custom?.page);
        else if (element.onClick?.actionType === "login") {
            const { signIn: signIn, getProviders: getProviders } = await $356382b63c8d63b4$importAsync$190d75993a1bc0c6;
            const providers = await getProviders();
            signIn(element?.custom?.provider || "google");
        } else if (element.onClick?.actionType === "method") (0, $kqwRD.default).execMethod(previewId, element.onClick?.method, e, {
            id: element.id,
            params: element.custom
        });
        else if (element.onClick?.actionType === "airtel") e.preventDefault();
        (0, $kqwRD.default).updSetIsActive(updActive);
    // if(!props?.forwardClick) e.stopPropagation()
    // if (element?.onClick?.style) {
    //     e.stopPropagation()
    // }
    };
    const handleClose = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setOpen(false);
    };
    const toogleSmallMenu = (show, _isHover)=>{
        // console.log(parseInt(getComputedStyle(document.getElementById(element.id)).width))
        setIsHover(_isHover != undefined);
        if (show != undefined) {
            if (show) setSmallMenu((0, $1sHjs.default).get(element?.custom?.popup));
            setShowSmallPopup(show);
            return;
        }
        if (!showSmallPopup) setSmallMenu((0, $1sHjs.default).get(element?.custom?.popup));
        setShowSmallPopup(!showSmallPopup);
    };
    const renderChildren = ()=>{
        return (0, $bdjGp$react).Children.map(children, (child)=>child && /*#__PURE__*/ (0, $bdjGp$react).cloneElement(child, {
                setParentIsActive: updActive
            }));
    };
    (0, $bdjGp$useEffect)(()=>{
        if (element.onScreen && element.onScreen["data-osn"]) {
            const rootEl = document.getElementById(element.id);
            element.onScreen["data-osn-duration"] && rootEl.style.setProperty("--animate-duration", element.onScreen["data-osn-duration"] + "s");
            element.onScreen["data-osn-delay"] && rootEl.style.setProperty("-webkit-animation-delay", element.onScreen["data-osn-delay"] + "s");
            element.onScreen["data-osn-delay"] && rootEl.style.setProperty("animation-delay", element.onScreen["data-osn-delay"] + "s");
            element.onScreen["data-osn-repeat"] && rootEl.style.setProperty("--animate-repeat", element.onScreen["data-osn-repeat"]);
            (0, $l7axT.default).observe(rootEl);
            rootEl.addEventListener("animationend", ()=>{
                // console.log("animationend", rootEl.className)
                rootEl.classList.remove(`animate__animated`, element.onScreen["data-osn"]);
            });
        }
    }, [
        element.onScreen
    ]);
    const w = element[bp]?.fixedW || element.md?.fixedW && element.md?.style?.width ? "auto" : element[bp]?.w || (element.md?.w >= 6 ? element.md?.w : null);
    const { display: _display, direction: direction, alignItems: alignItems, justifyContent: justifyContent, alignContent: alignContent, flexDirection: flexDirection, flexWrap: flexWrap, zIndex: zIndex, borderRadius: borderRadius, borderStyle: borderStyle, borderWidth: borderWidth, borderColor: borderColor, marginRight: marginRight, marginLeft: marginLeft, marginTop: marginTop, marginBottom: marginBottom, paddingRight: paddingRight, paddingLeft: paddingLeft, paddingTop: paddingTop, paddingBottom: paddingBottom, height: height, alignSelf: alignSelf, maxWidth: maxWidth, maxHeight: maxHeight, position: position, top: top, bottom: bottom, left: left, right: right, overflowX: overflowX, overflowY: overflowY, ..._otherStyles } = (0, $5CYvY.computedStyle)(element.style || {}, element, bp);
    const [display, setDisplay] = (0, $bdjGp$useState)(_display);
    function checkDisplay(screenWidth) {
        if (parseInt(element.display?.minScreenWidth) > screenWidth) setDisplay("none");
        else setDisplay(_display);
    }
    (0, $bdjGp$useEffect)(()=>{
        if (element.display?.[bp]?.minScreenWidth) (0, $aa6c7.default).addWatcher(element.id, checkDisplay, element.display?.[bp]?.minScreenWidth);
    }, []);
    var onHover = element.onHover?.move ? element.onHover?.move + "-" + (element.onHover?.moveSpeed || "normal") : "";
    var onHoverDisplay = (element.onHover?.display, element.onHover?.display);
    var backgroundhover = element.custom?.backgroundImageHover ? `background-image: url(${element.custom?.backgroundImageHover})!important; background-position: ${element.custom?.backgroundPositionHover}!important; background-size: ${element.custom?.backgroundSizeHover}!important` : null;
    const onHoverStyle = element.onHover?.style ? (0, $6so0H.JSToCSS)(element.onHover?.style, "!important") : null;
    var childMaxWidth = (0, $5CYvY.getPixelValue)(element[bp]?.child, "maxWidth");
    // console.log("position display", element.id, bp, position, display, childMaxWidth)
    const col = w ? " col-xs-" + w + " col-sm-" + w + " col-md-" + w : " col";
    return /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $bdjGp$Fragment), {
        children: [
            /*#__PURE__*/ (0, $bdjGp$jsxs)($356382b63c8d63b4$var$Div, {
                id: element.id,
                className: (onHoverDisplay || "") + col + " main_preview " + " main_" + element.type + " ",
                cssstyle: element.cssStyle,
                hovercss: element.onHover?.css,
                hoverstyle: onHoverStyle,
                style: {
                    height: height,
                    maxHeight: maxHeight,
                    ..._otherStyles,
                    marginRight: marginRight,
                    marginLeft: marginLeft,
                    marginTop: marginTop,
                    marginBottom: marginBottom,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    alignSelf: alignSelf,
                    position: position || "relative",
                    top: top,
                    bottom: bottom,
                    left: left,
                    right: right,
                    display: display,
                    zIndex: zIndex,
                    borderRadius: borderRadius,
                    overflowX: overflowX,
                    overflowY: overflowY,
                    ...childMaxWidth ? {
                        display: "flex",
                        justifyContent: "center",
                        overflow: "visible"
                    } : {},
                    ...props.isActive || isActive ? props.onClick?.style : {}
                },
                ...element.onScreen,
                type: element.type,
                customcss: element.customCss,
                onClick: handleOpen,
                onMouseEnter: handleHover,
                onMouseLeave: handleHoverLeave,
                children: [
                    element.background?.videoUrl && /*#__PURE__*/ (0, $bdjGp$jsx)((0, $eQFRT.default), {
                        url: element.background?.videoUrl
                    }),
                    element.background?.color && /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                        style: {
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            background: element.background?.color,
                            opacity: element.background?.opacity / 100 || 1
                        }
                    }),
                    /*#__PURE__*/ (0, $bdjGp$jsx)($356382b63c8d63b4$var$DivRow, {
                        style: {
                            // minHeight: 
                            height: "fit-content",
                            width: childMaxWidth ? "100%" : "",
                            paddingRight: paddingRight,
                            paddingLeft: paddingLeft,
                            paddingTop: paddingTop,
                            paddingBottom: paddingBottom,
                            display: display,
                            position: "relative",
                            borderRadius: borderRadius,
                            borderStyle: borderStyle,
                            borderWidth: borderWidth,
                            borderColor: borderColor,
                            maxWidth: childMaxWidth || "100%",
                            flexDirection: flexDirection,
                            flexWrap: flexWrap,
                            alignContent: alignContent || alignItems,
                            alignItems: alignItems,
                            justifyContent: justifyContent,
                            ...overflowX === "visible" || childMaxWidth ? {
                                overflow: "visible"
                            } : {}
                        },
                        id: "content_" + element.id,
                        className: props.activeItem + " " + element.id + " " + className + " " + element.type + " row preview " + (element.onClick?.actionType ? " clickable " : "") + " " + onHover,
                        activestyle: (0, $6so0H.JSToCSS)(props.onClick?.style),
                        backgroundhover: backgroundhover,
                        children: rawChildren || renderChildren()
                    }),
                    showSmallPopup && smallMenu && /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fg8oC.default), {
                        isHover: isHover,
                        bp: bp,
                        onMouseLeave: ()=>isHover && toogleSmallMenu(false),
                        onClose: ()=>toogleSmallMenu(false),
                        refId: element.id,
                        open: smallMenu,
                        children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                            data: smallMenu,
                            bp: bp,
                            path: "0"
                        })
                    })
                ]
            }),
            popup?.children && open && /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                className: "popup-builder popup-modal",
                onClick: handleClose,
                style: {
                    ...popup.style,
                    zIndex: auto,
                    position: "fixed",
                    display: open ? "flex" : "none"
                },
                children: /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                    className: "popup-section modal-content",
                    children: popup?.children?.map((c, index)=>/*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                            children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                                data: c,
                                bp: bp
                            })
                        }, index))
                })
            })
        ]
    });
};
var $356382b63c8d63b4$export$2e2bcd8739ae039 = $356382b63c8d63b4$var$Base;

});
parcelRegister("1sHjs", function(module, exports) {

$parcel$export(module.exports, "default", () => $110a0102f9a5042f$export$2e2bcd8739ae039);

var $yUP6e = parcelRequire("yUP6e");

var $kqwRD = parcelRequire("kqwRD");
let $110a0102f9a5042f$var$instance;
const $110a0102f9a5042f$var$defaultSection = (props = {})=>({
        id: "section_" + (0, $yUP6e.default).generate(),
        type: "section",
        md: {
            w: 12
        },
        sm: {
            w: 12
        },
        children: [],
        style: {
            backgroundColor: "white"
        }
    });
let $110a0102f9a5042f$var$triggerElement;
let $110a0102f9a5042f$var$contextMenu;
const $110a0102f9a5042f$var$initialData = ()=>{
    const id = (0, $yUP6e.default).generate();
    return {
        ["popup_" + id]: {
            id: "popup_" + id,
            type: "popup",
            title: "Mon formulaire",
            children: [
                $110a0102f9a5042f$var$defaultSection({})
            ],
            md: {
                style: {
                    justifyContent: "center"
                }
            }
        }
    };
};
const $110a0102f9a5042f$var$initialSmallMenu = ()=>{
    const id = (0, $yUP6e.default).generate();
    return {
        ["popup_" + id]: {
            id: "popup_" + id,
            type: "popup",
            title: "Mon formulaire",
            children: [
                $110a0102f9a5042f$var$defaultSection({})
            ],
            md: {
                w: "auto",
                fixedW: true
            }
        }
    };
};
let $110a0102f9a5042f$var$popups = {
    ...$110a0102f9a5042f$var$initialData()
};
let $110a0102f9a5042f$var$pages = {};
let $110a0102f9a5042f$var$placeholders = {};
let $110a0102f9a5042f$var$forms = {};
let $110a0102f9a5042f$var$popupBuilder = null;
class $110a0102f9a5042f$var$Popups {
    constructor(){
        if ($110a0102f9a5042f$var$instance) throw new Error("You can only create one instance!");
        $110a0102f9a5042f$var$instance = this;
    }
    getInstance() {
        return this;
    }
    getAll() {
        return $110a0102f9a5042f$var$popups;
    }
    reset() {
        $110a0102f9a5042f$var$triggerElement = null;
    }
    showPopupPreview(id) {
        var _popup = $110a0102f9a5042f$var$popups[id];
        $110a0102f9a5042f$var$popupBuilder?.current.setData(_popup || Object.values($110a0102f9a5042f$var$initialData())[0]);
        $110a0102f9a5042f$var$popupBuilder?.current.setOpen(true);
    }
    closePopup() {
        $110a0102f9a5042f$var$popupBuilder?.current.setOpen(false);
    }
    deletePopup(id, type) {
        if (type) ;
        else delete $110a0102f9a5042f$var$popups[id];
    }
    showPopup(id, trigger, propsKey) {
        // const trigger = ActiveSingleton.getActive()
        var _popup = $110a0102f9a5042f$var$popups[id];
        console.log("showPopup", $110a0102f9a5042f$var$popups, $110a0102f9a5042f$var$popups[id], id, propsKey, trigger);
        $110a0102f9a5042f$var$popupBuilder?.current.setData(_popup || Object.values($110a0102f9a5042f$var$initialData())[0]);
        $110a0102f9a5042f$var$popupBuilder?.current.setTriggerElement(trigger);
        $110a0102f9a5042f$var$popupBuilder?.current.setTriggerPropsKey(propsKey);
        $110a0102f9a5042f$var$popupBuilder?.current.setOpen(true);
        // Active.deactivate()
        $110a0102f9a5042f$var$popupBuilder?.current.showPopup();
        $110a0102f9a5042f$var$triggerElement = trigger;
        if (document.getElementById(id)) {
            document.getElementById(id).style.display = "block";
            document.getElementById(id).style.position = "relative";
        }
    }
    showPopupElement(data, _trigger, propsKey, previewData) {
        const trigger = (0, $kqwRD.default).getActive();
        console.log("showPopupElement", data, previewData);
        $110a0102f9a5042f$var$popupBuilder?.current.setData({
            ...data?.clone,
            previewData: previewData
        } || Object.values($110a0102f9a5042f$var$initialData())[0]);
        $110a0102f9a5042f$var$popupBuilder?.current.setTriggerElement(trigger);
        $110a0102f9a5042f$var$popupBuilder?.current.setTriggerPropsKey(propsKey);
        $110a0102f9a5042f$var$popupBuilder?.current.setElementMapping(data?.mapping);
        $110a0102f9a5042f$var$popupBuilder?.current.setOpen(true);
        // Active.deactivate()
        $110a0102f9a5042f$var$popupBuilder?.current.showPopup();
        $110a0102f9a5042f$var$triggerElement = trigger;
        if (document.getElementById(data?.id)) {
            document.getElementById(data?.id).style.display = "block";
            document.getElementById(data?.id).style.position = "relative";
        }
    }
    showPlaceHolder(id, element) {
        var _popup = $110a0102f9a5042f$var$popups[element];
        var _placeholder = $110a0102f9a5042f$var$placeholders[id];
        console.log("showPopup", id, _popup, _placeholder);
        if (_placeholder?.refresh) _placeholder?.refresh(_popup);
    }
    hideContextMenu() {
        if ($110a0102f9a5042f$var$contextMenu?.hide) $110a0102f9a5042f$var$contextMenu?.hide();
    }
    showContextMenu(path, element, coords, methods) {
        if ($110a0102f9a5042f$var$contextMenu?.refresh) $110a0102f9a5042f$var$contextMenu?.refresh(path, element, coords, methods);
    }
    initContextMenu(refresh, hide, show) {
        $110a0102f9a5042f$var$contextMenu = {
            refresh: refresh,
            hide: hide,
            show: show
        };
    }
    showLeftMenu(show) {
        if ($110a0102f9a5042f$var$placeholders["leftMenu"].show != undefined) {
            console.log("showLeftMenu", show, $110a0102f9a5042f$var$placeholders["leftMenu"].show);
            $110a0102f9a5042f$var$placeholders["leftMenu"].show = !$110a0102f9a5042f$var$placeholders["leftMenu"].show;
        } else {
            console.log("showLeftMenu undefined", show, $110a0102f9a5042f$var$placeholders["leftMenu"].show);
            $110a0102f9a5042f$var$placeholders["leftMenu"].show = show;
        }
        return $110a0102f9a5042f$var$placeholders["leftMenu"].show;
    }
    showRightMenu(show = true) {
        if (!show) $110a0102f9a5042f$var$placeholders["rightMenu"].show = true;
        else $110a0102f9a5042f$var$placeholders["rightMenu"].show = !$110a0102f9a5042f$var$placeholders["rightMenu"].show;
        return $110a0102f9a5042f$var$placeholders["rightMenu"].show;
    }
    showPanier(show = true) {
        if (!show) $110a0102f9a5042f$var$placeholders["panier"].show = true;
        else $110a0102f9a5042f$var$placeholders["panier"].show = !$110a0102f9a5042f$var$placeholders["panier"].show;
        return $110a0102f9a5042f$var$placeholders["panier"].show;
    }
    hideMenu(id) {
        var _placeholder = $110a0102f9a5042f$var$placeholders[id];
        if (_placeholder?.hide) _placeholder?.hide();
    }
    toogleLeftMenu() {
        var _placeholder = $110a0102f9a5042f$var$placeholders["leftMenu"];
        _placeholder?.toogleLeftMenu();
    }
    toogleRightMenu() {
        var _placeholder = $110a0102f9a5042f$var$placeholders["rightMenu"];
        _placeholder?.toogleRightMenu();
    }
    tooglePanier() {
        var _placeholder = $110a0102f9a5042f$var$placeholders["panier"];
        _placeholder?.tooglePanier();
    }
    getTitles() {
        return Object.values($110a0102f9a5042f$var$popups).map((p)=>({
                value: p?.id,
                label: p?.title || p?.name || p?.id,
                lastValue: p?.lastValue
            }));
    }
    getPages() {
        return Object.values($110a0102f9a5042f$var$pages).map((p)=>({
                value: p.id,
                label: p.title || p.name || p.id,
                lastValue: p.lastValue
            }));
    }
    getPlaceholders() {
        return Object.values($110a0102f9a5042f$var$placeholders).map((p)=>({
                value: p.id,
                label: p.title || p.name || p.id,
                lastValue: p.lastValue
            }));
    }
    initBuilder(component) {
        $110a0102f9a5042f$var$popupBuilder = component;
    }
    loadPopups(_popups) {
        $110a0102f9a5042f$var$popups = _popups;
    }
    setForm(data) {
        const guid = $110a0102f9a5042f$var$forms[data?.id]?.guid || "form_" + Date.now().toString(36) + Math.random().toString(36).substring(2);
        $110a0102f9a5042f$var$forms[data?.id] = {
            ...data?.custom,
            name: data?.name,
            ...data?.guid ? {} : {
                isNew: true
            },
            type: data?.custom?.submitType,
            guid: guid
        };
        console.log("setForm", $110a0102f9a5042f$var$forms[data?.id]);
    }
    getForm(id) {
        return $110a0102f9a5042f$var$forms[id] || {
            id: id,
            guid: "form_" + Date.now().toString(36) + Math.random().toString(36).substring(2)
        };
    }
    getAllForms() {
        return $110a0102f9a5042f$var$forms;
    }
    set(id, value, type) {
        if (type && value) value.dType = type;
        $110a0102f9a5042f$var$popups[id] = value;
        console.log($110a0102f9a5042f$var$popups[id]);
    }
    createIfNotExists(id, value, type) {
        if (!$110a0102f9a5042f$var$popups[id]) {
            if (type && value) value.dType = type;
            $110a0102f9a5042f$var$popups[id] = value;
        }
    }
    setPlaceholder(id, value) {
        $110a0102f9a5042f$var$placeholders[id] = value;
    }
    showPage(id) {
        if (id) {
            var _page = $110a0102f9a5042f$var$pages[id];
            var _placeholder = $110a0102f9a5042f$var$placeholders["page"];
            console.log("showPage", id, _page);
            _placeholder.handlePageChange(_page);
        }
    }
    setPage(id, value) {
        console.log("setPage", id, value);
        if (!$110a0102f9a5042f$var$pages[id]?.lastValue) $110a0102f9a5042f$var$pages[id] = value;
    }
    get(id) {
        return $110a0102f9a5042f$var$popups[id];
    }
    getOrCreate(id) {
        const result = $110a0102f9a5042f$var$popups[id] || $110a0102f9a5042f$var$defaultSection();
        $110a0102f9a5042f$var$popups[result.id] = result;
        return result;
    }
}
const $110a0102f9a5042f$var$PopupSingleton = Object.freeze(new $110a0102f9a5042f$var$Popups());
var $110a0102f9a5042f$export$2e2bcd8739ae039 = $110a0102f9a5042f$var$PopupSingleton;

});
parcelRegister("yUP6e", function(module, exports) {

$parcel$export(module.exports, "default", () => $068f40fdd5edd387$export$2e2bcd8739ae039);

const $068f40fdd5edd387$var$nanoid = (0, $bdjGp$customAlphabet)("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 3);
var $068f40fdd5edd387$export$2e2bcd8739ae039 = {
    "generate": ()=>$068f40fdd5edd387$var$nanoid()
};

});

parcelRegister("kqwRD", function(module, exports) {

$parcel$export(module.exports, "default", () => $edefba7b5b341b15$export$2e2bcd8739ae039);
// import { generateReact } from "../generator-module/generatorReact";
// import PopupSingleton from "./hooks/Popups";

var $6so0H = parcelRequire("6so0H");

var $9wS8V = parcelRequire("9wS8V");
let $edefba7b5b341b15$var$instance;
let $edefba7b5b341b15$var$activeElement = null;
let $edefba7b5b341b15$var$configBox = null;
let $edefba7b5b341b15$var$tabPanel = null;
let $edefba7b5b341b15$var$allUpdates = {};
let $edefba7b5b341b15$var$blobs = {};
let $edefba7b5b341b15$var$copyElement = null;
let $edefba7b5b341b15$var$setIsActive = null;
let $edefba7b5b341b15$var$_setBp = null;
let $edefba7b5b341b15$var$bp = "md";
let $edefba7b5b341b15$var$refresh = {};
let $edefba7b5b341b15$var$updateWebsiteConfig = null;
const $edefba7b5b341b15$var$previous = [];
var $edefba7b5b341b15$var$next = [];
var $edefba7b5b341b15$var$deletedItems = {};
var $edefba7b5b341b15$var$unsavedChanges = false;
var $edefba7b5b341b15$var$setHasRedo = ()=>{};
var $edefba7b5b341b15$var$setHasUndo = ()=>{};
let $edefba7b5b341b15$var$screenWidth;
let $edefba7b5b341b15$var$screenHeight;
let $edefba7b5b341b15$var$methods = {};
const $edefba7b5b341b15$var$purgeElement = (el)=>{
    delete el.isNew;
    delete el.order;
    delete el.forwardClick;
    delete el.triggerOnUpdate;
    delete el.hideSelector;
    delete el.icon;
    return el;
};
const $edefba7b5b341b15$var$deleteStyle = (el)=>{
    delete el.isNew;
    delete el.order;
    delete el.forwardClick;
    delete el.triggerOnUpdate;
    delete el.hideSelector;
    delete el.md?.style;
    delete el.sm?.style;
    delete el.style;
    delete el.onClick?.style;
    delete el.onHover?.style;
    delete el.description;
    delete el.label;
    delete el.thumbnail;
    delete el.logo;
    delete el.icon;
    delete el.name;
    delete el.generatedStylemd;
    delete el.generatedStylesm;
    return el;
};
class $edefba7b5b341b15$var$Active {
    constructor(){
        if ($edefba7b5b341b15$var$instance) throw new Error("You can only create one instance!");
        $edefba7b5b341b15$var$instance = this;
    }
    getInstance() {
        return this;
    }
    setConfigBox(cb) {
        $edefba7b5b341b15$var$configBox = cb;
    }
    setScreenSize(width, height) {
        $edefba7b5b341b15$var$screenWidth = width;
        $edefba7b5b341b15$var$screenHeight = height;
    }
    getScreenWidth() {
        return $edefba7b5b341b15$var$screenWidth;
    }
    getScreenHeight() {
        return $edefba7b5b341b15$var$screenHeight;
    }
    setWebsiteConfig(values) {
        if ($edefba7b5b341b15$var$updateWebsiteConfig) $edefba7b5b341b15$var$updateWebsiteConfig(values);
    }
    initBp(_setBp_) {
        $edefba7b5b341b15$var$_setBp = _setBp_;
    }
    setTabPanel(tp) {
        $edefba7b5b341b15$var$tabPanel = tp;
    }
    setRefresh(id, func) {
        $edefba7b5b341b15$var$refresh[id] = {
            refresh: func
        };
    }
    triggerRefresh(id, data) {
        if ($edefba7b5b341b15$var$refresh[id]?.refresh) $edefba7b5b341b15$var$refresh[id].refresh(data);
    }
    setBp(_bp, _setBp_) {
        if ($edefba7b5b341b15$var$_setBp) $edefba7b5b341b15$var$_setBp(_bp);
        // _setBp = _setBp_
        $edefba7b5b341b15$var$bp = _bp;
        $edefba7b5b341b15$var$configBox?.current?.reload($edefba7b5b341b15$var$activeElement?.element);
    }
    getBp() {
        return $edefba7b5b341b15$var$bp;
    }
    setCopyElement(el) {
        $edefba7b5b341b15$var$copyElement = el;
    }
    getCopyElement() {
        return $edefba7b5b341b15$var$copyElement;
    }
    getAllUpdates() {
        return $edefba7b5b341b15$var$allUpdates;
    }
    showAddBlock() {
        $edefba7b5b341b15$var$tabPanel?.current?.setValue(0);
    }
    updSetIsActive(func, funcParent) {
        if ($edefba7b5b341b15$var$setIsActive) $edefba7b5b341b15$var$setIsActive(false);
        $edefba7b5b341b15$var$setIsActive = func;
        func(true);
    // if (funcParent) {
    //   funcParent(true)
    // }
    }
    activate(el) {
        $edefba7b5b341b15$var$activeElement?.showContext(false);
        if ($edefba7b5b341b15$var$activeElement?.element?.id === el.current?.element?.id) {
            el?.current?.activate(true);
            return;
        }
        if (el && el.current) {
            this.deactivate();
            el.current?.activate(true);
            $edefba7b5b341b15$var$activeElement = el.current;
            this.loadConfig({
                ...$edefba7b5b341b15$var$activeElement
            });
            $edefba7b5b341b15$var$tabPanel?.current?.setValue(1);
            $edefba7b5b341b15$var$configBox?.current?.reload($edefba7b5b341b15$var$activeElement.element);
        }
    }
    deactivate() {
        $edefba7b5b341b15$var$activeElement?.activate(false);
        $edefba7b5b341b15$var$activeElement = null;
    }
    showContext(el) {
        // if(activeElement?.element?.id === el.current?.element?.id) return
        this.hideContext();
        if (el && el.current) {
            this.activate(el);
            el.current?.showContext(true);
        }
    }
    hideContext() {
        $edefba7b5b341b15$var$activeElement?.showContext(false);
        this.deactivate();
    }
    getActive() {
        return $edefba7b5b341b15$var$activeElement;
    }
    refresh(id) {
        if (id && $edefba7b5b341b15$var$allUpdates[id].refreshChild) $edefba7b5b341b15$var$allUpdates[id].refreshChild();
        if (id && $edefba7b5b341b15$var$allUpdates[id].refresh) $edefba7b5b341b15$var$allUpdates[id].refresh();
        else if ($edefba7b5b341b15$var$activeElement?.refresh) $edefba7b5b341b15$var$activeElement.refresh();
    }
    initHistoryButtons(_setHasUndo, _setHasRedo) {
        $edefba7b5b341b15$var$setHasUndo = _setHasUndo;
        $edefba7b5b341b15$var$setHasRedo = _setHasRedo;
    }
    reactivate() {
        $edefba7b5b341b15$var$activeElement?.activate(false);
        $edefba7b5b341b15$var$configBox?.current?.reload($edefba7b5b341b15$var$activeElement?.element);
        $edefba7b5b341b15$var$activeElement?.activate(true);
    }
    reloadConfig() {
        $edefba7b5b341b15$var$configBox?.current?.reload($edefba7b5b341b15$var$activeElement?.element);
    }
    resetConfig() {
        $edefba7b5b341b15$var$configBox?.current?.reload();
    }
    lastValue(id) {
        if ($edefba7b5b341b15$var$allUpdates[id]?.lastValue) return $edefba7b5b341b15$var$allUpdates[id]?.lastValue();
    }
    lastChildValue(id) {
        return $edefba7b5b341b15$var$allUpdates[id]?.lastChildValue();
    }
    setLastValue(id, props) {
        $edefba7b5b341b15$var$allUpdates[id] = {
            ...$edefba7b5b341b15$var$allUpdates[id],
            ...props
        };
    }
    setLastChildValue(id, props) {
        $edefba7b5b341b15$var$allUpdates[id] = {
            ...$edefba7b5b341b15$var$allUpdates[id],
            ...props
        };
    }
    loadConfig() {
        return $edefba7b5b341b15$var$activeElement;
    }
    loadMethods(previewId, externalMethods) {
        console.log("loadMethods", previewId);
        $edefba7b5b341b15$var$methods[previewId] = externalMethods;
    }
    execMethod(previewId, name, e, { id: id, params: params, el: el }) {
        console.log("execMethod", previewId);
        if ($edefba7b5b341b15$var$methods[previewId][name]) $edefba7b5b341b15$var$methods[previewId][name](e, {
            id: id,
            params: params,
            el: el
        });
    }
    updProps(key, value, scope, currentEl) {
        const _activeElement = currentEl || $edefba7b5b341b15$var$activeElement;
        if (_activeElement) {
            $edefba7b5b341b15$var$previous.push({
                id: _activeElement.element?.id,
                key: key,
                previousValue: (0, $6so0H.getJsonKey)(_activeElement?.element, key),
                updProps: _activeElement?.updProps,
                activate: _activeElement?.activate,
                refresh: _activeElement.refresh,
                nextValue: value
            });
            $edefba7b5b341b15$var$next = [];
            console.log("updProps in active", _activeElement.element.id, key, value, scope);
            const { children: children, ...newEl } = _activeElement?.updProps(key, value);
            // console.log('updProps', activeElement?.element?.id, key, value, scope)
            $edefba7b5b341b15$var$allUpdates[_activeElement.element.id] = {
                ...$edefba7b5b341b15$var$allUpdates[_activeElement.element.id],
                lastValue: _activeElement.lastValue,
                activate: _activeElement?.activate,
                updProps: _activeElement.updProps,
                refresh: _activeElement.refresh
            };
            if (scope === "variables") (0, $9wS8V.default).setScoped(_activeElement.element.id, key, value);
            // console.log(previous)
            this.setUnsavedChanges(true);
            $edefba7b5b341b15$var$setHasUndo(true);
            if (_activeElement.element.triggerOnUpdate) _activeElement.element.triggerOnUpdate();
        }
    }
    addDeletedItem(item) {
        console.log("addDeletedItem", item.id);
        $edefba7b5b341b15$var$deletedItems[item?.id] = {
            ...item,
            isNew: true
        };
    }
    getDeletedItem(id) {
        const item = $edefba7b5b341b15$var$deletedItems[id];
        if (item) delete $edefba7b5b341b15$var$deletedItems[id];
        return item;
    }
    updChildren(parentId, lastValue, updProps, activate, order, oldOrder, oldLayout) {
        if (parentId && lastValue) {
            console.log("updChildren", parentId, oldOrder, order);
            $edefba7b5b341b15$var$previous.push({
                id: parentId,
                key: "order",
                previousValue: oldOrder,
                updProps: updProps,
                activate: activate,
                nextValue: order
            });
            $edefba7b5b341b15$var$next = [];
            $edefba7b5b341b15$var$allUpdates[parentId] = {
                updProps: updProps,
                ...$edefba7b5b341b15$var$allUpdates[parentId],
                order: order,
                lastValue: lastValue
            };
        // console.log(previous, next)
        }
    }
    hasUnsavedChanges() {
        return $edefba7b5b341b15$var$unsavedChanges;
    }
    setUnsavedChanges(val) {
        $edefba7b5b341b15$var$unsavedChanges = val;
    }
    hasUndo() {
        return $edefba7b5b341b15$var$previous.length < 0;
    }
    hasRedo() {
        return $edefba7b5b341b15$var$next.length > 0;
    }
    undo() {
        const action = $edefba7b5b341b15$var$previous.pop();
        if (action) {
            console.log("undo", action.id, action.key, action.nextValue, action.previousValue);
            if ($edefba7b5b341b15$var$allUpdates[action.id] && $edefba7b5b341b15$var$allUpdates[action.id].updProps) $edefba7b5b341b15$var$allUpdates[action.id].updProps(action.key, action.previousValue);
            // if(allUpdates[action.id] && allUpdates[action.id].activate) allUpdates[action.id].activate(false)
            if ($edefba7b5b341b15$var$allUpdates[action.id] && $edefba7b5b341b15$var$allUpdates[action.id].refresh) $edefba7b5b341b15$var$allUpdates[action.id].refresh();
            $edefba7b5b341b15$var$next.push(action);
            $edefba7b5b341b15$var$setHasRedo(true);
        }
        return $edefba7b5b341b15$var$previous.length > 0;
    }
    redo() {
        const action = $edefba7b5b341b15$var$next.pop();
        if (action) {
            console.log("redo", action.id, action.key, action.previousValue, action.nextValue);
            if ($edefba7b5b341b15$var$allUpdates[action.id] && $edefba7b5b341b15$var$allUpdates[action.id].updProps) $edefba7b5b341b15$var$allUpdates[action.id].updProps(action.key, action.nextValue);
            // if(action.refresh) action.refresh()
            if ($edefba7b5b341b15$var$allUpdates[action.id] && $edefba7b5b341b15$var$allUpdates[action.id].refresh) $edefba7b5b341b15$var$allUpdates[action.id].refresh();
            $edefba7b5b341b15$var$previous.push(action);
            $edefba7b5b341b15$var$setHasUndo(true);
        }
        return $edefba7b5b341b15$var$next.length > 0;
    }
    getDeepLastValues = (el1, clean = false, removeStyle = false)=>{
        if (el1) {
            const el = this.lastValue(el1.id) || el1;
            if (el.order) el.children = el.order.map((c)=>{
                const newEl = el.children.find((x)=>x.id === c);
                // console.log("newEl", newEl)
                return this.getDeepLastValues(newEl || {
                    id: c
                }, clean, removeStyle);
            });
            else if (el.children) el.children = el.children.map((c)=>this.getDeepLastValues(c, clean, removeStyle));
            if (el.header) el.header = this.getDeepLastValues(el.header, clean, removeStyle);
            if (el.xheader) el.xheader = this.getDeepLastValues(el.xheader, clean, removeStyle);
            if (el.xdata) el.xdata = Array.isArray(el.xdata) ? el.xdata.map((xd)=>({
                    ...xd,
                    body: this.getDeepLastValues(xd.body, clean, removeStyle)
                })) : el.xdata;
            if (el.bottomNavbar) el.bottomNavbar = this.getDeepLastValues(el.bottomNavbar, clean, removeStyle);
            if (el.body) el.body = this.getDeepLastValues(el.body, clean, removeStyle);
            if (el.navbar) el.navbar = this.getDeepLastValues(el.navbar, clean, removeStyle);
            if (el.leftsidebar) el.leftsidebar = this.getDeepLastValues(el.leftsidebar, clean, removeStyle);
            if (el.rightsidebar) el.rightsidebar = this.getDeepLastValues(el.rightsidebar, clean, removeStyle);
            if (el.template) el.template = this.getDeepLastValues(el.template, clean, removeStyle);
            if (el.footer) el.footer = this.getDeepLastValues(el.footer, clean, removeStyle);
            if (el.type === "tableau") el.items = (this.lastChildValue(el.id, clean, removeStyle) || el.items)?.map((row)=>row.map((col)=>this.getDeepLastValues(col, clean, removeStyle)));
            if (el.type === "form") el.children = (this.getDeepLastValues({
                id: "child_" + el.id
            }, clean)?.children || el.children)?.map((child)=>this.getDeepLastValues(child, clean, removeStyle));
            return removeStyle ? $edefba7b5b341b15$var$deleteStyle({
                ...el
            }) : clean ? $edefba7b5b341b15$var$purgeElement(el) : el;
        }
    };
    setBlob(key, value) {
        $edefba7b5b341b15$var$blobs[key] = value;
    }
    getBlobs() {
        return $edefba7b5b341b15$var$blobs;
    }
}
const $edefba7b5b341b15$var$ActiveSingleton = Object.freeze(new $edefba7b5b341b15$var$Active());
var $edefba7b5b341b15$export$2e2bcd8739ae039 = $edefba7b5b341b15$var$ActiveSingleton;

});
parcelRegister("6so0H", function(module, exports) {

$parcel$export(module.exports, "getJsonKey", () => $4b37fb906706b1dd$export$25cfdea82e7169fa);
$parcel$export(module.exports, "JSToCSS", () => $4b37fb906706b1dd$export$c6fcf5a8c5ff4588);

var $5CYvY = parcelRequire("5CYvY");
function $4b37fb906706b1dd$export$25cfdea82e7169fa(dict, path) {
    if (dict) {
        const keys = path.split(".");
        var currentPath = dict[keys[0]];
        // console.log(currentPath)
        keys.shift();
        if (keys.length > 0) currentPath = $4b37fb906706b1dd$export$25cfdea82e7169fa(currentPath, keys.join("."));
        return currentPath;
    }
    return undefined;
}
function $4b37fb906706b1dd$export$53a33fba2915517f(dict, path, value) {
    const keys = path.split(".");
    console.log("setJsonKey", dict, path, value);
    if (keys.length === 1) {
        dict[keys[0]] = value;
        return dict;
    } else {
        const keys = path.split(".");
        const currKey = keys.shift();
        var currValue = $4b37fb906706b1dd$export$25cfdea82e7169fa(dict, currKey);
        if (currValue) {
            if (Array.isArray(currValue)) {
                const index = keys.shift();
                if (index < currValue.length) currValue[index] = $4b37fb906706b1dd$export$53a33fba2915517f(currValue[index], keys.join("."), value);
                else currValue[index] = value;
            } else currValue = $4b37fb906706b1dd$export$53a33fba2915517f(currValue, keys.join("."), value);
        } else {
            currValue = {};
            currValue = $4b37fb906706b1dd$export$53a33fba2915517f(currValue, keys.join("."), value);
        }
        dict[currKey] = currValue;
    }
    return {
        ...dict
    };
}
function $4b37fb906706b1dd$export$77680975004d62fd(cssString) {
    if (cssString) {
        //split string into css rules
        var JSONarray = cssString.split("}");
        //for each rule
        for(var i = 0; i < JSONarray.length; i++){
            //split selector and properties
            JSONarray[i] = JSONarray[i].split("{");
            //for each property
            for(var j in JSONarray[i]){
                //split key:value pairs
                JSONarray[i][j] = JSONarray[i][j].split(";");
                //for each key value pair
                for(var k in JSONarray[i][j])//split key and value
                JSONarray[i][j][k] = JSONarray[i][j][k].split(":");
            }
        }
        //rebuild string with JSON syntax
        var jsonStr = "";
        //for each rule
        for(var i = 0; i < JSONarray.length; i++){
            jsonStr += '"' + JSONarray[i][0] + '" {';
            for(var j = 0; j < JSONarray[i].length; j++)for(var k = 0; k < JSONarray[i][j].length; k++)jsonStr += '"' + JSONarray[i][j][k][0] + '":"' + JSONarray[i][j][k][1] + '" ';
            jsonStr += "}";
        }
        console.log(jsonStr);
        //alert(jsonStr);
        return jsonStr;
    }
}
const $4b37fb906706b1dd$export$d0eaf3e94be578f6 = (str)=>{
    const output = {};
    str.split(",").map((c)=>c.split(";")[0].split("=")).reduce((acc, v)=>{
        var tmp = decodeURIComponent(v[1].trim());
        if (tmp.startsWith("{")) output[decodeURIComponent(v[0].trim())] = JSON.parse(tmp);
        else output[decodeURIComponent(v[0].trim())] = tmp;
    }, {});
    return output;
};
const $4b37fb906706b1dd$export$5ad727aefb5a0775 = (str)=>{
    const output = {};
    str.split(";").map((c)=>c.split("=")).reduce((acc, v)=>{
        var tmp = decodeURIComponent(v[1].trim());
        if (tmp.startsWith("{")) output[decodeURIComponent(v[0].trim())] = JSON.parse(tmp);
        else output[decodeURIComponent(v[0].trim())] = tmp;
    }, {});
    return output;
};
function $4b37fb906706b1dd$export$c6fcf5a8c5ff4588(JS, important = "") {
    let cssString = "";
    for(let objectKey in JS){
        const current = JS[objectKey];
        if (objectKey != "w" && objectKey != "h" && objectKey != "fixedH" && objectKey != "fixedW" && !current?.toString()?.includes("${")) {
            // if(objectKey === "marginRight" && current?.startsWith('-')){
            //     objectKey = "paddingRight"
            // }
            // else if(objectKey === "marginLeft" && current?.startsWith('-')){
            //     objectKey = "paddingLeft"
            // }
            if (objectKey === "justifyContent" && JS[objectKey] === "center" || objectKey === "justifyContent" && JS[objectKey] === "center") cssString += "display: flex;";
            if (JS[objectKey] && JS[objectKey] != "" && JS[objectKey] != "null" && JS[objectKey] != "undefined") cssString += objectKey.replace(/([A-Z])/g, (g)=>`-${g[0].toLowerCase()}`) + ": " + (0, $5CYvY.getPixelValue)(JS, objectKey) + important + ";";
        }
    }
    return cssString;
}

});
parcelRegister("5CYvY", function(module, exports) {

$parcel$export(module.exports, "getPixelValue", () => $418f71538e17722a$export$842b203cbc4caa1e);
$parcel$export(module.exports, "computedStyle", () => $418f71538e17722a$export$ade5b9b1819f1516);

var $kNOzt = parcelRequire("kNOzt");
const $418f71538e17722a$export$2a376c9db34eaf98 = [
    "paddingTop",
    "paddingBottom",
    "paddingLeft",
    "paddingRight",
    "marginTop",
    "marginBottom",
    "marginRight",
    "marginLeft",
    "borderRadius",
    "borderWidth",
    "width",
    "height",
    "minHeight",
    "maxHeight",
    "minWidth",
    "maxWidth",
    "top",
    "bottom",
    "left",
    "right"
];
const $418f71538e17722a$export$bf7199a9ebcb84a9 = (key, value, suffix = "px")=>{
    var result = value + "";
    if (value && $418f71538e17722a$export$2a376c9db34eaf98.includes(key) && !result.includes(")") && !result.endsWith("%") && !result.endsWith("vh") && !result.endsWith("vw")) result = result + suffix;
    return value ? {
        [key]: result
    } : {};
};
function $418f71538e17722a$export$842b203cbc4caa1e(jsonObj, key) {
    if (jsonObj && jsonObj[key]) {
        var result = jsonObj[key] + "";
        if ($418f71538e17722a$export$2a376c9db34eaf98.includes(key) && !result.endsWith("%") && !result.includes(")") && !result.endsWith("vh") && !result.endsWith("vw")) try {
            result = parseInt(result) + "px";
        } catch (e) {}
        return result;
    }
}
const $418f71538e17722a$export$ade5b9b1819f1516 = (pStyle, inputs, bp, previewData)=>{
    var style = {
        ...pStyle
    };
    if (previewData) try {
        style = (0, $kNOzt.jsonParse)(JSON.stringify(style), previewData, previewData.prefix) || {};
    } catch (e) {
        console.error(e);
    }
    var { borderWidth: borderWidth, borderRadius: borderRadius, width: width, backgroundImage: backgroundImage, ..._style } = style;
    var paddingTop = inputs[bp]?.style?.paddingTop || inputs.md?.style?.paddingTop;
    var paddingBottom = inputs[bp]?.style?.paddingBottom || inputs.md?.style?.paddingBottom;
    var paddingRight = inputs[bp]?.style?.paddingRight || inputs.md?.style?.paddingRight;
    var paddingLeft = inputs[bp]?.style?.paddingLeft || inputs.md?.style?.paddingLeft;
    var marginTop = inputs[bp]?.style?.marginTop || inputs.md?.style?.marginTop;
    var marginBottom = inputs[bp]?.style?.marginBottom || inputs.md?.style?.marginBottom;
    var marginRight = inputs[bp]?.style?.marginRight || inputs.md?.style?.marginRight;
    var marginLeft = inputs[bp]?.style?.marginLeft || inputs.md?.style?.marginLeft;
    var display = inputs[bp]?.style?.display;
    var flexDirection = inputs[bp]?.style?.flexDirection || inputs.md?.style?.flexDirection || inputs.style?.flexDirection;
    var flexWrap = inputs[bp]?.style?.flexWrap || inputs.md?.style?.flexWrap || inputs.style?.flexWrap;
    var alignItems = inputs[bp]?.style?.alignItems || inputs.md?.style?.alignItems || inputs.style?.alignItems;
    var alignContent = inputs[bp]?.style?.alignContent || inputs.md?.style?.alignContent || inputs.style?.alignContent;
    var justifyContent = inputs[bp]?.style?.justifyContent || inputs.md?.style?.justifyContent || inputs.style?.justifyContent;
    var justifyItems = inputs[bp]?.style?.justifyItems || inputs.md?.style?.justifyItems || inputs.style?.justifyItems;
    var overflowX = inputs[bp]?.style?.overflowX || inputs.md?.style?.overflowX || inputs.style?.overflowX;
    var overflowY = inputs[bp]?.style?.overflowY || inputs.md?.style?.overflowY || inputs.style?.overflowY;
    var position = inputs[bp]?.style?.position || inputs.md?.style?.position || inputs.style?.position;
    var top = inputs[bp]?.style?.top || inputs.md?.style?.top;
    var bottom = inputs[bp]?.style?.bottom || inputs.md?.style?.bottom;
    var right = inputs[bp]?.style?.right || inputs.md?.style?.right;
    var left = inputs[bp]?.style?.left || inputs.md?.style?.left;
    var zIndex = inputs[bp]?.style?.zIndex || inputs.md?.style?.zIndex || inputs.style?.zIndex;
    return {
        height: "fit-content",
        ..._style,
        alignItems: alignItems,
        alignContent: alignContent,
        justifyContent: justifyContent,
        justifyItems: justifyItems,
        flexDirection: flexDirection,
        flexWrap: flexWrap,
        display: display,
        overflowX: overflowX,
        overflowY: overflowY,
        position: position,
        zIndex: zIndex,
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("top", top),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("left", left),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("bottom", bottom),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("right", right),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("paddingTop", paddingTop),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("paddingBottom", paddingBottom),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("paddingRight", paddingRight),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("paddingLeft", paddingLeft),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("marginTop", marginTop),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("marginBottom", marginBottom),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("marginLeft", marginLeft),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("marginRight", marginRight),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("borderWidth", borderWidth),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("borderRadius", borderRadius),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("width", inputs[bp]?.style?.width || inputs.md?.style?.width),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("minWidth", inputs[bp]?.style?.minWidth),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("maxWidth", inputs[bp]?.style?.maxWidth),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("height", inputs[bp]?.style?.height || inputs.md?.style?.height),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("minHeight", inputs[bp]?.style?.minHeight || inputs.md?.style?.minHeight),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("maxHeight", inputs[bp]?.style?.maxHeight || inputs.md?.style?.maxHeight),
        ...$418f71538e17722a$export$bf7199a9ebcb84a9("backgroundImage", backgroundImage ? "url(" + backgroundImage + ")" : null, "")
    };
};

});
parcelRegister("kNOzt", function(module, exports) {

$parcel$export(module.exports, "size", () => $f24f9c9cbd21bdff$export$346677f925de839c);
$parcel$export(module.exports, "guid", () => $f24f9c9cbd21bdff$export$46e8f25c7328f77e);
$parcel$export(module.exports, "toSlug", () => $f24f9c9cbd21bdff$export$139c14101bbe733b);
$parcel$export(module.exports, "getString", () => $f24f9c9cbd21bdff$export$f8963f3214707ee4);
$parcel$export(module.exports, "getObject", () => $f24f9c9cbd21bdff$export$93534728ecb2e7b9);
$parcel$export(module.exports, "parseContent", () => $f24f9c9cbd21bdff$export$4cf5403beffb0fc1);
$parcel$export(module.exports, "jsonParse", () => $f24f9c9cbd21bdff$export$de908365a6d7ba3a);
$parcel$export(module.exports, "parseLocalContent", () => $f24f9c9cbd21bdff$export$a673b69a8efe358a);
$parcel$export(module.exports, "getLessonPath", () => $f24f9c9cbd21bdff$export$e34f6f183a8cfd7f);
$parcel$export(module.exports, "getFirstLesson", () => $f24f9c9cbd21bdff$export$89536e4e800e6ce9);
$parcel$export(module.exports, "getCoursePath", () => $f24f9c9cbd21bdff$export$92361edb7b800b84);
$parcel$export(module.exports, "getLocation", () => $f24f9c9cbd21bdff$export$e7fd20fad3cf4b5f);
$parcel$export(module.exports, "parsedBody", () => $f24f9c9cbd21bdff$export$59f5bb8dc0bbc27b);
$parcel$export(module.exports, "parseDomain", () => $f24f9c9cbd21bdff$export$294ead44cbc289a5);
$parcel$export(module.exports, "getApiUrl", () => $f24f9c9cbd21bdff$export$1b98eaf73d37f034);


var $9wS8V = parcelRequire("9wS8V");

var $6so0H = parcelRequire("6so0H");
function $f24f9c9cbd21bdff$export$346677f925de839c({ sm: sm, md: md, xs: xs }) {
    var w = "";
    if (xs) w = "col-" + xs;
    else {
        w = sm ? " col-sm-" + sm : "";
        w += md ? " col-md-" + md : " ";
    }
    return w;
}
function $f24f9c9cbd21bdff$export$46e8f25c7328f77e(len) {
    var buf = [], chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", charlen = chars.length, length = len || 4;
    for(var i = 0; i < length; i++)buf[i] = chars.charAt(Math.floor(Math.random() * charlen));
    return buf.join("");
}
const $f24f9c9cbd21bdff$export$139c14101bbe733b = (text)=>{
    if (!text) text = "";
    return (0, $bdjGp$slugify)(text.toLowerCase()).replace(/,/g, "_").replaceAll(/\'/g, "_").replaceAll(/\-/g, "_").replaceAll(/ /g, "_");
};
function $f24f9c9cbd21bdff$export$f8963f3214707ee4(value, defaultValue) {
    if (value != undefined && value != null && value != "") return value;
    if (defaultValue != undefined) return defaultValue;
    return "";
}
function $f24f9c9cbd21bdff$export$93534728ecb2e7b9(obj, path, defaultValue = "") {
    var value = defaultValue;
    if (obj) {
        const keys = path.split(".");
        var tmpObj = obj;
        keys.map((key)=>{
            if (typeof tmpObj === "object") tmpObj = tmpObj[key];
            value = tmpObj ? tmpObj : defaultValue;
        });
        return value;
    }
}
const $f24f9c9cbd21bdff$var$varRegex = /\$\{[aA-zZ0-9 -_]*\}/g;
const $f24f9c9cbd21bdff$export$4cf5403beffb0fc1 = async (content, cb, index)=>{
    var result = content;
    if (typeof result == "string") {
        const vars = result?.match($f24f9c9cbd21bdff$var$varRegex);
        // console.log("parseContent", content, vars)
        if (!vars) return cb(result);
        else for(var i = 0; i < vars?.length; i++){
            const c = vars[i];
            await (0, $9wS8V.default).get(c.replace("${", "").replace("}", ""), (newVal)=>{
                if (newVal && typeof newVal != "array" && typeof newVal != "object") result = result.replace(c, newVal);
                else result = newVal;
                cb(result);
            }, content, index);
        }
    // cb(result)
    }
    return result;
};
const $f24f9c9cbd21bdff$export$de908365a6d7ba3a = (content, values, prefix = "")=>{
    var result = content;
    if (typeof result === "string") {
        const vars = result?.match($f24f9c9cbd21bdff$var$varRegex);
        if (!vars) return JSON.parse(result);
        else for(var i = 0; i < vars?.length; i++){
            const c = vars[i];
            // console.log("parseLocalContent2", c, values, values[c.replace("${", "").replace("}", "").replace(prefix + ".", "")])
            const newVal = values[c.replace("${", "").replace("}", "").replace(prefix + ".", "")];
            result = result.replace(c, newVal + ""?.replaceAll('"', ""));
        }
    }
    try {
        return JSON.parse(result) || {};
    } catch (e) {
        console.error(e, result);
        return result;
    }
};
const $f24f9c9cbd21bdff$export$a673b69a8efe358a = async (dataKey, jsonObj, cb)=>{
    var newBodies = [];
    try {
        if (typeof dataKey === "string") return (0, $9wS8V.default).loadVariable(dataKey.replace("${", "").replace("}", "")).then((data)=>{
            if (data) {
                if (Array.isArray(data)) data?.map((d)=>{
                    const newContent = $f24f9c9cbd21bdff$export$de908365a6d7ba3a(JSON.stringify(jsonObj), d, dataKey?.replace("${", "").replace("}", ""));
                    newBodies.push(newContent);
                });
                else newBodies.push(data);
            }
            cb({
                parsed: newBodies,
                data: data
            });
            return {
                parsed: newBodies,
                data: data
            };
        });
        else if (typeof dataKey === "object") {
            const prefix = dataKey.prefix;
            const data = dataKey.data;
            const jsonString = JSON.stringify(jsonObj) //.replaceAll('"', '¤')
            ;
            data?.map((d)=>{
                const newContent = $f24f9c9cbd21bdff$export$de908365a6d7ba3a(jsonString, d, prefix?.replace("${", "").replace("}", ""));
                newBodies.push(newContent);
            });
        }
        cb({
            parsed: newBodies,
            data: dataKey?.data
        });
        console.log("newBodies", newBodies);
        return {
            parsed: newBodies,
            data: dataKey?.data
        };
    } catch (e) {
        console.error(e);
        cb({
            parsed: newBodies,
            data: dataKey
        });
    }
};
function $f24f9c9cbd21bdff$export$e34f6f183a8cfd7f(course1, moduleId, lesson) {
    var path = "/";
    if (course1?.id) {
        path = `/cours/lessons/${course1.id}-${$f24f9c9cbd21bdff$export$139c14101bbe733b(course1.name)}`;
        if (lesson?.id) path = path + `/${moduleId}-${lesson.id}-${$f24f9c9cbd21bdff$export$139c14101bbe733b(lesson.name)}`;
    }
    return path;
}
function $f24f9c9cbd21bdff$export$89536e4e800e6ce9(cours) {
    const modules = cours?.modules;
    if (modules?.length > 0) return modules?.map((m)=>m.lessons?.map((l)=>({
                name: l.name,
                lesson: l.id,
                module: m.id,
                cours: course.id,
                path: $f24f9c9cbd21bdff$export$e34f6f183a8cfd7f(cours, m.id, l)
            }))).flat()[0];
    return {};
}
function $f24f9c9cbd21bdff$export$92361edb7b800b84(course1) {
    var path = "/";
    if (course1?.id) path = `/cours/${course1.id}-${$f24f9c9cbd21bdff$export$139c14101bbe733b(course1.name)}`;
    return path;
}
function $f24f9c9cbd21bdff$export$e7fd20fad3cf4b5f(href) {
    var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
    return match && {
        href: href,
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: match[4],
        pathname: match[5],
        search: match[6],
        hash: match[7]
    };
}
function $f24f9c9cbd21bdff$export$59f5bb8dc0bbc27b(body, used_variables, variables) {
    var bodyString = JSON.stringify(body) //{"test": "${course.instructeur.picture}"})
    ;
    Object.entries(used_variables || {}).map(([k, v])=>{
        const regex = new RegExp("${" + k + "}", "g");
        const value = (0, $6so0H.getJsonKey)(variables, k) || v;
        if (typeof value === "object" || Array.isArray(value)) bodyString = bodyString?.replaceAll('"${' + k + '}"', JSON.stringify(value));
        else bodyString = bodyString?.replaceAll("${" + k + "}", JSON.stringify(value)?.replace('"', "")?.replace(/\"$/, ""));
    // console.log("replace", k, v)
    });
    // console.log(used_variables, bodyString)
    return JSON.parse(bodyString);
}
function $f24f9c9cbd21bdff$export$294ead44cbc289a5(domain) {
    return domain?.includes("localhost") ? "ebc.plateforme.me" : domain;
}
function $f24f9c9cbd21bdff$export$1b98eaf73d37f034(domain) {
    return domain?.includes("localhost") ? "https://ebc.plateforme.me/api" : "https://" + domain + "/api";
}

});
parcelRegister("9wS8V", function(module, exports) {

$parcel$export(module.exports, "default", () => $6f0119e74079ddbe$export$2e2bcd8739ae039);

var $82qiQ = parcelRequire("82qiQ");
let $6f0119e74079ddbe$var$instance;
let $6f0119e74079ddbe$var$counter = 0;
let $6f0119e74079ddbe$var$session = null;
let $6f0119e74079ddbe$var$variables = {};
let $6f0119e74079ddbe$var$parsedVariables = {};
let $6f0119e74079ddbe$var$scoped = {};
let $6f0119e74079ddbe$var$usedVariables = {};
let $6f0119e74079ddbe$var$screenWidth;
let $6f0119e74079ddbe$var$screenHeight;
const $6f0119e74079ddbe$var$loading = {};
class $6f0119e74079ddbe$var$Variables {
    constructor(){
        if ($6f0119e74079ddbe$var$instance) throw new Error("You can only create one instance!");
        $6f0119e74079ddbe$var$instance = this;
    }
    getInstance() {
        return this;
    }
    getAll() {
        return $6f0119e74079ddbe$var$variables;
    }
    getVariablesName() {
        return Object.entries($6f0119e74079ddbe$var$variables).map(([k, v])=>({
                label: k,
                value: v.guid,
                name: v.name,
                type: v.type
            }));
    }
    async getVariablesFromBackend(_session) {
        $6f0119e74079ddbe$var$variables = {};
        return (0, $82qiQ.default).get(`/variables/all`, {
            domain: _session?.domain
        }, _session?.jwt).then((res)=>{
            res?.map((v)=>$6f0119e74079ddbe$var$variables[v.name] = v);
            return $6f0119e74079ddbe$var$variables;
        });
    }
    getParsedVariables() {
        return $6f0119e74079ddbe$var$parsedVariables;
    }
    getUsedVariables() {
        return $6f0119e74079ddbe$var$usedVariables;
    }
    increment() {
        return ++$6f0119e74079ddbe$var$counter;
    }
    decrement() {
        return --$6f0119e74079ddbe$var$counter;
    }
    init(_variables) {
        // console.log(_variables)
        if (_variables) $6f0119e74079ddbe$var$variables = {
            ...$6f0119e74079ddbe$var$variables,
            _variables: _variables
        };
    }
    setSession(_session) {
        $6f0119e74079ddbe$var$session = _session;
    }
    set(name, value) {
        $6f0119e74079ddbe$var$parsedVariables[name?.replace("${", "")?.replace("}")] = value;
    }
    setRaw(name, value) {
        $6f0119e74079ddbe$var$variables[name?.replace("${", "")?.replace("}")] = value;
    }
    setParsedVariables(_parsedVariables) {
        $6f0119e74079ddbe$var$parsedVariables = _parsedVariables;
    }
    addParsed(path, _variable) {
        $6f0119e74079ddbe$var$parsedVariables = {
            ...$6f0119e74079ddbe$var$parsedVariables,
            ...this.flattenJSON(path?.replace("${", "")?.replace("}", ""), _variable)
        };
    }
    getChildVariable(name, index = -1, defaultValue = null) {
        const keys = name?.split(".");
        const _parent = $6f0119e74079ddbe$var$parsedVariables[keys[0]];
        if (keys.length > 1) {
            console.warn("getChildVariable", index, name, _parent, $6f0119e74079ddbe$var$parsedVariables[name]);
            var values;
            if (Array.isArray(_parent)) values = _parent?.map((r)=>r[keys[1]]);
            else values = _parent;
            $6f0119e74079ddbe$var$parsedVariables[name] = values;
            $6f0119e74079ddbe$var$usedVariables[name] = true;
            delete $6f0119e74079ddbe$var$loading[keys[0]];
            return index > -1 ? values[index] || defaultValue : values || defaultValue;
        } else {
            delete $6f0119e74079ddbe$var$loading[keys[0]];
            return _parent;
        }
    }
    getParsed(name, defaultValue) {
        return $6f0119e74079ddbe$var$parsedVariables[name] || defaultValue || name;
    }
    async get(name, reloadCb, defaultValue = null, index) {
        if (name && typeof name === "string") {
            name = name?.replace("${", "").replace("}", "");
            if ($6f0119e74079ddbe$var$parsedVariables[name]) {
                $6f0119e74079ddbe$var$usedVariables[name] = true;
                return reloadCb($6f0119e74079ddbe$var$parsedVariables[name]);
            }
            const keys = name?.split(".");
            const _parent = keys[0];
            // console.log("check loading " + name, _parent, loading[_parent], parsedVariables[_parent], variables[_parent])
            if ($6f0119e74079ddbe$var$parsedVariables[_parent]) {
                if ($6f0119e74079ddbe$var$variables[_parent]?.type === "JSON") return reloadCb(this.getChildVariable(name, 0));
                return reloadCb(this.getChildVariable(name, index));
            } else if (!$6f0119e74079ddbe$var$loading[_parent]) {
                $6f0119e74079ddbe$var$loading[_parent] = true;
                return reloadCb(await this.loadVariable(name, reloadCb) || defaultValue);
            }
        // else if (loading[_parent]) {
        //   setTimeout(async () => {
        //     return await this.get(name, reloadCb, defaultValue)
        //   }, 500)
        //   // sleep(10000)
        //   // return await this.get(name, defaultValue)
        // }
        // while(loading[name] && parsedVariables[_parent]){
        // }
        // else {
        //   setTimeout(()=> {
        //     return this.get(name, defaultValue)
        //   }, 10000)
        // }
        }
        return defaultValue;
    }
    getSync(name, reloadCb, defaultValue = null, index) {
        if (name && typeof name === "string") {
            name = name?.replace("${", "").replace("}", "");
            if ($6f0119e74079ddbe$var$parsedVariables[name]) return $6f0119e74079ddbe$var$parsedVariables[name];
            const keys = name?.split(".");
            const _parent = keys[0];
            // console.log("check loading " + name, _parent, loading[_parent], parsedVariables[_parent], variables[_parent])
            if ($6f0119e74079ddbe$var$parsedVariables[_parent]) {
                if ($6f0119e74079ddbe$var$variables[_parent]?.type === "JSON") return this.getChildVariable(name, 0);
                return this.getChildVariable(name, index);
            } else if (!$6f0119e74079ddbe$var$loading[_parent]) {
                $6f0119e74079ddbe$var$loading[_parent] = true;
                return this.loadVariableSync(name, reloadCb) || defaultValue;
            }
        }
        return defaultValue;
    }
    async getRaw(name, reloadCb, defaultValue = null, index) {
        if (name) {
            name = name.replace("${", "").replace("}", "");
            if ($6f0119e74079ddbe$var$parsedVariables[name]) return reloadCb($6f0119e74079ddbe$var$parsedVariables[name]);
            const keys = name?.split(".");
            const _parent = keys[0];
            // console.log("check loading " + name, _parent, loading[_parent], parsedVariables[_parent], variables[_parent])
            if ($6f0119e74079ddbe$var$parsedVariables[_parent]) {
                if ($6f0119e74079ddbe$var$variables[_parent]?.type === "JSON") return reloadCb(this.getChildVariable(name, 0));
                return reloadCb(this.getChildVariable(name, index));
            } else if (!$6f0119e74079ddbe$var$loading[_parent]) {
                $6f0119e74079ddbe$var$loading[_parent] = true;
                return reloadCb(await this.loadVariable(name, reloadCb) || defaultValue);
            }
        // else if (loading[_parent]) {
        //   setTimeout(async () => {
        //     return await this.get(name, reloadCb, defaultValue)
        //   }, 500)
        //   // sleep(10000)
        //   // return await this.get(name, defaultValue)
        // }
        // while(loading[name] && parsedVariables[_parent]){
        // }
        // else {
        //   setTimeout(()=> {
        //     return this.get(name, defaultValue)
        //   }, 10000)
        // }
        }
        return defaultValue;
    }
    getColumns(name) {
        return $6f0119e74079ddbe$var$variables[name].cols || [];
    }
    async setScoped(elementId, key, value) {
        // console.log("scoped variables", elementId, key, value)
        $6f0119e74079ddbe$var$scoped[elementId] = {
            [key]: value
        };
    }
    async getScoped(elementId, key) {
        return $6f0119e74079ddbe$var$scoped[elementId] ? $6f0119e74079ddbe$var$scoped[elementId][key] : null;
    }
    flattenJSON = (path = "", json, arrayLevel = -1)=>{
        var result = {};
        if (json && Array.isArray(json)) {
            arrayLevel += 1;
            json.map((obj1, index)=>{
                result = Object.assign({}, result, this.flattenJSON(path + "[" + index + "]", obj1, arrayLevel));
            });
        } else if (json && typeof json === "object") Object.entries(json).map(([k, v])=>{
            result = Object.assign({}, result, this.flattenJSON(path + "." + k, v, arrayLevel));
        });
        result[path] = json;
        return result;
    };
    async loadVariable(name) {
        if (name) {
            $6f0119e74079ddbe$var$usedVariables[name] = true;
            name = name?.replace("${", "").replace("}", "");
            const _var = $6f0119e74079ddbe$var$variables[name.split(".")[0]];
            var canExec = true;
            if (_var) {
                if (_var.type === "SQL") {
                    for(var i = 0; i < _var.query.split(";").length; i++){
                        const query = _var.query.split(";")[i];
                        if (query.toUpperCase().startsWith("DROP") || query.toUpperCase().startsWith("DELETE") || query.toUpperCase().startsWith("TRUNCATE") || query.toUpperCase().startsWith("UPDATE") || query.toUpperCase().startsWith("INSERT")) {
                            canExec = false;
                            break;
                        }
                    }
                    if (!canExec) return;
                    var result = await (0, $82qiQ.default).rawSQL("/sqls/query", {
                        sql: _var.query,
                        dashboard: this.tId,
                        variables: _var.variables,
                        config: _var.dbConfig,
                        meta: _var
                    });
                    result = result || {};
                    $6f0119e74079ddbe$var$parsedVariables[_var.name] = result.data;
                    delete $6f0119e74079ddbe$var$loading[_var.name];
                    if (result?.type === "map") {
                        const row = [];
                        result.cols.map((col)=>{
                            $6f0119e74079ddbe$var$parsedVariables[_var.name + "." + col] = result.data[col];
                            delete $6f0119e74079ddbe$var$loading[_var.name + "." + col];
                            if (result.count > 0) row.push((result.data[col] || [])[0]);
                        });
                        $6f0119e74079ddbe$var$variables[_var.name]["cols"] = result.cols;
                        $6f0119e74079ddbe$var$variables[_var.name]["rows"] = row;
                    } else {
                        $6f0119e74079ddbe$var$variables[_var.name]["cols"] = [];
                        $6f0119e74079ddbe$var$variables[_var.name]["rows"] = [
                            result.data
                        ];
                    }
                    this.setParsedVariables($6f0119e74079ddbe$var$parsedVariables);
                    return $6f0119e74079ddbe$var$parsedVariables[name];
                } else if (_var.type === "RESOURCES") {
                    console.log("variableConfig", $6f0119e74079ddbe$var$variables["global.domain"], _var);
                    return _var;
                } else {
                    let tmpJSONVar = _var.query;
                    try {
                        tmpJSONVar = JSON.parse(tmpJSONVar);
                    } catch (e) {}
                    $6f0119e74079ddbe$var$parsedVariables[name.split(".")[0]] = tmpJSONVar;
                    if (tmpJSONVar) $6f0119e74079ddbe$var$parsedVariables = Object.assign({}, $6f0119e74079ddbe$var$parsedVariables, this.flattenJSON(name.split(".")[0], tmpJSONVar));
                    console.warn("loadVariable", $6f0119e74079ddbe$var$variables, $6f0119e74079ddbe$var$parsedVariables, name, tmpJSONVar);
                    this.setParsedVariables($6f0119e74079ddbe$var$parsedVariables);
                    return $6f0119e74079ddbe$var$parsedVariables[name];
                }
            } else {
                delete $6f0119e74079ddbe$var$loading[name.split(".")[0]];
                return name;
            }
        }
    }
    loadVariableSync(name) {
        name = name?.replace("${", "").replace("}", "");
        const _var = $6f0119e74079ddbe$var$variables[name.split(".")[0]];
        if (_var) {
            let tmpJSONVar = _var.query;
            try {
                tmpJSONVar = JSON.parse(tmpJSONVar);
            } catch (e) {}
            $6f0119e74079ddbe$var$parsedVariables[name] = tmpJSONVar;
            if (tmpJSONVar) $6f0119e74079ddbe$var$parsedVariables = Object.assign({}, $6f0119e74079ddbe$var$parsedVariables, this.flattenJSON(name, tmpJSONVar[0]));
            // if(name.includes("[") && name.includes("]")){
            //   const index = parseInt(name.split(".")[1]?.replace("[", "").replace("]",""))
            //   parsedVariables =  Object.assign({}, parsedVariables, this.flattenJSON(name+".", tmpJSONVar[index]))
            // }
            this.setParsedVariables($6f0119e74079ddbe$var$parsedVariables);
            return $6f0119e74079ddbe$var$parsedVariables[name];
        } else {
            delete $6f0119e74079ddbe$var$loading[name.split(".")[0]];
            return name;
        }
    }
    setPreview(name, index) {
        name = name.replace("${", "").replace("}", "");
        const parsed = $6f0119e74079ddbe$var$parsedVariables[name];
        if (parsed && parsed[index]) {
            Object.entries(this.flattenJSON(name, parsed[index])).map(([k, v])=>{
                $6f0119e74079ddbe$var$parsedVariables[k] = v;
            });
            this.setParsedVariables($6f0119e74079ddbe$var$parsedVariables);
        }
    }
    async loadVariables(_vars, cb) {
        $6f0119e74079ddbe$var$variables = {
            ...$6f0119e74079ddbe$var$variables,
            ..._vars
        };
        return $6f0119e74079ddbe$var$variables;
    }
}
const $6f0119e74079ddbe$var$getOut = ()=>{
    return $6f0119e74079ddbe$var$VariablesSingleton.getParsedVariables();
};
const $6f0119e74079ddbe$var$VariablesSingleton = Object.freeze(new $6f0119e74079ddbe$var$Variables());
var $6f0119e74079ddbe$export$2e2bcd8739ae039 = $6f0119e74079ddbe$var$VariablesSingleton;

});
parcelRegister("82qiQ", function(module, exports) {

$parcel$export(module.exports, "purgeData2", () => $5da2e9d5e7323d84$export$4a35709bfb442783);
$parcel$export(module.exports, "default", () => $5da2e9d5e7323d84$export$2e2bcd8739ae039);




var $kNOzt = parcelRequire("kNOzt");
let $5da2e9d5e7323d84$var$token = {};
let $5da2e9d5e7323d84$var$baseUrl = undefined;
let $5da2e9d5e7323d84$var$serverBaseUrl = undefined;
let $5da2e9d5e7323d84$var$instance;
let $5da2e9d5e7323d84$var$configs;
let $5da2e9d5e7323d84$var$config;
let $5da2e9d5e7323d84$var$jwt;
class $5da2e9d5e7323d84$var$APISingleton {
    constructor(){
        if ($5da2e9d5e7323d84$var$instance) throw new Error("You can only create one instance!");
        // const { data: session } = getSession().then(session => {
        //     if (session?.domain) {
        //         this.domain = parseDomain(session?.domain)
        //         this.baseUrl = getApiUrl(domain)
        //         this.jwt = session?.jwt
        //     }
        // })
        $5da2e9d5e7323d84$var$instance = this;
    }
    async getInstance() {
        console.log("get instance", $5da2e9d5e7323d84$var$baseUrl);
        const { data: session } = await (0, $bdjGp$getSession)();
        if (session?.domain) {
            domain = parseDomain(session?.domain);
            $5da2e9d5e7323d84$var$baseUrl = (0, $kNOzt.getApiUrl)(domain);
            $5da2e9d5e7323d84$var$jwt = session?.jwt;
        }
        return this;
    }
    setBaseUrl(url) {
        $5da2e9d5e7323d84$var$baseUrl = url;
    }
    setConfigs(_configs) {
        $5da2e9d5e7323d84$var$configs = _configs;
    }
    setConfig(_config) {
        $5da2e9d5e7323d84$var$config = _config;
    }
    getConfig() {
        return $5da2e9d5e7323d84$var$config;
    }
    getConfigs() {
        return $5da2e9d5e7323d84$var$configs;
    }
    setJwt(_jwt) {
        $5da2e9d5e7323d84$var$jwt = _jwt;
    }
    getJwt() {
        return $5da2e9d5e7323d84$var$jwt;
    }
    async setToken(val) {
        (0, $bdjGp$setCookie)(null, "jwt", val);
        $5da2e9d5e7323d84$var$token = val ? {
            "Authorization": "Bearer " + val
        } : {};
    }
    getToken() {
        return $5da2e9d5e7323d84$var$token?.Authorization;
    }
    setBaseUrl(value) {
        $5da2e9d5e7323d84$var$baseUrl = value;
    }
    async get_Server(url, params, jwt) {
        return this._get(`${$5da2e9d5e7323d84$var$serverBaseUrl}${url}`, params, jwt);
    }
    async get(url, params, jwt) {
        return this._get(`${$5da2e9d5e7323d84$var$baseUrl}${url}`, params, jwt);
    }
    async _get(url, params, _jwt) {
        if (_jwt || $5da2e9d5e7323d84$var$jwt) $5da2e9d5e7323d84$var$token = {
            "Authorization": "Bearer " + (_jwt || $5da2e9d5e7323d84$var$jwt)
        };
        var response = null;
        try {
            response = await fetch(`${url}?${(0, $bdjGp$qs).stringify(params, {
                encode: false
            })}`, {
                headers: {
                    "content-type": "application/json",
                    ...$5da2e9d5e7323d84$var$token
                }
            }).then((result)=>result.json());
        } catch (e) {
            console.error(e);
        }
        return response;
    }
    async rawSQL_Server(url, params, jwt) {
        return this._rawSQL(`${$5da2e9d5e7323d84$var$serverBaseUrl}${url}`, params, jwt);
    }
    async rawSQL(url, params, jwt) {
        return this._rawSQL(`${$5da2e9d5e7323d84$var$baseUrl}${url}`, params, jwt);
    }
    async _rawSQL(url, params, _jwt) {
        if (_jwt || $5da2e9d5e7323d84$var$jwt) $5da2e9d5e7323d84$var$token = {
            "Authorization": "Bearer " + (_jwt || $5da2e9d5e7323d84$var$jwt)
        };
        var response = null;
        try {
            response = await fetch(`${url}`, {
                body: JSON.stringify(params),
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    ...$5da2e9d5e7323d84$var$token
                }
            }).then((result)=>result.json());
        } catch (e) {
            console.error(e);
        }
        if (response) {
            if (response.type === "scalar") return {
                data: await $5da2e9d5e7323d84$export$518599e828d3fca1(response?.data)
            };
            return {
                data: await $5da2e9d5e7323d84$export$518599e828d3fca1(response?.data),
                cols: await $5da2e9d5e7323d84$export$518599e828d3fca1(response?.cols),
                type: await $5da2e9d5e7323d84$export$518599e828d3fca1(response?.type),
                count: await $5da2e9d5e7323d84$export$518599e828d3fca1(response?.count)
            };
        }
    }
    async find_Server(url, params, jwt) {
        return this._find(`${$5da2e9d5e7323d84$var$serverBaseUrl}${url}`, params, jwt);
    }
    async find(url, params, jwt) {
        return this._find(`${$5da2e9d5e7323d84$var$baseUrl}${url}`, params, jwt);
    }
    async _find(url, params, _jwt) {
        if (_jwt || $5da2e9d5e7323d84$var$jwt) $5da2e9d5e7323d84$var$token = {
            "Authorization": "Bearer " + (_jwt || $5da2e9d5e7323d84$var$jwt)
        };
        var response = null;
        try {
            response = await fetch(`${url}?${(0, $bdjGp$qs).stringify(params, {
                encode: false
            })}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                ...$5da2e9d5e7323d84$var$token
            }).then((result)=>result.json());
        } catch (e) {
        // console.error(e)
        }
        return {
            data: await $5da2e9d5e7323d84$export$518599e828d3fca1(response?.data),
            meta: response?.meta || {},
            pagination: response?.meta?.pagination || {}
        };
    }
    async findOne_Server(url, params, jwt) {
        "use server";
        return this._findOne(`${$5da2e9d5e7323d84$var$serverBaseUrl}${url}`, params, jwt);
    }
    async findOne(url, params, jwt) {
        return this._findOne(`${$5da2e9d5e7323d84$var$baseUrl}${url}`, params, jwt);
    }
    async _findOne(url, params, _jwt) {
        if (_jwt || $5da2e9d5e7323d84$var$jwt) $5da2e9d5e7323d84$var$token = {
            "Authorization": "Bearer " + (_jwt || $5da2e9d5e7323d84$var$jwt)
        };
        var response = null;
        try {
            response = await fetch(`${url}?${(0, $bdjGp$qs).stringify(params, {
                encode: false
            })}`, {
                headers: {
                    "Content-Type": "application/json",
                    ...$5da2e9d5e7323d84$var$token
                }
            }).then((res)=>res.json());
        } catch (e) {
        // console.error(e)
        }
        var data = response?.data || null;
        if (Array.isArray(data)) data = data[0] || null;
        return await $5da2e9d5e7323d84$export$518599e828d3fca1(data);
    }
    async findOrCreate_Server(url, data, jwt) {
        "use server";
        return this._findOrCreate(`${$5da2e9d5e7323d84$var$serverBaseUrl}${url}`, data, jwt);
    }
    async findOrCreate(url, data, jwt) {
        return this._findOrCreate(`${$5da2e9d5e7323d84$var$baseUrl}${url}`, data, jwt);
    }
    async _findOrCreate(url, data) {
        return fetch(`${url}`, {
            body: JSON.stringify({
                data: data
            }),
            method: "POST",
            credentials: "include",
            mode: "cors",
            headers: {
                "content-type": "application/json",
                ...$5da2e9d5e7323d84$var$token
            }
        }).then((res)=>res.json()).then(async (res)=>{
            if (!res.error) return await $5da2e9d5e7323d84$export$518599e828d3fca1(res);
            else throw res.error.message;
        });
    }
    async createOrUpdate_Server(url, data, jwt, params) {
        "use server";
        return this._createOrUpdate(`${$5da2e9d5e7323d84$var$serverBaseUrl}${url}`, data, jwt, params);
    }
    async createOrUpdate(url, data, jwt, params) {
        return this._createOrUpdate(`${$5da2e9d5e7323d84$var$baseUrl}${url}`, data, jwt, params);
    }
    async _createOrUpdate(url, data, _jwt, params = {}) {
        if (_jwt || $5da2e9d5e7323d84$var$jwt) $5da2e9d5e7323d84$var$token = {
            "Authorization": "Bearer " + (_jwt || $5da2e9d5e7323d84$var$jwt)
        };
        if (data.id) return fetch(`${url}/${data.id}?${(0, $bdjGp$qs).stringify(params, {
            encode: false
        })}`, {
            body: JSON.stringify({
                data: data
            }),
            method: "PUT",
            credentials: "include",
            mode: "cors",
            headers: {
                "content-type": "application/json",
                ...$5da2e9d5e7323d84$var$token
            }
        }).then((res)=>res.json()).then(async (res)=>{
            if (!res.error) return await $5da2e9d5e7323d84$export$518599e828d3fca1(res?.data || res);
            else throw res.error.message;
        });
        else return fetch(`${url}`, {
            body: JSON.stringify({
                data: data
            }),
            method: "POST",
            credentials: "include",
            mode: "cors",
            headers: {
                "content-type": "application/json",
                ...$5da2e9d5e7323d84$var$token
            }
        }).then((res)=>res.json()).then(async (res)=>{
            if (!res.error) return await $5da2e9d5e7323d84$export$518599e828d3fca1(res?.data || res);
            else throw res.error.message;
        });
    // return purgeData(response)
    }
    async post_Server(url, data, jwt) {
        "use server";
        return this._post(`${$5da2e9d5e7323d84$var$serverBaseUrl}${url}`, data, jwt);
    }
    async post(url, data, jwt) {
        return this._post(`${$5da2e9d5e7323d84$var$baseUrl}${url}`, data, jwt);
    }
    async _post(url, data, _jwt) {
        if (_jwt || $5da2e9d5e7323d84$var$jwt) $5da2e9d5e7323d84$var$token = {
            "Authorization": "Bearer " + (_jwt || $5da2e9d5e7323d84$var$jwt)
        };
        return fetch(`${url}`, {
            body: JSON.stringify(data),
            method: "POST",
            credentials: "include",
            mode: "cors",
            headers: {
                "content-type": "application/json",
                ...$5da2e9d5e7323d84$var$token
            }
        }).then((res)=>res.json()).then(async (res)=>{
            if (!res.error) return await $5da2e9d5e7323d84$export$518599e828d3fca1(res);
            else throw res.error.message;
        });
    }
    async delete_Server(url, data, jwt) {
        "use server";
        return this._delete(`${$5da2e9d5e7323d84$var$serverBaseUrl}${url}`, data, jwt);
    }
    async delete(url, data, jwt) {
        return this._delete(`${$5da2e9d5e7323d84$var$baseUrl}${url}`, data, jwt);
    }
    async _delete(url, data, _jwt) {
        if (_jwt || $5da2e9d5e7323d84$var$jwt) $5da2e9d5e7323d84$var$token = {
            "Authorization": "Bearer " + (_jwt || $5da2e9d5e7323d84$var$jwt)
        };
        return fetch(`${url}`, {
            body: JSON.stringify(data),
            method: "DELETE",
            credentials: "include",
            mode: "cors",
            headers: {
                "content-type": "application/json",
                ...$5da2e9d5e7323d84$var$token
            }
        }).then((res)=>res.json()).then(async (res)=>{
            if (!res.error) return await $5da2e9d5e7323d84$export$518599e828d3fca1(res);
            else throw res.error.message;
        });
    }
}
async function $5da2e9d5e7323d84$export$518599e828d3fca1(data) {
    var result = null;
    if (data) {
        if (Array.isArray(data)) result = data.map((x)=>$5da2e9d5e7323d84$var$purge(x));
        else result = $5da2e9d5e7323d84$var$purge(data);
    }
    return result;
}
function $5da2e9d5e7323d84$var$purge(data, key) {
    // return data || null
    if (data) {
        var result = null;
        if (Array.isArray(data)) {
            result = [];
            result = data.map((x)=>$5da2e9d5e7323d84$var$purge(x));
        } else if (typeof data === "object") {
            result = {};
            Object.entries(data).map(([k, v])=>{
                if (k === "attributes") {
                    if (key) result[key] = $5da2e9d5e7323d84$var$purge(data[k], key) || null;
                    else result = {
                        ...result,
                        ...$5da2e9d5e7323d84$var$purge(data[k])
                    };
                } else result[k] = $5da2e9d5e7323d84$var$purge(v, key) || null;
            });
        } else result = data || null;
        return result || null;
    }
    return null;
}
async function $5da2e9d5e7323d84$export$4a35709bfb442783(data) {
    var result = null;
    if (data) {
        if (Array.isArray(data)) result = data.map((x)=>$5da2e9d5e7323d84$var$purge2(x));
        else result = $5da2e9d5e7323d84$var$purge2(data);
    }
    return result;
}
function $5da2e9d5e7323d84$var$purge2(data, key) {
    if (data) {
        var result = null;
        if (Array.isArray(data)) {
            result = [];
            result = data.map((x)=>$5da2e9d5e7323d84$var$purge2(x));
        } else if (typeof data === "object") {
            result = {};
            Object.entries(data).map(([k, v])=>{
                if (k === "attributes") {
                    if (key) result[key] = $5da2e9d5e7323d84$var$purge2(data[k], key) || null;
                    else result = {
                        ...result,
                        ...$5da2e9d5e7323d84$var$purge2(data[k])
                    };
                } else if (k === "data" && (typeof data[k] === "object" || Array.isArray(data[k]))) result = $5da2e9d5e7323d84$var$purge2(data[k], key) || null;
                else if (result) result[k] = $5da2e9d5e7323d84$var$purge2(v, key) || null;
            });
        } else result = data || null;
        return result || null;
    }
    return null;
}
const $5da2e9d5e7323d84$var$API = Object.freeze(new $5da2e9d5e7323d84$var$APISingleton());
var $5da2e9d5e7323d84$export$2e2bcd8739ae039 = $5da2e9d5e7323d84$var$API;

});







parcelRegister("fg8oC", function(module, exports) {

$parcel$export(module.exports, "default", () => $b1bedcebc5432f3b$export$2e2bcd8739ae039);


function $b1bedcebc5432f3b$export$2e2bcd8739ae039({ onClose: onClose, refId: refId, onMouseLeave: onMouseLeave, isHover: isHover, onSubmit: onSubmit, cancelText: cancelText = "Annuler", title: title, description: description, trigger: trigger, open: open, validateText: validateText = "Valider", style: style, fullScreen: fullScreen, maxWidth: maxWidth, showActions: showActions = true, children: children }) {
    const [left, setLeft] = (0, $bdjGp$useState)();
    const [top, setTop] = (0, $bdjGp$useState)();
    const ref = (0, $bdjGp$useRef)();
    const [_open, setOpen] = $bdjGp$useState();
    $bdjGp$useEffect(()=>{
        if (open) {
            const element = document.getElementById(refId) // ref.current// document.getElementById(refId)
            ;
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const style = getComputedStyle(element);
            const _width = parseInt(style.width) || 0;
            const _height = parseInt(style.height) || 0;
            var rect = element.getBoundingClientRect();
            const _left = parseInt(rect.left) || 0;
            const _top = parseInt(rect.top) || 0;
            const _remainingRight = screenWidth - _width - _left;
            console.log("width + left > screenWidth", _width, _left, screenWidth, _width + _left > screenWidth);
            // if( _width + _left >= screenWidth) {
            //     if(_width + 30 > screenWidth) {
            //         setLeft(0)
            //         setWidth("100%")
            //     }
            //     else setLeft(screenWidth - _width - 30)
            // }
            setLeft(_left);
            console.log("_height + _top > screenHeigh", _height, _top, screenHeight, _height + _top > screenHeight);
            // if( _height + _top > screenHeight) {
            //     if(_height + 30 > screenHeight) {
            //         setTop(0)
            //     }
            //     else setTop(screenHeight - _height - 30)
            // }
            setTop(_top + _height);
            setOpen(open);
            console.log("SmallMenu", title, open, _open);
        } else setOpen(open);
    }, [
        open
    ]);
    return _open && /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
        ref: ref,
        style: {
            position: "fixed",
            left: 0,
            top: 0,
            width: isHover ? "fit-content" : "100%",
            height: isHover ? "fit-content" : "100%",
            display: "flex",
            overflow: "visible",
            zIndex: 10
        },
        onClick: onClose,
        children: /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
            onMouseEnter: (e)=>{
                e.stopPropagation();
                e.preventDefault();
            },
            onMouseLeave: onMouseLeave,
            style: {
                position: "fixed",
                left: left,
                top: top,
                width: "fit-content",
                display: "flex",
                overflow: "visible",
                zIndex: 0,
                backgroundColor: "red"
            },
            children: children
        })
    });
}

});

parcelRegister("eQFRT", function(module, exports) {

$parcel$export(module.exports, "default", () => $acf666322c313ba5$export$2e2bcd8739ae039);


function $acf666322c313ba5$export$2e2bcd8739ae039({ url: url }) {
    const src = url?.replace("https://youtu.be/", "https://www.youtube.com/embed/");
    return url && /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
        style: {
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0
        },
        children: src?.includes("youtube") ? /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
            className: "video-background",
            children: /*#__PURE__*/ (0, $bdjGp$jsx)("iframe", {
                frameBorder: "0",
                allowFullScreen: true,
                height: "100%",
                width: "100%",
                src: src?.includes("?") ? src + "&autoplay=1&mute=1&loop=1" : src + "?autoplay=1&mute=1&loop=1"
            })
        }) : !src?.startsWith("http") ? /*#__PURE__*/ (0, $bdjGp$jsx)("video", {
            autoPlay: true,
            muted: true,
            loop: true,
            style: {
                height: "100%",
                width: "100%",
                objectFit: "cover"
            },
            children: /*#__PURE__*/ (0, $bdjGp$jsx)("source", {
                src: "https://vod.api.video/vod/" + src + "/mp4/source.mp4",
                type: "video/mp4"
            })
        }) : /*#__PURE__*/ (0, $bdjGp$jsx)("iframe", {
            title: "Iframe",
            allowFullScreen: true,
            height: "100%",
            width: "100%",
            style: {
                objectFit: "cover"
            },
            src: `https://embed.api.video/vod/${url}`
        })
    });
}

});

parcelRegister("l7axT", function(module, exports) {

$parcel$export(module.exports, "default", () => $f5f26e8e4952037a$export$2e2bcd8739ae039);
let $f5f26e8e4952037a$var$instance;
let $f5f26e8e4952037a$var$observer;
const $f5f26e8e4952037a$var$intersectionCallback = (entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            let elem = entry.target;
            // console.log("elem", elem.attributes.class.value, elem.attributes["data-osn"]?.value)
            elem.classList.add(`animate__animated`, elem.attributes["data-osn"]?.value || "");
        // When the animation ends, we clean the classes and resolve the Promise
        // function handleAnimationEnd(event) {
        //   event.stopPropagation();
        //   node.classList.remove(`animate__animated`, elem.attributes["data-osn"]?.value);
        //   resolve('Animation ended');
        // }
        // elem.addEventListener('animationend', handleAnimationEnd, {once: true});
        // elem.attributes.class.value = initClass
        // setTimeout(() => {
        //    elem.attributes.class.value =elem.attributes.class.value.split(elem.attributes["data-osn"]?.value).join("")  
        // }, 1000);
        // if (entry.intersectionRatio >= 1) {
        // }
        }
    });
};
let $f5f26e8e4952037a$var$options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
};
class $f5f26e8e4952037a$var$Onscreen {
    constructor(){
        if ($f5f26e8e4952037a$var$instance) throw new Error("You can only create one instance!");
        $f5f26e8e4952037a$var$instance = this;
    }
    init() {
        $f5f26e8e4952037a$var$observer = new IntersectionObserver($f5f26e8e4952037a$var$intersectionCallback, $f5f26e8e4952037a$var$options);
    }
    getInstance() {
        return this;
    }
    observe(target) {
        if (!$f5f26e8e4952037a$var$observer) $f5f26e8e4952037a$var$observer = new IntersectionObserver($f5f26e8e4952037a$var$intersectionCallback, $f5f26e8e4952037a$var$options);
        $f5f26e8e4952037a$var$observer.observe(target);
    }
}
const $f5f26e8e4952037a$var$OnScreenSingleton = Object.freeze(new $f5f26e8e4952037a$var$Onscreen());
var $f5f26e8e4952037a$export$2e2bcd8739ae039 = $f5f26e8e4952037a$var$OnScreenSingleton;

});

parcelRegister("aa6c7", function(module, exports) {

$parcel$export(module.exports, "default", () => $765fa4a5964b2653$export$2e2bcd8739ae039);
let $765fa4a5964b2653$var$instance;
let $765fa4a5964b2653$var$watchers = {};
class $765fa4a5964b2653$var$ScreenSizeWatcherSingleton {
    constructor(){
        if ($765fa4a5964b2653$var$instance) throw new Error("You can only create one instance!");
        $765fa4a5964b2653$var$instance = this;
    }
    getInstance() {
        return this;
    }
    addWatcher(id, watch, minWitdh, maxWidth) {
        $765fa4a5964b2653$var$watchers[id] = {
            id: id,
            watch: watch,
            minWitdh: minWitdh,
            maxWidth: maxWidth
        };
    }
    watch(screenWidth) {
        Object.values($765fa4a5964b2653$var$watchers).forEach((el)=>el.watch(screenWidth));
    }
}
const $765fa4a5964b2653$var$ScreenSizeWatcher = Object.freeze(new $765fa4a5964b2653$var$ScreenSizeWatcherSingleton());
var $765fa4a5964b2653$export$2e2bcd8739ae039 = $765fa4a5964b2653$var$ScreenSizeWatcher;

});


parcelRegister("71W4S", function(module, exports) {

$parcel$export(module.exports, "default", () => $51e5ad67b1e90963$export$2e2bcd8739ae039);


var $4AbAj = parcelRequire("4AbAj");

var $3PVmr = parcelRequire("3PVmr");

var $2QCcj = parcelRequire("2QCcj");

var $btXzc = parcelRequire("btXzc");

var $cnmrP = parcelRequire("cnmrP");

var $4OcD7 = parcelRequire("4OcD7");

var $4TVGc = parcelRequire("4TVGc");

var $1lzTO = parcelRequire("1lzTO");

var $69XlQ = parcelRequire("69XlQ");

var $uWEUM = parcelRequire("uWEUM");

var $3T0PZ = parcelRequire("3T0PZ");

var $fhvMe = parcelRequire("fhvMe");

var $5YB1D = parcelRequire("5YB1D");

var $j6LJB = parcelRequire("j6LJB");

var $gwV5A = parcelRequire("gwV5A");

var $jBLLS = parcelRequire("jBLLS");

var $1GnLw = parcelRequire("1GnLw");

var $k3rFl = parcelRequire("k3rFl");

var $kBdDN = parcelRequire("kBdDN");

var $3jNBd = parcelRequire("3jNBd");


var $M44OH = parcelRequire("M44OH");

var $4A29E = parcelRequire("4A29E");

var $dobMo = parcelRequire("dobMo");

var $7D2H9 = parcelRequire("7D2H9");

var $k9K1C = parcelRequire("k9K1C");

var $8bJOB = parcelRequire("8bJOB");

var $6hCgJ = parcelRequire("6hCgJ");

var $4BNXL = parcelRequire("4BNXL");

var $fwJgG = parcelRequire("fwJgG");

var $4Ifbp = parcelRequire("4Ifbp");

var $kUsf5 = parcelRequire("kUsf5");

const $51e5ad67b1e90963$var$Table = (0, $bdjGp$nextdynamic)(()=>(parcelRequire("9aB80")), {
    loading: ()=>/*#__PURE__*/ (0, $bdjGp$jsx)((0, $M44OH.default), {
            loading: true
        })
});

const $51e5ad67b1e90963$var$Modules = (0, $bdjGp$nextdynamic)(()=>(parcelRequire("dnSyw")), {
    loading: ()=>/*#__PURE__*/ (0, $bdjGp$jsx)((0, $M44OH.default), {
            loading: true
        })
});

const $51e5ad67b1e90963$var$BarLineChart = (0, $bdjGp$nextdynamic)(()=>(parcelRequire("6tATm")), {
    loading: ()=>/*#__PURE__*/ (0, $bdjGp$jsx)((0, $M44OH.default), {
            loading: true
        })
});

const $51e5ad67b1e90963$var$PieChart = (0, $bdjGp$nextdynamic)(()=>(parcelRequire("eAW7a")), {
    loading: ()=>/*#__PURE__*/ (0, $bdjGp$jsx)((0, $M44OH.default), {
            loading: true
        })
});

const $51e5ad67b1e90963$var$BarChart = (0, $bdjGp$nextdynamic)(()=>(parcelRequire("8WSTF")), {
    loading: ()=>/*#__PURE__*/ (0, $bdjGp$jsx)((0, $M44OH.default), {
            loading: true
        })
});

const $51e5ad67b1e90963$var$ImageForm = (0, $bdjGp$nextdynamic)(()=>Promise.resolve((parcelRequire("7D2H9"))), {
    loading: ()=>/*#__PURE__*/ (0, $bdjGp$jsx)((0, $M44OH.default), {
            loading: true
        })
});
const $51e5ad67b1e90963$var$style = {};
const $51e5ad67b1e90963$var$renderComponent = (element, props, bp)=>{
    switch(element.type){
        case "barChart":
            return /*#__PURE__*/ (0, $bdjGp$jsx)($51e5ad67b1e90963$var$BarChart, {
                ...element,
                bp: bp
            });
        case "barLineChart":
            return /*#__PURE__*/ (0, $bdjGp$jsx)($51e5ad67b1e90963$var$BarLineChart, {
                ...element,
                bp: bp
            });
        case "pieChart":
            return /*#__PURE__*/ (0, $bdjGp$jsx)($51e5ad67b1e90963$var$PieChart, {
                ...element,
                bp: bp
            });
        case "image":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $2QCcj.default), {
                ...element,
                bp: bp
            });
        case "avatar":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $4OcD7.default), {
                ...element,
                bp: bp
            });
        case "stars":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $1lzTO.default), {
                ...element,
                bp: bp
            });
        case "video":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $btXzc.default), {
                ...element,
                bp: bp
            });
        case "backgroundVideo":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $cnmrP.default), {
                ...element,
                bp: bp
            });
        case "icon":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $4TVGc.default), {
                ...element,
                bp: bp
            });
        case "block":
            return /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                ...element
            });
        case "button":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $3T0PZ.default), {
                ...element,
                bp: bp
            });
        case "enroll":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $k9K1C.default), {
                ...element,
                bp: bp
            });
        case "previous_lesson":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $8bJOB.default), {
                ...element,
                bp: bp
            });
        case "next_lesson":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $6hCgJ.default), {
                ...element,
                bp: bp
            });
        case "textfield":
            var { style: _style, ...otherProps } = element;
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $5YB1D.default), {
                ...otherProps,
                field: element?.custom,
                ...element?.custom,
                bp: bp
            });
        case "number":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $5YB1D.default), {
                ...element,
                field: element?.custom,
                ...element?.custom,
                bp: bp
            });
        case "phone":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $5YB1D.default), {
                ...element,
                field: element?.custom,
                bp: bp
            });
        case "select":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $j6LJB.default), {
                ...element,
                field: element?.custom,
                bp: bp
            });
        case "table":
            return /*#__PURE__*/ (0, $bdjGp$jsx)($51e5ad67b1e90963$var$Table, {
                ...element,
                bp: bp
            });
        case "tableau":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $1GnLw.default), {
                ...element,
                bp: bp
            });
        case "calendar":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $69XlQ.default), {
                ...element,
                bp: bp
            });
        case "countdown":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $uWEUM.default), {
                ...element,
                bp: bp
            });
        case "imageForm":
            return /*#__PURE__*/ (0, $bdjGp$jsx)($51e5ad67b1e90963$var$ImageForm, {
                ...element,
                bp: bp
            });
        case "form":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $7D2H9.default), {
                ...element,
                bp: bp
            });
        case "carousel":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $dobMo.default), {
                ...element,
                bp: bp
            });
        case "placeHolder":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $kBdDN.default), {
                ...element,
                bp: bp
            });
        case "list":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $jBLLS.default), {
                data: element,
                path: "0",
                ...element,
                onClickIndex: props?.onClickIndex,
                bp: bp
            });
        case "nav_list":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $kUsf5.default), {
                data: element,
                path: "0",
                ...element,
                onClickIndex: props?.onClickIndex,
                bp: bp
            });
        case "tab":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $k3rFl.default), {
                data: element,
                path: "0",
                ...element,
                bp: bp
            });
        case "column":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                ...element,
                data: element,
                bp: bp,
                path: "0"
            });
        case "menuContainer":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $3jNBd.default), {
                data: element,
                path: "0",
                ...element,
                bp: bp
            });
        case "grid":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                ...element,
                data: element,
                bp: bp,
                path: "0"
            });
        case "section":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                ...element,
                data: element,
                bp: bp,
                path: "0"
            });
        case "folder":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $gwV5A.default), {
                ...element,
                bp: bp
            });
        case "wave":
            return /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                dangerouslySetInnerHTML: {
                    __html: element.content
                }
            });
        case "modules":
            return /*#__PURE__*/ (0, $bdjGp$jsx)($51e5ad67b1e90963$var$Modules, {
                ...element,
                bp: bp
            });
        case "objectifs":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $4BNXL.default), {
                ...element,
                bp: bp
            });
        case "resources":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $4Ifbp.default), {
                ...element,
                bp: bp
            });
        case "requirements":
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fwJgG.default), {
                ...element,
                bp: bp
            });
        default:
            return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $3PVmr.default), {
                ...element,
                bp: bp
            });
    }
};
const $51e5ad67b1e90963$var$Component = ({ parent: parent, previewId: previewId, data: data, bp: bp, components: components, render: render, path: path, parentHandleDelete: parentHandleDelete, handlePaste: handlePaste, handleDrop: handleDrop, childrenCount: childrenCount, rawChildren: rawChildren, ...props })=>{
    return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $4AbAj.default), {
        ...props,
        parent: parent,
        element: data,
        style: $51e5ad67b1e90963$var$style,
        bp: bp,
        previewId: previewId,
        className: (0, $4A29E.complexTypes).indexOf(data.type) != -1 ? data.xtype || data.type : "component",
        ...data,
        item: true,
        children: rawChildren || render ? render : $51e5ad67b1e90963$var$renderComponent(data, props, bp)
    });
};
var $51e5ad67b1e90963$export$2e2bcd8739ae039 = $51e5ad67b1e90963$var$Component;

});
parcelRegister("3PVmr", function(module, exports) {

$parcel$export(module.exports, "default", () => $2cb2a130c0298162$export$2e2bcd8739ae039);



var $kNOzt = parcelRequire("kNOzt");

var $awdxc = parcelRequire("awdxc");
const $2cb2a130c0298162$var$TextRender = ({ content: content })=>{
    const [value, setValue] = (0, $bdjGp$useState)(content);
    const updateValue = (_val)=>{
        setValue(_val);
    };
    (0, $bdjGp$useEffect)(()=>{
        (0, $kNOzt.parseContent)(content, updateValue);
    }, [
        content
    ]);
    return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $awdxc.default), {
        loading: !value,
        children: /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
            className: "text-render",
            dangerouslySetInnerHTML: {
                __html: value
            }
        })
    });
};
var $2cb2a130c0298162$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $bdjGp$memo)($2cb2a130c0298162$var$TextRender);

});
parcelRegister("awdxc", function(module, exports) {

$parcel$export(module.exports, "default", () => $7a87642fd96df536$export$2e2bcd8739ae039);


function $7a87642fd96df536$export$2e2bcd8739ae039({ loading: loading, message: message, children: children }) {
    return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$Fragment), {
        children: loading ? /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
            className: "",
            children: [
                message && /*#__PURE__*/ (0, $bdjGp$jsx)("h6", {
                    children: message
                }),
                /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
                    className: "fa fa-spinner fa-spin fa-2x"
                })
            ]
        }) : /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$react).Fragment, {
            children: children
        })
    });
}

});


parcelRegister("2QCcj", function(module, exports) {

$parcel$export(module.exports, "default", () => $212e115d499968d9$export$2e2bcd8739ae039);



var $kNOzt = parcelRequire("kNOzt");
function $212e115d499968d9$export$2e2bcd8739ae039({ content: content, bp: bp, ...props }) {
    const [value, setValue] = $bdjGp$useState();
    const [content1, setContent] = $bdjGp$useState();
    const [value2, setValue2] = $bdjGp$useState();
    const updateValue = (_val)=>{
        if (_val) setValue(_val);
        setContent(_val);
    };
    $bdjGp$useEffect(()=>{
        (0, $kNOzt.parseContent)(content, updateValue);
        (0, $kNOzt.parseContent)(content, setContent);
        (0, $kNOzt.parseContent)(props.custom?.urlHover, setValue2);
    }, [
        content
    ]);
    return /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $bdjGp$Fragment), {
        children: [
            /*#__PURE__*/ (0, $bdjGp$jsx)("img", {
                width: "100%",
                src: value,
                style: {
                    height: props[bp]?.style?.height,
                    maxHeight: props[bp]?.style?.maxHeight,
                    minHeight: props[bp]?.style?.minHeight,
                    overflow: "hidden"
                },
                title: "concepteur.io",
                onMouseOver: (e)=>{
                    if (value2) setTimeout(()=>{
                        setValue(value2);
                    }, 200);
                },
                onMouseLeave: (e)=>{
                    setTimeout(()=>{
                        setValue(content1);
                    }, 200);
                },
                loading: "lazy",
                alt: "concepteur.io"
            }),
            props.background?.color && /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                style: {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    background: props.background?.color,
                    opacity: props.background?.opacity / 100 || 1
                }
            })
        ]
    });
}

});

parcelRegister("btXzc", function(module, exports) {

$parcel$export(module.exports, "default", () => $85c09be03ff3c511$export$2e2bcd8739ae039);



var $kNOzt = parcelRequire("kNOzt");


var $awdxc = parcelRequire("awdxc");
function $85c09be03ff3c511$export$2e2bcd8739ae039({ content: content, bp: bp, ...props }) {
    const [value, setValue] = $bdjGp$useState();
    const [loading, setLoading] = $bdjGp$useState(true);
    const [height, setHeight] = $bdjGp$useState(props[bp]?.style?.height || props.md?.style?.height);
    const [width, setWidth] = $bdjGp$useState(props[bp]?.style?.width || props.md?.style?.width);
    const updateValue = (_val)=>{
        setValue(_val);
    };
    $bdjGp$useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            (0, $kNOzt.parseContent)(content, updateValue);
            setHeight(props[bp]?.style?.height || props.md?.style?.height);
            setWidth(props[bp]?.style?.width || props.md?.style?.width);
            setLoading(false);
        }, 200);
    }, [
        content,
        props[bp]?.style?.heigh
    ]);
    console.log("video", height);
    const background = {
        backgroundColor: "black",
        backgroundImage: "url(" + props?.custom?.preview + ")",
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    };
    return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $awdxc.default), {
        loading: loading,
        children: !value ? /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
            style: {
                width: width,
                height: height || 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ...background
            },
            children: /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
                className: "fa fa-play",
                style: {
                    color: "whitesmoke",
                    backgroundColor: "black",
                    border: "1px solid gray",
                    padding: "12px 15px",
                    borderRadius: 100,
                    width: 40,
                    height: 40
                },
                "aria-hidden": "true"
            })
        }) : !value?.startsWith("http") ? /*#__PURE__*/ (0, $bdjGp$jsx)("iframe", {
            title: "Iframe",
            allowFullScreen: true,
            height: "100%",
            width: "100%",
            style: {
                objectFit: "cover"
            },
            src: `https://embed.api.video/vod/${value}`
        }) : /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$reactplayerlazy), {
            url: value,
            height: parseInt(height) > 0 ? parseInt(height) : height,
            width: "100%",
            onReady: ()=>{
                setLoading(false);
            }
        })
    });
}

});

parcelRegister("cnmrP", function(module, exports) {

$parcel$export(module.exports, "default", () => $90290bb56f3e48af$export$2e2bcd8739ae039);



var $kNOzt = parcelRequire("kNOzt");


var $fhvMe = parcelRequire("fhvMe");
function $90290bb56f3e48af$export$2e2bcd8739ae039({ content: content, bp: bp, ...props }) {
    const [value, setValue] = $bdjGp$useState();
    const [loading, setLoading] = $bdjGp$useState(true);
    const updateValue = (_val)=>{
        setValue(_val);
    };
    $bdjGp$useEffect(()=>{
        console.log("useeffect", content);
        (0, $kNOzt.parseContent)(content, updateValue);
    }, [
        content
    ]);
    const width = props[bp]?.style?.width || props.md?.style?.width;
    const height = props[bp]?.style?.height || props.md?.style?.height || 400;
    const background = {
        backgroundColor: "yellow",
        backgroundImage: "url(" + props?.custom?.preview + ")",
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    };
    return /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
        style: {
            width: width,
            height: height
        },
        children: [
            !value ? /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                style: {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ...background
                },
                children: /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
                    class: "fa fa-play",
                    style: {
                        color: "whitesmoke",
                        backgroundColor: "black",
                        border: "1px solid gray",
                        padding: "12px 15px",
                        borderRadius: 100,
                        width: 40,
                        height: 40
                    },
                    "aria-hidden": "true"
                })
            }) : /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$reactplayerlazy), {
                url: value,
                height: height,
                onReady: ()=>{
                    setLoading(false);
                }
            }),
            /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                style: {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    backgroundColor: "red",
                    opacity: .3
                }
            }),
            /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                style: {
                    zIndex: 100
                },
                children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                    disabled: true,
                    parent: props,
                    data: {
                        id: "children_" + props.id,
                        children: props.children
                    }
                })
            })
        ]
    });
}

});

parcelRegister("4OcD7", function(module, exports) {

$parcel$export(module.exports, "default", () => $3805a0ff0cfedd1c$export$2e2bcd8739ae039);



var $kNOzt = parcelRequire("kNOzt");

var $kljfS = parcelRequire("kljfS");


var $dQBdc = parcelRequire("dQBdc");
const $3805a0ff0cfedd1c$var$getValue = (value, suffix = "px")=>{
    var result = value + "";
    if (value && !result.endsWith("%") && !result.endsWith("vh") && !result.endsWith("vw")) try {
        result = parseInt(result) + "px";
    } catch (e) {}
    return value ? result : null;
};
function $3805a0ff0cfedd1c$export$2e2bcd8739ae039({ content: content, bp: bp, ...props }) {
    const [value, setValue] = $bdjGp$useState();
    const updateValue = (_val)=>{
        (0, $dQBdc.useLoaded)({
            src: _val
        }, (res)=>setValue(_val && res !== "error" ? _val : null));
    };
    $bdjGp$useEffect(()=>{
        (0, $kNOzt.parseContent)(content, updateValue);
    }, [
        content
    ]);
    const _style = props[bp]?.style || props.md?.style || props.style || {};
    const { height: height, width: width, marginTop: marginTop, marginLeft: marginLeft, marginRight: marginRight, marginBottom: marginBottom, ...style } = _style;
    return value ? /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
        style: {
            ...style,
            height: $3805a0ff0cfedd1c$var$getValue(height) || 40,
            width: $3805a0ff0cfedd1c$var$getValue(width) || 40,
            borderRadius: "100%",
            overflow: "hidden"
        },
        children: /*#__PURE__*/ (0, $bdjGp$jsx)("img", {
            src: value || (0, (/*@__PURE__*/$parcel$interopDefault($kljfS))),
            width: "100%",
            title: "concepteur.io",
            loading: "eager",
            alt: "Outil.IO"
        })
    }) : /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
        style: {
            ...style,
            overflow: "hidden",
            height: $3805a0ff0cfedd1c$var$getValue(height) || 30,
            width: $3805a0ff0cfedd1c$var$getValue(width) || 30,
            borderRadius: "100%",
            backgroundColor: "lightgray"
        },
        children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$nextimage), {
            src: (0, (/*@__PURE__*/$parcel$interopDefault($kljfS))),
            alt: "Outil.IO",
            title: "concepteur.io"
        })
    });
}

});
parcelRegister("kljfS", function(module, exports) {
module.exports = new URL("avatar.4e6ea639.png", import.meta.url).toString();

});

parcelRegister("dQBdc", function(module, exports) {

$parcel$export(module.exports, "useLoaded", () => $a14cff32c5f4273f$export$e126bf838117171a);
function $a14cff32c5f4273f$export$e126bf838117171a({ crossOrigin: crossOrigin, referrerPolicy: referrerPolicy, src: src }, cb) {
    if (!src) return undefined;
    cb(false);
    let active = true;
    const image = new Image();
    image.onload = ()=>{
        if (!active) return;
        cb("loaded");
    };
    image.onerror = ()=>{
        if (!active) return;
        cb("error");
    };
    image.crossOrigin = crossOrigin;
    image.referrerPolicy = referrerPolicy;
    image.src = src;
}

});


parcelRegister("4TVGc", function(module, exports) {

$parcel$export(module.exports, "default", () => $39190a75a1db263e$export$2e2bcd8739ae039);



var $kNOzt = parcelRequire("kNOzt");
function $39190a75a1db263e$export$2e2bcd8739ae039({ content: content, ...props }) {
    const [value, setValue] = $bdjGp$useState();
    const updateValue = (_val)=>{
        setValue(_val);
    };
    $bdjGp$useEffect(()=>{
        (0, $kNOzt.parseContent)(content, updateValue);
    }, [
        content
    ]);
    return /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
        className: value + " b-icon " + props?.custom?.size
    });
}

});

parcelRegister("1lzTO", function(module, exports) {

$parcel$export(module.exports, "default", () => $0fb3996e8df7c98b$export$2e2bcd8739ae039);



var $kNOzt = parcelRequire("kNOzt");
function $0fb3996e8df7c98b$export$2e2bcd8739ae039({ content: content, ...props }) {
    const [value, setValue] = $bdjGp$useState();
    const updateValue = (_val)=>{
        setValue(_val);
    };
    $bdjGp$useEffect(()=>{
        (0, $kNOzt.parseContent)(content, updateValue);
    }, [
        content
    ]);
    return /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
        className: "star-rating",
        children: [
            5,
            4,
            3,
            2,
            1
        ].map((s)=>/*#__PURE__*/ (0, $bdjGp$jsxs)("span", {
                children: [
                    /*#__PURE__*/ (0, $bdjGp$jsx)("input", {
                        type: "radio",
                        id: s + "-stars",
                        name: "rating",
                        value: s
                    }),
                    /*#__PURE__*/ (0, $bdjGp$jsx)("label", {
                        htmlFor: s + "-stars",
                        className: "star",
                        children: "\u2605"
                    })
                ]
            }, s))
    });
}

});

parcelRegister("69XlQ", function(module, exports) {

$parcel$export(module.exports, "default", () => $47c19f4cfb8fce04$export$2e2bcd8739ae039);


const $47c19f4cfb8fce04$var$Calendar = ({ content: content })=>{
    // console.log('calendar', content)
    return /*#__PURE__*/ (0, $bdjGp$jsx)("iframe", {
        src: content,
        width: "100%",
        height: "100%",
        frameBorder: "0"
    });
};
var $47c19f4cfb8fce04$export$2e2bcd8739ae039 = $47c19f4cfb8fce04$var$Calendar;

});

parcelRegister("uWEUM", function(module, exports) {

$parcel$export(module.exports, "default", () => $05d04de533f09e28$export$2e2bcd8739ae039);


const $05d04de533f09e28$var$COUNTDOWN_TARGET = new Date("2023-06-31T23:59:59");
const $05d04de533f09e28$var$getTimeLeft = ()=>{
    const totalTimeLeft = $05d04de533f09e28$var$COUNTDOWN_TARGET - new Date();
    const jours = Math.floor(totalTimeLeft / 86400000);
    const heures = Math.floor(totalTimeLeft / 3600000 % 24);
    const min = Math.floor(totalTimeLeft / 60000 % 60);
    const sec = Math.floor(totalTimeLeft / 1000 % 60);
    return {
        jours: jours,
        heures: heures,
        min: min,
        sec: sec
    };
};
const $05d04de533f09e28$var$Countdown = (props)=>{
    const [timeLeft, setTimeLeft] = (0, $bdjGp$useState)(()=>$05d04de533f09e28$var$getTimeLeft());
    (0, $bdjGp$useEffect)(()=>{
        const timer = setInterval(()=>{
            setTimeLeft($05d04de533f09e28$var$getTimeLeft());
        }, 1000);
        return ()=>{
            clearInterval(timer);
        };
    }, []);
    const bp = props.custom?.bp;
    // const transform = 'scale('+props[bp]?.w/12+')'
    const transform = {};
    const boxStyle = {
        backgroundColor: props.custom?.backgroundColor || "white",
        width: props.bp?.style?.width
    };
    const marginRight = 12 / props[bp]?.w * 50 + "px";
    const marginLeft = 12 / props[bp]?.w * 50 + "px";
    return /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
        className: "countdown",
        style: {
            maxWidth: "calc(100vw - 50px)"
        },
        children: /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
            className: "content",
            style: {
                transform: transform,
                marginRight: marginRight
            },
            children: Object.entries(timeLeft).map((el)=>{
                const label = el[0];
                const value = el[1];
                return /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                    className: "box",
                    children: /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
                        className: "value",
                        style: boxStyle,
                        children: [
                            /*#__PURE__*/ (0, $bdjGp$jsx)("span", {
                                children: value
                            }),
                            /*#__PURE__*/ (0, $bdjGp$jsxs)("span", {
                                className: "label",
                                children: [
                                    " ",
                                    label,
                                    " "
                                ]
                            })
                        ]
                    })
                }, label);
            })
        })
    });
};
var $05d04de533f09e28$export$2e2bcd8739ae039 = $05d04de533f09e28$var$Countdown;

});

parcelRegister("3T0PZ", function(module, exports) {

$parcel$export(module.exports, "default", () => $2d4728721ed15ce0$export$2e2bcd8739ae039);


function $2d4728721ed15ce0$export$2e2bcd8739ae039({ content: content, ...props }) {
    return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$Fragment), {
        children: /*#__PURE__*/ (0, $bdjGp$jsx)("button", {
            className: "button-content",
            dangerouslySetInnerHTML: {
                __html: content
            },
            type: "submit",
            style: {
                backgroundColor: "transparent",
                border: "none",
                color: "inherit",
                padding: 0,
                margin: 0
            }
        })
    });
}

});

parcelRegister("5YB1D", function(module, exports) {

$parcel$export(module.exports, "default", () => $459f46ccc8482f85$export$2e2bcd8739ae039);


function $459f46ccc8482f85$export$2e2bcd8739ae039({ placeholder: placeholder, type: type, label: label, name: name, id: id, value: value, updContent: updContent, field: field, options: options, values: values, ...props }) {
    const [content, setContent] = (0, $bdjGp$useState)(value || props.defaultValue);
    const [height, setHeight] = (0, $bdjGp$useState)(props[props.bp]?.style?.height || "100%");
    const onChange = (e)=>{
        setContent(e.target.value);
    };
    const multiline = type === "text-area" || type === "textarea" || type == "message";
    return /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
        className: "w-100",
        children: multiline ? /*#__PURE__*/ (0, $bdjGp$jsx)("textarea", {
            type: type,
            id: id,
            value: content,
            onChange: onChange,
            name: name || id,
            placeholder: placeholder
        }) : /*#__PURE__*/ (0, $bdjGp$jsx)("input", {
            className: "w-100",
            type: type,
            id: id,
            required: field.required,
            value: content,
            onChange: onChange,
            name: name || id,
            placeholder: placeholder
        })
    });
}

});

parcelRegister("j6LJB", function(module, exports) {

$parcel$export(module.exports, "default", () => $de939af5184bf5fe$export$2e2bcd8739ae039);


function $de939af5184bf5fe$export$2e2bcd8739ae039({ placeholder: placeholder, type: type, label: label, name: name, value: value, updContent: updContent, field: field, options: options, values: values, ...props }) {
    const [content, setContent] = (0, $bdjGp$useState)(value || props.defaultValue);
    const onChange = (e)=>{
        setContent(e.target.value);
    };
    return /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
        className: "w-100",
        children: [
            /*#__PURE__*/ (0, $bdjGp$jsx)("label", {
                children: label || field.label || name || field.name
            }),
            /*#__PURE__*/ (0, $bdjGp$jsx)("select", {
                value: content || "",
                label: label || field.label || name || field.name,
                onChange: onChange,
                children: (options || field.options)?.map((option)=>/*#__PURE__*/ (0, $bdjGp$jsx)("option", {
                        value: option.value,
                        children: option.label
                    }, option.label))
            })
        ]
    });
}

});

parcelRegister("gwV5A", function(module, exports) {

$parcel$export(module.exports, "default", () => $c08beb32e88a3ea0$export$2e2bcd8739ae039);



var $71W4S = parcelRequire("71W4S");

var $fhvMe = parcelRequire("fhvMe");


function $c08beb32e88a3ea0$export$2e2bcd8739ae039({ content: content, ...props }) {
    return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$Fragment), {
        children: /*#__PURE__*/ (0, $bdjGp$jsxs)($c08beb32e88a3ea0$var$Body, {
            style: {
                position: "relative"
            },
            children: [
                /*#__PURE__*/ (0, $bdjGp$jsx)("details", {
                    open: props.custom?.opened != "false",
                    children: /*#__PURE__*/ (0, $bdjGp$jsx)("summary", {
                        children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                            ...props.header,
                            data: props.header,
                            path: "0"
                        })
                    })
                }),
                /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                    className: "content-details",
                    children: props.body?.type === "folder" ? /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$Fragment), {
                        children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $71W4S.default), {
                            ...props.body,
                            data: props.body,
                            path: "0"
                        })
                    }) : /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                        ...props.body,
                        data: props.body,
                        path: "0"
                    })
                })
            ]
        })
    });
}
//const Body = styled.div`
const $c08beb32e88a3ea0$var$Body = (0, $bdjGp$styled)((0, $bdjGp$Box))`
/***********************************************/
/********* Details *****************************/
/***********************************************/
details {
  overflow: hidden; /* Keep this line to prevent an odd blue outline around the element in Safari. */
 }
 summary {
  display: block; /* This hides the summary's ::marker pseudo-element */
 }
 summary::-webkit-details-marker {
  display: none; /* This also hides the ::marker pseudo-element, but in Safari */
 }
 div.content-details { 
  box-sizing: border-box;
  max-height: 0;
  overflow: hidden;
  transition: max-height 200ms ease-out;
 }
 details[open] + div.content-details {
  max-height: 800px; /* Set a max-height value enough to show all the content */ 
  transition: max-height 400ms ease-out, border 0ms linear;
 }
 details[open] i {
  rotate: 90deg;
  transition: rotate 200ms ease-out;
 }
`;

});

parcelRegister("jBLLS", function(module, exports) {

$parcel$export(module.exports, "default", () => $e466875f94e4455d$export$2e2bcd8739ae039);



var $M44OH = parcelRequire("M44OH");

var $fhvMe = parcelRequire("fhvMe");

var $kNOzt = parcelRequire("kNOzt");

var $1sHjs = parcelRequire("1sHjs");


var $9wS8V = parcelRequire("9wS8V");


var $82qiQ = parcelRequire("82qiQ");
const $e466875f94e4455d$var$List = ({ bp: bp, ...props })=>{
    const [loading, setLoading] = (0, $bdjGp$useState)(true);
    const [bodies, setBodies] = (0, $bdjGp$useState)([]);
    const [activeIndex, setActiveIndex] = (0, $bdjGp$useState)(-1);
    const router = (0, $bdjGp$useRouter)();
    const { data: session } = (0, $bdjGp$useSession)();
    const handleClick = (index, id, el)=>{
        console.log("props.body?.onClick?.type", props.body, el);
        setActiveIndex(index);
        if (el?.onClick?.actionType === "url") router.push(el?.onClick?.url);
        else if (props.onClickIndex) props.onClickIndex(index, id);
        else {
            const onClick = props.body && props.body["onClick_" + bp] || props.body?.onClick;
            const mapping = onClick?.mapping;
            if (mapping && mapping[index]) {
                if (onClick?.type === "placeHolder") (0, $1sHjs.default).showPlaceHolder(onClick?.id, mapping[index]);
                else if (onClick?.type === "page") (0, $1sHjs.default).showPage(mapping[index]);
                else (0, $1sHjs.default).showPopup(mapping[index]);
                (0, $9wS8V.default).setPreview(props.xdata, index);
            }
        }
    };
    (0, $bdjGp$useEffect)(()=>{
        console.log("list", props.xdata);
        if (session?.domain) (0, $82qiQ.default).get(`/variables/load/${props.xdata?.guid}`, {
            domain: session?.domain
        }, session?.jwt).then((res)=>{
            console.log("resvalue", res.value);
            (0, $kNOzt.parseLocalContent)({
                prefix: props.xdata?.name,
                data: res?.value
            }, props.body, ({ parsed: parsed, data: data })=>{
                setBodies(parsed);
                setLoading(false);
            });
        });
    }, [
        session?.domain
    ]);
    return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$Suspense), {
        fallback: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $M44OH.default), {
            loading: true
        }),
        children: bodies.map((el, index)=>/*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                bp: bp,
                data: el,
                className: index === activeIndex ? "" : "",
                activeIndex: activeIndex,
                path: "0",
                activeItem: index === activeIndex ? "activeItem" : "",
                activeStyle: index === activeIndex ? props.JSONActiveStyle : "",
                onItemClick: ()=>handleClick(index, el.id, el)
            }, index))
    });
};
var $e466875f94e4455d$export$2e2bcd8739ae039 = $e466875f94e4455d$var$List;

});
parcelRegister("M44OH", function(module, exports) {

$parcel$export(module.exports, "default", () => $0907a55ae7f4b90d$export$2e2bcd8739ae039);



var $idaL6 = parcelRequire("idaL6");
function $0907a55ae7f4b90d$export$2e2bcd8739ae039({ loading: loading, message: message, children: children }) {
    return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$Fragment), {
        children: loading ? /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
            className: "p-4",
            children: [
                message && /*#__PURE__*/ (0, $bdjGp$jsx)("h6", {
                    children: message
                }),
                /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($idaL6))).skeleton,
                    children: [
                        /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($idaL6))).skeleton_left,
                            children: [
                                /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                                    className: [
                                        (0, (/*@__PURE__*/$parcel$interopDefault($idaL6))).line,
                                        (0, (/*@__PURE__*/$parcel$interopDefault($idaL6))).h17,
                                        (0, (/*@__PURE__*/$parcel$interopDefault($idaL6))).w40,
                                        (0, (/*@__PURE__*/$parcel$interopDefault($idaL6))).m10
                                    ].join(" ")
                                }),
                                /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($idaL6))).line
                                }),
                                /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                                    className: [
                                        (0, (/*@__PURE__*/$parcel$interopDefault($idaL6))).line,
                                        (0, (/*@__PURE__*/$parcel$interopDefault($idaL6))).h8,
                                        (0, (/*@__PURE__*/$parcel$interopDefault($idaL6))).w50
                                    ].join(" ")
                                }),
                                /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                                    className: [
                                        (0, (/*@__PURE__*/$parcel$interopDefault($idaL6))).line,
                                        (0, (/*@__PURE__*/$parcel$interopDefault($idaL6))).w75
                                    ].join(" ")
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($idaL6))).skeleton_right,
                            children: /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($idaL6))).square
                            })
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$react).Fragment, {
            children: children
        })
    });
}

});
parcelRegister("idaL6", function(module, exports) {

$parcel$export(module.exports, "box", () => $d421c95453628e6c$export$827f4ee28efc37, (v) => $d421c95453628e6c$export$827f4ee28efc37 = v);
$parcel$export(module.exports, "circle", () => $d421c95453628e6c$export$e1d786d2f707b414, (v) => $d421c95453628e6c$export$e1d786d2f707b414 = v);
$parcel$export(module.exports, "flex1", () => $d421c95453628e6c$export$fce79930bd73619a, (v) => $d421c95453628e6c$export$fce79930bd73619a = v);
$parcel$export(module.exports, "flex2", () => $d421c95453628e6c$export$7692c0af341a3b00, (v) => $d421c95453628e6c$export$7692c0af341a3b00 = v);
$parcel$export(module.exports, "h10", () => $d421c95453628e6c$export$304c8027c7408ca9, (v) => $d421c95453628e6c$export$304c8027c7408ca9 = v);
$parcel$export(module.exports, "h12", () => $d421c95453628e6c$export$b0ab595e83b0ff2b, (v) => $d421c95453628e6c$export$b0ab595e83b0ff2b = v);
$parcel$export(module.exports, "h15", () => $d421c95453628e6c$export$46d52af70cb5882c, (v) => $d421c95453628e6c$export$46d52af70cb5882c = v);
$parcel$export(module.exports, "h17", () => $d421c95453628e6c$export$ce1b0c2f7c36471d, (v) => $d421c95453628e6c$export$ce1b0c2f7c36471d = v);
$parcel$export(module.exports, "h20", () => $d421c95453628e6c$export$7946ae89839d38c1, (v) => $d421c95453628e6c$export$7946ae89839d38c1 = v);
$parcel$export(module.exports, "h25", () => $d421c95453628e6c$export$83e19149b1690995, (v) => $d421c95453628e6c$export$83e19149b1690995 = v);
$parcel$export(module.exports, "h8", () => $d421c95453628e6c$export$874960571e727348, (v) => $d421c95453628e6c$export$874960571e727348 = v);
$parcel$export(module.exports, "line", () => $d421c95453628e6c$export$53f1d5ea8de3d7c, (v) => $d421c95453628e6c$export$53f1d5ea8de3d7c = v);
$parcel$export(module.exports, "loading-btn", () => $d421c95453628e6c$export$5945b3379c72c60d, (v) => $d421c95453628e6c$export$5945b3379c72c60d = v);
$parcel$export(module.exports, "loading-content", () => $d421c95453628e6c$export$ed555aaf9acd8e82, (v) => $d421c95453628e6c$export$ed555aaf9acd8e82 = v);
$parcel$export(module.exports, "loading-image", () => $d421c95453628e6c$export$c622534e9a743cae, (v) => $d421c95453628e6c$export$c622534e9a743cae = v);
$parcel$export(module.exports, "loading-main-text", () => $d421c95453628e6c$export$e19c9706a1ad3a61, (v) => $d421c95453628e6c$export$e19c9706a1ad3a61 = v);
$parcel$export(module.exports, "loading-sub-text", () => $d421c95453628e6c$export$967cd823d4617497, (v) => $d421c95453628e6c$export$967cd823d4617497 = v);
$parcel$export(module.exports, "loading-text-container", () => $d421c95453628e6c$export$4358da8e829d096, (v) => $d421c95453628e6c$export$4358da8e829d096 = v);
$parcel$export(module.exports, "m10", () => $d421c95453628e6c$export$a527933bd763b1c4, (v) => $d421c95453628e6c$export$a527933bd763b1c4 = v);
$parcel$export(module.exports, "movie--isloading", () => $d421c95453628e6c$export$d8ba0fa824fd6254, (v) => $d421c95453628e6c$export$d8ba0fa824fd6254 = v);
$parcel$export(module.exports, "progress", () => $d421c95453628e6c$export$504d7abb21fa8c9, (v) => $d421c95453628e6c$export$504d7abb21fa8c9 = v);
$parcel$export(module.exports, "progress-bar", () => $d421c95453628e6c$export$f93928d85ad171dc, (v) => $d421c95453628e6c$export$f93928d85ad171dc = v);
$parcel$export(module.exports, "shine-loading-container-items", () => $d421c95453628e6c$export$135fed05faf3a7d0, (v) => $d421c95453628e6c$export$135fed05faf3a7d0 = v);
$parcel$export(module.exports, "shine-loading-image", () => $d421c95453628e6c$export$5297ee371f780e5c, (v) => $d421c95453628e6c$export$5297ee371f780e5c = v);
$parcel$export(module.exports, "skeleton", () => $d421c95453628e6c$export$2a0674ff2eb10214, (v) => $d421c95453628e6c$export$2a0674ff2eb10214 = v);
$parcel$export(module.exports, "skeleton_left", () => $d421c95453628e6c$export$bb9b31c714ffc15a, (v) => $d421c95453628e6c$export$bb9b31c714ffc15a = v);
$parcel$export(module.exports, "skeleton_right", () => $d421c95453628e6c$export$b7311a399f9a590c, (v) => $d421c95453628e6c$export$b7311a399f9a590c = v);
$parcel$export(module.exports, "square", () => $d421c95453628e6c$export$dd4f28cef696bc7d, (v) => $d421c95453628e6c$export$dd4f28cef696bc7d = v);
$parcel$export(module.exports, "w25", () => $d421c95453628e6c$export$5a15ae7856df5cbb, (v) => $d421c95453628e6c$export$5a15ae7856df5cbb = v);
$parcel$export(module.exports, "w40", () => $d421c95453628e6c$export$b480292f1b1294b7, (v) => $d421c95453628e6c$export$b480292f1b1294b7 = v);
$parcel$export(module.exports, "w50", () => $d421c95453628e6c$export$688fe4c4e1a0ee8e, (v) => $d421c95453628e6c$export$688fe4c4e1a0ee8e = v);
$parcel$export(module.exports, "w75", () => $d421c95453628e6c$export$3f4e59f73c800c9c, (v) => $d421c95453628e6c$export$3f4e59f73c800c9c = v);
$parcel$export(module.exports, "wave-lines", () => $d421c95453628e6c$export$f7772fd06d361a52, (v) => $d421c95453628e6c$export$f7772fd06d361a52 = v);
$parcel$export(module.exports, "wave-squares", () => $d421c95453628e6c$export$9923f65037e8c241, (v) => $d421c95453628e6c$export$9923f65037e8c241 = v);
var $d421c95453628e6c$export$827f4ee28efc37;
var $d421c95453628e6c$export$e1d786d2f707b414;
var $d421c95453628e6c$export$fce79930bd73619a;
var $d421c95453628e6c$export$7692c0af341a3b00;
var $d421c95453628e6c$export$304c8027c7408ca9;
var $d421c95453628e6c$export$b0ab595e83b0ff2b;
var $d421c95453628e6c$export$46d52af70cb5882c;
var $d421c95453628e6c$export$ce1b0c2f7c36471d;
var $d421c95453628e6c$export$7946ae89839d38c1;
var $d421c95453628e6c$export$83e19149b1690995;
var $d421c95453628e6c$export$874960571e727348;
var $d421c95453628e6c$export$53f1d5ea8de3d7c;
var $d421c95453628e6c$export$5945b3379c72c60d;
var $d421c95453628e6c$export$ed555aaf9acd8e82;
var $d421c95453628e6c$export$c622534e9a743cae;
var $d421c95453628e6c$export$e19c9706a1ad3a61;
var $d421c95453628e6c$export$967cd823d4617497;
var $d421c95453628e6c$export$4358da8e829d096;
var $d421c95453628e6c$export$a527933bd763b1c4;
var $d421c95453628e6c$export$d8ba0fa824fd6254;
var $d421c95453628e6c$export$504d7abb21fa8c9;
var $d421c95453628e6c$export$f93928d85ad171dc;
var $d421c95453628e6c$export$135fed05faf3a7d0;
var $d421c95453628e6c$export$5297ee371f780e5c;
var $d421c95453628e6c$export$2a0674ff2eb10214;
var $d421c95453628e6c$export$bb9b31c714ffc15a;
var $d421c95453628e6c$export$b7311a399f9a590c;
var $d421c95453628e6c$export$dd4f28cef696bc7d;
var $d421c95453628e6c$export$5a15ae7856df5cbb;
var $d421c95453628e6c$export$b480292f1b1294b7;
var $d421c95453628e6c$export$688fe4c4e1a0ee8e;
var $d421c95453628e6c$export$3f4e59f73c800c9c;
var $d421c95453628e6c$export$f7772fd06d361a52;
var $d421c95453628e6c$export$9923f65037e8c241;
$d421c95453628e6c$export$827f4ee28efc37 = `nrwekW_box`;
$d421c95453628e6c$export$e1d786d2f707b414 = `nrwekW_circle`;
$d421c95453628e6c$export$fce79930bd73619a = `nrwekW_flex1`;
$d421c95453628e6c$export$7692c0af341a3b00 = `nrwekW_flex2`;
$d421c95453628e6c$export$304c8027c7408ca9 = `nrwekW_h10`;
$d421c95453628e6c$export$b0ab595e83b0ff2b = `nrwekW_h12`;
$d421c95453628e6c$export$46d52af70cb5882c = `nrwekW_h15`;
$d421c95453628e6c$export$ce1b0c2f7c36471d = `nrwekW_h17`;
$d421c95453628e6c$export$7946ae89839d38c1 = `nrwekW_h20`;
$d421c95453628e6c$export$83e19149b1690995 = `nrwekW_h25`;
$d421c95453628e6c$export$874960571e727348 = `nrwekW_h8`;
$d421c95453628e6c$export$53f1d5ea8de3d7c = `nrwekW_line`;
$d421c95453628e6c$export$5945b3379c72c60d = `nrwekW_loading-btn`;
$d421c95453628e6c$export$ed555aaf9acd8e82 = `nrwekW_loading-content`;
$d421c95453628e6c$export$c622534e9a743cae = `nrwekW_loading-image`;
$d421c95453628e6c$export$e19c9706a1ad3a61 = `nrwekW_loading-main-text`;
$d421c95453628e6c$export$967cd823d4617497 = `nrwekW_loading-sub-text`;
$d421c95453628e6c$export$4358da8e829d096 = `nrwekW_loading-text-container`;
$d421c95453628e6c$export$a527933bd763b1c4 = `nrwekW_m10`;
$d421c95453628e6c$export$d8ba0fa824fd6254 = `nrwekW_movie--isloading`;
$d421c95453628e6c$export$504d7abb21fa8c9 = `nrwekW_progress`;
$d421c95453628e6c$export$504d7abb21fa8c9;
$d421c95453628e6c$export$f93928d85ad171dc = `nrwekW_progress-bar`;
$d421c95453628e6c$export$135fed05faf3a7d0 = `nrwekW_shine-loading-container-items`;
$d421c95453628e6c$export$135fed05faf3a7d0;
$d421c95453628e6c$export$5297ee371f780e5c = `nrwekW_shine-loading-image`;
$d421c95453628e6c$export$5297ee371f780e5c;
$d421c95453628e6c$export$2a0674ff2eb10214 = `nrwekW_skeleton`;
$d421c95453628e6c$export$bb9b31c714ffc15a = `nrwekW_skeleton_left`;
$d421c95453628e6c$export$b7311a399f9a590c = `nrwekW_skeleton_right`;
$d421c95453628e6c$export$dd4f28cef696bc7d = `nrwekW_square`;
$d421c95453628e6c$export$5a15ae7856df5cbb = `nrwekW_w25`;
$d421c95453628e6c$export$b480292f1b1294b7 = `nrwekW_w40`;
$d421c95453628e6c$export$688fe4c4e1a0ee8e = `nrwekW_w50`;
$d421c95453628e6c$export$3f4e59f73c800c9c = `nrwekW_w75`;
$d421c95453628e6c$export$f7772fd06d361a52 = `nrwekW_wave-lines`;
$d421c95453628e6c$export$f7772fd06d361a52;
$d421c95453628e6c$export$9923f65037e8c241 = `nrwekW_wave-squares`;
$d421c95453628e6c$export$9923f65037e8c241;

});



parcelRegister("1GnLw", function(module, exports) {

$parcel$export(module.exports, "default", () => $139c260a80ccb1fd$export$2e2bcd8739ae039);



var $fhvMe = parcelRequire("fhvMe");

const $139c260a80ccb1fd$var$TableEditor = ({ inputs: inputs = {}, name: name, databases: databases = [], ...props })=>{
    // console.log("minprops", props)
    return /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
        style: {
            width: "100%",
            overflowX: "auto",
            overflowY: "hidden",
            paddingBottom: 10
        },
        children: /*#__PURE__*/ (0, $bdjGp$jsx)("table", {
            style: {
                overflowX: "auto",
                maxWidth: "100%",
                width: "100%",
                position: "relative"
            },
            children: props.items?.map((row, index)=>/*#__PURE__*/ (0, $bdjGp$jsx)("tr", {
                    children: row?.map((col, index2)=>/*#__PURE__*/ (0, $bdjGp$jsx)("td", {
                            style: {
                                height: 10,
                                minWidth: 30,
                                maxWidth: props.custom?.cellMaxWidth + "px",
                                width: props.custom?.cellMinWidth + "px!important",
                                position: "relative"
                            },
                            children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                                data: {
                                    type: "custom",
                                    style: {
                                        height: "100%",
                                        display: "flex",
                                        padding: "0px!important"
                                    },
                                    id: index2,
                                    children: [
                                        col
                                    ]
                                },
                                path: index2 + ""
                            })
                        }, col.id))
                }, index))
        })
    });
};
var $139c260a80ccb1fd$export$2e2bcd8739ae039 = $139c260a80ccb1fd$var$TableEditor;

});

parcelRegister("k3rFl", function(module, exports) {

$parcel$export(module.exports, "default", () => $e9998c561a4d6217$export$2e2bcd8739ae039);



var $71W4S = parcelRequire("71W4S");

var $fhvMe = parcelRequire("fhvMe");
function $e9998c561a4d6217$export$2e2bcd8739ae039({ id: id, ...props }) {
    const [activeIndex, setActiveIndex] = $bdjGp$useState(0);
    const verticalStyle = {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%"
    };
    const horizontalStyle = {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        width: "100%",
        height: "100%"
    };
    return /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $bdjGp$Fragment), {
        children: [
            /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                data: props.header,
                rawChildren: /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
                    className: "flex-nowrap",
                    style: props.custom?.orientation === "row" ? horizontalStyle : verticalStyle,
                    children: [
                        props.xdata.map((xd, index)=>/*#__PURE__*/ (0, $bdjGp$jsx)((0, $71W4S.default), {
                                onClick: (e)=>{
                                    setActiveIndex(index);
                                },
                                isActive: activeIndex === index,
                                disabled: false,
                                data: props.xheader,
                                rawChildren: /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $bdjGp$Fragment), {
                                    children: [
                                        /*#__PURE__*/ (0, $bdjGp$jsx)("span", {
                                            style: {
                                                fontSize: "14px",
                                                width: "fit-content",
                                                wordBreak: "break-word",
                                                maxWidth: "calc(100% - 40px)"
                                            },
                                            children: xd.label
                                        }),
                                        /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
                                            className: "ic fa-lg " + xd.icon,
                                            style: {
                                                height: "40px",
                                                width: "40px",
                                                zIndex: 200
                                            }
                                        })
                                    ]
                                })
                            }, index)),
                        " "
                    ]
                })
            }),
            /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                style: {
                    minHeight: 20,
                    width: "100%"
                },
                children: props.xdata.map((c, index)=>activeIndex === index && /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                        parent: props,
                        data: c.body
                    }, index))
            })
        ]
    });
}

});

parcelRegister("kBdDN", function(module, exports) {

$parcel$export(module.exports, "default", () => $eff1d82789b729b0$export$2e2bcd8739ae039);



var $M44OH = parcelRequire("M44OH");

var $1sHjs = parcelRequire("1sHjs");

var $fhvMe = parcelRequire("fhvMe");

var $3p3rs = parcelRequire("3p3rs");
const $eff1d82789b729b0$var$PlaceHolder = (props)=>{
    const [loading, setLoading] = (0, $bdjGp$useState)(true);
    const [data, setData] = (0, $bdjGp$useState)();
    const refresh = (_data)=>{
        console.log("showPlaceholder", _data);
        // if (_data?.id != data?.id) {
        setLoading(true);
        setData(_data);
        setTimeout(()=>{
            setLoading(false);
        }, 1);
    // }
    };
    (0, $bdjGp$useEffect)(()=>{
        (0, $1sHjs.default).setPlaceholder(props.id, {
            id: props.id,
            title: props.title,
            refresh: refresh
        });
        if (props.custom?.defaultComponent) (0, $1sHjs.default).showPlaceHolder(props.id, props.custom?.defaultComponent);
        setLoading(false);
    }, []);
    return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $M44OH.default), {
        loading: loading,
        children: data ? /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
            data: data.children[0],
            path: "0"
        }) : /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
            children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $3p3rs.default), {
                loading: true
            })
        })
    });
};
var $eff1d82789b729b0$export$2e2bcd8739ae039 = $eff1d82789b729b0$var$PlaceHolder;

});
parcelRegister("3p3rs", function(module, exports) {

$parcel$export(module.exports, "default", () => $27a6605dbc9962b2$export$2e2bcd8739ae039);



var $idaL6 = parcelRequire("idaL6");
function $27a6605dbc9962b2$export$2e2bcd8739ae039({ loading: loading, message: message, children: children }) {
    return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$Fragment), {
        children: loading ? /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
            className: "p-4",
            children: [
                message && /*#__PURE__*/ (0, $bdjGp$jsx)("h6", {
                    children: message
                }),
                /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($idaL6))).skeleton_left,
                    children: /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($idaL6))).line
                    })
                })
            ]
        }) : /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$react).Fragment, {
            children: children
        })
    });
}

});


parcelRegister("3jNBd", function(module, exports) {

$parcel$export(module.exports, "default", () => $26a99ecfe6d61aa7$export$2e2bcd8739ae039);


var $fhvMe = parcelRequire("fhvMe");
const $26a99ecfe6d61aa7$var$MenuContainer = (props)=>{
    return /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
        className: "menuContainer",
        style: {
            height: "100%",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                data: props.header,
                path: "0"
            }),
            /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                style: {
                    height: "100%",
                    overflow: "auto"
                },
                children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                    data: props.body,
                    path: "0"
                })
            })
        ]
    });
};
var $26a99ecfe6d61aa7$export$2e2bcd8739ae039 = $26a99ecfe6d61aa7$var$MenuContainer;

});

parcelRegister("4A29E", function(module, exports) {

$parcel$export(module.exports, "complexTypes", () => $355c321243980440$export$b58350d1b6c2f7a);
$parcel$export(module.exports, "containerTypes", () => $355c321243980440$export$4e2f01d6813b43d);
$parcel$export(module.exports, "lessonTypes", () => $355c321243980440$export$e8dd5b7509171f7e);
const $355c321243980440$export$b58350d1b6c2f7a = [
    "section",
    "row",
    "column",
    "navbar",
    "header",
    "footer",
    "page",
    "grid",
    "carousel",
    "list",
    "nav_list",
    "table",
    "tableau",
    "folder",
    "modules",
    "backgroundVideo",
    // "modules",
    // "horizontalTab",
    "bottomNavbar",
    "sideBar"
];
const $355c321243980440$export$4e2f01d6813b43d = [
    "section",
    "row",
    "column",
    "navbar",
    "header",
    "footer",
    "leftsidebar",
    "rightsidebar",
    "page",
    "grid",
    // "horizontalTab",
    "bottomNavbar",
    "sideBar"
];
const $355c321243980440$export$e8dd5b7509171f7e = {
    "video": {
        icon: "fa fa-video-camera"
    },
    "pdf": {
        icon: "fa fa-file-alt"
    },
    "quizz": {
        icon: "fa fa-clock"
    }
};
const $355c321243980440$export$1bd378507c196d39 = [
    "course",
    "product"
];
const $355c321243980440$export$2472ae9220efa1bd = {
    "course": {
        name: "course",
        label: "Mes Cours",
        api: "course",
        fields: [
            "description",
            "price",
            "thumbnail",
            "duration",
            "level"
        ],
        queries: {
            "all": {
                name: "all",
                label: "Tous les cours",
                api: "all"
            },
            "top_3": {
                name: "top_3",
                label: "Top 3",
                api: "top_3"
            },
            "top_5": {
                name: "top_5",
                label: "Top 5",
                api: "top_5"
            },
            "top_10": {
                name: "top_10",
                label: "Top 10",
                api: "top_10"
            },
            "related": {
                name: "related",
                label: "Cours li\xe9s",
                api: "related"
            },
            "same_author": {
                name: "same_author",
                label: "Du m\xeame auteur",
                api: "same_author"
            }
        }
    },
    "product": {
        name: "product",
        label: "Mes produits",
        api: "product",
        fields: [
            "description",
            "price",
            "thumbnail"
        ],
        queries: {
            "all": {
                name: "all",
                label: "Tous les produits",
                api: "all"
            },
            "top_3": {
                name: "top_3",
                label: "Top 3",
                api: "top_3"
            },
            "top_5": {
                name: "top_5",
                label: "Top 5",
                api: "top_5"
            },
            "top_10": {
                name: "top_10",
                label: "Top 10",
                api: "top_10"
            },
            "related": {
                name: "related",
                label: "Poduits li\xe9s",
                api: "related"
            },
            "same_author": {
                name: "same_author",
                label: "Du m\xeame vendeur",
                api: "same_author"
            }
        }
    }
};

});

parcelRegister("dobMo", function(module, exports) {

$parcel$export(module.exports, "default", () => $9bf6a76be163ce91$export$2e2bcd8739ae039);






var $fhvMe = parcelRequire("fhvMe");

var $kqwRD = parcelRequire("kqwRD");
const $9bf6a76be163ce91$var$CarouserContainer = (0, $bdjGp$styledcomponents).div`
`;
const $9bf6a76be163ce91$var$CarouselButton = (0, $bdjGp$styledcomponents).button`
position: absolute;

cursor: pointer;

top: 50%;
z-index: 150;

transition: transform 0.1s ease-in-out;

background: white;
border-radius: 15px;
border: none;
padding: 0.2rem;
`;
const $9bf6a76be163ce91$var$LeftCarouselButton = (0, $bdjGp$styledcomponents)($9bf6a76be163ce91$var$CarouselButton)`
left: 0;
transform: translate(-100%, -50%);

${$9bf6a76be163ce91$var$CarouserContainer}:hover & {
  transform: translate(10%, -50%);
}
`;
const $9bf6a76be163ce91$var$RightCarouselButton = (0, $bdjGp$styledcomponents)($9bf6a76be163ce91$var$CarouselButton)`
right: 0;
transform: translate(100%, -50%);

${$9bf6a76be163ce91$var$CarouserContainer}:hover & {
  transform: translate(-10%, -50%);
}
`;
const $9bf6a76be163ce91$var$properties = ()=>({
        prevArrow: /*#__PURE__*/ (0, $bdjGp$jsx)($9bf6a76be163ce91$var$LeftCarouselButton, {
            id: "left-btn",
            children: /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
                className: "fa fa-chevron-left",
                style: {
                    width: 20
                }
            })
        }),
        nextArrow: /*#__PURE__*/ (0, $bdjGp$jsx)($9bf6a76be163ce91$var$RightCarouselButton, {
            id: "right-btn",
            children: /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
                className: "fa fa-chevron-right",
                style: {
                    width: 20
                }
            })
        })
    });
const $9bf6a76be163ce91$var$FadeExample = ({ updProps: updProps, ...props })=>{
    const [activeIndex, setActiveIndex] = (0, $bdjGp$useState)(0);
    const [slides, setSlides] = (0, $bdjGp$useState)(props.children || []);
    const [autoSlide, setAutoSlide] = (0, $bdjGp$useState)(props.custom?.autoSlide || 5);
    const transitionDuration = autoSlide * 100;
    const [paused, setPaused] = (0, $bdjGp$useState)(false);
    const bp = (0, $kqwRD.default).getBp();
    const slideRef = (0, $bdjGp$useRef)(null);
    (0, $bdjGp$useEffect)(()=>{
        if (parseInt(autoSlide) > 0 && !paused) setTimeout(()=>{
            setActiveIndex(activeIndex < slides?.length - 1 ? activeIndex + 1 : 0);
        }, parseInt(autoSlide) * 1000);
    }, [
        activeIndex,
        paused
    ]);
    const height = props[bp]?.style?.height || props.md?.style?.height;
    const typeRender = (c)=>{
        switch(props.custom?.type){
            case "multiple":
                return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$Slide), {
                    slidesToScroll: Math.min(props.custom?.slidesToScroll, slides.length),
                    slidesToShow: Math.min(props.custom?.slidesToShow, slides.length),
                    indicators: true,
                    autoplay: autoSlide > 0,
                    transitionDuration: transitionDuration,
                    ...$9bf6a76be163ce91$var$properties(),
                    children: c
                });
            default:
                switch(props.custom?.transitionType){
                    case "fade":
                        return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$Fade), {
                            ref: slideRef,
                            autoplay: autoSlide > 0,
                            transitionDuration: transitionDuration,
                            ...$9bf6a76be163ce91$var$properties(),
                            children: c
                        });
                    case "dezoom":
                        return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$Slide), {
                            ref: slideRef,
                            autoplay: autoSlide > 0,
                            transitionDuration: transitionDuration,
                            ...$9bf6a76be163ce91$var$properties(),
                            children: c
                        });
                    case "zoom":
                        return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$Zoom), {
                            ref: slideRef,
                            autoplay: autoSlide > 0,
                            transitionDuration: transitionDuration,
                            ...$9bf6a76be163ce91$var$properties(),
                            children: c
                        });
                    default:
                        return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$Slide), {
                            ref: slideRef,
                            autoplay: autoSlide > 0,
                            transitionDuration: transitionDuration,
                            ...$9bf6a76be163ce91$var$properties(),
                            children: c
                        });
                }
        }
    };
    return /*#__PURE__*/ (0, $bdjGp$jsx)($9bf6a76be163ce91$var$CarouserContainer, {
        style: {
            position: "absolute",
            height: "100%",
            overflow: "hidden"
        },
        children: typeRender([].concat(slides).map((el, index)=>/*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                style: {
                    width: "100%",
                    width: "100%",
                    height: height
                },
                className: "each-slid",
                children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                    data: {
                        ...el,
                        [bp]: {
                            ...el[bp],
                            fixedH: true,
                            style: {
                                height: "100%",
                                width: "100%",
                                ...el[bp]?.style
                            }
                        },
                        style: {
                            ...el.style,
                            overflow: "hidden"
                        }
                    },
                    activeIndex: activeIndex,
                    path: "0"
                })
            }, el.id)))
    });
};
var $9bf6a76be163ce91$export$2e2bcd8739ae039 = $9bf6a76be163ce91$var$FadeExample;

});

parcelRegister("7D2H9", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $58de441152311d5c$export$2e2bcd8739ae039);


parcelRequire("kqwRD");


var $fhvMe = parcelRequire("fhvMe");

var $1sHjs = parcelRequire("1sHjs");

var $82qiQ = parcelRequire("82qiQ");

const $58de441152311d5c$var$varRegex = /\$\{[aA-zZ0-9 -_]*\}/g;
const $58de441152311d5c$var$parseContent = (content, values)=>{
    var result = content;
    if (typeof result == "string") {
        const vars = result?.match($58de441152311d5c$var$varRegex);
        for(var i = 0; i < vars?.length; i++){
            const c = vars[i];
            const newVal = values[c.replace("${", "").replace("}", "")] || "";
            if (newVal && typeof newVal != "array" && typeof newVal != "object") result = result.replace(c, newVal);
            else result = newVal;
        }
    }
    return result;
};
const $58de441152311d5c$var$Form = (props)=>{
    const [bp, setBp] = (0, $bdjGp$useState)(props.bp);
    const [popup, setPopup] = (0, $bdjGp$useState)(false);
    const path = (0, $bdjGp$usePathname)();
    const { data: session } = (0, $bdjGp$useSession)();
    const handleSubmit = async (e)=>{
        // e.preventDefault()
        e.stopPropagation();
        // console.log("handlesubmit", e)
        const result = {};
        for(var i = 0; i < e.target.elements.length; i++){
            const el = e.target.elements[i];
            if (el.name) result[el.name] = el.value?.replace(/"/g, '\\"');
            if (el.type === "email") result["email"] = el.value?.replace(/"/g, '\\"');
            if (el.type === "name") result["name"] = el.value?.replace(/"/g, '\\"');
            if (el.type === "phone") result["phone"] = el.value?.replace(/"/g, '\\"');
        }
        e.preventDefault();
        var response;
        switch(props.custom?.submitType){
            case "sql":
                break;
            case "email":
                response = await (0, $82qiQ.default).post(`${undefined}/${props.id}`, {
                    to: props.custom?.email,
                    path: path,
                    domain: session?.domain,
                    subject: props.custom?.subject,
                    name: props.content,
                    tags: [
                        "tag: " + props.custom?.tag
                    ],
                    from: {
                        name: result?.name,
                        email: result?.email,
                        phone: result?.phone
                    },
                    ...result
                }).catch((e)=>{
                    console.log(e);
                    if (props.custom?.errorMessage) alert(props.custom?.errorMessage || "Une erreur s'est produite. \nVeuillez nous excuser pour la g\xe8ne occasionn\xe9e");
                });
                break;
            case "workflow":
                response = await (0, $82qiQ.default).post(`${undefined}/${props.custom?.event}`, {
                    to: {
                        email: props.custom?.email
                    },
                    path: path,
                    domain: (0, $82qiQ.default).getConfig()?.domain,
                    subject: props.custom?.subject,
                    name: props.content,
                    tags: [
                        "tag: " + props.custom?.tag
                    ],
                    ...result
                }).catch((e)=>{
                    console.log(e);
                    if (props.custom?.errorMessage) alert(props.custom?.errorMessage || "Une erreur s'est produite. \nVeuillez nous excuser pour la g\xe8ne occasionn\xe9e");
                });
                break;
            case "url":
                console.log(props.custom);
                if (props.custom?.url) {
                    console.log(props.custom.url);
                    response = await fetch(props.custom?.url, {
                        method: props.custom?.method || "POST",
                        body: JSON.stringify(result)
                    }).then((res)=>res.json()).catch((e)=>{
                        console.log(e);
                        if (props.custom?.errorMessage) alert(props.custom?.errorMessage || "Une erreur s'est produite. \nVeuillez nous excuser pour la g\xe8ne occasionn\xe9e");
                    });
                }
                break;
            default:
                console.log(props.custom);
                break;
        }
        if (!response || response.status >= 400) {
            if (!props.custom?.errorMessage) alert("Une erreur s'est produite. \nVeuillez nous excuser pour la g\xe8ne occasionn\xe9e");
        } else {
            console.log("form res", response);
            switch(props.custom?.onSuccessType){
                case "url":
                    window.location = props.custom?.onSuccess;
                    break;
                case "popup":
                    (0, $1sHjs.default).showPopupPreview(props.custom?.onSuccess);
                    break;
                default:
                    break;
            }
        }
    };
    const { flexDirection: mdFlexDirection, flexWrap: mdFlexWrap, display: mdDisplay, alignItems: mdAlignItems } = props.md?.style || {};
    const { flexDirection: smFlexDirection, flexWrap: smFlexWrap, display: smDisplay, alignItems: smAlignItems } = props.sm?.style || {};
    return /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $bdjGp$Fragment), {
        children: [
            /*#__PURE__*/ (0, $bdjGp$jsx)("form", {
                onSubmit: (e)=>handleSubmit(e),
                children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                    parent: props,
                    bp: bp,
                    data: {
                        id: "child_" + props.id,
                        children: props.children,
                        md: {
                            style: {
                                flexDirection: mdFlexDirection,
                                flexWrap: mdFlexWrap,
                                display: mdDisplay,
                                alignItems: mdAlignItems
                            }
                        },
                        sm: {
                            style: {
                                flexDirection: smFlexDirection,
                                flexWrap: smFlexWrap,
                                display: smDisplay,
                                alignItems: smAlignItems
                            }
                        }
                    },
                    path: "0"
                })
            }),
            popup?.children && open && /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                className: "popup-builder popup-modal",
                onClick: handleClose,
                style: {
                    ...popup.style,
                    zIndex: auto,
                    position: "fixed",
                    display: open ? "flex" : "none"
                },
                children: /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                    className: "popup-section modal-content",
                    children: popup?.children?.map((c, index)=>/*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                            children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                                data: c,
                                bp: bp
                            })
                        }, index))
                })
            })
        ]
    });
};
var $58de441152311d5c$export$2e2bcd8739ae039 = $58de441152311d5c$var$Form;

});

parcelRegister("k9K1C", function(module, exports) {

$parcel$export(module.exports, "default", () => $eac8598b02a72181$export$2e2bcd8739ae039);



var $k2cBu = parcelRequire("k2cBu");

var $9wS8V = parcelRequire("9wS8V");

parcelRequire("dAquK");


var $gUJVn = parcelRequire("gUJVn");

var $1sHjs = parcelRequire("1sHjs");
function $eac8598b02a72181$export$2e2bcd8739ae039({ content: content, ...props }) {
    const [access, setAccess] = $bdjGp$useState(false);
    const { data: session } = (0, $bdjGp$useSession)();
    $bdjGp$useEffect(()=>{
        if (session?.jwt) checkAccess();
    }, [
        session
    ]);
    const router = (0, $bdjGp$useRouter)();
    const onClick = ()=>{
        console.log((0, $9wS8V.default).getParsedVariables());
        const jwt = session?.jwt;
        if (jwt) {
            if (access) (0, $k2cBu.enrollCourse)((0, $9wS8V.default).getParsed("course.guid"), (0, $9wS8V.default).getParsed("global.domain"), (0, $9wS8V.default).getParsed("global.jwt")).then((res)=>{
                console.log("res", res);
                // if (res?.next_path) window.location = `${res?.next_path}`
                // if (res?.next_path) window.location = "https://" + VariablesSingleton.getParsed("global.domain") + res?.next_path
                if (res?.next_path) window.location = res?.next_path;
            }).catch((e)=>{
                console.error(e);
                if (e === "Forbidden") router.push(`https://plateforme.me/auth/signin?redirect_url=${(0, $9wS8V.default).getParsed("global.url")}`);
            });
            else // create or get payment link
            (0, $gUJVn.updateBasket)({
                jwt: jwt,
                resource_guid: (0, $9wS8V.default).getParsed("course.guid"),
                resource_type: "course",
                domain: (0, $9wS8V.default).getParsed("global.domain")
            }).then((res)=>{
                // console.log(res)
                // router.push(`${process.env.NEXT_PUBLIC_PAYMENT_URL}/${res?.guid}`)
                // router.push(`${process.env.NEXT_PUBLIC_URL_PREFIX}/panier`)
                (0, $1sHjs.default).tooglePanier(true);
            });
        } else router.push(`https://plateforme.me/auth/signin?redirect_url=${(0, $9wS8V.default).getParsed("global.url")}`);
    };
    const checkAccess = async ()=>{
        const jwt = session?.jwt;
        console.log("chekAccess", jwt);
        if ((0, $9wS8V.default).getParsed("course.guid", null)) return (0, $k2cBu.hasAccess)((0, $9wS8V.default).getParsed("course.guid"), (0, $9wS8V.default).getParsed("global.domain"), jwt).then((res)=>{
            console.log("getProgression", res);
            if (res?.has_access) {
                setAccess(true);
                // window.location = "https://" + VariablesSingleton.getParsed("global.domain") + res?.next_path
                return true;
            }
            return false;
        });
        return false;
    };
    return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$Fragment), {
        children: access ? /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
            style: {
                width: "100%",
                height: "100%"
            },
            onClick: onClick,
            children: "Continuer"
        }) : /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
            style: {
                width: "100%",
                height: "100%"
            },
            onClick: onClick,
            children: content
        })
    });
}

});
parcelRegister("k2cBu", function(module, exports) {

$parcel$export(module.exports, "getFullLesson", () => $e95dc562fe35333e$export$98526077a5c84c94);
$parcel$export(module.exports, "getPreviousLesson", () => $e95dc562fe35333e$export$535b0a5750ef9921);
$parcel$export(module.exports, "getProductPresentation", () => $e95dc562fe35333e$export$c59e6c4e69c37fa1);
$parcel$export(module.exports, "getCoursePresentation", () => $e95dc562fe35333e$export$53438499f5345cc5);
$parcel$export(module.exports, "getProgression", () => $e95dc562fe35333e$export$7df44805cbc77179);
$parcel$export(module.exports, "hasAccess", () => $e95dc562fe35333e$export$27e2e54a11a63646);
$parcel$export(module.exports, "enrollCourse", () => $e95dc562fe35333e$export$5b89569d7baaf46e);
$parcel$export(module.exports, "lessonComplete", () => $e95dc562fe35333e$export$f535535f61686681);
// 'use server'

var $82qiQ = parcelRequire("82qiQ");

var $kNOzt = parcelRequire("kNOzt");

var $9wS8V = parcelRequire("9wS8V");

var $dx0Lb = parcelRequire("dx0Lb");
async function $e95dc562fe35333e$export$2813b75597809a7c(id, params) {
    let course = (await (0, $82qiQ.default).find(`/courses/${id.split("-")[0]}`, params).then((cs)=>{
        return cs;
    }))?.data;
    return {
        ...course,
        path: `/courses/${id}`
    };
}
async function $e95dc562fe35333e$export$deba2200e6c039ef(id, params, { jwt: jwt }) {
    const lesson = (id + "").split("-")[1];
    const course = (id + "").split("-")[0];
    let resLesson = await (0, $82qiQ.default).findOne(`/lessons/${lesson}`, {
        ...params
    }, jwt).then((cs)=>{
        return (0, $82qiQ.purgeData2)(cs);
    });
    return {
        ...resLesson,
        path: `/courses/lessons/${course}/${lesson}`
    };
}
async function $e95dc562fe35333e$export$a4064eadfbbe1f8({ courseId: courseId, domain: domain, jwt: jwt }) {
    let result = await (0, $82qiQ.default).get(`/modules`, {
        domain: domain?.startsWith("localhost") ? undefined : domain,
        filters: {
            course: courseId
        },
        populate: {
            lessons: {
                fields: [
                    "slug",
                    "name"
                ]
            }
        }
    }, jwt).then((cs)=>{
        return (0, $82qiQ.purgeData2)(cs);
    });
    return result;
}
async function $e95dc562fe35333e$export$98526077a5c84c94({ lessonId: lessonId }, domain, jwt) {
    let resLesson = await (0, $82qiQ.default).get_Server(`/lessons/full/${lessonId}`, {
        domain: (0, $kNOzt.parseDomain)(domain)
    }, jwt).then((cs)=>{
        return (0, $82qiQ.purgeData2)(cs);
    });
    return resLesson;
}
async function $e95dc562fe35333e$export$540bb158f0601dfe({ courseId: courseId, lessonId: lessonId }, domain, jwt) {
    let resLesson = await (0, $82qiQ.default).get_Server(`/courses/${courseId}/full_edit/${lessonId}`, {
        domain: domain?.startsWith("localhost") ? undefined : domain
    }, jwt).then((cs)=>{
        return (0, $82qiQ.purgeData2)(cs);
    });
    return resLesson;
}
async function $e95dc562fe35333e$export$535b0a5750ef9921({ courseId: courseId, lessonId: lessonId }, domain, jwt) {
    let resLesson = await (0, $82qiQ.default).get(`/courses/${courseId}/previous/${lessonId}`, {
        domain: domain
    }, jwt).then((cs)=>{
        return (0, $82qiQ.purgeData2)(cs);
    });
    return resLesson;
}
async function $e95dc562fe35333e$export$f4103eba64d38dcb(domain, { skip: skip = 0, limit: limit }, jwt) {
    return (0, $82qiQ.default).get_Server(`/users/me`, {
        fields: [
            "email"
        ],
        populate: {
            configs: {
                fields: [
                    "id",
                    "logo",
                    "name"
                ],
                filters: {
                    domain: domain?.startsWith("localhost") ? undefined : domain
                },
                populate: {
                    products: {
                        fields: [
                            "id",
                            "thumbnail",
                            "name",
                            "price"
                        ]
                    }
                }
            }
        }
    }, jwt).then((cs)=>{
        return {
            products: cs?.configs[0]?.products || [],
            homepage: cs?.configs[0]?.homepage?.id || null
        };
    });
}
const $e95dc562fe35333e$export$388a352446f90abd = async (id, domain, jwt)=>{
    if (id && jwt) {
        const response = await (0, $82qiQ.default).get_Server(`/users/me`, {
            fields: [
                "email"
            ],
            populate: {
                configs: {
                    fields: [
                        "id",
                        "logo",
                        "name",
                        "domain"
                    ],
                    filters: {
                        domain: domain?.startsWith("localhost") ? undefined : domain
                    },
                    populate: {
                        products: {
                            filters: {
                                id: id
                            },
                            fields: [
                                "name",
                                "description",
                                "thumbnail",
                                "pictures",
                                "video",
                                "presentation"
                            ],
                            populate: {
                                "payment_link": {
                                    fields: [
                                        "*"
                                    ]
                                },
                                "tags": {
                                    fields: [
                                        "*"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        });
        return {
            config: {
                id: response.configs[0]?.id,
                domain: response.configs[0]?.domain
            },
            product: response.configs[0]?.products[0] || null
        };
    }
    return {};
};
async function $e95dc562fe35333e$export$683e1a5912ebe93e(domain, { skip: skip = 0, limit: limit }, jwt) {
    return (0, $82qiQ.default).get_Server(`/users/me`, {
        fields: [
            "email"
        ],
        populate: {
            configs: {
                fields: [
                    "id",
                    "logo",
                    "name",
                    "domain"
                ],
                filters: {
                    domain: domain?.startsWith("localhost") ? undefined : domain
                },
                populate: {
                    courses: {
                        fields: [
                            "id",
                            "thumbnail",
                            "price",
                            "name"
                        ]
                    }
                }
            }
        }
    }, jwt).then((cs)=>{
        return {
            courses: cs?.configs[0]?.courses || []
        };
    });
}
async function $e95dc562fe35333e$export$5e5a4597bccffd62(domain, { skip: skip = 0, limit: limit }, jwt) {
    return (0, $82qiQ.default).get_Server(`/users/me`, {
        fields: [
            "email"
        ],
        populate: {
            configs: {
                fields: [
                    "id",
                    "logo",
                    "name",
                    "domain"
                ],
                filters: {
                    domain: domain?.startsWith("localhost") ? undefined : domain
                },
                populate: {
                    lessons: {
                        fields: [
                            "id",
                            "thumbnail",
                            "price",
                            "name"
                        ]
                    }
                }
            }
        }
    }, jwt).then((cs)=>{
        return {
            data: cs?.configs[0]?.lessons || []
        };
    });
}
async function $e95dc562fe35333e$export$74faeb52ed2590d6(id, domain, jwt) {
    return (0, $82qiQ.default).get_Server(`/courses/full_edit/${id}`, {
        domain: domain
    }, jwt);
}
async function $e95dc562fe35333e$export$a512bdd5a8395073(id, domain, jwt) {
    const res = await getCurriculumAsync({
        id: (id + "").split("_")[0],
        filters: {
            config: {
                domain: domain?.startsWith("localhost") ? undefined : domain
            }
        },
        populate: {
            "modules": {
                fields: [
                    "id",
                    "name",
                    "description",
                    "order"
                ],
                populate: {
                    "lessons": {
                        fields: [
                            "id",
                            "name",
                            "type",
                            "order",
                            "duree"
                        ],
                        sort: [
                            "order:asc",
                            "order"
                        ]
                    }
                },
                sort: [
                    "order:asc",
                    "id"
                ]
            },
            template: {
                fields: [
                    "id",
                    "thumbnail",
                    "content",
                    "used_variables",
                    "variables"
                ],
                populate: {
                    header: {
                        fields: [
                            "*"
                        ]
                    },
                    leftsidebar: {
                        fields: [
                            "*"
                        ]
                    },
                    footer: {
                        fields: [
                            "*"
                        ]
                    }
                }
            },
            lesson_template: {
                fields: [
                    "id",
                    "thumbnail",
                    "content",
                    "used_variables",
                    "variables"
                ]
            },
            instructeur: {
                fields: [
                    "*"
                ]
            },
            payment_link: {
                fields: [
                    "*"
                ]
            }
        }
    }, jwt);
    if (res) {
        res.template = await (0, $dx0Lb.parseResponse)(res?.template);
        res.lesson_template = await (0, $dx0Lb.parseResponse)(res?.lesson_template);
    }
    return res;
}
async function $e95dc562fe35333e$export$c59e6c4e69c37fa1(id, domain, jwt) {
    return (0, $82qiQ.default).get_Server(`/products/presentation/${id}`, {
        domain: (0, $kNOzt.parseDomain)(domain)
    }, jwt);
}
async function $e95dc562fe35333e$export$53438499f5345cc5(id, domain, jwt) {
    return (0, $82qiQ.default).get_Server(`/courses/presentation/${id}`, {
        domain: (0, $kNOzt.parseDomain)(domain)
    }, jwt);
}
async function $e95dc562fe35333e$export$b2b8f05e8f704c37(cours, lesson) {
    const lsns = cours?.modules?.map((m)=>m.lessons.map((l)=>({
                name: l.name,
                lesson: l.id,
                module: m.id,
                course: cours.id,
                path: (0, $kNOzt.getLessonPath)(cours, m.id, l)
            }))).flat();
    const index = lsns.findIndex((c)=>c.lesson === Number(lesson.id));
    const prev = lsns[index - 1] || null;
    const next = lsns[index + 1] || null;
    return {
        prev: prev,
        next: next
    };
}
async function $e95dc562fe35333e$export$7df44805cbc77179(courseId, domain, jwt) {
    return (0, $82qiQ.default).get(`/courses/progression/${courseId}`, {
        domain: domain?.startsWith("localhost") ? "outil.io" : domain
    }, jwt).then((res)=>{
        return res;
    });
}
async function $e95dc562fe35333e$export$27e2e54a11a63646(courseId, domain, jwt) {
    return (0, $82qiQ.default).get(`/courses/has_access/${courseId}`, {
        domain: domain?.startsWith("localhost") ? "outil.io" : domain
    }, jwt).then((res)=>{
        return res;
    });
}
async function $e95dc562fe35333e$export$5b89569d7baaf46e(courseId, domain, jwt) {
    return (0, $82qiQ.default).post(`/courses/enroll/${courseId}`, {
        domain: domain
    }, jwt).then((res)=>{
        return res;
    });
}
async function $e95dc562fe35333e$export$f535535f61686681(courseId, lessonId, domain, jwt) {
    return (0, $82qiQ.default).post(`/courses/${courseId}/complete/${lessonId}`, {
        domain: domain
    }, jwt).then((res)=>{
        (0, $9wS8V.default).set("lesson.slug", res.next_slug);
        return res;
    });
}
async function $e95dc562fe35333e$export$fa7931a25220c096(courseId, lessonId, domain, jwt) {
    return (0, $82qiQ.default).post(`/courses/${courseId}/previous/${lessonId}`, {
        domain: domain
    }, jwt).then((res)=>{
        (0, $9wS8V.default).set("lesson.slug", res.next_slug);
        return res;
    });
}

});
parcelRegister("dx0Lb", function(module, exports) {

$parcel$export(module.exports, "parseResponse", () => $9d9ef257543ef746$export$ba14d9a5a581e827);
$parcel$export(module.exports, "loadPageById", () => $9d9ef257543ef746$export$3ee2ee5907d5e890);

var $82qiQ = parcelRequire("82qiQ");

var $9wS8V = parcelRequire("9wS8V");

var $1sHjs = parcelRequire("1sHjs");

var $k2cBu = parcelRequire("k2cBu");

var $kNOzt = parcelRequire("kNOzt");

var $gUJVn = parcelRequire("gUJVn");

var $kvfr7 = parcelRequire("kvfr7");
const $9d9ef257543ef746$export$a2e58475e09a3523 = async (path, domain, jwt, cb)=>{
    // console.log("loadpage", path, domain, jwt)
    const response = await (0, $82qiQ.default).findOne("/templates", {
        filters: {
            path: path,
            type: "page",
            config: {
                domain: !domain?.startsWith("localhost") ? domain : undefined
            }
        },
        populate: {
            header: {
                fields: [
                    "*"
                ]
            }
        }
    }, jwt);
    if (response?.content) {
        const content = response.content;
        const _layout = content.children;
        (0, $1sHjs.default).loadPopups(content.popups || {});
        return (0, $9wS8V.default).loadVariables(content.variables).then(()=>{
            if (cb) cb({
                layout: _layout
            });
            return {
                tId: response.id,
                path: response.path,
                thumbnail: response.thumbnail,
                logo: response.logo,
                header: response.header?.id ? response.header : null,
                label: response.label,
                name: response.name,
                description: response.description,
                layout: _layout
            };
        });
    } else {
        if (cb) cb(null);
        return null;
    }
    return [];
};
const $9d9ef257543ef746$export$469d8547abd74cb9 = async (path, { domain: domain, jwt: jwt, id: id })=>{
    // console.log("loadEditpage", path, domain, id,)
    const _domain = !domain?.startsWith("localhost") ? domain : undefined;
    if (id && jwt) {
        const response = (await (0, $82qiQ.default).find(`/templates/edit?domain=${_domain}&account=${id}&path=${path}`, {}, jwt)).data;
        if (response?.content) {
            const content = response.content;
            const _layout = content.children;
            (0, $1sHjs.default).loadPopups(content.popups || {});
            return (0, $9wS8V.default).loadVariables(content.variables).then(()=>{
                return {
                    tId: response.id,
                    path: response.path,
                    thumbnail: response.thumbnail,
                    logo: response.logo,
                    label: response.label,
                    name: response.name,
                    description: response.description,
                    layout: _layout
                };
            });
        } else return null;
    }
    return [];
};
const $9d9ef257543ef746$export$278299e7972730b8 = async (pageId, type = "pages")=>{
    if (pageId && (0, $82qiQ.default).getJwt()) {
        const response = await (0, $82qiQ.default).findOne(`/templates/${pageId}`, {});
        if (response?.content) {
            const content = type === "pages" ? response.content : response.content;
            (0, $1sHjs.default).loadPopups(content.popups || {});
            return content.variables ? (0, $9wS8V.default).loadVariables(content.variables).then(()=>{
                return {
                    ...content,
                    tId: response.id,
                    path: response.path,
                    thumbnail: response.thumbnail,
                    logo: response.logo,
                    name: response.name,
                    description: response.description
                };
            }) : {
                ...content,
                tId: response.id,
                path: response.path,
                thumbnail: response.thumbnail,
                logo: response.logo,
                name: response.name,
                description: response.description
            };
        } else return null;
    }
    return {};
};
const $9d9ef257543ef746$export$5ef8c3bf95d7a6af = async (pageId, domain, type, jwt)=>{
    if (pageId && jwt) {
        const response = await (0, $82qiQ.default).get_Server(`/users/me`, {
            fields: [
                "email"
            ],
            populate: {
                configs: {
                    fields: [
                        "id",
                        "logo",
                        "name",
                        "domain"
                    ],
                    filters: {
                        domain: domain?.startsWith("localhost") ? undefined : domain
                    },
                    populate: {
                        templates: {
                            filters: {
                                path: pageId === "home" ? "/" : pageId,
                                type: type
                            },
                            fields: [
                                "*"
                            ],
                            populate: {
                                header: {
                                    fields: [
                                        "*"
                                    ]
                                },
                                leftsidebar: {
                                    fields: [
                                        "*"
                                    ]
                                },
                                rightsidebar: {
                                    fields: [
                                        "*"
                                    ]
                                },
                                footer: {
                                    fields: [
                                        "*"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        });
        return {
            config: {
                id: response.configs[0]?.id,
                domain: response.configs[0]?.domain
            },
            page: await $9d9ef257543ef746$export$ba14d9a5a581e827(response.configs[0]?.templates[0], {
                guid: pageId
            })
        };
    }
    return {};
};
const $9d9ef257543ef746$export$1f8c450ae9c5a06 = async (pageId, domain, type, jwt, preview = false)=>{
    if (pageId && jwt) {
        const response = await (0, $82qiQ.default).get_Server(`/users/me`, {
            fields: [
                "email"
            ],
            populate: {
                configs: {
                    fields: [
                        "id",
                        "logo",
                        "name",
                        "domain"
                    ],
                    filters: {
                        domain: domain?.startsWith("localhost") ? undefined : domain
                    },
                    populate: {
                        templates: {
                            filters: {
                                // ...(!preview ? { id: pageId } : { path: pageId }),
                                guid: pageId
                            },
                            fields: [
                                "*"
                            ],
                            populate: {
                                header: {
                                    fields: [
                                        "*"
                                    ],
                                    populate: {
                                        leftsidebar: {
                                            fields: [
                                                "*"
                                            ]
                                        }
                                    }
                                },
                                leftsidebar: {
                                    fields: [
                                        "*"
                                    ]
                                },
                                rightsidebar: {
                                    fields: [
                                        "*"
                                    ]
                                },
                                footer: {
                                    fields: [
                                        "*"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }, jwt);
        return !response ? {} : {
            config: {
                id: response.configs[0]?.id,
                domain: response.configs[0]?.domain
            },
            page: await $9d9ef257543ef746$export$ba14d9a5a581e827(response.configs[0]?.templates[0], {
                guid: pageId
            })
        };
    }
    return {};
};
const $9d9ef257543ef746$export$7a4078d6d2f50b10 = async (pageId, domain, type, jwt, preview = false)=>{
    if (pageId && jwt) {
        const response = await (0, $82qiQ.default).get_Server(`/templates/public/edit/${pageId}`, {}, jwt);
        return {
            config: {
                domain: domain
            },
            page: await $9d9ef257543ef746$export$ba14d9a5a581e827(response, {
                guid: pageId
            })
        };
    }
    return {};
};
const $9d9ef257543ef746$export$3ee2ee5907d5e890 = async (pageId, domain, jwt)=>{
    var response = await (0, $82qiQ.default).findOne(`/templates/preview`, {
        domain: domain?.startsWith("localhost") ? undefined : domain,
        guid: !pageId || pageId === "__home__" ? "/" : pageId.replace(/\/$/, ""),
        populate: {
            header: {
                fields: "*",
                populate: {
                    leftsidebar: {
                        fields: [
                            "*"
                        ]
                    }
                }
            },
            leftsidebar: {
                fields: "*"
            },
            rightsidebar: {
                fields: "*"
            },
            footer: {
                fields: "*"
            },
            config: {
                fields: [
                    "id",
                    "domain"
                ]
            }
        }
    }, jwt);
    var { content: contentHeader, ...header } = response?.header || {};
    header = {
        ...header,
        tId: header?.id || null,
        ...contentHeader
    };
    var { content: contentLeftsidebar, ...leftsidebar } = header?.leftsidebar || response?.leftsidebar || {};
    leftsidebar = {
        ...leftsidebar,
        tId: leftsidebar?.id || null,
        ...contentLeftsidebar
    };
    var { content: contentRightsidebar, ...rightsidebar } = response?.rightsidebar || {};
    rightsidebar = {
        ...rightsidebar,
        tId: rightsidebar?.id || null,
        ...contentRightsidebar
    };
    var { content: contentFooter, ...footer } = response?.footer || {};
    footer = {
        ...footer,
        tId: footer?.id || null,
        ...contentFooter
    };
    if (response?.content) {
        const content = response.content;
        const popups = {
            ...response?.popups,
            ...content?.popups,
            ...footer?.popups,
            ...leftsidebar?.popups,
            ...header?.popups
        };
        return {
            config: response?.config,
            variables: response.used_variables,
            page: {
                ...content,
                variables: response.variables,
                tId: response.id,
                path: response.path,
                thumbnail: response.thumbnail,
                logo: response.logo,
                name: response.name,
                description: response.description,
                header: header,
                leftsidebar: leftsidebar,
                rightsidebar: rightsidebar,
                footer: footer,
                popups: popups
            }
        };
    } else return {
        config: null,
        page: null
    };
};
async function $9d9ef257543ef746$export$ba14d9a5a581e827(response, { guid: guid }) {
    var { content: contentHeader, ...header } = response?.header || {};
    header = {
        ...header,
        tId: header?.id || null,
        ...contentHeader
    };
    var { content: contentLeftsidebar, ...leftsidebar } = header?.leftsidebar || response?.leftsidebar || {};
    leftsidebar = {
        ...leftsidebar,
        tId: leftsidebar?.id || null,
        ...contentLeftsidebar
    };
    var { content: contentRightsidebar, ...rightsidebar } = response?.rightsidebar || {};
    rightsidebar = {
        ...rightsidebar,
        tId: rightsidebar?.id || null,
        ...contentRightsidebar
    };
    var { content: contentFooter, ...footer } = response?.footer || {};
    footer = {
        ...footer,
        tId: footer?.id || null,
        ...contentFooter
    };
    if (response?.content) {
        const content = response.content;
        const popups = {
            ...response?.popups,
            ...content?.popups,
            ...footer?.popups,
            ...leftsidebar?.popups,
            ...header?.popups
        };
        return response.variables ? (0, $9wS8V.default).loadVariables(response.variables).then((variables)=>{
            return {
                ...content,
                guid: guid,
                variables: variables || null,
                tId: response.id,
                path: response.path,
                thumbnail: response.thumbnail,
                logo: response.logo,
                name: response.name,
                description: response.description,
                header: header,
                leftsidebar: leftsidebar,
                rightsidebar: rightsidebar,
                footer: footer,
                popups: popups
            };
        }) : {
            ...content,
            variables: null,
            guid: guid,
            tId: response.id,
            path: response.path,
            thumbnail: response.thumbnail,
            logo: response.logo,
            name: response.name,
            description: response.description,
            header: header,
            leftsidebar: leftsidebar,
            rightsidebar: rightsidebar,
            footer: footer,
            popups: popups
        };
    } else return null;
}
async function $9d9ef257543ef746$export$a1f90620d236ead(domain, { skip: skip = 0, limit: limit }, jwt) {
    return (0, $82qiQ.default).findOne(`/configs/${domain}`, {
        populate: {
            templates: {
                fields: [
                    "id",
                    "thumbnail",
                    "name",
                    "path",
                    "description",
                    "logo"
                ]
            },
            homepage: {
                fields: [
                    "id"
                ]
            }
        }
    }, jwt).then((cs)=>{
        return cs?.templates || [];
    });
}
async function $9d9ef257543ef746$export$628b1091d7253aa3(domain, jwt) {
    return (0, $82qiQ.default).find(`/templates`, {
        fields: [
            "id",
            "path"
        ],
        filters: {
            domain: domain?.startsWith("localhost") ? undefined : domain,
            path: {
                "$ne": null
            }
        }
    }, jwt).then((cs)=>{
        return cs.data;
    });
}
async function $9d9ef257543ef746$export$17d35cfeb68bcbc(domain, { skip: skip = 0, limit: limit }, jwt) {
    return (0, $82qiQ.default).get_Server(`/users/me`, {
        fields: [
            "email"
        ],
        populate: {
            configs: {
                fields: [
                    "id",
                    "logo",
                    "name"
                ],
                filters: {
                    domain: domain?.startsWith("localhost") ? undefined : domain
                },
                populate: {
                    templates: {
                        fields: [
                            "id",
                            "thumbnail",
                            "name",
                            "path",
                            "description",
                            "logo"
                        ],
                        filters: {
                            type: "page"
                        }
                    },
                    homepage: {
                        fields: [
                            "id"
                        ]
                    }
                }
            }
        }
    }, jwt).then((cs)=>{
        return {
            pages: cs?.configs[0]?.templates || [],
            homepage: cs?.configs[0]?.homepage?.id || null
        };
    });
}
async function $9d9ef257543ef746$export$cceb5167b935aafb(domain, type, jwt) {
    // console.log("getallHeadersAsync", API.getJwt())
    if ((0, $82qiQ.default).getJwt() || jwt) return (0, $82qiQ.default).get(`/users/me`, {
        populate: {
            configs: {
                fields: [
                    "id"
                ],
                filters: {
                    domain: domain?.startsWith("localhost") ? undefined : domain
                },
                populate: {
                    templates: {
                        fields: [
                            "id",
                            "thumbnail",
                            "name",
                            "path",
                            "active",
                            "is_public",
                            "type",
                            "guid"
                        ],
                        filters: {
                            type: type === "page" ? {
                                "$in": [
                                    "page",
                                    "course",
                                    "product",
                                    "lesson"
                                ]
                            } : type
                        },
                        populate: {
                            tags: {
                                fields: [
                                    "*"
                                ]
                            }
                        }
                    },
                    homepage: {
                        fields: [
                            "id"
                        ]
                    }
                }
            }
        }
    }, jwt).then((cs)=>{
        return {
            templates: cs?.configs[0]?.templates || [],
            homepage: cs?.configs[0]?.homepage?.id || null
        };
    });
}
async function $9d9ef257543ef746$export$c522d611d7085a18({ type: type, jwt: jwt, tags: tags, domain: domain }) {
    // console.log("getallHeadersAsync", API.getJwt())
    if ((0, $82qiQ.default).getJwt() || jwt) return (0, $82qiQ.default).get(`/templates/public`, {
        type: type,
        filters: {
            ...tags ? {
                tags: {
                    name: {
                        "$in": tags
                    }
                }
            } : {},
            config: {
                domain: {
                    "$ne": domain
                }
            }
        }
    }, jwt).then((cs)=>{
        (0, $82qiQ.purgeData2)(cs).then((r)=>console.log(r));
        return (0, $82qiQ.purgeData2)(cs);
    });
}
async function $9d9ef257543ef746$export$65db7904b705531f({ type: type, jwt: jwt, tags: tags }) {
    // console.log("getallHeadersAsync", API.getJwt())
    if ((0, $82qiQ.default).getJwt() || jwt) return (0, $82qiQ.default).get(`/users/me`, {
        populate: {
            configs: {
                fields: [
                    "id"
                ],
                filters: {
                    domain: (0, $82qiQ.default).getConfig()?.domain
                },
                populate: {
                    templates: {
                        fields: [
                            "id",
                            "thumbnail",
                            "name",
                            "path",
                            "logo",
                            "guid"
                        ],
                        filters: {
                            type: type,
                            ...tags ? {
                                tags: {
                                    name: {
                                        "$in": tags
                                    }
                                }
                            } : {}
                        }
                    }
                }
            }
        }
    }).then((cs)=>{
        return cs?.configs[0]?.templates || [];
    });
}
async function $9d9ef257543ef746$export$de2a8193af355181({ type: type, id: id }) {
    // console.log("getallHeadersAsync", API.getJwt())
    if ((0, $82qiQ.default).getJwt()) return (0, $82qiQ.default).get(`/users/me`, {
        populate: {
            configs: {
                fields: [
                    "id"
                ],
                filters: {
                    domain: (0, $82qiQ.default).getConfig()?.domain
                },
                populate: {
                    templates: {
                        fields: [
                            "id",
                            "content",
                            "guid"
                        ],
                        filters: {
                            type: type,
                            id: id
                        }
                    }
                }
            }
        }
    }).then((cs)=>{
        return cs?.configs[0]?.templates[0] || [];
    });
}
async function $9d9ef257543ef746$export$e4dbe517550bfbad({ type: type, id: id }) {
    // console.log("getallHeadersAsync", API.getJwt())
    if ((0, $82qiQ.default).getJwt()) return (0, $82qiQ.default).get(`/templates/public/${id}`, {
        type: type
    }, (0, $82qiQ.default).getJwt()).then((cs)=>{
        (0, $82qiQ.purgeData2)(cs).then((r)=>console.log(r));
        return (0, $82qiQ.purgeData2)(cs);
    });
}
async function $9d9ef257543ef746$export$7d2bd3cdb282c2c5(domain, { skip: skip = 0, limit: limit }, jwt) {
    return (0, $82qiQ.default).findOne(`/configs/${domain}`, {
        populate: {
            sideBars: {
                fields: [
                    "id",
                    "thumbnail",
                    "name"
                ]
            }
        }
    }, jwt).then((cs)=>{
        return cs?.sideBars || [];
    });
}
async function $9d9ef257543ef746$export$4d49a3e379dae0ad(domain, { skip: skip = 0, limit: limit }, jwt) {
    return (0, $82qiQ.default).findOne(`/configs/${domain}`, {
        populate: {
            footers: {
                fields: [
                    "id",
                    "thumbnail",
                    "name"
                ]
            }
        }
    }, jwt).then((cs)=>{
        return cs?.footers || [];
    });
}
async function $9d9ef257543ef746$export$9e342931b7b26078() {
    return (0, $82qiQ.default).get_Server(`/template-tags`).then((cs)=>{
        return (0, $82qiQ.purgeData2)(cs) || [];
    });
}
async function $9d9ef257543ef746$export$c61f2868fdd47048({ domain: domain, jwt: jwt }) {
    console.log("getLoginPage", domain?.replace("https://", "")?.replace("http://", "")?.split("/")[0]);
    const config = await (0, $82qiQ.purgeData2)(await (0, $82qiQ.default).findOne(`/api/configs`, {
        fields: [
            "id",
            "domain"
        ],
        filters: {
            domain: domain?.includes("localhost") ? "outil.io" : domain?.replace("https://", "")?.replace("http://", "")?.split("/")[0]
        },
        populate: {
            login_page: {
                fields: [
                    "content",
                    "variables"
                ]
            }
        }
    }));
    return {
        page: config?.login_page?.content || null,
        variables: config?.login_page?.variables || null,
        domain: domain?.replace("https://", "")?.replace("http://", "")?.split("/")[0] || null
    };
}
const $9d9ef257543ef746$export$d0a8044dce8ff2fc = function(agent) {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(agent?.toLowerCase()) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(agent?.toLowerCase().substr(0, 4));
};
const $9d9ef257543ef746$export$c127a25a9f54d82f = async ({ id: id, domain: domain, jwt: jwt, type: type, url: url, preview: preview = false, loadPage: loadPage })=>{
    var _config = null, resource = null, _page = null;
    var used_variables = {};
    if (type != "oio-admin") {
        if (id != "undefined") {
            switch(type){
                case "page":
                    var { config: config, page: page } = preview ? await $9d9ef257543ef746$export$1f8c450ae9c5a06(id, domain, type, jwt, true) : await loadPage(id, domain);
                    _config = config || null;
                    _page = page;
                    break;
                case "course":
                    var { template: template, prev: prev, next: next, ..._resource } = await (0, $k2cBu.getCoursePresentation)(id, domain, jwt);
                    resource = _resource;
                    // console.log("loadingCourse4", domain, type, id, template?.header?.popups)
                    _page = template?.content ? {
                        ...template?.content,
                        header: template?.header,
                        footer: template?.footer,
                        leftsidebar: template?.leftsidebar
                    } : null;
                    if (resource?.id) used_variables = {
                        ...template?.used_variables,
                        ...(0, $kvfr7.flattenJSON)(resource, "course", true),
                        "lesson.next": next || null,
                        "lesson.prev": prev || null
                    };
                    if (_page) _page.popups = {
                        ...template?.popups,
                        ...template?.header?.popups,
                        ...template?.footer?.popups,
                        ...template?.leftsidebar?.popups
                    };
                    delete resource?.template;
                    // console.log(used_variables)
                    _page = (0, $kNOzt.parsedBody)(_page, used_variables, {
                        course: resource
                    });
                    break;
                case "lesson":
                    const lessonId = id;
                    if (lessonId && lessonId != "undefined") {
                        const { lesson: lesson, course: course, template: template, next: next, prev: prev } = await (0, $k2cBu.getFullLesson)({
                            lessonId: lessonId
                        }, domain, jwt) || {};
                        _page = template?.content || null;
                        used_variables = {
                            ...template?.used_variables,
                            ...(0, $kvfr7.flattenJSON)(course, "course", true),
                            ...(0, $kvfr7.flattenJSON)(lesson, "lesson", true),
                            "lesson.next": next || null,
                            "lesson.prev": prev || null
                        };
                        _page = (0, $kNOzt.parsedBody)(_page, used_variables, {
                            course: course,
                            lesson: lesson
                        });
                    }
                    break;
                case "product":
                    let { template: template1, ..._resource1 } = await (0, $k2cBu.getProductPresentation)(id, domain, jwt);
                    resource = _resource1;
                    // console.log("loadingCourse4", domain, type, id, template?.header?.popups)
                    _page = template1?.content ? {
                        ...template1?.content,
                        header: template1?.header,
                        footer: template1?.footer,
                        leftsidebar: template1?.leftsidebar
                    } : null;
                    if (resource?.id) used_variables = {
                        ...template1?.used_variables,
                        ...(0, $kvfr7.flattenJSON)(resource, "product", true)
                    };
                    if (_page) _page.popups = {
                        ...template1?.popups,
                        ...template1?.header?.popups,
                        ...template1?.footer?.popups,
                        ...template1?.leftsidebar?.popups
                    };
                    delete resource?.template;
                    // console.log(used_variables)
                    _page = (0, $kNOzt.parsedBody)(_page, used_variables, {
                        course: resource
                    });
                    break;
                case "payment-link":
                    resource = await (0, $gUJVn.getPaymentFull)(id, domain, jwt);
                    _page = resource?.template?.content || null;
                    if (resource?.id) used_variables = {
                        ...resource?.template?.used_variables,
                        id: id
                    };
                    delete resource?.template;
                    if (resource) Object.entries(resource).map(([k, v])=>used_variables["payment." + k] = v);
                    _page = (0, $kNOzt.parsedBody)(_page, used_variables, {
                        payment_link: resource
                    });
                    console.log("loadingPaymentLink", domain, type, id);
                    break;
                default:
                    var { config: config, page: page } = await $9d9ef257543ef746$export$1f8c450ae9c5a06(id, domain, type, jwt);
                    used_variables = resource?.template?.used_variables;
                    _config = config || null;
                    _page = page;
                    _page = (0, $kNOzt.parsedBody)(page, used_variables, {});
                    break;
            }
            if (_page && resource) {
                _page.name = resource.name;
                _page.description = resource.description || null;
            }
        }
        console.log("loadPreview", domain, type, id, type, _page?.id, _page?.type);
        return {
            config: _config || null,
            page: _page || null,
            resource: resource || null,
            type: type || null,
            variables: {
                ...used_variables,
                "global.url": url || null,
                "global.jwt": jwt || null,
                "global.domain": domain?.includes("localhost") ? undefined : domain,
                "global.type": type
            },
            jwt: jwt,
            url: url
        };
    }
    return {};
};
const $9d9ef257543ef746$export$40edfb7eeb78c4e8 = async (domain, jwt)=>{
    return (0, $82qiQ.default).findOne(`/templates/is_dev/${domain}`, {
        populate: {
            sideBars: {
                fields: [
                    "id",
                    "thumbnail",
                    "name"
                ]
            }
        }
    }, jwt).then((cs)=>{
        return cs?.sideBars || [];
    });
};
const $9d9ef257543ef746$export$a261e9b0da701d0e = async (domain, jwt)=>{
    return (0, $82qiQ.default).findOne(`/templates/is_dev/${domain}`, {
        populate: {
            sideBars: {
                fields: [
                    "id",
                    "thumbnail",
                    "name"
                ]
            }
        }
    }, jwt).then((cs)=>{
        return cs?.sideBars || [];
    });
};

});
parcelRegister("gUJVn", function(module, exports) {

$parcel$export(module.exports, "getPaymentFull", () => $c5057fefb358f143$export$cd6dda3e781dc513);
$parcel$export(module.exports, "updateBasket", () => $c5057fefb358f143$export$16ca9be90157d0a);


var $82qiQ = parcelRequire("82qiQ");

async function $c5057fefb358f143$export$9c98fcdd3a66f104(domain, { skip: skip = 0, limit: limit }, jwt) {
    return (0, $82qiQ.default).get_Server(`/users/me`, {
        fields: [
            "email"
        ],
        populate: {
            configs: {
                fields: [
                    "id",
                    "logo",
                    "name",
                    "domain"
                ],
                filters: {
                    domain: domain?.startsWith("localhost") ? undefined : domain
                },
                populate: {
                    payment_links: {
                        fields: [
                            "id",
                            "thumbnail",
                            "resource_guid",
                            "resource_type",
                            "price",
                            "devise"
                        ]
                    }
                }
            }
        }
    }, jwt).then((cs)=>{
        return {
            payment_links: cs?.configs[0]?.payment_links || []
        };
    });
}
async function $c5057fefb358f143$export$d73f509f420826f1(domain, { skip: skip = 0, limit: limit }, jwt) {
    return (0, $82qiQ.default).get_Server(`/users/me`, {
        fields: [
            "email"
        ],
        populate: {
            configs: {
                fields: [
                    "id",
                    "logo",
                    "name",
                    "domain"
                ],
                filters: {
                    domain: domain?.startsWith("localhost") ? undefined : domain
                },
                populate: {
                    coupons: {
                        fields: [
                            "id",
                            "status",
                            "email",
                            "code",
                            "resource_type"
                        ]
                    }
                }
            }
        }
    }, jwt).then((cs)=>{
        return {
            data: cs?.configs[0]?.coupons || []
        };
    });
}
async function $c5057fefb358f143$export$1d145d8987b0ab29(id, domain, jwt) {
    return (0, $82qiQ.default).get_Server(`/users/me`, {
        fields: [
            "email"
        ],
        populate: {
            configs: {
                fields: [
                    "id",
                    "logo",
                    "name",
                    "domain"
                ],
                filters: {
                    domain: domain?.includes("localhost") ? undefined : domain
                },
                populate: {
                    payment_links: {
                        fields: [
                            "id",
                            "thumbnail",
                            "price",
                            "devise",
                            "resource_type",
                            "resource_guid",
                            "guid",
                            "stripe_url",
                            "redirect_url"
                        ],
                        filters: {
                            id: id
                        },
                        populate: {
                            template: {
                                fields: [
                                    "id",
                                    "thumbnail"
                                ]
                            }
                        }
                    }
                }
            }
        }
    }, jwt).then((cs)=>{
        return {
            payment_link: cs?.configs[0]?.payment_links[0] || null
        };
    });
}
async function $c5057fefb358f143$export$1ae39e21f75527d3(id, domain, jwt) {
    return (0, $82qiQ.default).get_Server(`/users/me`, {
        fields: [
            "email"
        ],
        populate: {
            configs: {
                fields: [
                    "id",
                    "logo",
                    "name",
                    "domain"
                ],
                filters: {
                    domain: domain?.includes("localhost") ? undefined : domain
                },
                populate: {
                    coupons: {
                        fields: [
                            "id",
                            "resource_type",
                            "resource_guid",
                            "status",
                            "multiple_use",
                            "guid",
                            "code",
                            "redirect_url"
                        ],
                        filters: {
                            id: id
                        }
                    }
                }
            }
        }
    }, jwt).then((cs)=>{
        return {
            coupon: cs?.configs[0]?.coupons[0] || null
        };
    });
}
async function $c5057fefb358f143$export$cd6dda3e781dc513(id, domain, jwt) {
    return (0, $82qiQ.default).get_Server(`/payment-links`, {
        fields: [
            "*"
        ],
        filters: {
            id: id,
            config: {
                domain: domain?.includes("localhost") ? undefined : domain
            }
        },
        populate: {
            template: {
                fields: [
                    "*"
                ],
                populate: {
                    header: {
                        fields: [
                            "*"
                        ]
                    },
                    leftsidebar: {
                        fields: [
                            "*"
                        ]
                    },
                    rightsidebar: {
                        fields: [
                            "*"
                        ]
                    },
                    footer: {
                        fields: [
                            "*"
                        ]
                    }
                }
            }
        }
    }, jwt).then(async (cs)=>{
        return await (0, $82qiQ.purgeData2)(cs?.data[0]) || null;
    });
}
async function $c5057fefb358f143$export$16ca9be90157d0a({ domain: domain, jwt: jwt, resource_guid: resource_guid, resource_type: resource_type, quantity: quantity }) {
    return (0, $82qiQ.default).post(`/payment-links/update_basket`, {
        domain: domain,
        resource_guid: resource_guid,
        resource_type: resource_type
    }, jwt).then((cs)=>{
        (0, $bdjGp$jscookie).set("basket", JSON.stringify(cs?.resources));
        (0, $bdjGp$jscookie).set("plink", cs?.guid);
        return cs || null;
    });
}

});

parcelRegister("kvfr7", function(module, exports) {

$parcel$export(module.exports, "flattenJSON", () => $eed2ad3d1563932f$export$11aded13059841b9);

var $82qiQ = parcelRequire("82qiQ");

var $kNOzt = parcelRequire("kNOzt");
function $eed2ad3d1563932f$export$594a403c6b2e822(columns) {
    const fields = [];
    columns?.map((c)=>{
        if (!c.accessorKey?.includes(".")) fields.push(c.name);
    });
    return fields;
}
async function $eed2ad3d1563932f$export$eb443c7db632a060({ type: type, domain: domain, fields: fields = [
    "id"
], filters: filters = {}, skip: skip, limit: limit, populate: populate }, jwt) {
    return (0, $82qiQ.default).get_Server(`/users/me`, {
        fields: [
            "email"
        ],
        populate: {
            configs: {
                fields: [
                    "id",
                    "domain"
                ],
                filters: {
                    domain: (0, $kNOzt.parseDomain)(domain)
                },
                populate: {
                    [type]: {
                        fields: $eed2ad3d1563932f$export$594a403c6b2e822(fields),
                        ...filters ? {
                            filters: filters
                        } : {},
                        ...populate ? {
                            populate: populate
                        } : {}
                    }
                }
            }
        }
    }, jwt).then((cs)=>{
        return $eed2ad3d1563932f$export$11aded13059841b9(cs?.configs[0]?.[type]) || [];
    });
}
function $eed2ad3d1563932f$export$12536cc3ebe0489c({ domain: domain, id: id, type: type, fields: fields, populate: populate, filters: filters }, jwt) {
    console.log("getFullResource");
    return (0, $82qiQ.default).get_Server(`/users/me`, {
        fields: [
            "email"
        ],
        populate: {
            configs: {
                fields: [
                    "id",
                    "domain"
                ],
                filters: {
                    domain: (0, $kNOzt.parseDomain)(domain)
                },
                populate: {
                    [type]: {
                        fields: $eed2ad3d1563932f$export$594a403c6b2e822(fields),
                        filters: {
                            filters: filters,
                            id: id
                        },
                        ...populate ? {
                            populate: populate
                        } : {}
                    }
                }
            }
        }
    }, jwt).then((cs)=>{
        return cs?.configs[0]?.[type]?.[0] || [];
    });
}
function $eed2ad3d1563932f$export$11aded13059841b9(json, path, deleteSource = false) {
    var result = {};
    if (json && Array.isArray(json)) {
        json = json.map((obj1, index)=>{
            return $eed2ad3d1563932f$export$11aded13059841b9(obj1, null, deleteSource);
        });
        if (path) result[path] = json;
        else result = json;
    } else if (json && typeof json === "object") {
        Object.entries(json).map(([k, v])=>{
            result = Object.assign({}, result, $eed2ad3d1563932f$export$11aded13059841b9(v, (path ? path + "." : "") + k, deleteSource));
        });
        if (deleteSource) json = null;
    }
    if (path) {
        if (json) result[path] = json;
        else delete result[path];
    }
    return result;
}
function $eed2ad3d1563932f$export$4e35d5c922a95490(name) {
    if (name) {
        if (name?.endsWith("s")) return name;
        return name + "s";
    }
    return null;
}

});



parcelRegister("dAquK", function(module, exports) {







var $9wS8V = parcelRequire("9wS8V");

var $82qiQ = parcelRequire("82qiQ");


var $cfKE7 = parcelRequire("cfKE7");
var $9e433079015138e3$export$2e2bcd8739ae039 = ({ open: open, redirect_url: redirect_url, onTrigger: onTrigger, callback: callback, trigger: trigger, ...props })=>{
    const router = (0, $bdjGp$useRouter)();
    const [_open, setOpen] = (0, $bdjGp$useState)(open);
    const [token, setToken] = (0, $bdjGp$useState)();
    const [error, setError] = (0, $bdjGp$useState)();
    const [success, setSuccess] = (0, $bdjGp$useState)();
    const [showPaymentInfo, setShowPaymentInfo] = (0, $bdjGp$useState)(true);
    const { data: session } = (0, $bdjGp$useSession)();
    (0, $bdjGp$useEffect)(()=>{
    // if (!session?.jwt) router.push(`https://plateforme.me/auth/signin?redirect_url=${redirect_url || VariablesSingleton.getParsed("global.url")}`)
    }, [
        open
    ]);
    const checkLogin = async (e)=>{
        const jwt = session?.jwt;
        if (!jwt) router.push(`https://plateforme.me/auth/signin?redirect_url=${(0, $9wS8V.default).getParsed("global.url")}`);
        else if (onTrigger) {
            const execOnTrigger = await onTrigger();
            setOpen(true);
        // if(!execOnTrigger) router.push(`http://localhost:3000/payment-link/20?redirect_url=${VariablesSingleton.getParsed("global.url")}`)
        } else setOpen(true);
    };
    const checkPaiement = (e)=>{
        e.preventDefault();
        setError();
        setSuccess();
        console.log((0, $9wS8V.default).getParsed("courseId"));
        (0, $82qiQ.default).post(`/course-token/activate/${(0, $9wS8V.default).getParsed("courseId")}`, {
            token: token,
            domain: (0, $9wS8V.default).getParsed("global.domain")
        }, session?.jwt).then((res)=>{
            setSuccess("Le code a bien \xe9t\xe9 valid\xe9");
            setTimeout(()=>{
                window.location = `https://${(0, $9wS8V.default).getParsed("global.domain")}/${res?.next_path}`;
            }, 200);
        }).catch((e)=>{
            setError("Le code n'a pas pu \xeatre valid\xe9");
        });
    };
    return /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                onClick: (e)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    checkLogin();
                },
                children: trigger
            }),
            _open && /*#__PURE__*/ (0, $bdjGp$jsx)($9e433079015138e3$var$Body, {
                className: "preview",
                children: /*#__PURE__*/ (0, $bdjGp$jsx)("section", {
                    className: "sct col-sm-12 section_EWn row",
                    children: /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
                        className: "grd col-auto grid_XNq row",
                        children: [
                            /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
                                className: "txt col-md-12 col-sm-12 text_Lj9",
                                children: [
                                    /*#__PURE__*/ (0, $bdjGp$jsx)("p", {
                                        style: {
                                            textAlign: "center"
                                        },
                                        children: /*#__PURE__*/ (0, $bdjGp$jsx)("strong", {
                                            style: {
                                                fontFamily: "verdana, geneva, sans-serif",
                                                fontSize: "18px"
                                            },
                                            children: "Paiement"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
                                        className: "fa fa-times",
                                        onClick: ()=>setOpen(false),
                                        style: {
                                            position: "absolute",
                                            right: 0,
                                            fontSize: 25,
                                            top: 20,
                                            width: 40,
                                            height: 40,
                                            color: "white"
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $bdjGp$jsxs)("form", {
                                className: "cl col-auto column_UJ5 row",
                                onSubmit: checkPaiement,
                                children: [
                                    /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                                        className: "txt col-md-12 col-sm-12",
                                        style: {
                                            height: "NaNpx"
                                        },
                                        children: /*#__PURE__*/ (0, $bdjGp$jsx)("p", {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: /*#__PURE__*/ (0, $bdjGp$jsx)("span", {
                                                style: {
                                                    fontSize: "18px",
                                                    fontFamily: "verdana, geneva, sans-serif"
                                                },
                                                children: "Entrez votre code d'ACCES"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $bdjGp$jsx)("input", {
                                        required: true,
                                        className: "tf col textfield_5tL",
                                        type: "textfield",
                                        label: "Nom",
                                        onChange: (e)=>setToken(e.target.value)
                                    }),
                                    success && /*#__PURE__*/ (0, $bdjGp$jsxs)("p", {
                                        style: {
                                            color: "green"
                                        },
                                        children: [
                                            success,
                                            /*#__PURE__*/ (0, $bdjGp$jsx)("br", {}),
                                            /*#__PURE__*/ (0, $bdjGp$jsx)("br", {})
                                        ]
                                    }),
                                    error && /*#__PURE__*/ (0, $bdjGp$jsxs)("p", {
                                        style: {
                                            color: "red"
                                        },
                                        children: [
                                            error,
                                            /*#__PURE__*/ (0, $bdjGp$jsx)("br", {}),
                                            /*#__PURE__*/ (0, $bdjGp$jsx)("br", {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $bdjGp$jsx)("button", {
                                        className: "bt button_kd6 col-auto",
                                        type: "submit",
                                        children: /*#__PURE__*/ (0, $bdjGp$jsx)("p", {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: /*#__PURE__*/ (0, $bdjGp$jsx)("strong", {
                                                style: {
                                                    fontSize: "14px"
                                                },
                                                children: "VALIDER"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
                                className: "cl col-auto column_Lhb row",
                                children: [
                                    /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
                                        className: "txt col-md-12 col-sm-12 text_D7W",
                                        children: [
                                            /*#__PURE__*/ (0, $bdjGp$jsx)("p", {
                                                style: {
                                                    textAlign: "center"
                                                },
                                                children: /*#__PURE__*/ (0, $bdjGp$jsx)("span", {
                                                    style: {
                                                        fontSize: "16px",
                                                        fontFamily: "verdana, geneva, sans-serif"
                                                    },
                                                    children: "Ou"
                                                })
                                            }),
                                            /*#__PURE__*/ (0, $bdjGp$jsx)("p", {
                                                style: {
                                                    textAlign: "center"
                                                },
                                                children: /*#__PURE__*/ (0, $bdjGp$jsx)("span", {
                                                    style: {
                                                        fontSize: "18px"
                                                    },
                                                    children: /*#__PURE__*/ (0, $bdjGp$jsx)("strong", {
                                                        style: {
                                                            fontFamily: "verdana, geneva, sans-serif"
                                                        },
                                                        children: "Effectuer un Paiement"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $bdjGp$jsx)("img", {
                                        className: "col-md-4 image_eTX",
                                        src: "https://storage.googleapis.com/public.outil.io/medias/20/images/airtel.jpg",
                                        alt: "concepteur.io",
                                        onClick: ()=>setShowPaymentInfo(true)
                                    }),
                                    showPaymentInfo && /*#__PURE__*/ (0, $bdjGp$jsx)((0, $cfKE7.default), {
                                        type: "airtel",
                                        onClose: ()=>setShowPaymentInfo(false)
                                    }),
                                    /*#__PURE__*/ (0, $bdjGp$jsx)("img", {
                                        className: "col-md-4 image_Ujp",
                                        src: "https://storage.googleapis.com/public.outil.io/medias/20/images/mtn.png",
                                        alt: "concepteur.io"
                                    }),
                                    /*#__PURE__*/ (0, $bdjGp$jsx)("img", {
                                        className: "col-md-4 image_Hrv",
                                        src: "https://storage.googleapis.com/public.outil.io/medias/20/images/paypal.webp",
                                        alt: "concepteur.io"
                                    }),
                                    /*#__PURE__*/ (0, $bdjGp$jsx)("img", {
                                        className: "col-md-4 image_V5P",
                                        src: "https://storage.googleapis.com/public.outil.io/medias/20/images/visa.webp",
                                        alt: "concepteur.io"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
//const Body = styled.div`
const $9e433079015138e3$var$Body = (0, $bdjGp$styled)((0, $bdjGp$Box))`
.section_EWn {
    position: fixed; 
    z-index: 3000;
    top: 0; left: 0; 
height: 100vh;
background-color: rgba(67, 67, 67, 0.8);
box-shadow: unset;
padding-left: 0px;
padding-right: 0px;
padding-bottom: 50px;
padding-top: 50px;
display: flex;
justify-content: center;
flex-direction: column;
flex-wrap: nowrap;
margin-bottom: 30px;
align-items: center;
width: 100%;
height: 100vh;
}

.image_V5P {
margin-top: 10px;
margin-bottom: 10px;
margin-left: 10px;
margin-right: 10px;
}

.image_Hrv {
margin-top: 10px;
margin-bottom: 10px;
margin-left: 10px;
margin-right: 10px;
}

.image_Ujp {
margin-top: 10px;
margin-bottom: 10px;
margin-left: 10px;
margin-right: 10px;
}

.image_eTX {
margin-top: 10px;
margin-bottom: 10px;
margin-left: 10px;
margin-right: 10px;
}

.text_D7W {
border-style: none none solid none;
border-color: rgba(243, 243, 243, 1);
margin-bottom: 20px;
padding-bottom: 10px;
border-width: 1px;
}

.column_Lhb {
background-color: rgba(255, 255, 255, 1);
color: rgba(153, 153, 153, 1);
align-items: center;
display: flex;
justify-content: center;
margin-left: 20px;
margin-right: 20px;
padding-left: 20px;
padding-right: 20px;
padding-bottom: 20px;
padding-top: 20px;
border-radius: 5px;
}

.button_kd6 {
background-color: rgba(130, 92, 166, 1);
color: white;
border-color: transparent;
border-size: 1;
padding-bottom: 10px;
padding-top: 10px;
padding-left: 30px;
padding-right: 30px;
border-radius: 2px;
}

.textfield_5tL {
border-style: solid;
border-color: rgba(243, 243, 243, 1);
margin-top: 20px;
margin-bottom: 20px;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 10px;
padding-right: 10px;
border-width: 1px;
}

.column_UJ5 {
background-color: rgba(255, 255, 255, 1);
color: rgba(153, 153, 153, 1);
flex-direction: column;
flex-wrap: nowrap;
margin-left: 20px;
margin-right: 20px;
margin-bottom: 30px;
padding-bottom: 20px;
padding-top: 20px;
padding-left: 20px;
padding-right: 20px;
border-radius: 5px;
}

.text_Lj9 {
background-color: rgba(130, 92, 166, 1);
color: rgba(255, 255, 255, 1);
padding-bottom: 20px;
padding-top: 20px;
margin-bottom: 30px;
position: relative;
}

.grid_XNq {
    max-width: 400px;
background-color: rgba(255, 255, 255, 1);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
padding-bottom: 50px;
padding-top: 0px;
display: flex;
justify-content: center;
margin-top: 20px;
margin-bottom: 20px;
margin-left: 0px;
margin-right: 0px;
padding-left: 0px;
padding-right: 0px;
flex-direction: column;
flex-wrap: nowrap;
border-radius: 5px;
}

@media only screen and (max-width: 700px) {
.section_EWn {}
}
`;

});
parcelRegister("cfKE7", function(module, exports) {

$parcel$export(module.exports, "default", () => $8ebb11b5f12a23b7$export$2e2bcd8739ae039);


parcelRequire("hJEvF");
var $aCpC9 = parcelRequire("aCpC9");
var $5AGgD = parcelRequire("5AGgD");
var $k0En4 = parcelRequire("k0En4");
var $6p093 = parcelRequire("6p093");



var $82qiQ = parcelRequire("82qiQ");

var $9wS8V = parcelRequire("9wS8V");


var $awdxc = parcelRequire("awdxc");
var $8ebb11b5f12a23b7$export$2e2bcd8739ae039 = ({ onClose: onClose, type: type })=>{
    const [nom, setNom] = (0, $bdjGp$useState)();
    const [email, setEmail] = (0, $bdjGp$useState)();
    const [phone, setPhone] = (0, $bdjGp$useState)();
    const [loading, setLoading] = (0, $bdjGp$useState)();
    const [token, setToken] = (0, $bdjGp$useState)();
    const [price, setPrice] = (0, $bdjGp$useState)((0, $9wS8V.default).getParsed("course.price"));
    const [devise, setDevise] = (0, $bdjGp$useState)((0, $9wS8V.default).getParsed("course.devise"));
    const [success, setSuccess] = (0, $bdjGp$useState)();
    const [error, setError] = (0, $bdjGp$useState)();
    const { data: session } = (0, $bdjGp$useSession)();
    const pay = (e)=>{
        e.preventDefault();
        setLoading(true);
        (0, $82qiQ.default).post(`/pay/course/${(0, $9wS8V.default).getParsed("courseId")}`, {
            email: email,
            phone: phone,
            type: type,
            price: price,
            domain: (0, $9wS8V.default).getParsed("global.domain")
        }, session?.jwt).then((res)=>{
            if (res?.token) {
                setToken(res?.token);
                setSuccess(true);
            } else setError("Paiement non valid\xe9");
            setLoading(false);
        }).catch((res)=>setError("Paiement non valid\xe9"));
    };
    return /*#__PURE__*/ (0, $bdjGp$jsx)($8ebb11b5f12a23b7$var$Body, {
        className: "preview",
        children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $aCpC9.default), {
            className: "section_9tl",
            sm: 12,
            children: /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                className: "row w-100 child_section_9tl",
                style: {
                    height: "100vh",
                    paddingRight: "0px",
                    paddingLeft: "0px",
                    paddingTop: "50px",
                    alignContent: "center",
                    justifyContent: "center",
                    minHeight: "100vh",
                    maxWidth: "400px",
                    alignItems: "center",
                    paddingBottom: "50px",
                    marginBottom: "30px",
                    width: "100%"
                },
                children: /*#__PURE__*/ (0, $bdjGp$jsxs)("form", {
                    className: "w-100 form_j7q row",
                    onSubmit: pay,
                    children: [
                        /*#__PURE__*/ (0, $bdjGp$jsx)((0, $5AGgD.default), {
                            style: {
                                height: "fit-content",
                                marginBottom: "20px",
                                fontSize: "18px"
                            },
                            md: 12,
                            children: "Informations de paiement"
                        }),
                        /*#__PURE__*/ (0, $bdjGp$jsx)("input", {
                            className: "col textfield_nRn  col  w-100",
                            required: true,
                            value: nom,
                            onChange: (e)=>setNom(e.target.value),
                            type: "text",
                            placeHolder: "Nom",
                            label: "Nom"
                        }),
                        /*#__PURE__*/ (0, $bdjGp$jsx)("input", {
                            className: "col textfield_auA  col  w-100",
                            required: true,
                            value: email,
                            onChange: (e)=>setEmail(e.target.value),
                            type: "email",
                            placeHolder: "Email",
                            label: "Nom"
                        }),
                        /*#__PURE__*/ (0, $bdjGp$jsx)("input", {
                            className: "textfield_jTD  w-100",
                            type: "phone",
                            value: phone,
                            onChange: (e)=>setPhone(e.target.value),
                            placeHolder: "Telephone",
                            label: "Nom"
                        }),
                        /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $k0En4.default), {
                            className: "column_k1W",
                            md: 12,
                            children: [
                                /*#__PURE__*/ (0, $bdjGp$jsx)((0, $5AGgD.default), {
                                    style: {
                                        height: "fit-content",
                                        marginRight: "10px",
                                        width: "fit-content"
                                    },
                                    children: "Prix: "
                                }),
                                /*#__PURE__*/ (0, $bdjGp$jsx)("label", {
                                    className: "nb textfield_7sn",
                                    type: "number",
                                    disabled: true,
                                    children: price
                                }),
                                /*#__PURE__*/ (0, $bdjGp$jsx)((0, $5AGgD.default), {
                                    style: {
                                        height: "fit-content",
                                        marginLeft: "10px"
                                    },
                                    children: devise
                                })
                            ]
                        }),
                        !success && /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $bdjGp$Fragment), {
                            children: [
                                /*#__PURE__*/ (0, $bdjGp$jsx)((0, $6p093.default), {
                                    className: "bt button_EBf",
                                    disabled: loading,
                                    type: "submit",
                                    style: {
                                        textAlign: "center",
                                        margin: 10,
                                        fontSize: "14px"
                                    },
                                    md: 5,
                                    children: "Payer"
                                }),
                                /*#__PURE__*/ (0, $bdjGp$jsx)((0, $6p093.default), {
                                    className: "bt button_EBf",
                                    disabled: loading,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        onClose();
                                    },
                                    style: {
                                        textAlign: "center",
                                        background: "gray",
                                        margin: 10,
                                        fontSize: "14px"
                                    },
                                    md: 5,
                                    children: "Annuler"
                                })
                            ]
                        }),
                        loading && /*#__PURE__*/ (0, $bdjGp$jsx)((0, $5AGgD.default), {
                            style: {
                                height: "fit-content",
                                fontSize: 20,
                                color: "black",
                                marginTop: "30px",
                                width: "fit-content"
                            },
                            children: "G\xe9n\xe9ration du token d'acc\xe8s "
                        }),
                        /*#__PURE__*/ (0, $bdjGp$jsx)("hr", {}),
                        /*#__PURE__*/ (0, $bdjGp$jsx)((0, $awdxc.default), {
                            loading: loading,
                            children: token && /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $bdjGp$Fragment), {
                                children: [
                                    /*#__PURE__*/ (0, $bdjGp$jsx)((0, $5AGgD.default), {
                                        style: {
                                            height: "fit-content",
                                            color: "black",
                                            marginTop: "30px",
                                            width: "fit-content"
                                        },
                                        children: "Voici votre code d'acc\xe8s: "
                                    }),
                                    /*#__PURE__*/ (0, $bdjGp$jsx)("br", {}),
                                    /*#__PURE__*/ (0, $bdjGp$jsx)("hr", {}),
                                    /*#__PURE__*/ (0, $bdjGp$jsxs)("h3", {
                                        style: {
                                            height: "fit-content",
                                            fontSize: 30,
                                            marginBottom: "30px",
                                            width: "fit-content",
                                            color: "rgba(130, 92, 166, 1)"
                                        },
                                        children: [
                                            token,
                                            " "
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0, $bdjGp$jsx)("hr", {}),
                        success && /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$Fragment), {
                            children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $6p093.default), {
                                className: "bt button_EBf",
                                disabled: loading,
                                onClick: (e)=>{
                                    e.preventDefault();
                                    onClose();
                                },
                                style: {
                                    textAlign: "center",
                                    margin: 10,
                                    fontSize: "14px"
                                },
                                md: 5,
                                children: "Terminer"
                            })
                        })
                    ]
                })
            })
        })
    });
};
//const Body = styled.div`
const $8ebb11b5f12a23b7$var$Body = (0, $bdjGp$styled)((0, $bdjGp$Box))`
position: fixed;
.section_9tl {
height: 100vh;
background-color: rgba(67, 67, 67, 0.7);
box-shadow: unset;
align-content: center;
padding-bottom: 50px;
margin-bottom: 30px;
display: flex !important;
align-items: center;
justify-content: center;
overflow: hidden;
padding-top: 50px;
padding-right: 0px;
padding-left: 0px;
width: 100%;
height: 100vh;
display: flex;
}

.button_EBf {
height: fit-content;
background-color: rgba(130, 92, 166, 1);
color: white;
border-color: transparent;
border-size: 1;
padding-top: 10px;
padding-bottom: 10px;
border-radius: 2px;
}

.textfield_7sn {
height: fit-content;
border-style: none none solid none;
border-color: rgba(153, 153, 153, 1);
background-color: rgba(243, 243, 243, 1);
padding-top: 10px;
padding-bottom: 10px;
padding-left: 10px;
padding-right: 10px;
border-width: 1px;
max-width: 70%;
font-size:25px;
font-weight: bold;
}

.column_k1W {
height: fit-content;
flex-direction: row;
flex-wrap: nowrap;
align-items: center;
padding-left: 0px;
padding-right: 0px;
padding-bottom: 0px;
padding-top: 0px;
margin-bottom: 20px;
}

.textfield_jTD {
height: fit-content;
border-style: none none solid none;
border-color: rgba(153, 153, 153, 1);
background-color: rgba(243, 243, 243, 1);
margin-top: 5px;
margin-bottom: 20px;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 10px;
padding-right: 10px;
border-width: 1px;
}

.textfield_auA {
height: fit-content;
border-style: none none solid none;
border-color: rgba(153, 153, 153, 1);
background-color: rgba(243, 243, 243, 1);
margin-top: 5px;
margin-bottom: 20px;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 10px;
padding-right: 10px;
border-width: 1px;
}

.textfield_nRn {
height: fit-content;
border-style: none none solid none;
border-color: rgba(153, 153, 153, 1);
background-color: rgba(243, 243, 243, 1);
margin-top: 5px;
margin-bottom: 20px;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 10px;
padding-right: 10px;
margin-right: 20px;
border-width: 1px;
}

.form_j7q {
height: fit-content;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
background-color: rgba(255, 255, 255, 1);
max-width: 500px;
padding-left: 20px;
padding-right: 20px;
padding-top: 20px;
padding-bottom: 20px;
}

@media only screen and (max-width: 700px) {
.section_9tl {
height: unset;
height: unset;
display: flex;
justify-content: center;
overflow: hidden;
}

.child_section_9tl {
height: 100vh;
padding-right: 0px;
padding-left: 0px;
padding-top: 50px;
align-content: center;
min-height: unset;
max-width: 100%;
align-items: center;
padding-bottom: 50px;
margin-bottom: 30px;
width: 100%;
}
}
`;

});
parcelRegister("hJEvF", function(module, exports) {

$parcel$export(module.exports, "Text", () => (parcelRequire("5AGgD")).default);
$parcel$export(module.exports, "Button", () => (parcelRequire("6p093")).default);
$parcel$export(module.exports, "Col", () => (parcelRequire("k0En4")).default);
$parcel$export(module.exports, "Grid", () => (parcelRequire("4eCeY")).default);
$parcel$export(module.exports, "Row", () => (parcelRequire("aCpC9")).default);

var $5AGgD = parcelRequire("5AGgD");

var $6p093 = parcelRequire("6p093");

var $k0En4 = parcelRequire("k0En4");

var $4eCeY = parcelRequire("4eCeY");

var $aCpC9 = parcelRequire("aCpC9");

var $lGRvq = parcelRequire("lGRvq");

var $jHytR = parcelRequire("jHytR");

});
parcelRegister("5AGgD", function(module, exports) {

$parcel$export(module.exports, "default", () => $412119f233b3f7f3$export$2e2bcd8739ae039);


var $kNOzt = parcelRequire("kNOzt");
const $412119f233b3f7f3$var$Text = ({ sm: sm, md: md, xs: xs, style: style, className: className = "", children: children, ...props })=>{
    return /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
        className: "txt " + (0, $kNOzt.size)({
            sm: sm,
            md: md,
            xs: xs
        }) + " " + className,
        style: style,
        ...props,
        children: children
    });
};
var $412119f233b3f7f3$export$2e2bcd8739ae039 = $412119f233b3f7f3$var$Text;

});

parcelRegister("6p093", function(module, exports) {

$parcel$export(module.exports, "default", () => $4a9530ae777837ca$export$2e2bcd8739ae039);


var $kNOzt = parcelRequire("kNOzt");
const $4a9530ae777837ca$var$Button = ({ sm: sm, md: md, xs: xs, style: style, className: className = "", children: children, ...props })=>{
    return /*#__PURE__*/ (0, $bdjGp$jsx)("button", {
        className: "btn " + (0, $kNOzt.size)({
            sm: sm,
            md: md,
            xs: xs
        }) + " " + className,
        style: style,
        ...props,
        children: children
    });
};
var $4a9530ae777837ca$export$2e2bcd8739ae039 = $4a9530ae777837ca$var$Button;

});

parcelRegister("k0En4", function(module, exports) {

$parcel$export(module.exports, "default", () => $e9131f983284b5b2$export$2e2bcd8739ae039);


var $kNOzt = parcelRequire("kNOzt");
const $e9131f983284b5b2$var$Col = ({ sm: sm, md: md, xs: xs, style: style, className: className = "", children: children, ...props })=>{
    return /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
        className: "cl row " + (0, $kNOzt.size)({
            sm: sm,
            md: md,
            xs: xs
        }) + " " + className,
        style: style,
        ...props,
        children: children
    });
};
var $e9131f983284b5b2$export$2e2bcd8739ae039 = $e9131f983284b5b2$var$Col;

});

parcelRegister("4eCeY", function(module, exports) {

$parcel$export(module.exports, "default", () => $315621f9efe4b89a$export$2e2bcd8739ae039);


var $kNOzt = parcelRequire("kNOzt");
const $315621f9efe4b89a$var$Grid = ({ sm: sm, md: md, xs: xs, style: style, className: className = "", children: children, ...props })=>{
    return /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
        className: "grd row " + (0, $kNOzt.size)({
            md: md,
            sm: sm,
            xs: xs
        }) + " " + className,
        style: style,
        ...props,
        children: children
    });
};
var $315621f9efe4b89a$export$2e2bcd8739ae039 = $315621f9efe4b89a$var$Grid;

});

parcelRegister("aCpC9", function(module, exports) {

$parcel$export(module.exports, "default", () => $7bb1527d9a3d7cc0$export$2e2bcd8739ae039);


var $kNOzt = parcelRequire("kNOzt");
const $7bb1527d9a3d7cc0$var$Row = ({ sm: sm, md: md, xs: xs, style: style, className: className = "", children: children, ...props })=>{
    return /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
        className: "sct row " + (0, $kNOzt.size)({
            sm: sm,
            md: md,
            xs: xs
        }) + " " + className,
        style: style,
        ...props,
        children: children
    });
};
var $7bb1527d9a3d7cc0$export$2e2bcd8739ae039 = $7bb1527d9a3d7cc0$var$Row;

});

parcelRegister("lGRvq", function(module, exports) {

$parcel$export(module.exports, "default", () => $fca7065def3307db$export$2e2bcd8739ae039);


var $kNOzt = parcelRequire("kNOzt");
const $fca7065def3307db$var$Form = ({ sm: sm, md: md, xs: xs, style: style, className: className = "", children: children, ...props })=>{
    return /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
        className: "frm row " + (0, $kNOzt.size)({
            sm: sm,
            md: md,
            xs: xs
        }) + " " + className,
        style: style,
        ...props,
        children: children
    });
};
var $fca7065def3307db$export$2e2bcd8739ae039 = $fca7065def3307db$var$Form;

});

parcelRegister("jHytR", function(module, exports) {

$parcel$export(module.exports, "default", () => $e57cc79858adee7b$export$2e2bcd8739ae039);


var $kNOzt = parcelRequire("kNOzt");
const $e57cc79858adee7b$var$Image = ({ sm: sm, md: md, xs: xs, style: style, className: className = "", src: src, ...props })=>{
    return /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
        className: (!xs && !md ? "col " : "") + (0, $kNOzt.size)({
            sm: sm,
            md: md,
            xs: xs
        }) + " " + className,
        style: style,
        ...props,
        children: /*#__PURE__*/ (0, $bdjGp$jsx)("img", {
            width: "100%",
            src: src
        })
    });
};
var $e57cc79858adee7b$export$2e2bcd8739ae039 = $e57cc79858adee7b$var$Image;

});





parcelRegister("8bJOB", function(module, exports) {

$parcel$export(module.exports, "default", () => $5f62e3bfc17406c0$export$2e2bcd8739ae039);



var $fhvMe = parcelRequire("fhvMe");

var $9wS8V = parcelRequire("9wS8V");


var $k2cBu = parcelRequire("k2cBu");

var $awdxc = parcelRequire("awdxc");
function $5f62e3bfc17406c0$export$2e2bcd8739ae039({ content: content, bp: bp, ...props }) {
    const [loading, setLoading] = $bdjGp$useState(true);
    const { flexDirection: mdFlexDirection, flexWrap: mdFlexWrap, display: mdDisplay, alignItems: mdAlignItems } = props.md?.style || {};
    const { flexDirection: smFlexDirection, flexWrap: smFlexWrap, display: smDisplay, alignItems: smAlignItems } = props.sm?.style || {};
    const [previous, setPrevious] = $bdjGp$useState(props?.custom?.lesson_prev?.path);
    const [lesson, setLesson] = $bdjGp$useState();
    $bdjGp$useEffect(()=>{
        if ((0, $9wS8V.default).getParsed("lesson.slug")) (0, $k2cBu.getPreviousLesson)({
            courseId: (0, $9wS8V.default).getParsed("cours.slug"),
            lessonId: (0, $9wS8V.default).getParsed("lesson.slug")
        }, (0, $9wS8V.default).getParsed("global.domain"), (0, $9wS8V.default).getParsed("global.jwt")).then((res)=>{
            console.log(res);
            if (res) {
                setPrevious(res.previous_path);
                setLesson(res.lesson_slug);
            } else document.getElementById(props.id).style.visibility = "hidden";
            setLoading(false);
        });
    }, [
        (0, $9wS8V.default).getParsed("lesson.slug")
    ]);
    return !previous ? /*#__PURE__*/ (0, $bdjGp$jsx)("div", {}) : /*#__PURE__*/ (0, $bdjGp$jsx)((0, $awdxc.default), {
        loading: loading,
        children: /*#__PURE__*/ (0, $bdjGp$jsx)("a", {
            href: previous,
            onClick: ()=>{
                (0, $9wS8V.default).set("lesson.slug", lesson);
                setLoading(true);
            },
            children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                parent: props,
                disabled: true,
                isNew: true,
                bp: bp,
                data: {
                    id: "child_" + props.id,
                    children: props.children,
                    md: {
                        style: {
                            flexDirection: mdFlexDirection,
                            flexWrap: mdFlexWrap,
                            display: mdDisplay,
                            alignItems: mdAlignItems
                        }
                    },
                    sm: {
                        style: {
                            flexDirection: smFlexDirection,
                            flexWrap: smFlexWrap,
                            display: smDisplay,
                            alignItems: smAlignItems
                        }
                    }
                },
                path: "0"
            })
        })
    });
}

});

parcelRegister("6hCgJ", function(module, exports) {

$parcel$export(module.exports, "default", () => $493203fdc3ebac2d$export$2e2bcd8739ae039);




var $fhvMe = parcelRequire("fhvMe");

var $9wS8V = parcelRequire("9wS8V");


var $k2cBu = parcelRequire("k2cBu");

var $awdxc = parcelRequire("awdxc");
function $493203fdc3ebac2d$export$2e2bcd8739ae039({ content: content, bp: bp, ...props }) {
    const { flexDirection: mdFlexDirection, flexWrap: mdFlexWrap, display: mdDisplay, alignItems: mdAlignItems } = props.md?.style || {};
    const { flexDirection: smFlexDirection, flexWrap: smFlexWrap, display: smDisplay, alignItems: smAlignItems } = props.sm?.style || {};
    const [next, setNext] = $bdjGp$useState(props?.custom?.lesson_next?.path);
    const [loading, setLoading] = $bdjGp$useState(false);
    const router = (0, $bdjGp$useRouter)();
    const pathname = (0, $bdjGp$usePathname)();
    $bdjGp$useEffect(()=>{
        console.log('VariablesSingleton.getParsed("lesson.next")', (0, $9wS8V.default).getParsed("lesson.next"));
        setNext((0, $9wS8V.default).getParsed("lesson.next")?.path);
    }, [
        (0, $9wS8V.default).getParsed("lesson.next")?.path
    ]);
    return !next ? /*#__PURE__*/ (0, $bdjGp$jsx)("div", {}) : /*#__PURE__*/ (0, $bdjGp$jsx)((0, $awdxc.default), {
        loading: loading,
        children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$nextlink), {
            href: "#",
            onClick: ()=>{
                setLoading(true);
                (0, $k2cBu.lessonComplete)((0, $9wS8V.default).getParsed("course.guid"), (0, $9wS8V.default).getParsed("lesson.guid"), (0, $9wS8V.default).getParsed("global.domain"), (0, $9wS8V.default).getParsed("global.jwt")).then((res)=>{
                    // router.push()
                    (0, $9wS8V.default).set("lesson.guid", res?.next_slug);
                    window.location = res?.next_path;
                    setLoading(false);
                });
            },
            children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                parent: props,
                disabled: true,
                isNew: true,
                bp: bp,
                data: {
                    id: "child_" + props.id,
                    children: props.children,
                    md: {
                        style: {
                            flexDirection: mdFlexDirection,
                            flexWrap: mdFlexWrap,
                            display: mdDisplay,
                            alignItems: mdAlignItems
                        }
                    },
                    sm: {
                        style: {
                            flexDirection: smFlexDirection,
                            flexWrap: smFlexWrap,
                            display: smDisplay,
                            alignItems: smAlignItems
                        }
                    }
                },
                path: "0"
            })
        })
    });
}

});

parcelRegister("4BNXL", function(module, exports) {

$parcel$export(module.exports, "default", () => $35b15fbbf00072cf$export$2e2bcd8739ae039);

parcelRequire("hJEvF");
var $4eCeY = parcelRequire("4eCeY");
var $k0En4 = parcelRequire("k0En4");
var $5AGgD = parcelRequire("5AGgD");



var $9wS8V = parcelRequire("9wS8V");


var $M44OH = parcelRequire("M44OH");
var $35b15fbbf00072cf$export$2e2bcd8739ae039 = ({ ...props })=>{
    const [values, setValues] = (0, $bdjGp$useState)(null);
    const [loading, setLoading] = (0, $bdjGp$useState)(true);
    (0, $bdjGp$useEffect)(()=>{
        setTimeout(()=>{
            setValues((0, $9wS8V.default).getParsed("course.goals.values", []));
            console.log('VariablesSingleton.getParsed("course.goals.values", [])', (0, $9wS8V.default).getParsed("course", []));
            setLoading(false);
        }, 10);
    }, []);
    return /*#__PURE__*/ (0, $bdjGp$jsx)($35b15fbbf00072cf$var$Body, {
        className: "preview",
        children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $M44OH.default), {
            loading: loading,
            children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $4eCeY.default), {
                children: values?.map((goal, index)=>/*#__PURE__*/ (0, $bdjGp$jsxs)((0, $k0En4.default), {
                        className: "column_G0M",
                        sm: 12,
                        md: 6,
                        children: [
                            /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
                                className: "ic icon_T2l " + goal.icon,
                                style: {
                                    width: 40,
                                    height: 40
                                }
                            }),
                            /*#__PURE__*/ (0, $bdjGp$jsx)((0, $5AGgD.default), {
                                className: "col",
                                style: {
                                    height: "fit-content",
                                    fontSize: "16px",
                                    fontSize: "14px"
                                },
                                children: goal.text
                            })
                        ]
                    }, index))
            })
        })
    });
};
//const Body = styled.div`
const $35b15fbbf00072cf$var$Body = (0, $bdjGp$styled)((0, $bdjGp$Box))`
.column_G0M {
height: fit-content;
flex-direction: row;
flex-wrap: nowrap;
padding-top: 0px;
padding-left: 0px;
padding-right: 0px;
padding-bottom: 0px;
display: flex;
align-items: center;
}

.text_Z8h {
height: fit-content;
flex-direction: row;
flex-wrap: nowrap;
padding-top: 0px;
}
`;

});

parcelRegister("fwJgG", function(module, exports) {

$parcel$export(module.exports, "default", () => $b4dcf57e9bc30246$export$2e2bcd8739ae039);

parcelRequire("hJEvF");
var $4eCeY = parcelRequire("4eCeY");
var $k0En4 = parcelRequire("k0En4");
var $5AGgD = parcelRequire("5AGgD");



var $9wS8V = parcelRequire("9wS8V");


var $M44OH = parcelRequire("M44OH");
var $b4dcf57e9bc30246$export$2e2bcd8739ae039 = ({ ...props })=>{
    const [values, setValues] = (0, $bdjGp$useState)([]);
    const [loading, setLoading] = (0, $bdjGp$useState)(true);
    (0, $bdjGp$useEffect)(()=>{
        setTimeout(()=>{
            setValues((0, $9wS8V.default).getParsed("course.requirements.values", []));
            setLoading(false);
        }, 10);
    }, []);
    return /*#__PURE__*/ (0, $bdjGp$jsx)($b4dcf57e9bc30246$var$Body, {
        className: "preview",
        children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $M44OH.default), {
            loading: loading,
            children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $4eCeY.default), {
                children: values?.map((goal, index)=>/*#__PURE__*/ (0, $bdjGp$jsxs)((0, $k0En4.default), {
                        className: "column_G0M",
                        sm: 12,
                        md: 6,
                        children: [
                            /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
                                className: "ic icon_T2l " + goal.icon,
                                style: {
                                    width: 40,
                                    height: 40
                                }
                            }),
                            /*#__PURE__*/ (0, $bdjGp$jsx)((0, $5AGgD.default), {
                                className: "col",
                                style: {
                                    height: "fit-content"
                                },
                                children: goal.text
                            })
                        ]
                    }, index))
            })
        })
    });
};
//const Body = styled.div`
const $b4dcf57e9bc30246$var$Body = (0, $bdjGp$styled)((0, $bdjGp$Box))`
.column_G0M {
height: fit-content;
flex-direction: row;
flex-wrap: nowrap;
padding-top: 0px;
padding-left: 0px;
padding-right: 0px;
padding-bottom: 0px;
display: flex;
align-items: center;
}

.text_Z8h {
height: fit-content;
flex-direction: row;
flex-wrap: nowrap;
padding-top: 0px;
}
`;

});

parcelRegister("4Ifbp", function(module, exports) {

$parcel$export(module.exports, "default", () => $36e70c82408e1ff1$export$2e2bcd8739ae039);

parcelRequire("hJEvF");
var $4eCeY = parcelRequire("4eCeY");
var $k0En4 = parcelRequire("k0En4");
var $5AGgD = parcelRequire("5AGgD");



var $9wS8V = parcelRequire("9wS8V");


var $M44OH = parcelRequire("M44OH");
var $36e70c82408e1ff1$export$2e2bcd8739ae039 = ({ ...props })=>{
    const [values, setValues] = (0, $bdjGp$useState)([]);
    const [loading, setLoading] = (0, $bdjGp$useState)(true);
    (0, $bdjGp$useEffect)(()=>{
        setTimeout(()=>{
            setValues((0, $9wS8V.default).getParsed("course.resources.values", []));
            setLoading(false);
        }, 10);
    }, []);
    return /*#__PURE__*/ (0, $bdjGp$jsx)($36e70c82408e1ff1$var$Body, {
        className: "preview",
        children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $M44OH.default), {
            loading: loading,
            children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $4eCeY.default), {
                children: values?.map((goal, index)=>/*#__PURE__*/ (0, $bdjGp$jsxs)((0, $k0En4.default), {
                        className: "column_G0M",
                        sm: 12,
                        md: 6,
                        children: [
                            /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
                                className: "ic icon_T2l " + goal.icon,
                                style: {
                                    width: 40,
                                    height: 40
                                }
                            }),
                            /*#__PURE__*/ (0, $bdjGp$jsx)((0, $5AGgD.default), {
                                className: "col",
                                style: {
                                    height: "fit-content"
                                },
                                children: goal.text
                            })
                        ]
                    }, index))
            })
        })
    });
};
//const Body = styled.div`
const $36e70c82408e1ff1$var$Body = (0, $bdjGp$styled)((0, $bdjGp$Box))`
.column_G0M {
height: fit-content;
flex-direction: row;
flex-wrap: nowrap;
padding-top: 0px;
padding-left: 0px;
padding-right: 0px;
padding-bottom: 0px;
display: flex;
align-items: center;
}

.text_Z8h {
height: fit-content;
flex-direction: row;
flex-wrap: nowrap;
padding-top: 0px;
}
`;

});

parcelRegister("kUsf5", function(module, exports) {

$parcel$export(module.exports, "default", () => $f38ef1f68b8d3fc1$export$2e2bcd8739ae039);





var $fhvMe = parcelRequire("fhvMe");
const $f38ef1f68b8d3fc1$var$NavList = ({ ...props })=>{
    const [activeIndex, setActiveIndex] = (0, $bdjGp$useState)(-1);
    const [activeLevel0, setActiveLevel0] = (0, $bdjGp$useState)(0);
    const [activeLevel1, setActiveLevel1] = (0, $bdjGp$useState)(0);
    const bp = props.bp;
    const handleClick = (index, id)=>{
        console.log("props.body?.onClick?.type", props.body);
        setActiveIndex(index);
        if (props.onClickIndex) props.onClickIndex(index, id);
        else {
            const onClick = props.body && props.body["onClick_" + bp] || props.body?.onClick;
            const mapping = onClick?.mapping;
            if (mapping && mapping[index]) {
                if (onClick?.type === "placeHolder") PopupSingleton.showPlaceHolder(onClick?.id, mapping[index]);
                else if (onClick?.type === "page") PopupSingleton.showPage(mapping[index]);
                else PopupSingleton.showPopup(mapping[index]);
                VariablesSingleton.setPreview(props.xdata, index);
            }
        }
    };
    const RenderCategory = ({ index: index, category: category, children: children })=>/*#__PURE__*/ (0, $bdjGp$jsxs)((0, $bdjGp$Fragment), {
            children: [
                /*#__PURE__*/ (0, $bdjGp$jsx)("details", {
                    className: "folder_JNZ",
                    open: activeLevel0 === index,
                    onClick: (e)=>{
                        e.stopPropagation();
                        setActiveLevel0(index);
                    },
                    children: /*#__PURE__*/ (0, $bdjGp$jsx)("summary", {
                        children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                            data: {
                                ...props.header,
                                type: "grid",
                                forwardClick: true
                            },
                            rawChildren: /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $bdjGp$Fragment), {
                                children: [
                                    category.icon && /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                                        path: "0",
                                        data: {
                                            ...props.header?.children[0],
                                            xtype: "component",
                                            type: "c",
                                            forwardClick: true
                                        },
                                        rawChildren: /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
                                            className: "ic icon_8tI_3 " + category.icon,
                                            style: {
                                                height: "100%",
                                                minWidth: 20,
                                                minHeight: 20
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                                        path: "1",
                                        data: {
                                            ...props.header?.children[1],
                                            xtype: "component",
                                            type: "c",
                                            forwardClick: true
                                        },
                                        rawChildren: /*#__PURE__*/ (0, $bdjGp$jsx)("span", {
                                            children: category.name
                                        })
                                    }),
                                    props.xdata.category_right_icon && /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                                        path: "2",
                                        data: {
                                            ...props.header?.children[2],
                                            xtype: "component",
                                            type: "c",
                                            forwardClick: true
                                        },
                                        rawChildren: /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
                                            className: "ic icon_8tI_3 toogle " + props.xdata.category_right_icon,
                                            style: {
                                                height: "100%",
                                                minWidth: 20,
                                                minHeight: 20
                                            }
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }, category.name),
                /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                    className: "content-details",
                    children: category.sections?.map((sct, indexSct)=>/*#__PURE__*/ (0, $bdjGp$jsxs)((0, $bdjGp$Fragment), {
                            children: [
                                /*#__PURE__*/ (0, $bdjGp$jsx)("details", {
                                    open: activeLevel1 === indexSct,
                                    children: /*#__PURE__*/ (0, $bdjGp$jsx)("summary", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            setActiveLevel1(indexSct);
                                        },
                                        children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                                            data: {
                                                ...props.body,
                                                type: "grid",
                                                forwardClick: true
                                            },
                                            rawChildren: /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $bdjGp$Fragment), {
                                                children: [
                                                    sct.icon && /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                                                        path: "0",
                                                        data: {
                                                            ...props.body?.children[0],
                                                            xtype: "component",
                                                            type: "c",
                                                            forwardClick: true
                                                        },
                                                        rawChildren: sct.icon && /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
                                                            className: "ic icon_8tI_3 " + sct.icon,
                                                            style: {
                                                                height: "100%",
                                                                minWidth: 20,
                                                                minHeight: 20
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                                                        path: "1",
                                                        data: {
                                                            ...props.body?.children[1],
                                                            xtype: "component",
                                                            type: "c",
                                                            forwardClick: true
                                                        },
                                                        rawChildren: /*#__PURE__*/ (0, $bdjGp$jsx)("span", {
                                                            children: sct.name
                                                        })
                                                    }),
                                                    props?.xdata?.section_right_icon && /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                                                        path: "2",
                                                        data: {
                                                            ...props.body?.children[2],
                                                            xtype: "component",
                                                            type: "c",
                                                            forwardClick: true
                                                        },
                                                        rawChildren: /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
                                                            className: "ic icon_8tI_3 toogle " + props.xdata?.section_right_icon,
                                                            style: {
                                                                height: "100%",
                                                                minWidth: 20,
                                                                minHeight: 20
                                                            }
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                                    className: "content-details",
                                    children: sct?.pages?.map((pg, indexPg)=>/*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                                            data: {
                                                ...props.footer,
                                                type: "grid"
                                            },
                                            rawChildren: /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $bdjGp$Fragment), {
                                                children: [
                                                    pg.icon && /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                                                        path: "0",
                                                        data: {
                                                            ...props.body?.children[0],
                                                            xtype: "component",
                                                            type: "c",
                                                            forwardClick: true
                                                        },
                                                        rawChildren: pg.icon && /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
                                                            className: "ic icon_8tI_3 " + pg.icon
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                                                        path: "1",
                                                        data: {
                                                            ...props.body?.children[1],
                                                            xtype: "component",
                                                            type: "c",
                                                            forwardClick: true
                                                        },
                                                        rawChildren: /*#__PURE__*/ (0, $bdjGp$jsx)("span", {
                                                            children: pg.name
                                                        })
                                                    }),
                                                    props.xdata?.page_right_icon && /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                                                        path: "2",
                                                        data: {
                                                            ...props.body?.children[2],
                                                            xtype: "component",
                                                            type: "c",
                                                            forwardClick: true
                                                        },
                                                        rawChildren: /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
                                                            className: "ic icon_8tI_3 toogle " + props.xdata?.page_right_icon,
                                                            style: {
                                                                height: "100%",
                                                                minWidth: 20,
                                                                minHeight: 20
                                                            }
                                                        })
                                                    })
                                                ]
                                            })
                                        }))
                                })
                            ]
                        }))
                })
            ]
        });
    return /*#__PURE__*/ (0, $bdjGp$jsx)($f38ef1f68b8d3fc1$var$Body, {
        className: "preview",
        children: props.xdata?.categories?.map((xd, index)=>/*#__PURE__*/ (0, $bdjGp$jsx)(RenderCategory, {
                category: xd,
                index: index
            }))
    });
};
var $f38ef1f68b8d3fc1$export$2e2bcd8739ae039 = $f38ef1f68b8d3fc1$var$NavList;
//const Body = styled.div`
const $f38ef1f68b8d3fc1$var$Body = (0, $bdjGp$styled)((0, $bdjGp$Box))`
.jIp {
height: fit-content;
flex-direction: column;
display: flex !important;
flex-wrap: wrap;
}

.text_T8f {
height: fit-content;
padding-top: 10px;
padding-bottom: 10px;
pointer: cursor;
padding-left: 10px;
padding-right: 10px;
}

.text_pO2 {
height: fit-content;
padding-top: 10px;
padding-bottom: 10px;
pointer: cursor;
padding-left: 10px;
padding-right: 10px;
display: flex;
}

.column_vXy {
    height: fit-content;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: row;
    display: flex !important;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    pointer: cursor;
    }
    .section_123 {
    height: fit-content;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: row;
    display: flex !important;
    flex-wrap: nowrap;
    align-items: center;
    pointer: cursor;
    }

.folder_JNZ {
height: fit-content;
pointer: cursor;
padding-top: 0px;
padding-bottom: 0px;
padding-left: 0px;
padding-right: 0px;
}

@media only screen and (max-width: 700px) {}
`;

});

parcelRegister("9aB80", function(module, exports) {
module.exports = import("./Table.27ac4d6d.js").then(()=>parcelRequire("6Rqbm"));

});

parcelRegister("dnSyw", function(module, exports) {
module.exports = import("./Modules.17f1cd8b.js").then(()=>parcelRequire("a0L2a"));

});

parcelRegister("6tATm", function(module, exports) {
module.exports = import("./barLineChart.31260da1.js").then(()=>parcelRequire("fVgmQ"));

});

parcelRegister("eAW7a", function(module, exports) {
module.exports = import("./pieChart.2a801152.js").then(()=>parcelRequire("hhMlf"));

});

parcelRegister("8WSTF", function(module, exports) {
module.exports = import("./barChart.adb99ce8.js").then(()=>parcelRequire("l9GST"));

});



parcelRegister("fwDCN", function(module, exports) {

module.exports = (parcelRequire("bVovV"))(new URL("styles.6a5cfc1c.css", import.meta.url).toString());

});
parcelRegister("bVovV", function(module, exports) {
"use strict";

var $edjz9 = parcelRequire("edjz9");
module.exports = $edjz9(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same link element twice (e.g. if it was already in the HTML)
        var existingLinks = document.getElementsByTagName("link");
        if ([].concat(existingLinks).some(function isCurrentBundle(link) {
            return link.href === bundle && link.rel.indexOf("stylesheet") > -1;
        })) {
            resolve();
            return;
        }
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = bundle;
        link.onerror = function(e) {
            link.onerror = link.onload = null;
            link.remove();
            reject(e);
        };
        link.onload = function() {
            link.onerror = link.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(link);
    });
});

});
parcelRegister("edjz9", function(module, exports) {
"use strict";
var $a59174fa7ac9d266$var$cachedBundles = {};
var $a59174fa7ac9d266$var$cachedPreloads = {};
var $a59174fa7ac9d266$var$cachedPrefetches = {};
function $a59174fa7ac9d266$var$getCache(type) {
    switch(type){
        case "preload":
            return $a59174fa7ac9d266$var$cachedPreloads;
        case "prefetch":
            return $a59174fa7ac9d266$var$cachedPrefetches;
        default:
            return $a59174fa7ac9d266$var$cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = $a59174fa7ac9d266$var$getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

});





var $82qiQ = parcelRequire("82qiQ");
//"use client"



var $fhvMe = parcelRequire("fhvMe");

var $M44OH = parcelRequire("M44OH");

var $kqwRD = parcelRequire("kqwRD");

const $56dcfb73e3c0c8c5$var$LeftMenu = ({ children: children, bp: bp, show: show, sideBarWidth: sideBarWidth, ...props })=>{
    // console.log("leftMenu", props)
    const _sideBarWidth = show ? 0 : props[bp]?.style?.width || props.md?.style?.width || props.style?.width || sideBarWidth || 300;
    const overflow = show ? "visible" : "hidden";
    return /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
        style: {
            transition: "all 0.3s ease",
            marginLeft: -_sideBarWidth,
            overflow: overflow
        },
        children: children
    });
};
var $56dcfb73e3c0c8c5$export$2e2bcd8739ae039 = $56dcfb73e3c0c8c5$var$LeftMenu;



var $1sHjs = parcelRequire("1sHjs");

const $974ab4870a22bad8$var$RightMenu = ({ children: children, bp: bp, show: show, ...props })=>{
    const sideBarWidth = show ? 0 : props[bp]?.style?.width || props.md?.style?.width || props.style?.width || 300;
    const overflow = show ? "visible" : "hidden";
    return /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
        style: {
            transition: "all 0.3s ease",
            marginRight: -sideBarWidth,
            overflow: overflow,
            position: "absolute",
            right: 0,
            height: "100%"
        },
        children: children
    });
};
var $974ab4870a22bad8$export$2e2bcd8739ae039 = $974ab4870a22bad8$var$RightMenu;



var $9wS8V = parcelRequire("9wS8V");



var $1sHjs = parcelRequire("1sHjs");

var $fhvMe = parcelRequire("fhvMe");
const $5267e5c5a965147a$var$PopupView = ({ children: children, bp: bp, show: show, sideBarWidth: sideBarWidth, ...props })=>{
    const ref = (0, $bdjGp$react).useRef(null);
    const [element, setData] = (0, $bdjGp$useState)({});
    const [open, setOpen] = (0, $bdjGp$useState)(false);
    (0, $bdjGp$useEffect)(()=>{
        (0, $1sHjs.default).initBuilder(ref);
    }, []);
    (0, $bdjGp$react).useImperativeHandle(ref, ()=>({
            setOpen: setOpen,
            setData: // showPopup,
            setData
        }));
    return /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
        ref: ref,
        onClick: ()=>setOpen(false),
        children: open && /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
            className: "popup-builder preview",
            children: /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                className: "popup-section",
                onClick: (e)=>e.stopPropagation(),
                children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
                    data: element,
                    bp: bp,
                    previewData: element.previewData,
                    path: "0",
                    parent: element
                })
            })
        })
    });
};
var $5267e5c5a965147a$export$2e2bcd8739ae039 = $5267e5c5a965147a$var$PopupView;



var $l7axT = parcelRequire("l7axT");

var $82qiQ = parcelRequire("82qiQ");

var $aa6c7 = parcelRequire("aa6c7");



parcelRequire("hJEvF");
var $4eCeY = parcelRequire("4eCeY");
var $aCpC9 = parcelRequire("aCpC9");
var $5AGgD = parcelRequire("5AGgD");
var $k0En4 = parcelRequire("k0En4");
var $6p093 = parcelRequire("6p093");




var $82qiQ = parcelRequire("82qiQ");


var $M44OH = parcelRequire("M44OH");

var $kNOzt = parcelRequire("kNOzt");
const $89bb3a075e1fabab$var$uniqueResources = [
    "course"
];
const $89bb3a075e1fabab$var$devises = {
    "Euro": "\u20AC",
    "Dollar": "$"
};
var $89bb3a075e1fabab$export$2e2bcd8739ae039 = ({ logo: logo, guid: plink_guid, light: light = false, devise: devise, updResources: updResources, updPlink: updPlink })=>{
    const [totalQuantity, setTotalQuantity] = (0, $bdjGp$useState)(0);
    const [totalPrice, setTotalPrice] = (0, $bdjGp$useState)(0);
    const [totalPriceFCFA, setTotalPriceFCFA] = (0, $bdjGp$useState)(0);
    const [_resources, setResources] = (0, $bdjGp$useState)({});
    const [loading, setLoading] = (0, $bdjGp$useState)(true);
    const { data: session } = (0, $bdjGp$useSession)();
    const [domain, setDomain] = (0, $bdjGp$useState)(session?.domain);
    (0, $bdjGp$useEffect)(()=>{
        setLoading(true);
        setDomain((0, $kNOzt.parseDomain)(session?.domain));
        if (session?.jwt) (0, $82qiQ.default).get(`/payment-links/session`, {
            domain: (0, $kNOzt.parseDomain)(session?.domain)
        }, session?.jwt).then((res)=>{
            console.log("pay", res);
            if (updPlink) updPlink(res.guid);
            var total = 0;
            var totalFCFA = 0;
            var quantity = 0;
            Object.values(res.resources).map((resource)=>{
                total += resource.price * resource.quantity;
                totalFCFA += resource.price_fcfa * resource.quantity;
                quantity += resource.quantity;
            });
            setTotalPrice(total);
            setTotalPriceFCFA(totalFCFA);
            setTotalQuantity(quantity);
            setResources(res.resources);
            setLoading(false);
        });
    // .catch(e => setLoading(false))
    }, [
        session?.jwt
    ]);
    const updQuantity = (guid, quantity, increase = true, type)=>{
        console.log("updQuantity");
        const _res = {
            ..._resources
        };
        const resource = _res[guid];
        if (quantity === 0) {
            resource.quantity = 0;
            delete _res[guid];
        } else {
            if (quantity) resource.quantity = parseInt(quantity);
            else {
                if (increase) {
                    resource.quantity += 1;
                    setTotalQuantity(totalQuantity + 1);
                } else if (resource.quantity > 0) {
                    resource.quantity -= 1;
                    setTotalQuantity(totalQuantity - 1);
                }
            }
            if (resource?.quantity > 0) _res[guid] = {
                ...resource
            };
            else delete _res[guid];
        }
        var total = 0;
        var totalFCFA = 0;
        var quantity = 0;
        Object.values(_res).map((resource)=>{
            total += resource.price * parseInt(resource.quantity);
            totalFCFA += resource.price_fcfa * parseInt(resource.quantity);
            quantity += parseInt(resource.quantity);
        });
        setTotalPrice(total);
        setTotalPriceFCFA(totalFCFA);
        setTotalQuantity(quantity);
        setResources(_res);
        if (updResources) updResources(_res);
        (0, $82qiQ.default).post(`/payment-links/update_basket`, {
            guid: plink_guid,
            resource_guid: guid,
            quantity: resource.quantity,
            resource_type: type,
            domain: domain
        }, session?.jwt);
    };
    return /*#__PURE__*/ (0, $bdjGp$jsxs)($89bb3a075e1fabab$var$Body, {
        className: "preview",
        children: [
            light && /*#__PURE__*/ (0, $bdjGp$jsx)((0, $4eCeY.default), {
                className: "grid_3ub_2",
                children: /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                    className: "col",
                    style: {
                        height: "fit-content",
                        fontFamily: "verdana, geneva, sans-serif",
                        fontSize: "16px"
                    },
                    children: /*#__PURE__*/ (0, $bdjGp$jsx)("strong", {
                        style: {
                            fontSize: "14px"
                        },
                        children: "Votre panier"
                    })
                })
            }),
            /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $aCpC9.default), {
                className: "col-md section_eNh",
                sm: 12,
                children: [
                    !light && /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $4eCeY.default), {
                        className: "grid_3ub",
                        children: [
                            /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$nextlink), {
                                className: "image_sWb zoom-in-hover-normal",
                                style: {
                                    height: "fit-content",
                                    maxWidth: "70px"
                                },
                                href: `https://${domain}`,
                                children: /*#__PURE__*/ (0, $bdjGp$jsx)("img", {
                                    src: logo || "https://storage.googleapis.com/public.outil.io/medias/1/images/logo.webp",
                                    alt: "concepteur.io"
                                })
                            }),
                            /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$nextlink), {
                                className: "col",
                                href: `https://${domain}`,
                                style: {
                                    height: "fit-content",
                                    marginLeft: "10px",
                                    textAlign: "right",
                                    fontFamily: "verdana, geneva, sans-serif",
                                    fontSize: "16px"
                                },
                                children: /*#__PURE__*/ (0, $bdjGp$jsx)("strong", {
                                    style: {
                                        fontSize: "14px"
                                    },
                                    children: "Votre panier"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $M44OH.default), {
                        loading: loading,
                        children: [
                            /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $5AGgD.default), {
                                style: {
                                    height: "fit-content",
                                    paddingBottom: "5px",
                                    fontSize: "18px"
                                },
                                md: 12,
                                children: [
                                    "Total (",
                                    totalQuantity,
                                    " articles)",
                                    /*#__PURE__*/ (0, $bdjGp$jsxs)("strong", {
                                        children: [
                                            ": ",
                                            $89bb3a075e1fabab$var$devises[devise] || "\u20AC",
                                            totalPrice,
                                            totalPriceFCFA ? " | " + totalPriceFCFA + " FCFA" : ""
                                        ]
                                    })
                                ]
                            }),
                            Object.values(_resources).map((resource, index)=>/*#__PURE__*/ (0, $bdjGp$jsxs)((0, $4eCeY.default), {
                                    className: "grid_5cr",
                                    md: 12,
                                    children: [
                                        /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $k0En4.default), {
                                            className: "column_Sxl",
                                            children: [
                                                /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$nextlink), {
                                                    className: "image_7VF zoom-in-hover-normal",
                                                    style: {
                                                        height: "fit-content",
                                                        marginBottom: "10px"
                                                    },
                                                    href: `/${resource.type}/${resource.guid}`,
                                                    children: /*#__PURE__*/ (0, $bdjGp$jsx)("img", {
                                                        src: resource.thumbnail,
                                                        alt: "concepteur.io",
                                                        style: {
                                                            borderRadius: "10px"
                                                        }
                                                    })
                                                }),
                                                /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $k0En4.default), {
                                                    className: "column_A6a",
                                                    children: [
                                                        /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
                                                            className: "ic icon_wro fa fa-minus",
                                                            disabled: $89bb3a075e1fabab$var$uniqueResources.includes(resource.type),
                                                            onClick: ()=>!$89bb3a075e1fabab$var$uniqueResources.includes(resource.type) && updQuantity(resource.guid, null, false, resource.type)
                                                        }),
                                                        /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$Input), {
                                                            className: "col",
                                                            disabled: $89bb3a075e1fabab$var$uniqueResources.includes(resource.type),
                                                            style: {
                                                                height: "fit-content",
                                                                textAlign: "center",
                                                                padding: "0px 5px",
                                                                with: "100%",
                                                                height: 20,
                                                                fontSize: 12
                                                            },
                                                            value: resource.quantity,
                                                            onChange: (e)=>!$89bb3a075e1fabab$var$uniqueResources.includes(resource.type) && updQuantity(resource.guid, e.target.value, null, resource.type)
                                                        }),
                                                        /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
                                                            className: "ic icon_wro fa fa-plus",
                                                            disabled: $89bb3a075e1fabab$var$uniqueResources.includes(resource.type),
                                                            onClick: ()=>!$89bb3a075e1fabab$var$uniqueResources.includes(resource.type) && updQuantity(resource.guid, null, true, resource.type)
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $k0En4.default), {
                                            className: "col column_h14",
                                            children: [
                                                /*#__PURE__*/ (0, $bdjGp$jsx)((0, $5AGgD.default), {
                                                    style: {
                                                        height: "fit-content",
                                                        paddingBottom: "5px",
                                                        textAlign: "left",
                                                        fontFamily: "verdana, geneva, sans-serif",
                                                        fontSize: "14px"
                                                    },
                                                    md: 12,
                                                    children: resource.name
                                                }),
                                                /*#__PURE__*/ (0, $bdjGp$jsx)((0, $5AGgD.default), {
                                                    style: {
                                                        height: "fit-content",
                                                        paddingBottom: "5px",
                                                        fontSize: "18px"
                                                    },
                                                    md: 12,
                                                    children: /*#__PURE__*/ (0, $bdjGp$jsxs)("strong", {
                                                        children: [
                                                            $89bb3a075e1fabab$var$devises[devise] || "\u20AC",
                                                            resource.price,
                                                            resource.price_fcfa ? " | " + resource.price_fcfa + " FCFA" : ""
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0, $bdjGp$jsx)((0, $6p093.default), {
                                                    className: "bt button_8PB",
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    onClick: ()=>updQuantity(resource.guid, 0, true, resource.type),
                                                    children: "Supprimer"
                                                })
                                            ]
                                        })
                                    ]
                                }, index))
                        ]
                    }),
                    !light && /*#__PURE__*/ (0, $bdjGp$jsx)((0, $k0En4.default), {
                        className: "column_kvx",
                        children: /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $bdjGp$nextlink), {
                            className: "image_S8u zoom-in-hover-normal",
                            href: "https://outil.io",
                            children: [
                                /*#__PURE__*/ (0, $bdjGp$jsx)((0, $5AGgD.default), {
                                    style: {
                                        height: "fit-content",
                                        marginTop: 2,
                                        marginRight: 5,
                                        textAlign: "left",
                                        fontFamily: "verdana, geneva, sans-serif",
                                        fontSize: "10px",
                                        width: "auto"
                                    },
                                    children: "Fourni par"
                                }),
                                /*#__PURE__*/ (0, $bdjGp$jsx)("img", {
                                    src: "https://storage.googleapis.com/public.outil.io/medias/1/images/logo.webp",
                                    width: "50px",
                                    alt: "concepteur.io"
                                })
                            ]
                        })
                    })
                ]
            }),
            light && /*#__PURE__*/ (0, $bdjGp$jsx)((0, $4eCeY.default), {
                className: "grid_3ub_3",
                children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $bdjGp$nextlink), {
                    href: `${undefined}/panier`,
                    className: "col",
                    style: {
                        height: "fit-content",
                        fontFamily: "verdana, geneva, sans-serif",
                        fontSize: "16px"
                    },
                    children: /*#__PURE__*/ (0, $bdjGp$jsx)("strong", {
                        style: {
                            fontSize: "14px"
                        },
                        children: "Commander"
                    })
                })
            })
        ]
    });
};
//const Body = styled.div`
const $89bb3a075e1fabab$var$Body = (0, $bdjGp$styled)((0, $bdjGp$Box))`
.page_161 {
height: fit-content;
background-position: center;
background-size: cover;
color: rgba(255, 255, 255, 1);
align-content: center;
padding-bottom: 0px;
align-items: center;
display: flex !important;
justify-content: center;
overflow: hidden;
padding-top: 0px;
padding-right: 0px;
padding-left: 0px;
display: flex;
}

.image_S8u {
height: fit-content;
display: flex;
margin-left: 10px;
}

.column_kvx {
flex-direction: row;
flex-wrap: nowrap;
align-items: center;
position: absolute;
right: 50px;
bottom: 0px;
width: auto;
}

.column_GbU {
height: fit-content;
align-content: center;
justify-content: center;
align-items: center;
}
.grid_3ub, .grid_3ub_2, .grid_3ub_3 {
height: fit-content;
align-content: center;
box-shadow: unset;
align-items: center;
justify-content: center;
padding-bottom: 20px;
padding-top: 20px;
padding-left:20px;
padding-right:20px;
width: 100%;
}

.grid_3ub_2, .grid_3ub_3 {
    background-color: rgba(102, 102, 102, 1);
    color: white;
}
.grid_3ub_3{
    text-align: center;
    background-color: black;
}

.section_eNh {
background-color: rgba(255, 255, 255, 1);
box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.02), 0 2px 10px 0 rgba(0, 0, 0, 0.09);
color: rgba(102, 102, 102, 1);
overflow-x: hidden;
padding-top: 20px;
padding-bottom: 30px;
padding-left: 20px;
padding-right: 20px;
align-items: center;
position: relative;
min-height: calc(100vh - 120px);
}

@media only screen and (max-width: 700px) {
.page_161 {
height: inherit;
height: inherit;
display: flex;
justify-content: center;
overflow: hidden;
}

.child_page_161 {
height: inherit;
padding-right: 0px;
padding-left: 0px;
padding-top: 0px;
min-height: inherit;
max-width: 100%;
padding-bottom: 0px;
}

.column_kvx {
width: 130px;
position: absolute;
bottom: 0px;
right: 50px;
}

.column_kvx {
    display: none!important;
}

.image_sWb {
max-width: 80px;
max-width: 80px;
}

.grid_3ub {
padding-left: 20px;
padding-right: 20px;
padding-bottom: 10px;
padding-top: 10px;
padding-left: 20px;
}

}
.column_kvx {
flex-direction: row;
flex-wrap: nowrap;
align-items: center;
position: absolute;
right: 50px;
bottom: 0px;
}


@media only screen and (max-width: 700px) {
.column_kvx {
width: 200px;
width: 200px;
position: absolute;
bottom: 0px;
right: 50px;
}

}
        
    .column_aHe {
    height: fit-content;
    border-style: solid;
    border-color: rgba(217, 217, 217, 1);
    margin-top: 5px;
    margin-bottom: 5px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-right: 10px;
    border-width: 1px;
    border-radius: 10px;
    width: 80px;
    }
    
    .column_JfM {
    height: fit-content;
    border-style: solid;
    border-color: rgba(217, 217, 217, 1);
    margin-top: 5px;
    margin-bottom: 5px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-right: 10px;
    border-width: 1px;
    border-radius: 10px;
    width: 100px;
    }
    
    .column_18T {
    height: fit-content;
    border-style: solid;
    border-color: rgba(217, 217, 217, 1);
    margin-top: 5px;
    margin-bottom: 5px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-right: 10px;
    border-width: 1px;
    border-radius: 10px;
    width: 100px;
    }
    
    .text_MIb {
    height: fit-content;
    color: rgba(153, 153, 153, 1);
    padding-bottom: 10px;
    }
    
.list_WIs> button{
    margin-right: 10px;
    margin-bottom: 10px;
    max-width: 100px;
}
.button_5NG {
    height: 45px;
    border-color: transparent;
    border-size: 1;
    width: fit-content;
    padding: 0px 10px;
    left: 30%;
}

.textfield_IzC {
    height: fit-content;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
}

.icon_ipR {
    height: 40px;
    color: rgba(204, 204, 204, 1);
    width: 40px;
    height: 40px;
}

.column_f8O {
    height: fit-content;
    border-style: solid;
    border-color: rgba(239, 239, 239, 1);
    margin-top: 5px;
    margin-bottom: 5px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    align-items: center;
    border-width: 1px;
    border-radius: 5px;
}

.textfield_PLF {
    height: fit-content;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
}

.icon_0ko {
    height: 40px;
    color: rgba(204, 204, 204, 1);
    width: 40px;
    height: 40px;
}

.column_YPY {
    height: fit-content;
    border-style: solid;
    border-color: rgba(239, 239, 239, 1);
    margin-top: 5px;
    margin-bottom: 5px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    align-items: center;
    border-width: 1px;
    border-radius: 5px;
}

.textfield_t8Q {
    height: fit-content;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
}

.icon_rTo {
    height: 40px;
    color: rgba(204, 204, 204, 1);
    width: 40px;
    height: 40px;
}

.column_ms2 {
    height: fit-content;
    border-style: solid;
    border-color: rgba(239, 239, 239, 1);
    margin-top: 5px;
    margin-bottom: 5px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    align-items: center;
    border-width: 1px;
    border-radius: 5px;
}

.form_kh9 {
    height: fit-content;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 20px;
    padding-bottom: 20px;
}

.image_tFK {
    height: fit-content;
    flex: initial;
    width: 60px;
}

.list_WIs {
    height: fit-content;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    width: fit-content;
    overflow: initial!important;
    margin-top: 20px;
}

.text_OO1 {
    height: fit-content;
    color: rgba(153, 153, 153, 1);
    padding-right: 10px;
    padding-left: 10px;
}

.grid_5cr {
    height: fit-content;
    background-color: #F7F9FA;
    margin-bottom: 5px;
    margin-top: 5px;
    justify-content: space-between;
    }
    
    .button_8PB {
    height: fit-content;
    background-color: rgba(243, 243, 243, 1);
    border-color: rgba(217, 217, 217, 1);
    border-size: 1;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    width: 100px;
    padding-top: 5px;
    padding-bottom:5px;
    font-size: 13px;
    }
    
    .column_h14 {
    height: fit-content;
    align-content: center;
    align-items: center;
    }
    
    .icon_zup {
    height: 30px;
    background-color: rgba(217, 217, 217, 1);
    color: rgba(0, 0, 0, 1);
    width: 30px;
    height: 30px;
    }
    
    .icon_wro {
    height: 20px;
    background-color: rgba(217, 217, 217, 1);
    color: rgba(0, 0, 0, 1);
    width: 20px;
    font-size: 12px;
    }
    
    .column_A6a {
    height: fit-content;
    flex-direction: row;
    display: flex !important;
    flex-wrap: nowrap;
    align-items: center;
    border-style: solid;
    border-color: rgba(204, 204, 204, 1);
    box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.02), 0 2px 10px 0 rgba(0, 0, 0, 0.09);
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    border-width: 1px;
    border-radius: 5px;
    }
    
    .column_Sxl {
    height: fit-content;
    flex-direction: column;
    flex-wrap: nowrap;
    max-width: 100px;
    }
    
    @media only screen and (max-width: 700px) {
    .grid_5cr {
    padding-left: 0px;
    padding-right: 0px;
    padding-left: 0px;
    }
    
    .icon_zup {
    height: 40px;
    width: 40px;
    height: 40px;
    }
    
    .icon_wro {
    height: 40px;
    width: 40px;
    height: 40px;
    }
    
    .image_7VF {
    max-width: 50px;
    }
    }
`;


const $535b337ab5011eae$var$Panier = ({ children: children, bp: bp, show: show, ...props })=>{
    const sideBarWidth = show ? 0 : props[bp]?.style?.width || props.md?.style?.width || props.style?.width || 300;
    const overflow = show ? "visible" : "hidden";
    return /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
        onClick: (e)=>e.stopPropagation(),
        style: {
            transition: "all 0.3s ease",
            marginRight: -sideBarWidth,
            overflow: overflow,
            position: "absolute",
            width: 300,
            right: 0,
            height: "100%"
        },
        children: [
            /*#__PURE__*/ (0, $bdjGp$jsx)((0, $89bb3a075e1fabab$export$2e2bcd8739ae039), {
                light: true
            }),
            children
        ]
    });
};
var $535b337ab5011eae$export$2e2bcd8739ae039 = $535b337ab5011eae$var$Panier;



var $dx0Lb = parcelRequire("dx0Lb");


// import "./styles/index.scss"
const $8853a7eb71b4eee3$var$PreviewAsync = ({ pageId: pageId, externalMethods: externalMethods = {} })=>{
    const [loading, setLoading] = (0, $bdjGp$useState)(false);
    const [loadingPage, setLoadingPage] = (0, $bdjGp$useState)(false);
    const [showLeftMenu, setShowLeftMenu] = (0, $bdjGp$useState)(false);
    const [showRightMenu, setShowRightMenu] = (0, $bdjGp$useState)(false);
    const [showPanier, setShowPanier] = (0, $bdjGp$useState)(false);
    const [bp, setBp] = (0, $bdjGp$useState)();
    const [type, setType] = (0, $bdjGp$useState)("page");
    const [variables, setVariables] = (0, $bdjGp$useState)({});
    const [page, setPage] = (0, $bdjGp$useState)();
    const [domain, setDomain] = (0, $bdjGp$useState)();
    const [jwt, setJWT] = (0, $bdjGp$useState)();
    const [previewId, setPreviewId] = (0, $bdjGp$useState)();
    const bottomNavbar = page?.footer;
    const header = page?.header;
    const leftSideBar = page?.leftsidebar;
    const rightSideBar = page?.rightsidebar;
    const renderRow = (row, currentPath, parent)=>{
        return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
            data: row,
            parent: parent,
            bp: bp,
            previewId: previewId
        }, row.id);
    };
    const toogleLeftMenu = (value)=>{
        const _data = (0, $1sHjs.default).showLeftMenu(value);
        setTimeout(()=>{
            setShowLeftMenu(_data);
        }, 1);
    };
    const toogleRightMenu = ()=>{
        const _data = !(0, $1sHjs.default).showRightMenu();
        setTimeout(()=>{
            setShowRightMenu(_data);
        }, 1);
    };
    const tooglePanier = (value)=>{
        const _data = (0, $1sHjs.default).showPanier(value);
        setTimeout(()=>{
            setShowPanier(_data);
        }, 1);
    };
    (0, $1sHjs.default).setPlaceholder("leftMenu", {
        id: "leftMenu",
        toogleLeftMenu: toogleLeftMenu
    });
    (0, $1sHjs.default).setPlaceholder("rightMenu", {
        id: "rightMenu",
        toogleRightMenu: toogleRightMenu
    });
    (0, $1sHjs.default).setPlaceholder("panier", {
        id: "panier",
        tooglePanier: tooglePanier
    });
    (0, $bdjGp$useEffect)(()=>{
        const preId = Date.now().toString(36) + Math.random().toString(36).substring(2);
        setPreviewId(preId);
        (0, $kqwRD.default).loadMethods(preId, externalMethods);
        const _bp = window.innerWidth <= 700 ? "sm" : "md";
        (0, $kqwRD.default).setBp(_bp, setBp);
        toogleLeftMenu(_bp === "md" ? true : false);
        (0, $l7axT.default).init();
        const _domain = (0, $bdjGp$jscookie).get("domain");
        (0, $82qiQ.default).setBaseUrl("https://" + _domain + "/api");
        (0, $82qiQ.default).setConfig({
            domain: _domain
        });
        setDomain(_domain);
        setJWT((0, $bdjGp$jscookie).get("jwt"));
        setBp(_bp);
        (0, $dx0Lb.loadPageById)(pageId, _domain, jwt).then((res)=>{
            const _page = res?.page;
            setType(res?.page?.type);
            setVariables(_page?.variables);
            (0, $9wS8V.default).setSession({
                domain: _domain,
                jwt: jwt
            });
            setLoading(true);
            setLoadingPage(true);
            // if (!domain.includes("localhost")) API.setBaseUrl("https://" + domain + "/api")
            // if (Active.initBp) Active.initBp(setBp)
            console.log("preveiw variables", variables, _page?.variables);
            (0, $9wS8V.default).setParsedVariables(_page?.variables);
            // console.log(window.innerWidth, page)
            // const _bp_ = window.innerWidth <= 900 ? "sm" : "md"
            (0, $1sHjs.default).loadPopups(_page.popups || {});
            setPage(res?.page);
            (0, $9wS8V.default).loadVariables(_page?.variables).then((res)=>{
                setLoadingPage(false);
                setLoading(false);
            });
        });
    }, []);
    const handleResize = ()=>{
        (0, $aa6c7.default).watch(window.innerWidth, window.innerHeight);
        setBp(window.innerWidth <= 700 ? "sm" : "md");
    };
    (0, $bdjGp$useEffect)(()=>{
        window.addEventListener("resize", handleResize);
        // Clean up the event listener when the component unmounts
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $M44OH.default), {
        loading: !page?.id,
        children: /*#__PURE__*/ (0, $bdjGp$jsxs)((0, $bdjGp$SessionProvider), {
            session: {
                domain: domain,
                jwt: jwt
            },
            children: [
                /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
                    className: "builder-main-layout preview",
                    style: {
                        position: "relative",
                        width: "100%",
                        maxWidth: "100%",
                        alignSelf: "center"
                    },
                    onClick: ()=>(0, $kqwRD.default).activate({}),
                    children: [
                        header && header.id && /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                            className: "builder-main-header",
                            children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $M44OH.default), {
                                loading: loading,
                                children: renderRow(header, "0", header)
                            })
                        }),
                        /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
                            className: "builder-main-content",
                            children: [
                                leftSideBar && leftSideBar.id && /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                                    className: "builder-main-sideBar",
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        if (bp === "sm") toogleLeftMenu();
                                    },
                                    style: {
                                        backgroundColor: bp === "sm" ? "#7975753b" : "7975753b",
                                        width: bp === "sm" && showLeftMenu ? "100%" : "fit-content",
                                        zIndex: bp === "sm" ? 1100 : "auto",
                                        top: 0,
                                        height: bp === "sm" && showLeftMenu ? "calc(100vh)" : "",
                                        position: bp === "sm" ? "absolute" : "relative"
                                    },
                                    children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $56dcfb73e3c0c8c5$export$2e2bcd8739ae039), {
                                        bp: bp,
                                        show: showLeftMenu,
                                        ...leftSideBar,
                                        children: renderRow(leftSideBar, "0", leftSideBar)
                                    })
                                }),
                                /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                                    className: "builder-main-body",
                                    children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $M44OH.default), {
                                        loading: loadingPage,
                                        children: page?.id && renderRow(page, "0", page)
                                    })
                                })
                            ]
                        }),
                        bottomNavbar && bottomNavbar.id && /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                            className: "builder-main-bottomNavbar",
                            children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $M44OH.default), {
                                loading: loading,
                                children: renderRow(bottomNavbar, "0", bottomNavbar)
                            })
                        })
                    ]
                }),
                rightSideBar && rightSideBar.id && /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                    className: "builder-main-sideBar",
                    onClick: (e)=>{
                        if (bp === "sm") toogleRightMenu();
                    },
                    style: {
                        backgroundColor: showRightMenu ? "#7975753b" : "transparent",
                        width: "100%",
                        zIndex: !showRightMenu ? -100 : 2000,
                        top: 0,
                        height: "100vh",
                        position: "fixed"
                    },
                    children: /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                        style: {
                            width: "fit-content"
                        },
                        onClick: (e)=>e.stopPropagation(),
                        children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $974ab4870a22bad8$export$2e2bcd8739ae039), {
                            bp: bp,
                            show: showRightMenu,
                            children: renderRow(rightSideBar, "0", rightSideBar)
                        })
                    })
                }),
                showPanier && /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                    className: "builder-main-sideBar panier",
                    onClick: (e)=>{
                        tooglePanier();
                    },
                    style: {
                        backgroundColor: showRightMenu ? "#7975753b" : "transparent",
                        width: "100%",
                        top: 0,
                        height: "100vh",
                        position: "fixed"
                    },
                    children: /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                        style: {
                            width: "fit-content"
                        },
                        onClick: (e)=>e.stopPropagation(),
                        children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $535b337ab5011eae$export$2e2bcd8739ae039), {
                            bp: bp,
                            show: showPanier
                        })
                    })
                }),
                /*#__PURE__*/ (0, $bdjGp$jsx)((0, $5267e5c5a965147a$export$2e2bcd8739ae039), {
                    bp: bp,
                    previewId: previewId
                })
            ]
        })
    });
};
var $8853a7eb71b4eee3$export$2e2bcd8739ae039 = $8853a7eb71b4eee3$var$PreviewAsync;


// "use client"



var $fhvMe = parcelRequire("fhvMe");

var $M44OH = parcelRequire("M44OH");

var $kqwRD = parcelRequire("kqwRD");


var $1sHjs = parcelRequire("1sHjs");


var $9wS8V = parcelRequire("9wS8V");



var $l7axT = parcelRequire("l7axT");

var $82qiQ = parcelRequire("82qiQ");

var $aa6c7 = parcelRequire("aa6c7");

const $f8c442d633354b0d$var$Preview = ({ page: page, domain: domain, jwt: jwt, type: type = "page", _bp: _bp, variables: variables = {}, externalMethods: externalMethods = {} })=>{
    const [loading, setLoading] = (0, $bdjGp$useState)(false);
    const [loadingPage, setLoadingPage] = (0, $bdjGp$useState)(false);
    const [showLeftMenu, setShowLeftMenu] = (0, $bdjGp$useState)(false);
    const [showRightMenu, setShowRightMenu] = (0, $bdjGp$useState)(false);
    const [showPanier, setShowPanier] = (0, $bdjGp$useState)(false);
    const [bp, setBp] = (0, $bdjGp$useState)(_bp || "sm");
    const bottomNavbar = page?.footer;
    const header = page?.header;
    const leftSideBar = page?.leftsidebar;
    const rightSideBar = page?.rightsidebar;
    const [isDev, setIsDev] = (0, $bdjGp$useState)(false);
    const [previewId, setPreviewId] = (0, $bdjGp$useState)();
    const renderRow = (row, currentPath, parent)=>{
        return /*#__PURE__*/ (0, $bdjGp$jsx)((0, $fhvMe.default), {
            data: row,
            parent: parent,
            bp: bp,
            previewId: previewId
        }, row.id);
    };
    const toogleLeftMenu = (value)=>{
        const _data = (0, $1sHjs.default).showLeftMenu(value);
        setTimeout(()=>{
            setShowLeftMenu(_data);
        }, 1);
    };
    const toogleRightMenu = ()=>{
        const _data = !(0, $1sHjs.default).showRightMenu();
        setTimeout(()=>{
            setShowRightMenu(_data);
        }, 1);
    };
    const tooglePanier = (value)=>{
        const _data = (0, $1sHjs.default).showPanier(value);
        setTimeout(()=>{
            setShowPanier(_data);
        }, 1);
    };
    (0, $kqwRD.default).setBp(_bp, setBp);
    (0, $bdjGp$useEffect)(()=>{
        const preId = Date.now().toString(36) + Math.random().toString(36).substring(2);
        setPreviewId(preId);
        (0, $kqwRD.default).loadMethods(preId, externalMethods);
        (0, $9wS8V.default).setSession({
            domain: domain,
            jwt: jwt
        });
        setLoading(true);
        setLoadingPage(true);
        if (!domain.includes("localhost")) (0, $82qiQ.default).setBaseUrl("https://" + domain + "/api");
        // if (Active.initBp) Active.initBp(setBp)
        (0, $l7axT.default).init();
        console.log("preveiw variables", variables, page.variables);
        (0, $9wS8V.default).setParsedVariables(variables);
        // console.log(window.innerWidth, page)
        // const _bp_ = window.innerWidth <= 900 ? "sm" : "md"
        (0, $1sHjs.default).loadPopups(page.popups || {});
        (0, $1sHjs.default).setPlaceholder("leftMenu", {
            id: "leftMenu",
            toogleLeftMenu: toogleLeftMenu
        });
        (0, $1sHjs.default).setPlaceholder("rightMenu", {
            id: "rightMenu",
            toogleRightMenu: toogleRightMenu
        });
        (0, $1sHjs.default).setPlaceholder("panier", {
            id: "panier",
            tooglePanier: tooglePanier
        });
        toogleLeftMenu(_bp === "md" ? true : false);
        (0, $9wS8V.default).loadVariables(page?.variables).then((res)=>{
            setLoadingPage(false);
            setLoading(false);
        });
    }, []);
    const handleResize = ()=>{
        (0, $aa6c7.default).watch(window.innerWidth, window.innerHeight);
        setBp(window.innerWidth <= 700 ? "sm" : "md");
    };
    (0, $bdjGp$useEffect)(()=>{
        window.addEventListener("resize", handleResize);
        // Clean up the event listener when the component unmounts
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
        children: [
            isDev && /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
                className: "left-right",
                style: {
                    padding: "0px 10px",
                    position: "sticky",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 30,
                    zIndex: 4000,
                    backgroundColor: "black"
                },
                children: [
                    /*#__PURE__*/ (0, $bdjGp$jsx)("a", {
                        href: undefined + `/templates/${type}/edit/${page?.tId}`,
                        style: {
                            fontSize: 13,
                            color: "white",
                            backgroundColor: "gray",
                            padding: "5px 10px",
                            borderRadius: 5
                        },
                        children: "Modifier"
                    }),
                    /*#__PURE__*/ (0, $bdjGp$jsx)("i", {
                        className: "fa fa-close",
                        style: {
                            backgroundColor: "red",
                            color: "white",
                            height: 20,
                            width: 20,
                            marginTop: 5,
                            textAlign: "center"
                        },
                        onClick: ()=>setIsDev(false)
                    })
                ]
            }),
            /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
                className: "builder-main-layout preview",
                style: {
                    position: "relative",
                    width: "100%",
                    maxWidth: "100%",
                    alignSelf: "center"
                },
                onClick: ()=>(0, $kqwRD.default).activate({}),
                children: [
                    header && header.id && /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                        className: "builder-main-header",
                        children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $M44OH.default), {
                            loading: loading,
                            children: renderRow(header, "0", header)
                        })
                    }),
                    /*#__PURE__*/ (0, $bdjGp$jsxs)("div", {
                        className: "builder-main-content",
                        children: [
                            leftSideBar && leftSideBar.id && /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                                className: "builder-main-sideBar",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    if (bp === "sm") toogleLeftMenu();
                                },
                                style: {
                                    backgroundColor: bp === "sm" ? "#7975753b" : "7975753b",
                                    width: bp === "sm" && showLeftMenu ? "100%" : "fit-content",
                                    zIndex: bp === "sm" ? 1100 : "auto",
                                    top: 0,
                                    height: bp === "sm" && showLeftMenu ? "calc(100vh)" : "",
                                    position: bp === "sm" ? "absolute" : "relative"
                                },
                                children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $56dcfb73e3c0c8c5$export$2e2bcd8739ae039), {
                                    bp: bp,
                                    show: showLeftMenu,
                                    ...leftSideBar,
                                    children: renderRow(leftSideBar, "0", leftSideBar)
                                })
                            }),
                            /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                                className: "builder-main-body",
                                children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $M44OH.default), {
                                    loading: loadingPage,
                                    children: renderRow(page, "0", page)
                                })
                            })
                        ]
                    }),
                    bottomNavbar && bottomNavbar.id && /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                        className: "builder-main-bottomNavbar",
                        children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $M44OH.default), {
                            loading: loading,
                            children: renderRow(bottomNavbar, "0", bottomNavbar)
                        })
                    })
                ]
            }),
            rightSideBar && rightSideBar.id && /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                className: "builder-main-sideBar",
                onClick: (e)=>{
                    if (bp === "sm") toogleRightMenu();
                },
                style: {
                    backgroundColor: showRightMenu ? "#7975753b" : "transparent",
                    width: "100%",
                    zIndex: !showRightMenu ? -100 : 2000,
                    top: 0,
                    height: "100vh",
                    position: "fixed"
                },
                children: /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                    style: {
                        width: "fit-content"
                    },
                    onClick: (e)=>e.stopPropagation(),
                    children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $974ab4870a22bad8$export$2e2bcd8739ae039), {
                        bp: bp,
                        show: showRightMenu,
                        children: renderRow(rightSideBar, "0", rightSideBar)
                    })
                })
            }),
            showPanier && /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                className: "builder-main-sideBar panier",
                onClick: (e)=>{
                    tooglePanier();
                },
                style: {
                    backgroundColor: showRightMenu ? "#7975753b" : "transparent",
                    width: "100%",
                    top: 0,
                    height: "100vh",
                    position: "fixed"
                },
                children: /*#__PURE__*/ (0, $bdjGp$jsx)("div", {
                    style: {
                        width: "fit-content"
                    },
                    onClick: (e)=>e.stopPropagation(),
                    children: /*#__PURE__*/ (0, $bdjGp$jsx)((0, $535b337ab5011eae$export$2e2bcd8739ae039), {
                        bp: bp,
                        show: showPanier
                    })
                })
            }),
            /*#__PURE__*/ (0, $bdjGp$jsx)((0, $5267e5c5a965147a$export$2e2bcd8739ae039), {
                bp: bp
            })
        ]
    });
};
var $f8c442d633354b0d$export$2e2bcd8739ae039 = $f8c442d633354b0d$var$Preview;



var $kqwRD = parcelRequire("kqwRD");

var $kNOzt = parcelRequire("kNOzt");

var $9wS8V = parcelRequire("9wS8V");

var $5AGgD = parcelRequire("5AGgD");

var $6p093 = parcelRequire("6p093");

var $k0En4 = parcelRequire("k0En4");

var $4eCeY = parcelRequire("4eCeY");

var $aCpC9 = parcelRequire("aCpC9");

var $lGRvq = parcelRequire("lGRvq");

var $jHytR = parcelRequire("jHytR");

$bdjGp$config();


const $747425b437e121da$export$ed3f0124bad8acee = async ({ domain: domain, apiKey: apiKey })=>{
    (0, $82qiQ.default).setBaseUrl("https://" + domain + "/api");
    (0, $82qiQ.default).setConfig({
        domain: domain
    });
    // localStorage.setItem("domain", domain)
    (0, $bdjGp$jscookie).set("domain", domain);
    await (parcelRequire("fwDCN"));
    await $bdjGp$animatecss;
};


var $edefba7b5b341b15$export$2e2bcd8739ae039 = parcelRequire("kqwRD").default;
var $5da2e9d5e7323d84$export$2e2bcd8739ae039 = parcelRequire("82qiQ").default;
var $6f0119e74079ddbe$export$2e2bcd8739ae039 = parcelRequire("9wS8V").default;
var $412119f233b3f7f3$export$2e2bcd8739ae039 = parcelRequire("5AGgD").default;
var $4a9530ae777837ca$export$2e2bcd8739ae039 = parcelRequire("6p093").default;
var $e9131f983284b5b2$export$2e2bcd8739ae039 = parcelRequire("k0En4").default;
var $315621f9efe4b89a$export$2e2bcd8739ae039 = parcelRequire("4eCeY").default;
var $7bb1527d9a3d7cc0$export$2e2bcd8739ae039 = parcelRequire("aCpC9").default;
var $fca7065def3307db$export$2e2bcd8739ae039 = parcelRequire("lGRvq").default;
var $e57cc79858adee7b$export$2e2bcd8739ae039 = parcelRequire("jHytR").default;
export {$747425b437e121da$export$ed3f0124bad8acee as initConcepteur, $8853a7eb71b4eee3$export$2e2bcd8739ae039 as PreviewAsync, $f8c442d633354b0d$export$2e2bcd8739ae039 as Preview, $edefba7b5b341b15$export$2e2bcd8739ae039 as Active, $5da2e9d5e7323d84$export$2e2bcd8739ae039 as API, $6f0119e74079ddbe$export$2e2bcd8739ae039 as Variables, $412119f233b3f7f3$export$2e2bcd8739ae039 as Text, $4a9530ae777837ca$export$2e2bcd8739ae039 as Button, $e9131f983284b5b2$export$2e2bcd8739ae039 as Col, $315621f9efe4b89a$export$2e2bcd8739ae039 as Grid, $7bb1527d9a3d7cc0$export$2e2bcd8739ae039 as Row, $fca7065def3307db$export$2e2bcd8739ae039 as Form, $e57cc79858adee7b$export$2e2bcd8739ae039 as Image};
//# sourceMappingURL=index.js.map
