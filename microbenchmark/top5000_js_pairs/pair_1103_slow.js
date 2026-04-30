const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = 8192;
        var VAR_3 = [];
        for (VAR_1 = 0; VAR_1 < VAR_2; VAR_1++) {
          VAR_3.push({});
        }
        var VAR_4 = {};
        for (VAR_1 = 0; VAR_1 < VAR_2; VAR_1++) {
          VAR_4["n" + VAR_1] = {};
        }
        for (var VAR_5 in VAR_4) {
          VAR_4[VAR_1];
        }
    }
};