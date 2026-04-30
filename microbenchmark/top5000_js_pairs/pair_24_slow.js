const Benchmark = {
    run: function() {
        VAR_1 = console;
        for (var VAR_2 = 0; VAR_2 < 100000; ++VAR_2) {
          VAR_1.assert(true);
        }
    }
};