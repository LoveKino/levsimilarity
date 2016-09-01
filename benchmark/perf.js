'use strict';

let distance = require('..');

let log = console.log; // eslint-disable-line

let test = (left, right) => {
    let t1 = new Date().getTime();

    for (let i = 0; i < 1000; i++) {
        distance(left, right);
    }

    let t2 = new Date().getTime();

    log(t2 - t1);
};

test('The default options copied by suite instances.', '(Object): The benchmark instance.');

test();
