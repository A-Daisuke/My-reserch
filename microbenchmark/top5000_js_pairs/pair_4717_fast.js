const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_4 = 0;
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) VAR_1[VAR_4++] = Math.random();
    }
};