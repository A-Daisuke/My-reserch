const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        var VAR_2 = Array.apply(null, Array(VAR_1)).map(Number.prototype.valueOf, 0);
    }
};