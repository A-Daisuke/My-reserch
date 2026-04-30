const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 20000; VAR_1++) {
          (function (VAR_2) {
            VAR_2++;
          }).bind(null, 10)();
        }
    }
};