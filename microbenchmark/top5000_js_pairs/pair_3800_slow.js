const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 !== 100; ++VAR_1) {
          var VAR_2 = [VAR_1 - 1, VAR_1, VAR_1 + 1].join(",");
        }
    }
};