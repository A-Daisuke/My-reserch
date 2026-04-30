const Benchmark = {
    run: function() {
        var VAR_1 = 200000;
        var VAR_2 = [];
        VAR_2.VAR_3 = VAR_1;
        for (var VAR_4 = 0; VAR_4 < VAR_1; ++VAR_4) {
          VAR_2.splice(VAR_4, 1, true);
        }
    }
};