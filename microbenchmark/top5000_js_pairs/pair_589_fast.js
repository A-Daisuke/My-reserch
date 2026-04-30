const Benchmark = {
    run: function() {
        var VAR_1 = [];
        VAR_1[10] = 1;
        VAR_1[100] = 1;
        VAR_1[1000] = 1;
        VAR_1[10000] = 1;
        VAR_1[100000] = 1;
        var VAR_2 = null;
        for (var VAR_5 in VAR_1) {
          VAR_2 = VAR_1[VAR_5];
        }
    }
};