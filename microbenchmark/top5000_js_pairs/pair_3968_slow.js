const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var VAR_3 = [];
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_3.push(VAR_4);
        }
    }
};