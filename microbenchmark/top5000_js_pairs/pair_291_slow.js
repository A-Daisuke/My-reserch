const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 1000000; VAR_1++) {
          (function fn(VAR_2, VAR_3) {
            return VAR_2 + VAR_3;
          })();
        }
    }
};