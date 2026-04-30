const Benchmark = {
    run: function() {
        var VAR_1 = 0.54968143,
          VAR_2 = 0.0014773,
          VAR_3 = null,
          VAR_4 = 0,
          VAR_5 = 10000000000,
          VAR_6 = 100000,
          VAR_7 = parseInt(VAR_1 * VAR_5, 10),
          VAR_8 = parseInt(VAR_2 * VAR_5, 10);
        for (VAR_4; VAR_4 < VAR_6; VAR_4++) VAR_3 = (VAR_7 * VAR_8) / VAR_5;
    }
};