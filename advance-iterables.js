'use strict'

module.exports = function generate(isEven) {
    let num = isEven ? true : false;

    let iterator = {
        next: (swap) => {

            num += (swap ? 1 : 2);

            return {
                value: num
            }
        }
    }

    return iterator;
}
