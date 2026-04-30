const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: 1 };
        for (var VAR_6 = 0; VAR_6 < 100; VAR_6++) {
          VAR_1.KEY_1;
        }
    }
};