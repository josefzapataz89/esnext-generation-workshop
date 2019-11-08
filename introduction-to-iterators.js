'use strict'

module.exports = function makeCounter(data) {
    let num = 0;
    let done = false;

    data.next = function () {

        if (num < 10) {
            num++;
        } else {
            done = true;
        }

        return {
            value: num,
            done
        }

    }
}
