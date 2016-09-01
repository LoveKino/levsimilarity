'use strict';

let distance = require('..');

let {
    readFile
} = require('mz/fs');

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

Promise.all([readFile(__dirname + '/fixture/test1/left.txt', 'utf-8'), readFile(__dirname + '/fixture/test1/right.txt', 'utf-8')]).then(([left, right]) => {
    try {
        // TODO fix
        test(left, right);
    } catch(err) {
        console.log(err);
    }
});
