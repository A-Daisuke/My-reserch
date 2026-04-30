const Benchmark = {
    run: function() {
        (function () {
          var VAR_3 = [];
          var VAR_4 = ["Quick ", 0, " fox ", 0, " over the ", 0, " dog. "];
          for (VAR_5 = 0; VAR_5 < 1000; VAR_5++) {
            VAR_3.push.apply(VAR_3, VAR_4);
          }
          VAR_3.join("");
        })();
    }
};