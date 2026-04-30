const Benchmark = {
    run: function() {
        var VAR_1 = [];
        VAR_1[10] = 1;
        VAR_1[100] = 1;
        VAR_1[1000] = 1;
        VAR_1[10000] = 1;
        VAR_1[100000] = 1;
        var VAR_2 = null;
        for (var VAR_3 = 0, VAR_4 = VAR_1.length; VAR_3 < VAR_4; VAR_3++) {
          VAR_2 = VAR_1[VAR_3];
        }
    }
};