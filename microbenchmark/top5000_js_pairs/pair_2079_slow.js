const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        Array.apply(null, new Array(VAR_1)).map(String.prototype.valueOf, "line");
    }
};