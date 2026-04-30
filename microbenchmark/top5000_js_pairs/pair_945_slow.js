const Benchmark = {
    run: function() {
        Array.apply(null, new Array(65535)).map(Number.prototype.valueOf, 0);
    }
};