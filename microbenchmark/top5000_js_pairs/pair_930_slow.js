const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: 1 };
        var VAR_2 = { KEY_2: 0 };
        for (var VAR_3 = 0; VAR_3 < 1000000; VAR_3++) {
          VAR_2.KEY_2 += VAR_1.KEY_1 + VAR_3;
        }
    }
};