const Benchmark = {
    run: function() {
        var VAR_1 = {};
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1["attr" + VAR_2] = VAR_2;
        }
        var VAR_3 = 0;
        for (var VAR_4 in VAR_1) {
          VAR_3 = VAR_1[VAR_2];
        }
    }
};