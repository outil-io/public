import {jsx as $2CTC6$jsx} from "react/jsx-runtime";
import {useState as $2CTC6$useState, useEffect as $2CTC6$useEffect} from "react";
import $2CTC6$nextdynamic from "next/dynamic";
import * as $2CTC6$reactapexcharts from "react-apexcharts";


function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequiref7b0"];
var parcelRegister = parcelRequire.register;
parcelRegister("l9GST", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $f66bb430db03b08c$export$2e2bcd8739ae039);



parcelRequire("kNOzt");

var $M44OH = parcelRequire("M44OH");

var $82qiQ = parcelRequire("82qiQ");

const $f66bb430db03b08c$var$ApexChart = (0, $2CTC6$nextdynamic)(()=>$2CTC6$reactapexcharts, {
    ssr: false
});
const $f66bb430db03b08c$var$Chart = (props)=>{
    const [series, setSeries] = (0, $2CTC6$useState)([
        {
            name: "",
            type: "column",
            data: []
        }
    ]);
    const [labels, setLabels] = (0, $2CTC6$useState)([]);
    const [loading, setLoading] = (0, $2CTC6$useState)(true);
    const [options, setOptions] = (0, $2CTC6$useState)({
        stroke: {
            width: [
                0,
                5,
                1
            ]
        },
        fill: {
            opacity: [
                0.85,
                0.85,
                0.54
            ],
            gradient: {
                inverseColors: false,
                shade: "light",
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [
                    0,
                    100,
                    100,
                    100
                ]
            }
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function(y) {
                    if (typeof y !== "undefined") return y.toFixed(0) + " points";
                    return y;
                }
            }
        }
    });
    (0, $2CTC6$useEffect)(()=>{
        if (props.xdata?.type === "API") (0, $82qiQ.default).get(`${props.xdata?.url}`).then((res)=>{
            res?.value?.labels && setLabels(res?.value?.labels);
            res?.value?.series && setSeries(res?.value?.series);
            setLoading(false);
        });
    // loadSeries().then(r => {
    //   parseContent(props.xaxis || [], (r) => Array.isArray(r) && setLabels).then((l) => {
    //     setTimeout(() => setLoading(false), 10)
    //   })
    // })
    }, [
        props.xdata
    ]);
    // useEffect(() => {
    //   const _series = series
    //   Variables.get(props.custom?.xaxis, (l) => {
    //     console.log("variables", l)
    //     setLabels(l)
    //     const plots = [0, 1, 2]
    //     plots.map((k, i) => {
    //       const variable = props.custom?.["yaxis" + i]
    //       Variables.get(variable, (s) => {
    //         if (s) {
    //           _series[i] = { data: s || [], type: props.custom?.["typeAxis" + i] }
    //           setSeries(_series)
    //         }
    //         // console.log(_series)
    //         setLoading(false)
    //       }, [])
    //     })
    //   }, [])
    // }, [props.custom?.yaxis0, props.custom?.yaxis1, props.custom?.yaxis2,
    // props.custom?.typeAxis0, props.custom?.typeAxis1, props.custom?.typeAxis2])
    return /*#__PURE__*/ (0, $2CTC6$jsx)((0, $M44OH.default), {
        loading: loading,
        children: /*#__PURE__*/ (0, $2CTC6$jsx)($f66bb430db03b08c$var$ApexChart, {
            options: {
                ...options,
                labels: labels
            },
            series: series,
            type: "bar"
        })
    });
};
var $f66bb430db03b08c$export$2e2bcd8739ae039 = $f66bb430db03b08c$var$Chart;

});


//# sourceMappingURL=barChart.adb99ce8.js.map
