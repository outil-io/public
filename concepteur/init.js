const {initConcepteur, PreviewAsync} = require("./dist/index.js")

console.log("loading...")

initConcepteur({ domain: "ebc.plateforme.me" })
document.getElementById("app").innerHTML = <div>test<PreviewAsync pageId="page_m0kxu9f41b0qmbdq0e4"/></div>
    
