const Benchmark = {
    run: function() {
        var VAR_1 = false;
        for (var VAR_3 = 0; VAR_3 < 100; VAR_3++) {
          VAR_1 |= VAR_3 == 15;
        }
    }
};