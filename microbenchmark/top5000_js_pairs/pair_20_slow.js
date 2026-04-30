const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = [];
        var VAR_3 = 0;
        for (var VAR_4 = 0; VAR_4 < 100000; VAR_4++) {
          VAR_2 += Math.random();
        }
        VAR_1 = VAR_2[VAR_3];
        VAR_3++;
        VAR_3 %= 100000;
    }
};