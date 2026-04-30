const Benchmark = {
    run: function() {
        (function () {
          var VAR_1 = "";
          for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
            VAR_1 += "Quick ";
            VAR_1 += VAR_3;
            VAR_1 += " fox ";
            VAR_1 += VAR_3;
            VAR_1 += " over the ";
            VAR_1 += VAR_3;
            VAR_1 += " dog. ";
          }
        })();
    }
};