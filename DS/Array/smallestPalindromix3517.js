var smallestPalindrome = function(s) {
    
     const n = s.length;
    const f = _.countBy(s.slice(0, n >> 1));

    const half = Object.keys(f).sort().map(c => c.repeat(f[c])).join``;
    let mid = n & 1 ? s[n >> 1] : ``;
    const rev = [...half].reverse().join``;

    return half + mid + rev;
};
