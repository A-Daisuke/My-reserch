const Benchmark = {
    run: function() {
        var VAR_4 = "";
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_4 = VAR_4 + "test test test test test test test test" + VAR_2;
        }
        var VAR_5 = VAR_4;
    }
};