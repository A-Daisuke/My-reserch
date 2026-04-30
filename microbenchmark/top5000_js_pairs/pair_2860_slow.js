const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = 1000;
        var VAR_3 = [];
        for (VAR_1 = 0; VAR_1 < VAR_2; VAR_1++) {
          VAR_3.unshift(Math.random());
        }
    }
};