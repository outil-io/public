import {jsx as $a9KRA$jsx, Fragment as $a9KRA$Fragment} from "react/jsx-runtime";
import {useState as $a9KRA$useState, useRef as $a9KRA$useRef, useCallback as $a9KRA$useCallback, useEffect as $a9KRA$useEffect} from "react";
import $a9KRA$nextdynamic from "next/dynamic";
import * as $a9KRA$reactapexcharts from "react-apexcharts";


function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequiref7b0"];
var parcelRegister = parcelRequire.register;
parcelRegister("hhMlf", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $c95985df305c1d78$export$2e2bcd8739ae039);




var $M44OH = parcelRequire("M44OH");

const $c95985df305c1d78$var$ApexChart = (0, $a9KRA$nextdynamic)(()=>$a9KRA$reactapexcharts, {
    ssr: false
});
const $c95985df305c1d78$var$PieChart = (props)=>{
    const [series, setSeries] = (0, $a9KRA$useState)([]);
    const [labels, setLabels] = (0, $a9KRA$useState)([]);
    const [loading, setLoading] = (0, $a9KRA$useState)(true);
    const [width, setWidth] = (0, $a9KRA$useState)();
    const ref = (0, $a9KRA$useRef)();
    // const [options, setOptions] = useState({})
    var options = {
        chart: {
            height: 280,
            type: "radialBar"
        },
        series: [
            14,
            23,
            21,
            17,
            15,
            10,
            12,
            17,
            21
        ],
        options: {
            chart: {
                type: "polarArea"
            },
            stroke: {
                colors: [
                    "#fff"
                ]
            },
            fill: {
                opacity: 0.8
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: "bottom"
                        }
                    }
                }
            ]
        }
    };
    const div = (0, $a9KRA$useCallback)((node)=>{
        setLoading(true);
        // console.log("useCallback", node)
        if (node !== null) {
            // setHeight(node.getBoundingClientRect().height);
            setWidth(node.parentNode.parentNode.parentNode.parentNode.getBoundingClientRect().width);
            // setWidth(getComputedStyle(document.getElementById(props.id).parentElement).width)
            setLoading(false);
        }
    }, []);
    (0, $a9KRA$useEffect)(()=>{
        setLoading(false);
    // setTimeout(() => {
    //   setWidth(getComputedStyle(document.getElementById(props.id)).width)
    // }, 100);
    // 
    // setWidth(ref.current.parent.)
    }, []);
    // useEffect(() => {
    //   setLoading(false)
    //   // Variables.get(props.custom.xaxis, (l) => {
    //   //   setLabels(l.slice(0, 30))
    //   //   Variables.get(props.custom.yaxis, (s) => {
    //   //     setSeries(s.slice(0, 30))
    //   //     setLoading(false)
    //   //   }, [])
    //   // }, [])
    // }, [props.custom.table, props.custom.xaxis, props.custom.yaxis])
    // console.log(props)
    return /*#__PURE__*/ (0, $a9KRA$jsx)((0, $a9KRA$Fragment), {
        children: /*#__PURE__*/ (0, $a9KRA$jsx)("div", {
            ref: div,
            style: {
                position: "relative",
                width: width
            },
            children: /*#__PURE__*/ (0, $a9KRA$jsx)((0, $M44OH.default), {
                loading: loading,
                children: /*#__PURE__*/ (0, $a9KRA$jsx)($c95985df305c1d78$var$ApexChart, {
                    options: options.options,
                    series: options.series,
                    type: "polarArea",
                    width: "100%",
                    height: width + 100
                })
            })
        })
    });
};
var $c95985df305c1d78$export$2e2bcd8739ae039 = $c95985df305c1d78$var$PieChart;

});


//# sourceMappingURL=pieChart.2a801152.js.map
