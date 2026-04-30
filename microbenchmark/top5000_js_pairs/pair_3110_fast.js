const Benchmark = {
    run: function() {
        var VAR_1 = {};
        for (var VAR_2 = 0; VAR_2 < 1000; ++VAR_2) {
          VAR_1["prop" + VAR_2] = 0;
        }
        (function (VAR_3) {
          return Object.keys(VAR_3);
        })(VAR_1);
    }
};