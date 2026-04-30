const Benchmark = {
    run: function() {
        var VAR_1 = 1000000;
        (function () {
          var VAR_2 = 1,
            VAR_3 = 0;
          for (; VAR_3 < VAR_1; VAR_3++) {
            VAR_2 += 2;
          }
        })();
    }
};