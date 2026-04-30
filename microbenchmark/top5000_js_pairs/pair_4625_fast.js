const Benchmark = {
    run: function() {
        var VAR_1 = 1,
          VAR_2 = "1",
          VAR_4 = parseInt(VAR_2, 10),
          VAR_3;
        for (VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1 === VAR_4;
        }
    }
};