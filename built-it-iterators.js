'use strict'

module.exports = function filterForNumbers(iterable) {

    var result = [];

    for (let i of iterable) {
        if (typeof i === 'number') {
            result.push(i);
        }
    }

    return result;
}
