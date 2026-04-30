const Benchmark = {
    run: function() {
        (function () {
          var VAR_1 = new Uint32Array(32);
          for (VAR_1[0] = 0; VAR_1[0] < 10000000; VAR_1[0]++) {
            VAR_1[1] += VAR_1[0];
          }
        })();
    }
};