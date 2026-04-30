const Benchmark = {
    run: function() {
        var VAR_1 = "100";
        var VAR_2;
        for (var VAR_3 = 0; VAR_3 < 10000000; VAR_3++) VAR_2 = +VAR_1;
    }
};