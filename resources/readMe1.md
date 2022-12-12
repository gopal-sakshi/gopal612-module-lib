https://unpkg.com/lodash@4.17.20/lodash.js
- was able to import as ES6 module in browser


https://unpkg.com/gopal612-js-lib@1.0.3/index.js
- was UNABLE to import as ES6 module in browser
- because, this is exporting two functions... well, its not the reason...
- to solve this
    bundles all the required imports into one JavaScript file to be used on the client side.
    The client loads this JavaScript bundle and sets up all the module namespaces, into the browsers memory ready for use.
    https://sbcode.net/threejs/module-specifiers/



