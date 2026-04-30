const Benchmark = {
    run: function() {
        (function () {
          var VAR_5 = [];
          var VAR_6 = ["Quick ", 0, " fox ", 0, " over the ", 0, " dog. "];
          for (VAR_7 = 0; VAR_7 < 1000; VAR_7++) {
            VAR_5.push.apply(VAR_5, VAR_6);
          }
          VAR_5.join("");
        })();
    }
};