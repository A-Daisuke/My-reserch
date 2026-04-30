const Benchmark = {
    run: function() {
        var VAR_1 = [];
        VAR_1[100000] = 5;
        var VAR_3;
        for (var VAR_2 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          VAR_3 = VAR_1[VAR_2];
          VAR_3;
          VAR_3;
          VAR_3;
        }
    }
};