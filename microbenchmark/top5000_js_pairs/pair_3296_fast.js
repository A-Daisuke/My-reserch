const Benchmark = {
    run: function() {
        Array.apply(null, Array(50)).map(Number.prototype.valueOf, 7);
    }
};