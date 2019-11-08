'use strict'

module.exports = function* multiplier() {
    let num = 0;
    let mult = 1;

    while (true) {
        num++;
        mult = yield (num * mult);
        if (!mult) {
            mult = 1;
        }
    }
}
