const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: 123,
          KEY_2: 555,
        };
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.KEY_1 += VAR_2;
    }
};