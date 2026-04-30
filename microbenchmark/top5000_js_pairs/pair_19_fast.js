const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = 500000,
          VAR_3 = "TEST_",
          VAR_4 = null;
        VAR_4 = "";
        for (VAR_1 = 0; VAR_1 < VAR_2; ++VAR_1) {
          VAR_4 += VAR_3;
        }
    }
};