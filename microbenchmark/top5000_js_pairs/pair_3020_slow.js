const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        var VAR_3 = [];
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_1.push(VAR_4);
        }
        for (var VAR_5 in VAR_1) VAR_1[VAR_5]++;
    }
};