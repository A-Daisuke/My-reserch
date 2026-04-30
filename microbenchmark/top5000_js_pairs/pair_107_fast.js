const Benchmark = {
    run: function() {
        var VAR_1 = {};
        VAR_1.VAR_2 = 1;
        VAR_1.VAR_3 = 2;
        VAR_1.VAR_4 = 3;
        for (var VAR_5 = 0; VAR_5 < 10000000; VAR_5++) {
          VAR_1.VAR_3;
        }
    }
};