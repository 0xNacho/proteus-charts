var fs = require("fs"),
    rollup = require("rollup"),
    abort = (error) => console.log(error),
    typescript = require('rollup-plugin-typescript');

rollup.rollup({
    entry: "index.ts",
    external: ['d3'],
    plugins: [
        typescript({
            typescript: require('typescript')
        })
    ],
}).then(function (bundle) {
    var code = bundle.generate({
        format: "cjs"
    }).code.replace(
        /^exports\.event = (.*);$/m,
        "Object.defineProperty(exports, \"event\", {get: function() { return $1; }});"
        );
    return new Promise(function (resolve, reject) {
        fs.writeFile("dist/proteic.node.js", code, "utf8", function (error) {
            if (error) {
                return reject(error);
            }
            else {
                resolve();
            }
        });
    });
}).catch(abort);
