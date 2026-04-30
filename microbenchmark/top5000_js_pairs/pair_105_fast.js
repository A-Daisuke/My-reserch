const Benchmark = {
    run: function() {
        (function () {
          var VAR_1 = 0;
          for (var VAR_2 = 0; VAR_2 < 10000000; VAR_2++) VAR_1 += VAR_2;
        })();
    }
};