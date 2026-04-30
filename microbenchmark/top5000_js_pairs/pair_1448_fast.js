const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2,
          VAR_4 = 24 * 60 * 60 * 1000;
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1 = new Date();
          VAR_2 = new Date(Math.floor(VAR_1 / VAR_4) * VAR_4);
        }
    }
};