const Benchmark = {
    run: function() {
        var VAR_1 = new Number(0);
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) VAR_1 = new Number(VAR_1 + new Number(1));
    }
};