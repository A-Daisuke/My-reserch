const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000000; ++VAR_2) {
          VAR_1.push(VAR_2);
        }
        var VAR_3 = 0;
        var VAR_4 = -1,
          VAR_5 = VAR_1.VAR_5;
        while (++VAR_4 < VAR_5) {
          VAR_3 = VAR_4;
        }
    }
};