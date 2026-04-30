const Benchmark = {
    run: function() {
        var VAR_7 = "",
          VAR_2;
        for (var VAR_5 = 0; VAR_5 < 150; ++VAR_5) {
          VAR_7 += "prefix";
          for (var VAR_6 = 0; VAR_6 < 15; ++VAR_6) {
            VAR_2 =
              "test" + "test string" + "long test string" + "test string" + "test";
            VAR_7 += VAR_2;
          }
          VAR_7 += "suffix";
        }
    }
};