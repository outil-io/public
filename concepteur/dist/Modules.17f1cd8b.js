import {jsx as $a3IE0$jsx, jsxs as $a3IE0$jsxs, Fragment as $a3IE0$Fragment} from "react/jsx-runtime";
import {useState as $a3IE0$useState, useEffect as $a3IE0$useEffect} from "react";
import {styled as $a3IE0$styled} from "@mui/material/styles";
import {Box as $a3IE0$Box} from "@mui/material";


function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequiref7b0"];
var parcelRegister = parcelRequire.register;
parcelRegister("a0L2a", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $749e63717741aa2c$export$2e2bcd8739ae039);





var $9wS8V = parcelRequire("9wS8V");

var $awdxc = parcelRequire("awdxc");

var $k2cBu = parcelRequire("k2cBu");

var $fhvMe = parcelRequire("fhvMe");

var $4A29E = parcelRequire("4A29E");

var $hJEvF = parcelRequire("hJEvF");
const $749e63717741aa2c$var$statusIndex = {
    ended: {
        status: "ended",
        index: 1
    },
    active: {
        status: "active",
        index: 2
    },
    current: {
        status: "current",
        index: 3
    },
    locked: {
        status: "locked",
        index: 4
    }
};
var $749e63717741aa2c$export$2e2bcd8739ae039 = ({ ...props })=>{
    // const { courseProgress } = useUser();
    const [loading, setLoading] = (0, $a3IE0$useState)(true);
    const [modules, setModules] = (0, $a3IE0$useState)();
    const [progressions, setProgressions] = (0, $a3IE0$useState)({});
    const [activeStyle, setActiveStyle] = (0, $a3IE0$useState)({});
    const [endedStyle, setEndedStyle] = (0, $a3IE0$useState)({});
    const [cours, setCours] = (0, $a3IE0$useState)();
    (0, $a3IE0$useEffect)(()=>{
        setModules((0, $9wS8V.default).getParsed("course.modules", []));
        setCours((0, $9wS8V.default).getParsed("course.guid"));
        setActiveStyle({
            color: props.custom?.activeColor,
            backgroundColor: props.custom?.activeBackgroundColor
        });
        setEndedStyle({
            color: props.custom?.validatedColor,
            backgroundColor: props.custom?.validatedBackgroundColor
        });
        if ((0, $9wS8V.default).getParsed("course.guid", null)) (0, $k2cBu.getProgression)((0, $9wS8V.default).getParsed("course.guid"), (0, $9wS8V.default).getParsed("global.domain"), (0, $9wS8V.default).getParsed("global.jwt")).then((res)=>{
            console.log("getProgression", res);
            setProgressions(res);
            setLoading(false);
        });
    }, [
        (0, $9wS8V.default).getParsed("lesson.guid")
    ]);
    const parseText = (element, data)=>{
        var stringEl = JSON.stringify(element);
        // console.log(stringEl)
        data.map((d)=>stringEl = stringEl.replaceAll("${" + d.key + "}", d.value));
        // console.log(stringEl, data)
        return JSON.parse(stringEl);
    };
    (0, $a3IE0$useEffect)(()=>{
        setLoading(true);
        console.log((0, $9wS8V.default).getParsed("course.modules", []));
        const templateString = JSON.stringify(props.header);
        setModules((0, $9wS8V.default).getParsed("course.modules", [])?.map((m)=>{
            return {
                ...m,
                template: templateString && JSON.parse(("" + templateString).replaceAll("${module.name}", m.name).replaceAll("${module.duration}", m.duration || "")),
                lessons: m.lessons?.map((l)=>{
                    const progress = (0, $9wS8V.default).getParsed("lesson.guid") === l?.guid ? {
                        status: "current"
                    } : progressions ? progressions[l?.guid] : {
                        status: "locked"
                    };
                    // console.log("progress",  progress)
                    return {
                        ...l,
                        status: progress?.status
                    };
                })
            };
        }));
        // console.log('VariablesSingleton.getParsed("course.modules")', VariablesSingleton.getParsed("course.modules"))
        setLoading(false);
    }, [
        progressions
    ]);
    // console.log("VariablesSingleton getProgression", VariablesSingleton.getParsed("lesson.guid"))
    return /*#__PURE__*/ (0, $a3IE0$jsx)($749e63717741aa2c$var$Body, {
        className: "preview w-100",
        children: /*#__PURE__*/ (0, $a3IE0$jsx)((0, $awdxc.default), {
            loading: loading,
            children: modules?.map(({ id: id, name: name, description: description, template: template, lessons: lessons, guid: guid })=>{
                return /*#__PURE__*/ (0, $a3IE0$jsxs)((0, $a3IE0$Fragment), {
                    children: [
                        /*#__PURE__*/ (0, $a3IE0$jsx)("details", {
                            open: true,
                            onClick: (e)=>{
                                e.stopPropagation();
                            },
                            children: template && /*#__PURE__*/ (0, $a3IE0$jsx)("summary", {
                                children: /*#__PURE__*/ (0, $a3IE0$jsx)((0, $fhvMe.default), {
                                    parent: props,
                                    data: template
                                })
                            })
                        }, id),
                        /*#__PURE__*/ (0, $a3IE0$jsx)("div", {
                            className: "content-details",
                            style: {
                                marginBottom: 15
                            },
                            children: /*#__PURE__*/ (0, $a3IE0$jsx)((0, $fhvMe.default), {
                                parent: props,
                                data: {
                                    isNew: true,
                                    ...props.body,
                                    type: "column"
                                },
                                rawChildren: /*#__PURE__*/ (0, $a3IE0$jsx)("table", {
                                    children: /*#__PURE__*/ (0, $a3IE0$jsx)("tbody", {
                                        children: lessons.map((item, index)=>{
                                            // return (item.template && <a 
                                            //     href={item.status === 'locked' ? "#" : `/lesson/${cours}/${item.guid}`}
                                            //     onClick={() => { if (item.status != 'locked') VariablesSingleton.set("lesson.guid", item.guid) }}
                                            //     >
                                            //     <Section parent={props} data={{ md: {w: 12}, sm: {md: 12},
                                            //     id: "header_" + props.id, isNew: true, disabled: true, type: "empty",
                                            //     children: [item.template]
                                            // }} /></a>)
                                            const progress = progressions ? progressions[item.guid] : {
                                                status: "locked"
                                            };
                                            const style = item.guid === (0, $9wS8V.default).getParsed("lesson.guid") ? activeStyle : progress?.status === "ended" ? endedStyle : {};
                                            // const hasAccess = courseProgress?.status === "ended" || order <= courseProgress?.module?.order && item.order <= courseProgress?.lesson?.order || item.access === "free";
                                            return /*#__PURE__*/ (0, $a3IE0$jsxs)("tr", {
                                                className: "col column_mQK",
                                                style: style,
                                                children: [
                                                    /*#__PURE__*/ (0, $a3IE0$jsx)("td", {
                                                        style: {
                                                            width: 40
                                                        },
                                                        children: /*#__PURE__*/ (0, $a3IE0$jsx)("i", {
                                                            className: "ic icon_74p " + (0, $4A29E.lessonTypes)[item.type]?.icon || "fa fa-youtube-play",
                                                            style: {
                                                                height: "40px",
                                                                width: "40px"
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0, $a3IE0$jsx)("td", {
                                                        colSpan: 10,
                                                        children: /*#__PURE__*/ (0, $a3IE0$jsx)("span", {
                                                            style: {
                                                                height: "fit-content",
                                                                fontSize: "16px",
                                                                fontSize: "14px"
                                                            },
                                                            children: item.name
                                                        })
                                                    }),
                                                    !(0, $9wS8V.default).getParsed("lesson.guid") && /*#__PURE__*/ (0, $a3IE0$jsxs)((0, $a3IE0$Fragment), {
                                                        children: [
                                                            /*#__PURE__*/ (0, $a3IE0$jsx)("td", {
                                                                style: {
                                                                    width: 70
                                                                },
                                                                className: "hide_md",
                                                                children: /*#__PURE__*/ (0, $a3IE0$jsx)((0, $hJEvF.Button), {
                                                                    className: "bt button_OgB",
                                                                    style: {
                                                                        textAlign: "center",
                                                                        fontSize: "12px"
                                                                    },
                                                                    children: "Preview"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0, $a3IE0$jsx)("td", {
                                                                style: {
                                                                    width: 50
                                                                },
                                                                className: "hide_md",
                                                                children: /*#__PURE__*/ (0, $a3IE0$jsxs)((0, $hJEvF.Text), {
                                                                    style: {
                                                                        height: "fit-content",
                                                                        fontSize: "12px"
                                                                    },
                                                                    children: [
                                                                        item.duration,
                                                                        " min"
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, $a3IE0$jsxs)("td", {
                                                        style: {
                                                            width: 40
                                                        },
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ (0, $a3IE0$jsx)("i", {
                                                                className: "ic icon_BWk fa fa-lock"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            });
                                        })
                                    })
                                })
                            })
                        })
                    ]
                });
            })
        })
    });
};
//const Body = styled.div`
const $749e63717741aa2c$var$Body = (0, $a3IE0$styled)((0, $a3IE0$Box))`
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


.button_OgB {
width: fit-content;
border-color: transparent;
border-size: 1;
border-radius: 2px;
}

.column_mQK {
height: fit-content;
align-content: center;
flex-direction: row;
flex-wrap: nowrap;
align-items: center;
padding-bottom: 0px;
padding-top: 0px;
padding-left: 0px;
padding-right: 0px;
}

.grid_3JN {
height: fit-content;
border-color: rgba(204, 204, 204, 1);
border-style: solid;
padding-top: 30px;
padding-bottom: 30px;
padding-left: 20px;
padding-right: 20px;
max-width: 700px;
flex-direction: column;
flex-wrap: nowrap;
border-width: 1px;
}

.empty_tVW {
height: fit-content;
flex-direction: row;
display: flex !important;
flex-wrap: nowrap;
align-items: center;
justify-content: space-between;
}

.column_JMa {
height: fit-content;
align-content: center;
background-color: #F7F9FA;
border-style: solid;
border-color: rgba(204, 204, 204, 1);
flex-direction: row;
flex-wrap: nowrap;
align-items: center;
border-width: 1px;
}

.folder_lUN {
height: fit-content;
padding-bottom: 0px;
padding-left: 0px;
padding-right: 0px;
padding-top: 0px;
}
`;

});


//# sourceMappingURL=Modules.17f1cd8b.js.map
