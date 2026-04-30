const Benchmark = {
    run: function() {
        var VAR_1 = "01";
        var VAR_2 = "1.1";
        var VAR_3 = 1.1;
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_1 = +VAR_1;
          VAR_2 = +VAR_2;
          VAR_3 = +VAR_3;
        }
    }
};