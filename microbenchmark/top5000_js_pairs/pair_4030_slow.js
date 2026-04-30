const Benchmark = {
    run: function() {
        let VAR_1 = 1000;
        let VAR_2 = Array.apply(null, Array(VAR_1)).map(Number.prototype.valueOf, 0);
    }
};