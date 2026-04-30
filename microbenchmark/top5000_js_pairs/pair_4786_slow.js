const Benchmark = {
    run: function() {
        var VAR_1 = 456;
        (function () {
          var VAR_2 = [];
          for (var VAR_3 = 0; VAR_3 <= 1; VAR_3 += 0.01) {
            VAR_2.push(VAR_1 / Math.pow(Math.E, -16 * VAR_3 + 8) + 1);
          }
        })();
    }
};