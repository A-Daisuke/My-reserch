const Benchmark = {
    run: function() {
        for (var VAR_1 = 0, VAR_2 = 100000; VAR_1 < VAR_2; VAR_1++) {
          (function (VAR_3) {
            return VAR_3 * 2;
          })(VAR_1);
        }
    }
};