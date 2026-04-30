const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        (function () {
          var VAR_2 = eval("this");
          var VAR_3 = 0;
          for (var VAR_4 = 0; VAR_4 < VAR_1; VAR_4++) {
            VAR_3 += VAR_4;
          }
          return VAR_3;
        })();
    }
};