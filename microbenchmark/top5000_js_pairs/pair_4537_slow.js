const Benchmark = {
    run: function() {
        Array.apply(null, Array(500)).map(Number.prototype.valueOf, 7);
    }
};