const Benchmark = {
    run: function() {
        var VAR_1 = 1;
        var VAR_2 = "1";
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          VAR_1 == VAR_2;
        }
    }
};