const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        VAR_2[100000] = 5;
        Array.prototype.push.apply(VAR_1, VAR_2);
    }
};