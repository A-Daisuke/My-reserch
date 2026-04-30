const Benchmark = {
    run: function() {
        var VAR_1 = false;
        var VAR_2 = { 1: 5 };
        for (var VAR_3 = 0; VAR_3 < 100; VAR_3++) {
          VAR_1 |= VAR_3 == VAR_2;
        }
    }
};