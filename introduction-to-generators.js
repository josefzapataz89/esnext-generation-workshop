'use strict'

module.exports = function* generate(isEven) {
    var num = isEven ? 0 : -1;

    while (1) {
        num += 2;
        yield num;
    }
}
