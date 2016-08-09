
// 2. define a module by "define method"

define(function (require, exports, module) {

//    write the code of module cal.js
    console.log('cal.js file is loading');

//    require will get the return value from add.js by module.exports method.
    var add = require('./add.js');
    var sub = require('./sub.js');

    module.exports = {
        add: add,
        sub: sub
    };

});

