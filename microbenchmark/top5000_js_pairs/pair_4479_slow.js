const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2;
        for (VAR_2 = 0; VAR_2 < 100; ++VAR_2) {
          VAR_1 = [VAR_2, ++VAR_2].concat(VAR_1);
        }
    }
};