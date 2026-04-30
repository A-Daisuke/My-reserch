const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        var VAR_2 = 0;
        new Array(VAR_1).fill(VAR_2);
    }
};