const Benchmark = {
    run: function() {
        (function () {
          var VAR_1 = 1;
          var VAR_2 = 0;
          while (VAR_2++ < 10000) VAR_1++;
        })();
    }
};