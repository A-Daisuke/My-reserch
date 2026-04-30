const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        (function () {
          eval("var a = " + VAR_1);
          var VAR_2 = 0;
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            VAR_2 += VAR_3;
          }
          return VAR_2;
        })();
    }
};