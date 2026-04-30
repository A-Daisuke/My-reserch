const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 1000000; ++VAR_1) {
          parseInt(Math.random() * 16777215);
        }
    }
};