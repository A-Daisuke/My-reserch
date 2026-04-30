const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 0;
        for (var VAR_3 = 0; VAR_3 < 1000; ++VAR_3) {
          VAR_2 = Math.floor(VAR_3 / 10);
        }
    }
};