const Benchmark = {
    run: function() {
        var VAR_1 = Function.prototype.call;
        var VAR_2 = Function.prototype.apply;
        VAR_1.call(VAR_2, Array, 0, new Array(5)).map(VAR_1, parseInt);
    }
};