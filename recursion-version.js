let lev = (a, b, i, j, cache, convert) => {
    convert = convert || defConvertCost;
    if (cache[i] && cache[i][j] !== undefined) {
        return cache[i][j];
    }
    let ret = null;
    if (Math.min(i, j) === 0) {
        ret = Math.max(i, j);
    } else {
        let convertCost = convert(a[i - 1], b[j - 1]);

        ret = Math.min(
            lev(a, b, i - 1, j, cache, convert) + 1,
            lev(a, b, i, j - 1, cache, convert) + 1,
            lev(a, b, i - 1, j - 1, cache, convert) + convertCost
        );
    }
    cache[i] = cache[i] || [];
    cache[i][j] = ret;
    return ret;
};

let defConvertCost = (item1, item2) => {
    if (item1 === item2) return 0;
    return 1;
};

module.exports = (str1, str2, convert) => {
    return lev(str1.slice(0), str2.slice(0), str1.length, str2.length, [], convert);
};
