const Benchmark = {
    run: function() {
        (function () {
          var VAR_1 = { KEY_1: new Float64Array(32) };
          for (VAR_1.KEY_1[0] = 0; VAR_1.KEY_1[0] < 10000000; VAR_1.KEY_1[0]++) {
            VAR_1.KEY_1[1] += VAR_1.KEY_1[0];
          }
        })();
    }
};