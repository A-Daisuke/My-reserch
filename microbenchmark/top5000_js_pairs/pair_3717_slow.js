const Benchmark = {
    run: function() {
        var VAR_1 = Array.apply(null, new Array(1000)).map(Number.prototype.valueOf, 0);
        VAR_1.forEach(function () {});
    }
};