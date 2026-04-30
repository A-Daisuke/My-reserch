const Benchmark = {
    run: function() {
        var VAR_7 = "",
          VAR_3;
        for (var VAR_5 = 0; VAR_5 < 150; ++VAR_5) {
          VAR_7 += "prefix";
          for (var VAR_6 = 0; VAR_6 < 15; ++VAR_6) {
            VAR_3 = "test";
            VAR_3 += "test string";
            VAR_3 += "long test string";
            VAR_3 += "test string";
            VAR_3 += "test";
            VAR_7 += VAR_3;
          }
          VAR_7 += "suffix";
        }
    }
};