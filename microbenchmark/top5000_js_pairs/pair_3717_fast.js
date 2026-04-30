const Benchmark = {
    run: function() {
        var VAR_1 = Array.apply(null, new Array(1000)).map(Number.prototype.valueOf, 0);
        for (var VAR_2 = 1000; VAR_2 >= 0; VAR_2--) {}
    }
};