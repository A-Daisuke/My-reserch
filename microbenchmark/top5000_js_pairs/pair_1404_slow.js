const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        Array.apply(0, Array(VAR_1)).map(Function.prototype.call.bind(Number));
    }
};