const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = 500;
        for (; VAR_1 < VAR_2; ++VAR_1) {
          (function (VAR_3, VAR_4) {
            return VAR_3 + VAR_4 * Math.random();
          })(VAR_1, VAR_1 * 2);
        }
    }
};