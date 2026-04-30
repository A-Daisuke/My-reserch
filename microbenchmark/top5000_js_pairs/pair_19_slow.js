const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = 500000,
          VAR_3 = "TEST_",
          VAR_4 = null;
        VAR_5 = [];
        for (VAR_1 = 0; VAR_1 < VAR_2; ++VAR_1) {
          VAR_5.push(VAR_3);
        }
        VAR_4 = VAR_5.join("");
    }
};