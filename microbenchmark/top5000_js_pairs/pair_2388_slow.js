const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        (function () {
          var VAR_2 = 100000;
          while (VAR_2--) {
            VAR_1++;
          }
        })();
    }
};