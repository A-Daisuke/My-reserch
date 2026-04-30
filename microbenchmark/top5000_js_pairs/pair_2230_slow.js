const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        var VAR_2 = 0;
        Array.apply(null, Array(VAR_1)).map(Number.prototype.valueOf, VAR_2);
    }
};