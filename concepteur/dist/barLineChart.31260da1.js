import {jsx as $2T8MD$jsx} from "react/jsx-runtime";
import {useState as $2T8MD$useState} from "react";
import $2T8MD$nextdynamic from "next/dynamic";
import * as $2T8MD$reactapexcharts from "react-apexcharts";


function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequiref7b0"];
var parcelRegister = parcelRequire.register;
parcelRegister("fVgmQ", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $b978e01d817c4845$export$2e2bcd8739ae039);




const $b978e01d817c4845$var$ApexChart = (0, $2T8MD$nextdynamic)(()=>$2T8MD$reactapexcharts, {
    ssr: false
});
const $b978e01d817c4845$var$Chart = ()=>{
    const [options, setOptions] = (0, $2T8MD$useState)({
        series: [
            {
                name: "TEAM A",
                type: "column",
                data: [
                    23,
                    11,
                    22,
                    27,
                    13,
                    22,
                    37,
                    21,
                    44,
                    22,
                    30
                ]
            },
            {
                name: "TEAM B",
                type: "area",
                data: [
                    44,
                    55,
                    41,
                    67,
                    22,
                    43,
                    21,
                    41,
                    56,
                    27,
                    43
                ]
            },
            {
                name: "TEAM C",
                type: "line",
                data: [
                    30,
                    25,
                    36,
                    30,
                    45,
                    35,
                    64,
                    52,
                    59,
                    36,
                    39
                ]
            }
        ],
        chart: {
            height: 350,
            type: "line",
            stacked: false
        },
        stroke: {
            width: [
                0,
                2,
                5
            ],
            curve: "smooth"
        },
        plotOptions: {
            bar: {
                columnWidth: "50%"
            }
        },
        labels: [
            "01/01/2003",
            "02/01/2003",
            "03/01/2003",
            "04/01/2003",
            "05/01/2003",
            "06/01/2003",
            "07/01/2003",
            "08/01/2003",
            "09/01/2003",
            "10/01/2003",
            "11/01/2003"
        ],
        markers: {
            size: 0
        },
        xaxis: {
            type: "datetime"
        },
        yaxis: {
            title: {
                text: "Points"
            },
            min: 0
        },
        fill: {
            opacity: [
                0.85,
                0.25,
                1
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
    const [series, setSeries] = (0, $2T8MD$useState)([
        {
            name: "series-1",
            data: [
                30,
                40,
                45,
                50,
                49,
                60,
                70,
                91
            ]
        }
    ]);
    return /*#__PURE__*/ (0, $2T8MD$jsx)("div", {
        className: "app",
        children: /*#__PURE__*/ (0, $2T8MD$jsx)("div", {
            className: "mixed-chart",
            children: /*#__PURE__*/ (0, $2T8MD$jsx)($b978e01d817c4845$var$ApexChart, {
                options: options,
                series: options.series,
                type: "bar",
                width: "100%"
            })
        })
    });
};
var $b978e01d817c4845$export$2e2bcd8739ae039 = $b978e01d817c4845$var$Chart;

});


//# sourceMappingURL=barLineChart.31260da1.js.map
