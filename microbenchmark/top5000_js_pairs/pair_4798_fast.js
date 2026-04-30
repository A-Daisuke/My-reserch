const Benchmark = {
    run: function() {
        (function () {
          var VAR_1 = [];
          var VAR_3 = ["Quick ", 0, " fox ", 0, " over the ", 0, " dog. "];
          for (VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
            VAR_1.push.apply(VAR_1, VAR_3);
          }
          VAR_1.join("");
        })();
    }
};