'use strict';

let distance = require('..');

let {
    readFile
} = require('mz/fs');

let log = console.log; // eslint-disable-line

let test = (left, right) => {
    log(`start test big string ${left.length} * ${right.length}`);
    let t1 = new Date().getTime();

    let ret = distance(left, right);

    log(`distance is ${ret}`);

    let t2 = new Date().getTime();

    log(`time spending is ${t2 - t1}ms`);
};

test('The default options copied by suite instances.', '(Object): The benchmark instance.');

Promise.all([
    readFile(__dirname + '/fixture/test2/left.txt', 'utf-8'),
    readFile(__dirname + '/fixture/test2/right.txt', 'utf-8')
]).then(([left, right]) => {
    try {
        // TODO fix
        test(left, right);
    } catch (err) {
        log(err);
    }
});

Promise.all([
    readFile(__dirname + '/fixture/test3/left.txt', 'utf-8'),
    readFile(__dirname + '/fixture/test3/right.txt', 'utf-8')
]).then(([left, right]) => {
    try {
        // TODO fix
        test(left, right);
    } catch (err) {
        log(err);
    }
});
