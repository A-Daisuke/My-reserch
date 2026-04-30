const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        while (VAR_1 < 1000000) {
          (function () {
            VAR_1++;
          })();
        }
    }
};