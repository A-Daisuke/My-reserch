const Benchmark = {
    run: function() {
        for (var VAR_1 = 1000; VAR_1--; ) new Date().getTime();
    }
};