const Benchmark = {
    run: function() {
        var VAR_1 = {};
        for (var VAR_2 = 0; VAR_2 < 5000; VAR_2++) {
          VAR_1["A" + VAR_2] = true;
        }
        for (var VAR_3 = 0; VAR_2 < 5000; VAR_2++) {
          VAR_1["A" + VAR_2] = false;
        }
    }
};