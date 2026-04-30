const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        for (VAR_2 = 100000; VAR_2 >= 0; --VAR_2) {
          (function (VAR_3) {
            VAR_1 += VAR_3;
          })(VAR_2);
        }
    }
};