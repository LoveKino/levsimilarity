'use strict';

let Benchmark = require('benchmark');

let suite = new Benchmark.Suite;

let distance = require('..');

let log = console.log; // eslint-disable-line

let datas = [
    ['fweo4njnjcsdkk9348djhdsifasdfnciwq', 'cnadcmakclpifreiuwbcvewu904375843hjdsjdskli']
];

datas.forEach(([left, right]) => {
    suite.add(`${left} : ${right}`, () => {
        distance(left, right);
    }).on('cycle', (event) => {
        log(String(event.target));
    });
});

suite.run({
    'async': true
});
