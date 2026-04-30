const Benchmark = {
    run: function() {
        Array.apply(null, new Array(5000)).map(Number.prototype.valueOf, 2);
    }
};