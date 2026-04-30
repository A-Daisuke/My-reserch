const Benchmark = {
    run: function() {
        Array.apply(null, Array(5)).map(Number.prototype.valueOf, 7);
    }
};