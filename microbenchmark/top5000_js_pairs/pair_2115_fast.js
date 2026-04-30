const Benchmark = {
    run: function() {
        var VAR_1 = {};
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1["key" + VAR_2] = 1;
        }
        var VAR_3 = 0;
        for (var VAR_6 in VAR_1) {
          VAR_3 += VAR_1[VAR_6];
        }
    }
};