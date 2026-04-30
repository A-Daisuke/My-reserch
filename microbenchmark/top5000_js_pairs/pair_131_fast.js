const Benchmark = {
    run: function() {
        for (var VAR_2 = 0; VAR_2 < 20000; VAR_2++) {
          (function (VAR_3) {
            VAR_3++;
          }).bind(null, 10)();
        }
    }
};