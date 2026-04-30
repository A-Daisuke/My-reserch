const Benchmark = {
    run: function() {
        (function (VAR_1) {
          try {
            return VAR_1.l.p || 1;
          } catch (VAR_2) {
            return 1;
          }
        })({});
    }
};