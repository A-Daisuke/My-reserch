const Benchmark = {
    run: function() {
        (function () {
          var VAR_1 = "";
          for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
            VAR_1 += "Quick ";
            VAR_1 += VAR_2;
            VAR_1 += " fox ";
            VAR_1 += VAR_2;
            VAR_1 += " over the ";
            VAR_1 += VAR_2;
            VAR_1 += " dog. ";
          }
        })();
    }
};