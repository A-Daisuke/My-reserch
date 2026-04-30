const Benchmark = {
    run: function() {
        var VAR_1 = "10",
          VAR_2 = "nan",
          VAR_3,
          VAR_4,
          VAR_5;
        for (var VAR_6 = 0; VAR_6 <= 100000; VAR_6 += 1) {
          VAR_3 = parseInt(VAR_1, 10);
        }
    }
};