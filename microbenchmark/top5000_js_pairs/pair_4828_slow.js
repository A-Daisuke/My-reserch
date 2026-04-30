const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        while (VAR_1 < 1000) {
          if (typeof x == "undefined") {
            VAR_1++;
          }
        }
    }
};