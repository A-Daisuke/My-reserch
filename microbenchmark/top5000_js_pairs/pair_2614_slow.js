const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2,
          VAR_3 = 1000;
        VAR_1.VAR_4 = VAR_3 * 9;
        for (VAR_2 = 0; VAR_2 < VAR_3; ++VAR_2) {
          VAR_1.splice(VAR_2 * 9, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8);
        }
    }
};