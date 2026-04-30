const Benchmark = {
    run: function() {
        var VAR_1 = "",
          VAR_2;
        for (var VAR_4 = 0; VAR_4 < 150; ++VAR_4) {
          VAR_1 += "prefix";
          for (var VAR_5 = 0; VAR_5 < 15; ++VAR_5) {
            VAR_2 =
              "test" + "test string" + "long test string" + "test string" + "test";
            VAR_1 += VAR_2;
          }
          VAR_1 += "suffix";
        }
    }
};