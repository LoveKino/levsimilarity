'use strict';

let Benchmark = require('benchmark');

let suite = new Benchmark.Suite;

let distance = require('..');

let recursiveVersion = require('../recursion-version');

let log = console.log; // eslint-disable-line

let datas = [
    ['fweo4njnjcsdkk9348djhdsifasdfnciwq', 'cnadcmakclpifreiuwbcvewu904375843hjdsjdskli']
];

datas.forEach(([left, right]) => {
    suite.add('matrix', () => {
        distance(left, right);
    });

    suite.add('recursive', () => {
        recursiveVersion(left, right);
    });
});

suite.on('cycle', (event) => {
    log(String(event.target));
}).on('complete', function() {
    log('Fastest is ' + this.filter('fastest').map('name'));
}).run({
    'async': true
});
