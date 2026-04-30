const Benchmark = {
    run: function() {
        (function (VAR_1) {
          if (VAR_1.hasOwnProperty("l") && VAR_1.l.hasOwnProperty("p")) {
            return VAR_1.l.p || 1;
          } else {
            return 1;
          }
        })({});
    }
};