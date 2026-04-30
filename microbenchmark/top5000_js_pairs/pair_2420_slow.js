const Benchmark = {
    run: function() {
        (function () {
          var VAR_1 = "";
          for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
            VAR_1 += ["Quick ", VAR_2, " fox ", VAR_2, " over the ", VAR_2, " dog. "].join("");
          }
        })();
    }
};