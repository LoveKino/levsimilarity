'use strict';

/**
 * expand Levenshtein distance
 *
 * [a1, a2, ..., an], [b1, b2, ..., bm]
 *
 * d(ai, bj) ∈ [0, 1]
 *
 * operations
 *
 * add: 1
 *
 * delete: 1
 *
 * convert: d(ai, bj)
 *
 * lev(s, t, i, j) = {
 *      max(i, j)  if min(i,j) = 0
 *      min {
 *          lev(s, t, i - 1, j) + 1
 *          lev(s, t, i, j - 1) + 1
 *          lev(s, t, i - 1, j - 1) + convert(s, t, i, j)
 *      }
 * }
 */

/**
 * http://www.levenshtein.net/
 */
module.exports = (s, t, convert) => {
    convert = convert || defConvertCost;
    let n = s.length,
        m = t.length;
    if (n === 0) return m;
    if (m === 0) return n;
    let matrix = []; // (n+1) * (m+1)

    // init first row and first colume
    for (let i = 0; i <= n; i++) {
        if (!matrix[i]) matrix[i] = [];
        matrix[i][0] = i;
    }

    for (let i = 0; i <= m; i++) {
        matrix[0][i] = i;
    }

    // rest
    for (let i = 1; i <= n; i++) {
        let itemI = s[i - 1];
        for (let j = 1; j <= m; j++) {
            //
            let itemJ = t[j - 1];

            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + convert(itemI, itemJ)
            );
        }
    }

    return matrix[n][m];
};

let defConvertCost = (item1, item2) => {
    if (item1 === item2) return 0;
    return 1;
};
