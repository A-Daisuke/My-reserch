const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1 += (function (VAR_3) {
            return VAR_2 * VAR_2;
          })(VAR_2);
        }
    }
};