import {jsx as $i2auk$jsx} from "react/jsx-runtime";
import {useState as $i2auk$useState, useEffect as $i2auk$useEffect} from "react";
import {MaterialReactTable as $i2auk$MaterialReactTable} from "material-react-table";


function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequiref7b0"];
var parcelRegister = parcelRequire.register;
parcelRegister("6Rqbm", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fec00956e63b2c9$export$2e2bcd8739ae039);




var $9wS8V = parcelRequire("9wS8V");
const $4fec00956e63b2c9$var$Example = (props)=>{
    const [data, setData] = (0, $i2auk$useState)(()=>[]);
    const [rows, setRows] = (0, $i2auk$useState)(()=>[]);
    const [columns, setColumns] = (0, $i2auk$useState)([]);
    const loadData = (_da)=>{
        setData(_da);
        const rows = [];
        const _cols = [];
        _da && Object.entries(_da).map(([col, _rows])=>{
            // console.log(_rows)
            _rows?.map((row, index)=>{
                if (!rows[index]) rows[index] = {};
                rows[index][col] = row;
            });
        });
        setRows(rows);
        // console.log("End loading table", _cols, rows)
        setColumns(_cols);
    };
    (0, $i2auk$useEffect)(()=>{
        setColumns(props.custom?.columns?.map((c)=>({
                header: c.label,
                accessorKey: c.value.split(".")[1]
            })) || []);
        const rows = [];
        (0, $9wS8V.default).get(props.custom?.table, (res)=>{
            res.map((r)=>{
                const row = {};
                props.custom?.columns?.map((c)=>row[c.value.split(".")[1]] = r[c.value.split(".")[1]]);
                rows.push(row);
            });
            setRows(rows);
        });
    // parseContent(props.items, loadData)
    }, [
        props.custom
    ]);
    return /*#__PURE__*/ (0, $i2auk$jsx)("div", {
        style: {
            maxWidth: "calc(100vw - 0px)",
            overflow: "auto"
        },
        children: /*#__PURE__*/ (0, $i2auk$jsx)((0, $i2auk$MaterialReactTable), {
            columns: columns,
            data: rows,
            muiTableBodyProps: {
                sx: ()=>({
                        "& tr:nth-of-type(odd)": {
                            backgroundColor: "lightgray"
                        }
                    })
            }
        })
    });
};
var $4fec00956e63b2c9$export$2e2bcd8739ae039 = $4fec00956e63b2c9$var$Example;

});


//# sourceMappingURL=Table.27ac4d6d.js.map
