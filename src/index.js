module.exports = function reverse(n) {
    let initial = Math.abs(n);
    let reversed = String(initial)
        .split("")
        .reverse()
        .join("");
    return Number(reversed);
};
