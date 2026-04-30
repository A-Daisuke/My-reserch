const Benchmark = {
    run: function() {
        for (var VAR_3 = 0; VAR_3 < 20000; VAR_3++) {
          (function (VAR_4) {
            VAR_4++;
          }).bind(null, 10)();
        }
    }
};