const Benchmark = {
    run: function() {
        var VAR_1, VAR_2;
        var VAR_3 = [];
        for (VAR_1 = 0; VAR_1 < 1000; ++VAR_1) {
          VAR_3.push(42);
          VAR_3 = VAR_3.splice(-10);
        }
    }
};