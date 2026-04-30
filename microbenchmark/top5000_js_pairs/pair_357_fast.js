const Benchmark = {
    run: function() {
        (function () {
          var VAR_5 = [];
          for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
            VAR_5.push("Quick ", VAR_3, " fox ", VAR_3, " over the ", VAR_3, " dog. ");
          }
          VAR_5.join("");
        })();
    }
};