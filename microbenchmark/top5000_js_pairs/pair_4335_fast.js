const Benchmark = {
    run: function() {
        (function () {
          return (function () {
            var VAR_1 = 0;
            for (var VAR_2 = 0; VAR_2 < 10000; ++VAR_2) {
              VAR_1 += VAR_2;
            }
            return VAR_1;
          })();
        })();
    }
};