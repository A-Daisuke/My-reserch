const Benchmark = {
    run: function() {
        Array.apply(null, Array(5000)).map(Number.prototype.valueOf, 7);
    }
};